const express = require("express");
const router = express.Router();
const {
  getItem,
  addItem,
  updateItem,
  deleteItem,
  getItemById,
} = require("../controllers/ItemController");

router.route("/").get(getItem).post(addItem);
router.route("/:id").put(updateItem).delete(deleteItem);
router.route("/:id").get(getItemById);

module.exports = router;
