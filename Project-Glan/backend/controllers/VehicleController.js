const asyncHandler = require('express-async-handler')

const Vehicle = require('../models/Vehicle')
//const User = require('../models/userModel')


const getVehicle = asyncHandler(async (req, res) => {
  const Vehicles = await Vehicle.find()

  res.status(200).json(Vehicles)
})


const setVehicle = asyncHandler(async (req, res) => {
    const Vehicles = ({vType, numPlate, insurance, capacity, vStatus} = req.body);
  if (!vType || !numPlate || !insurance || !capacity || !vStatus) {
    res.status(400)
    throw new Error('Please input all fields')
  }

  const vehicle = await Vehicle.create({
    vType,
    numPlate,
    insurance, 
    capacity,
    vStatus
  })

  if(vehicle){
    res.status(201).json({
    vType : vehicle.vType,
    numPlate : vehicle.numPlate,
    insurance : vehicle.insurance, 
    capacity : vehicle.capacity,
    vStatus : vehicle.vStatus
    })
  }else{
    res.status(400)
    throw new ErrorEvent("Vehicle not created");
  }
})


const updateVehicle = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id)

  if (!vehicle) {
    res.status(400)
    throw new Error('Vehicle not found')
  }


    /*if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }


  if (vehicle.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }*/

  const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedVehicle)
})


const deleteVehicle = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id)

  if (!vehicle) {
    res.status(400)
    throw new Error('Vehicle not found')
  }


  /*if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }



  if (Vehicle.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }*/

  await vehicle.deleteOne()

  res.status(200).json({ _id: req.params.id })
})

//get one vehicle
const getVById = asyncHandler(async(req,res)=>{
  const vehicle = await Vehicle.findById(req.params.id);
  if(!vehicle){
      res.status(401);
      throw new Error("Vehicle not Found!");
  }

  res.status(200).json(vehicle);
})


module.exports = {
  getVehicle,
  setVehicle,
  updateVehicle,
  deleteVehicle,
  getVById
};