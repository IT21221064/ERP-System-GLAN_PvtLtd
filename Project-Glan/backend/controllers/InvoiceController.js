const asyncHandler = require('express-async-handler')

const Invoice = require('../models/Invoice')

const setInv = asyncHandler(async(req,res) =>{
    const invoices =({inCode,iName,Qty,unitP,itDis,Tot,subTot,inDis,netTot,crDate} =req.body);
    if(!inCode||!iName||!Qty||!unitP||!itDis||!Tot||!subTot||!inDis||!netTot||!crDate){
        res.status(400)
        throw new Error('Please add a text field');
    }
    
    //check if invoice is exits
    const invoiceExits = await Invoice.findOne({inCode});
    if (invoiceExits){
        res.status(400);
        throw new Error("Invoice already exists");
    }

    const invoice = await Invoice.create({
        inCode,
        iName,
        Qty,
        unitP,
        itDis,
        Tot,
        subTot,
        inDis,
        netTot,
        crDate

    });
    if(invoice){

         res.status(201).json({
        inCode : invoice.inCode,
        iName : invoice.iName,
        Qty: invoice.Qty,
        unitP : invoice.unitP,
        itDis : invoice.itDis,
        Tot :invoice.Tot,
        subTot : invoice.subTot,
        inDis : invoice.inDis,
        netTot : invoice.netTot,
        crDate : invoice.crDate,
    }
        )}else{
        res.status(400)
        throw new ErrorEvent("Invalid user data")
    }

     res.status(200).json({message :"New invoice created"});

})

const getInv = asyncHandler(async(req,res) =>{
    const invoices = await Invoice.find();

    res.status(200).json(invoices);
    
})

const getInvById = asyncHandler(async(req, res) =>{
    const getInv = await Invoice.findById(req.params.id);

    res.status(200).json(getInv);
})

const updateInv = asyncHandler(async(req,res) =>{

    const invoice = await Invoice.findById(req.params.id)

    if(!invoice){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })

    res.status(200).json(updatedInvoice);
    
})

const deleteInv = asyncHandler(async(req,res) =>{

    const invoice = await Invoice.findById(req.params.id)

    if(!invoice){
        res.status(400)
        throw new Error('Goal not found')
    }

    await invoice.deleteOne();

    res.status(200).json(req.params.id);
    
})
module.exports = {
    getInv,
    setInv,
    updateInv,
    deleteInv,
    getInvById
};


