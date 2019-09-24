const express = require('express');
const router = express.Router();
const ctrl = require('../ctrl/ctrl');

//비동기 함수 래퍼
const wrap = asyncFn => {
  return (async (req, res, next) => {
    try {
      return await asyncFn(req, res, next)
    } catch (error) {
      return next(error)
    }
  })  
}

/* GET comments. */
router.get('/comments/:id', wrap(async(req, res, next) => {
  const videoId = req.params.id;
  console.log('videoId: ' + videoId);
  const comments = await ctrl.getComments(videoId);
  if(comments.length === 0) return res.status(200).send();

  const nounsArr = await ctrl.refineData(comments);
  const wordFrequency = ctrl.getMostFrequentNouns(nounsArr);

  console.log('응답');
  return res.status(200).send({comments: wordFrequency});

}));

module.exports = router;
