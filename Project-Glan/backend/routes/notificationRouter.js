const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { getNoti, setNoti, updateNoti, deleteNoti } = require('../controllers/NotificationController');

router.route('/').post(setNoti).get(getNoti);
router.route('/:id').put(updateNoti).delete(deleteNoti);

module.exports = router;