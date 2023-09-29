const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { getPrivi, setPrivi, updatePrivi, deletePrivi } = require('../controllers/PrivilegeController');

router.route('/').post(setPrivi).get(getPrivi);
router.route('/:id').put(updatePrivi).delete(deletePrivi);

module.exports = router;