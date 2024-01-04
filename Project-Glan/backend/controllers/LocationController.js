const asyncHandler =  require('express-async-handler');
const Location = require('../models/Location');


const getLocation = asyncHandler(async(req,res) =>{
    const location = await Location.find();

    res.status(200).json(location);

    /*res.status(200).json({messsage: "getting items",
    success: true,
    count: location.length,
    data: location,

    });*/
});



const setLocation = asyncHandler (async(req, res)=> {
    const locations = ({ itemID, itemName, area, Qty, Category, Description} = req.body); 
    if(!itemID || !itemName || !area || !Qty || !Category ){
        res.status(400);
        throw new Error("please add values");
    }

    /*const locationExists = await Location.findOne({ itemID });
    if (locationExists) {
        res.status(400);
        throw new Error("item already exists"); 
    }*/

    const location = await Location.create({
        itemID,
        itemName,
        area,
        Qty,
        Category,
        Description,
    });

    if(location) {
        res.status(201).json({
            itemID: location.itemID,
            itemName: location.itemName,
            area: location.area,
            Qty: location.Qty,
            Category: location.Category,
            Description: location.Description,

        });
    } else {
        res.status(400);
        throw new ErrorEvent("Invalid input")
    }

    //res.status(200).json({message:"New Item Created"});
});




const updateLocation = asyncHandler(async(req,res) =>{
    const location = await Location.findById({_id: req.params.id});

    if(!location){
        res.status(400)
        throw new Error('item not found')
    }

    const updatedLocation = await Location.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new:true,
    })
    res.status(200).json(updatedLocation);
    /*res.status(200).json({messsage:"item updated",
    data:location,
});*/
});

const deleteLocation = asyncHandler(async(req,res) =>{
    const location = await Location.findById({_id: req.params.id})

    if(!location){
        res.status(400)
        throw new Error('item not found')
    }

    //const deleteLocation = await Location.deleteOne();
    await location.deleteOne();

    res.status(200).json({_id: req.params.id})

    /*res.status(200).json({messsage:"item deleted",
    data:location,    
});*/
});

const getLocationById = asyncHandler(async(req,res)=> {
    const location = await Location.findById(req.params.id);
    if(!location){
        res.status(401);
        throw new Error("item not found!");
    }
    res.status(200).json(location);
})

module.exports ={
    setLocation,
    getLocation,
    updateLocation,
    deleteLocation,
    getLocationById
}