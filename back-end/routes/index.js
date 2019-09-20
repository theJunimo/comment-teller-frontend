var express = require('express');
var axios = require('axios');
var router = express.Router();
require('dotenv').config();

/* GET comments. */
router.get('/comments/:id', function (req, res, next) {
  const videoId = req.params.id;
  console.log('videoId: ' + videoId);
 
  getData(videoId).then ((comments) => {
    refineData(comments);
    //댓글 정제
    return res.status(200).send();
    }
  );
});

const refineData = (comments) => {
  const n = comments.length;
  var pattern = /[^(가-힣)]|[()]/gi; // 특수문자 제거
  for(let i = 0; i < n; i++) {
    comments[i] = comments[i].replace(pattern,' ');
  }
  console.log(comments);
}

const getData = async(videoId) => {
  let nextPageToken = '';
  let comments = [];

  while(true){
    const URL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&textFormat=plainText&videoId=${videoId}&key=${process.env.GOOGLE_API_KEY}`
    + (nextPageToken? `&pageToken=${nextPageToken}` : '');

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
  }
  return comments;
}

module.exports = router;
