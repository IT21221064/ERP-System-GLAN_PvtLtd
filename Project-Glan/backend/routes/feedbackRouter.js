const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { getFeed, setFeed, updateFeed, deleteFeed, getFeedbackById } = require('../controllers/FeedbackController');

router.route('/').post(setFeed).get(getFeed);
router.route('/:id').put(updateFeed).delete(deleteFeed);
router.route('/:id').get(getFeedbackById)

module.exports = router;