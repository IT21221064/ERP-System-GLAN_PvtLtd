const Employee = require("../models/Employee");
const asyncHandler = require("express-async-handler");


const setEmp = asyncHandler(async (req, res) => {
    const emp = ({empId, Name, nic, dob, address, contactInfo} = req.body);
    if (!empId || !nic || !dob ) {
      res.status(400);
      throw new Error("Please add values");
    }
    //check if item is exists
    const empExists = await Employee.findOne({ empId });
    if (empExists) {
      res.status(400);
      throw new Error("Employee already exists");
    }
  
    const emp1 = await Employee.create({
      empId, 
      Name, 
      nic, 
      dob, 
      address, 
      contactInfo
    });

    if (emp1) {
      res.status(201).json({
        empId: emp1.empId,
        Name: emp1.Name,
        nic: emp1.nic,
        dob: emp1.dob,
        address: emp1.address,
        contactInfo: emp1.contactInfo

      });
    } else {
      res.status(400);
      throw new ErrorEvent("Invalid input")}
})
const getEmp = asyncHandler(async (req, res) => {
    const emps = await Employee.find();
    res.status(200).json(emps);
})

const getEmpByID = asyncHandler(async(req, res)=>{
  const Emp = await Employee.findById(req.params.id);

  res.status(200).json(Emp);

})

const updateEmp = asyncHandler(async (req, res) => {
    //Find an existing employee
    const emp = await Employee.findById(req.params.id);
      
    if(!emp){
      res.status(400);
      throw new Error("Employee not found");
    }
    const updatedEmp = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
  })

    res.status(200).json(updatedEmp);
})
const deleteEmp = asyncHandler(async (req, res) => {
  const emp = await Employee.findById(req.params.id);
      
  if(!emp){
    res.status(400);
    throw new Error("Employee not found");
  }

  emp.deleteOne();

  res.status(200).json(req.params.id);
})

module.exports = {
    setEmp,
    getEmp,
    getEmpByID,
    updateEmp,
    deleteEmp
};