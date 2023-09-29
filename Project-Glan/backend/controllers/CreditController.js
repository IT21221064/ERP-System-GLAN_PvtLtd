const asyncHandler = require('express-async-handler')

const Credit = require('../models/Credit')

const setCre = asyncHandler(async (req, res) => {
    const Credits = ({ CusName, PayName, IssueDate, ComDate, OrNum, Sperson, CusOrder, Icode } = req.body);
    if (!CusName || !PayName || !IssueDate || !ComDate || !OrNum || !Sperson || !CusOrder || !Icode) {
        res.status(400)
        throw new Error('Please add a text field');
    }

    //check if invoice is exits
    const creditExits = await Credit.findOne({ Icode });
    if (creditExits) {
        res.status(400);
        throw new Error("Credit already exists");
    }

    const credit = await Credit.create({
        CusName,
        PayName,
        IssueDate,
        ComDate,
        OrNum,
        Sperson,
        CusOrder,
        Icode,

    });
    if (credit) {

        res.status(201).json({
            CusName: credit.CusName,
            PayName: credit.PayName,
            IssueDate: credit.IssueDate,
            ComDate: credit.ComDate,
            OrNum: credit.OrNum,
            Sperson: cred.Sperson,
            CusOrder: credit.CusOrder,
            Icode: credit.Icode,

        }
        )
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }

    res.status(200).json({ message: "New credit created" });

})

const getCre = asyncHandler(async (req, res) => {
    const credits = await Credit.find();

    res.status(200).json(credits);

})

const getCreById = asyncHandler(async (req, res) => {
    const credit = await Credit.findById(req.params.id);

    res.status(200).json(credit);

})

const updateCre = asyncHandler(async (req, res) => {

    const credit = await Credit.findById(req.params.id)

    if (!credit) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedCredit = await Credit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCredit);

})

const deleteCre = asyncHandler(async (req, res) => {

    const credit = await Credit.findById(req.params.id)

    if (!credit) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await credit.deleteOne();

    res.status(200).json(req.params.id);

})
module.exports = {
    getCre,
    setCre,
    updateCre,
    deleteCre,
    getCreById
};


