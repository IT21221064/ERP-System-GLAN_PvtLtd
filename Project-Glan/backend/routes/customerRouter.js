const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { getCus, setCus, updateCus, deleteCus, getCustomerById } = require('../controllers/CustomerController');

router.route('/').post(setCus).get(getCus);
router.route('/:id').put(updateCus).delete(deleteCus);
router.route('/:id').get(getCustomerById)

module.exports = router;