var express = require('express');
var axios = require('axios');
var router = express.Router();
require('dotenv').config();

/* GET comments. */
router.get('/comments/:id', function (req, res, next) {
  const videoId = req.params.id;
  console.log('videoId: ' + videoId);
 
  getData(videoId).then ((comments) => {
    console.log(comments);
    //댓글 정제
    return res.status(200).send();
    }
  );
});

const getData = async(videoId) => {
  console.log('메소드실행');
  let nextPageToken = '';
  let comments = [];
  let page = 1;
  while(true){
    console.log(page++);

    const URL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&textFormat=plainText&videoId=${videoId}&key=${process.env.GOOGLE_API_KEY}`
    + (nextPageToken? `&pageToken=${nextPageToken}` : '');

    const response = await axios.get(URL);
    const { totalResults } = response.data.pageInfo;
    console.log(response.data.nextPageToken);
    console.log(response.data.items.length);
    const items = response.data.items;

    //console.log('데이타' + JSON.stringify(response.data));

    for(let i = 0; i < totalResults; i++) {
      if(page > 27) {
        console.log(items[i].snippet.topLevelComment.snippet.textDisplay);
      }
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
