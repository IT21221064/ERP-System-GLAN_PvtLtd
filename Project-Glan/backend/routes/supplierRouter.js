const express = require("express");
const router = express.Router();

const {
  getSupplier,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/SupplierController");

router.route("/").get(getSupplier).post(addSupplier);
router.route("/:id").put(updateSupplier).delete(deleteSupplier);

module.exports = router;
