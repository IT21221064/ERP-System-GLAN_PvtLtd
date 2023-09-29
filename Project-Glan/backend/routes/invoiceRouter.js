const express = require('express');
const router = express.Router();
const {getInv, setInv, updateInv, deleteInv, getInvById} = require('../controllers/InvoiceController');

router.route('/').post(setInv).get(getInv);
router.route('/:id').put(updateInv).delete(deleteInv);
router.route('/:id').get(getInvById);

module.exports = router;

