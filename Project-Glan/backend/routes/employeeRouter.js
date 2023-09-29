
const express = require('express');
const router = express.Router();
const {setEmp, getEmp, updateEmp, deleteEmp, getEmpByID} = require('../controllers/employeeController');

router.route('/').post(setEmp).get(getEmp);
router.route('/:id').put(updateEmp).delete(deleteEmp);
router.route('/:id').get(getEmpByID);

module.exports = router;