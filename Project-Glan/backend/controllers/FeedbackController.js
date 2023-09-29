const asyncHandler = require('express-async-handler')
const Feedback = require('../models/Feedback');
const { json } = require('express');

//add customer details
const setFeed = asyncHandler(async(req, res) => {
    const feedback = ({ fid, cusName, date, feed, response, status, assign } = req.body);
    if (!fid || !cusName || !date || !feed) {
        res.status(400);
        throw new Error("Please add values")
    }

    //check if customer already give feeback
    // const feedbackExists = await Feedback.findOne({ fID });
    // if (feedbackExists) {
    //     res.status(400);
    //     throw new Error("Customer already exists")
    // }

    //create customer feedback
    const feedback1 = await Feedback.create({
        fid,
        cusName,
        date,
        feed,
        response,
        status,
        assign
    })

    //check correctly we create customer feedback
    if (feedback1) {
        res.status(201).json({
            fid: feedback1.fid,
            cusName: feedback1.cusName,
            date: feedback1.date,
            feed: feedback1.feed,
            response: feedback1.response,
            status: feedback1.status,
            assign: feedback1.assign
        })
    } else {
        res.status(400);
        throw new Error("Invalide Input");
    }
    res.status(200).json({
        message: "New Customer's Feedback created"
    });
})

//get customer details
const getFeed = asyncHandler(async(req, res) => {
    const feedback1 = await Feedback.find()
        // res.status(200).json({
        //     message: 'Get customer'
        // });
    if (feedback1.length > 0) {
        res.status(200).json(feedback1)
    } else {
        res.status(404);
        throw new Error("No customer's feedbacks")
    }

})

//update customer details
const updateFeed = asyncHandler(async(req, res) => {
    const feedback1 = await Feedback.findById(req.params.id)

    if (!feedback1) {
        res.status(400)
        throw new Error("Customer's feedback not found")
    }

    const updatedfeed = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedfeed)
        // res.status(200).json({
        //     message: 'Update customer'
        // });
})

//delete customer details
const deleteFeed = asyncHandler(async(req, res) => {
    const feedback1 = await Feedback.findById(req.params.id)

    if (!feedback1) {
        res.status(400)
        throw new Error("Customer's feedback not found")
    }

    await feedback1.deleteOne()

    res.status(200).json({ id: req.params.id })

    // res.status(200).json({
    //     message: 'Delete customer'
    // });
})

//get one feedback
const getFeedbackById = asyncHandler(async(req, res) => {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
        res.status(401);
        throw new Error("Customer Feedback not Found");
    }

    res.status(200).json(feedback);
})

module.exports = {
    getFeed,
    setFeed,
    updateFeed,
    deleteFeed,
    getFeedbackById
};