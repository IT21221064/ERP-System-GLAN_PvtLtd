const asyncHandler = require('express-async-handler')
const Feedback = require('../models/Notification');
const { json } = require('express');
const Notification = require('../models/Notification');

//add customer details
const setNoti = asyncHandler(async(req, res) => {
    const notification = ({ nid, cusName, date, noti } = req.body);
    if (!nid || !cusName || !date || !noti) {
        res.status(400);
        throw new Error("Please add values")
    }


    //create notifications
    const notification1 = await Notification.create({
        nid,
        cusName,
        date,
        noti
    })

    //check correctly we create notifications
    if (notification1) {
        res.status(201).json({
            nid: notification1.nid,
            cusName: notification1.cusName,
            date: notification1.date,
            feed_back: notification1.noti
        })
    } else {
        res.status(400);
        throw new Error("Invalide Input");
    }
    res.status(200).json({
        message: "New Notification created"
    });
})

//get notification details
const getNoti = asyncHandler(async(req, res) => {
    const notification1 = await Notification.find()

    if (notification1.length > 0) {
        res.status(200).json(notification1)
    } else {
        res.status(404);
        throw new Error("No Notifications")
    }

})

//update notification details
const updateNoti = asyncHandler(async(req, res) => {
    const notification1 = await Notification.findById(req.params.id)

    if (!notification1) {
        res.status(400)
        throw new Error("Notification not found")
    }

    const updatednoti = await Notification.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatednoti)

})

//delete notification details
const deleteNoti = asyncHandler(async(req, res) => {
    const notification1 = await Notification.findById(req.params.id)

    if (!notification1) {
        res.status(400)
        throw new Error("Notification not found")
    }

    await notification1.deleteOne()

    res.status(200).json({ id: req.params.id })

})

module.exports = {
    getNoti,
    setNoti,
    updateNoti,
    deleteNoti
};