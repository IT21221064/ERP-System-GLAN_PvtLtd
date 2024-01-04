const Rawmaterial = require("../models/RawMaterials");
const asyncHandler = require("express-async-handler");

const getRawmaterial = asyncHandler(async (req, res) => {
  const rawmaterials = await Rawmaterial.find({ Rawmaterial });

  return res.status(200).json({
    message: "get Rawmaterials",
    success: true,
    count: rawmaterials.length,
    data: rawmaterials,
  });
});

//add rawmaterials

const addRawmaterial = asyncHandler(async (req, re) => {
  const rawmaterials = ({
    rawmatcode,
    rawmatname,
    rawmatquant,
    rawmatprice,
    location,
    category,
  } = req.body);

  if (
    !rawmatcode ||
    !rawmatname ||
    !rawmatquant ||
    !rawmatprice ||
    !location ||
    !category
  ) {
    res.status(400);
    throw new Error("Please add values");
  }

  //check if rawmaterial exists
  const rawmatExist = await Rawmaterial.findOne({ rawmatcode });
  if (rawmatExist) {
    res.status(400);
    throw new Error("Raw material already exists");
  }
  const rawmatrial = await Rawmaterial.create({
    rawmatcode,
    rawmatname,
    rawmatquant,
    rawmatprice,
    location,
    category,
  });
  if (rawmaterial) {
    res.status(201).json({
      rawmatcode: rawmaterial.rawmatcode,
      rawmatname: rawmaterial.rawmatname,
      rawmatquant: rawmaterial.rawmatquant,
      rawmatprice: rawmaterial.rawmatprice,
      location: rawmaterial.location,
      category: rawmaterial.category,
    });
  } else {
    res.status(400);
    throw new ErrorEvent("Invalid input");
  }
});

//update rawmaterial

const updateRawmaterial = asyncHandler(async (req, res) => {
  const rawmaterial = await Rawmaterial.findById(req.params.id);

  if (!rawmaterial) {
    res.status(401);
    throw new Error("Raw material not found");
  }
  const updatedRawmat = await Rawmaterial.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  return res.status(200).json({
    message: "Rawmaterial updated",
    success: true,
    data: updatedRawmat,
  });
});

//delete rawmaterial

const deleteRawmaterial = asyncHandler(async (req, res) => {
  const rawmaterial = await Rawmaterial.findById(req.params.id);

  if (!rawmaterial) {
    res.status(401);
    throw new Error("Rawmaterial not found");
  }
  const deletedrawmaterial = await Rawmaterial.deleteOne();

  return res.status(200).json({
    message: "Raw material deleted",
    success: true,
    data: rawmaterial,
  });
});

module.exports = {
  getRawmaterial,
  addRawmaterial,
  updateRawmaterial,
  deleteRawmaterial,
};
