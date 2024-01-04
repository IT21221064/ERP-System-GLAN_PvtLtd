const express = require('express');
const router = express.Router();
const {getCre, setCre, updateCre, deleteCre, getCreById} = require('../controllers/creditController');

router.route('/').post(setCre).get(getCre);
router.route('/:id').put(updateCre).delete(deleteCre);
router.route('/:id').get(getCreById);

module.exports = router;