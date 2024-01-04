const express = require('express');
const router = express.Router();
const {getQuotation, setQuotation, updateQuotation, deleteQuotation, getQuotationById} = require('../controllers/quotationController');

router.route('/').post(setQuotation).get(getQuotation);
router.route('/:id').put(updateQuotation).delete(deleteQuotation);
router.route('/:id').get(getQuotationById);

module.exports = router;