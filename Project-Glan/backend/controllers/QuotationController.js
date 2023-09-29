const asyncHandler = require('express-async-handler')

const Quotation = require('../models/Quotation')

const setQuotation = asyncHandler(async(req,res) =>{
    const quotations = ({cusName,quotationNum,iCode,packSize,qty,unitP,issueDate,itemDes} =req.body);
    if(!cusName||!quotationNum||!iCode||!packSize||!qty||!unitP||!issueDate||!itemDes){
        res.status(400)
        throw new Error('Please add a text field');
    }

    const quotationExits = await Quotation.findOne({iCode});
    if(quotationExits){
        res.status(400);
        throw new Error ("quotation alredy exists");
    }

    const quotation = await Quotation.create({
        cusName,
        quotationNum,
        iCode,
        packSize,
        qty,
        unitP,
        issueDate,
        itemDes,

     });
     if(quotation){

        res.status(201).json({
            cusName : quotation.cusName,
            quotationNum : quotation.quotationNum,
            iCode : quotation.iCode,
            packSize : quotation.packSize,
            qty : quotation.qty,
            unitP : quotation.unitP,
            issueDate : quotation.issueDate,
            itemDes : quotation.itemDes,
            
        }) } else{
            res.status(400)
            throw new Error("Invalid user data")
        }

        res.status(200).json({message :"New quotation created"});

     
})

const getQuotation = asyncHandler(async(req,res) =>{
    const quotations = await Quotation.find();

    res.status(200).json(quotations);

})

const getQuotationById = asyncHandler(async(req,res) =>{
    const getQuotation = await Quotation.findById(req.params.id);

    res.status(200).json(getQuotation);
})

const updateQuotation = asyncHandler(async(req,res) =>{

    const quotation = await Quotation.findById(req.params.id)

    if(!quotation){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedQuotation = await Quotation.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })

    res.status(200).json(updatedQuotation);
    
})
const deleteQuotation = asyncHandler(async(req,res) =>{

    const quotation = await Quotation.findById(req.params.id)

    if(!quotation){
        res.status(400)
        throw new Error('Goal not found')
    }

    await quotation.deleteOne();

    res.status(200).json(req.params.id);
})

module.exports = {
    getQuotation,
    setQuotation,
    updateQuotation,
    deleteQuotation,
    getQuotationById
};