const asyncHandler = require('express-async-handler');
const Task = require('../models/Task');
//const User = require('../models/User');

const getTask = asyncHandler(async (req, res) => {
    const tasks = await Task.find();

    res.status(200).json(tasks);
})

const setTask = asyncHandler(async (req, res) => {
    const tasks = ({ tId, iName, iQty, prodSupe, sDate, eDate,tState} = req.body);

    if (!tId || !iName || !iQty || !sDate||!tState) {
        res.status(400);
        throw new Error("Please input all feilds");
    }

    const task = await Task.create({
        tId,
        iName,
        iQty,
        prodSupe,
        sDate,
        eDate,
        tState
        //user : req.user.id      
    });

    if (task) {
        res.status(201).json({
            tId: task.tId,
            iName: task.iName,
            iQty: task.iQty,
            prodSupe: task.prodSupe,
            sDate: task.sDate,
            eDate: task.eDate,
            tState: task.tState

            //user : task.user               
        }
        )
    } else {
        res.status(400)
        throw new Error("Task not creation unsucessful!")
    }
})

const updateTask = asyncHandler(async (req, res) => {

    const task = await Task.findById({ _id: req.params.id });

    if (!task) {
        res.status(400);
        throw new Error('Task not found')
    }

    /*const user = await User.findById(req.user.id);

    //check user
    //if(!user){
        res.status(401);
        throw new Error('User not found')
    }

    //check the logged in user matches the task user
    if(task.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized');
    }*/

    const updatedTask = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
    })

    res.status(200).json(updatedTask);
})

const deleteTask = asyncHandler(async (req, res) => {

    const task = await Task.findById({ _id: req.params.id });

    if (!task) {
        res.status(400);
        throw new Error('Task not found')
    }

    /*const user = await User.findById(req.user.id);

    //check user
    if(!user){
        res.status(401);
        throw new Error('User not found')
    }

    //check the logged in user matches the task user
    if(task.user.toString() !== user.id){
        res.status(401);
        throw new Error('User not authorized');
    }*/

    await task.deleteOne();

    res.status(200).json({ _id: req.params.id });
})
//get one task
const getTaskById = asyncHandler(async(req,res)=>{
    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(401);
        throw new Error("Task not Found!");
    }

    res.status(200).json(task);
})


module.exports = {
    getTask,
    setTask,
    updateTask,
    deleteTask,
    getTaskById
}