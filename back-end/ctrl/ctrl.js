const axios = require('axios');
const mecab = require('mecab-ya');
require('dotenv').config();

// 한글 제외 특수문자, 언어 등 공백처리
exports.refineData = async (comments) => {
    console.log('refine 시작');
    const pattern = /[^(가-힣)]|[()]/gi; // 특수문자 제거
    let result;
    try{
      result = await comments.reduce(async(promisedAcc, curr) => {
        let acc = await promisedAcc;
        const nouns = await getNouns(curr.replace(pattern, ' '));
        acc = acc.concat(nouns);
        return acc;
      },[]);
    } catch (e) {
      console.log(e);
    }
    return result;
}

//형태소 분석 - 명사 구하기
const getNouns = (comment) => {
  return new Promise((resolve, reject) => {
    mecab.nouns(comment, (err, result) => {
      if(err) reject(err);
      resolve(result);
    })
  })
}

//단어 빈도수 
exports.getMostFrequentNouns = (nounsArr) => {
  console.log('빈도수 구하기 시작');
  let map = nounsArr.reduce((acc, curr) => {
    if(acc.has(curr)){
      return acc.set(curr, acc.get(curr)+1);
    } else {
      return acc.set(curr, 1);
    }
  }, new Map());

  map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  let result = [];

  //100개까지만 처리해줌
  for(let [key, value] of map) {
    result.push({'text': key, 'value': value});
    if(result.length >= 100) break;
  } 

  return result;
}

//댓글 가져오기 
exports.getComments = async (videoId) => {
    console.log('API 시작');
    let nextPageToken = '';
    let comments = [];

    while(true){
      const URL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&textFormat=plainText&videoId=${videoId}&key=${process.env.GOOGLE_API_KEY}`
      + (nextPageToken? `&pageToken=${nextPageToken}` : '');
      try{
        const response = await axios.get(URL);
        const { totalResults } = response.data.pageInfo;
        const items = response.data.items;

        for(let i = 0; i < totalResults; i++) {
          comments.push(items[i].snippet.topLevelComment.snippet.textDisplay);
        }

        if(!response.data.nextPageToken) {
          break;
        } else {
          nextPageToken = response.data.nextPageToken;
        };
      } catch(e) {
        console.log(e);
        break;
      }
    }
    return comments;
}