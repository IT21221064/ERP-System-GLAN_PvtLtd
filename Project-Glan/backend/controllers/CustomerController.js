const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require('express-async-handler')
const Customer = require('../models/Customer');
const { json } = require('express');

//add customer details
const setCus = asyncHandler(async(req, res) => {
    const customer = ({ cusId, cusName, email, address, dob, conInfo, user, password } = req.body);

    if (!cusId || !cusName || !email || !address || !dob || !conInfo || !user || !password) {
        res.status(400);
        throw new Error("Please add values")
    }

    //check if customer is exists
    const customerExists = await Customer.findOne({ cusId });
    if (customerExists) {
        res.status(400);
        throw new Error("Customer already exists")
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create customer
    const customer1 = await Customer.create({
        cusId,
        cusName,
        email,
        address,
        dob,
        conInfo,
        user,
        password: hashedPassword
    })

    //check correctly we create customer
    if (customer1) {
        res.status(201).json({
            cusId: customer1.cusId,
            cusName: customer1.cusName,
            email: customer1.email,
            address: customer1.address,
            dob: customer1.dob,
            conInfo: customer1.conInfo,
            user: customer1.user,
            password: customer1.password
        })
    } else {
        res.status(400);
        throw new Error("Invalide Input");
    }
    res.status(200).json({
        message: 'New customer created'
    });
})

//get customer details
const getCus = asyncHandler(async(req, res) => {
    //find all customer
    const customer1 = await Customer.find()
        // res.status(200).json({
        //     message: 'Get customer'
        // });
    if (customer1.length > 0) {
        res.status(200).json(customer1)
    } else {
        res.status(404);
        throw new Error("No customers found")
    }

})

//update customer details
const updateCus = asyncHandler(async(req, res) => {
    const customer1 = await Customer.findById(req.params.id)

    if (!customer1) {
        res.status(400)
        throw new Error('Customer not found')
    }

    const updatedCus = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCus)
        // res.status(200).json({
        //     message: 'Update customer'
        // });
})

//delete customer details
const deleteCus = asyncHandler(async(req, res) => {
    const customer1 = await Customer.findById(req.params.id)

    if (!customer1) {
        res.status(400)
        throw new Error('Customer not found')
    }

    await customer1.deleteOne()

    res.status(200).json({ id: req.params.id })

    // res.status(200).json({
    //     message: 'Delete customer'
    // });
})

//get one customer
const getCustomerById = asyncHandler(async(req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(401);
        throw new Error("Customer not Found");
    }

    res.status(200).json(customer);
})

module.exports = {
    getCus,
    setCus,
    updateCus,
    deleteCus,
    getCustomerById
};