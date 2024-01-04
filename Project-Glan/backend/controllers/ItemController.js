const Item = require("../models/Item");
const asyncHandler = require("express-async-handler");

const getItem = asyncHandler(async (req, res) => {
  const items = await Item.find({ Item });

  return res.status(200).json(items);
});

//add items

const addItem = asyncHandler(async (req, res) => {
  const items = ({
    itemcode,
    itemname,
    unitprice,
    quantity,
    itemimage,
    itemdescript,
  } = req.body);
  if (!itemcode || !itemname || !unitprice || !quantity || !itemdescript) {
    res.status(400);
    throw new Error("Please add values");
  }
  //check if item is exists
  const itemExists = await Item.findOne({ itemcode });
  if (itemExists) {
    res.status(400);
    throw new Error("Item already exists");
  }

  const item = await Item.create({
    itemcode,
    itemname,
    unitprice,
    quantity,
    itemimage,
    itemdescript,
  });
  if (item) {
    res.status(201).json({
      itemcode: item.itemcode,
      itemname: item.itemname,
      unitprice: item.unitprice,
      quantity: item.quantity,
      itemimage: item.itemimage,
      itemdescript: item.itemdescript,
    });
  } else {
    res.status(400);
    throw new ErrorEvent("Invalid input");
  }
});

//update items

const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    res.status(401);
    throw new Error("Item not found");
  }
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).json({
    message: "Item updated",
    success: true,
    data: updatedItem,
  });
});

//delete items

const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    res.status(401);
    throw new Error("Item not found");
  }
  const deletedItem = await item.deleteOne();

  return res.status(200).json({
    message: "Item deleted",
    success: true,
    data: item,
  });
});

//get one item
const getItemById = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) {
    res.status(401);
    throw new Error("Item not found");
  }
  return res.status(200).json(item);
});

module.exports = {
  getItem,
  addItem,
  updateItem,
  deleteItem,
  getItemById,
};
