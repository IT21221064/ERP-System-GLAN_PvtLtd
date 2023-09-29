const asyncHandler = require('express-async-handler')
const Customer = require('../models/Customer');
const { json } = require('express');
const Privilege = require('../models/Privilege');

//add customer privilege details
const setPrivi = asyncHandler(async(req, res) => {
    const privilege = ({ priId, cusName, offerDes, points, start_date, other } = req.body);
    if (!priId || !cusName || !offerDes || !points || !start_date || !other) {
        res.status(400);
        throw new Error("Please add values")
    }

    //check if customer already get points
    const privilegeExists = await Privilege.findOne({ priId });
    if (privilegeExists) {
        res.status(400);
        throw new Error("Customer already get points")
    }

    //create customer
    const privilege1 = await Privilege.create({
        priId,
        cusName,
        offerDes,
        points,
        start_date,
        other
    })

    //check correctly we create customer
    if (privilege1) {
        res.status(201).json({
            priId: privilege.priId,
            cusName: privilege.cusName,
            offerDes: privilege.offerDes,
            points: privilege.points,
            start_date: privilege.start_date,
            other: privilege.other

        })
    } else {
        res.status(400);
        throw new Error("Invalide Input");
    }
    res.status(200).json({
        message: 'Add privilege to new customer'
    });
})

//get customer privilege details
const getPrivi = asyncHandler(async(req, res) => {
    const privilege1 = await Privilege.find()

    if (privilege1.length > 0) {
        res.status(200).json(privilege1)
    } else {
        res.status(404);
        throw new Error("No one get customer privileges")
    }

})

//update customer privilege details
const updatePrivi = asyncHandler(async(req, res) => {
    const privilege1 = await Privilege.findById(req.params.id)

    if (!privilege1) {
        res.status(400)
        throw new Error('Customer not found')
    }

    const updatedPrivi = await Privilege.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedPrivi)
        // res.status(200).json({
        //     message: 'Update customer'
        // });
})

//delete customer details
const deletePrivi = asyncHandler(async(req, res) => {
    const privilege1 = await Privilege.findById(req.params.id)

    if (!privilege1) {
        res.status(400)
        throw new Error('Customer not found')
    }

    await privilege1.deleteOne()

    res.status(200).json({ id: req.params.id })

    // res.status(200).json({
    //     message: 'Delete customer'
    // });
})

module.exports = {
    getPrivi,
    setPrivi,
    updatePrivi,
    deletePrivi
};