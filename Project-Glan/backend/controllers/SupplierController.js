const Supplier = require("../models/Supplier");
const asyncHandler = require("express-async-handler");

const getSupplier = asyncHandler(async (req, res) => {
  const suppliers = await Supplier.find({ Supplier });

  return res.status(200).json({
    message: "get suppliers",
    success: true,
    count: suppliers.length,
    data: suppliers,
  });
});

//add suppliers

const addSupplier = asyncHandler(async (req, res) => {
  const suppliers = ({ supid, supname, supaddress, supphone, supemail } =
    req.body);
  if (!supid || !supname || !supaddress || !supphone || !supemail) {
    res.status(400);
    throw new Error("Please add values");
  }
  //check if item is exists
  const supplierExists = await Supplier.findOne({ supid });
  if (supplierExists) {
    res.status(400);
    throw new Error("Supplier already exists");
  }

  const supplier = await Supplier.create({
    supid,
    supname,
    supaddress,
    supphone,
    supemail,
  });
  if (supplier) {
    res.status(201).json({
      supid: supplier.supid,
      supname: supplier.supname,
      supaddress: supplier.supadress,
      supphone: supplier.supphone,
      supemail: supplier.supemail,
    });
  } else {
    res.status(400);
    throw new ErrorEvent("Invalid input");
  }
});

//update items

const updateSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    res.status(401);
    throw new Error("Supplier not found");
  }
  const updatedSupplier = await Supplier.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  return res.status(200).json({
    message: "Supplier updated",
    success: true,
    data: updatedSupplier,
  });
});

//delete items

const deleteSupplier = asyncHandler(async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    res.status(401);
    throw new Error("Supplier not found");
  }
  const deletedSpplier = await Supplier.deleteOne();

  return res.status(200).json({
    message: "Supplier deleted",
    success: true,
    data: supplier,
  });
});

module.exports = {
  getSupplier,
  addSupplier,
  updateSupplier,
  deleteSupplier,
};
