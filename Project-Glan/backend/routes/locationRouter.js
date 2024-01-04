//const { Router} = require('express');
const express = require('express');
const router = express.Router();
const{setLocation,getLocation,updateLocation,deleteLocation,getLocationById} = require('../controllers/LocationController');


router.route('/').post(setLocation).get(getLocation);
router.route('/:id').put(updateLocation).delete(deleteLocation);
router.route('/:id').get(getLocationById)

module.exports = router;
