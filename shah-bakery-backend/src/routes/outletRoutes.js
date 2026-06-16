const express = require("express");

const {
  getOutlets,
  createOutlet
} = require(
  "../controllers/outletController"
);

const router = express.Router();

router.get("/", getOutlets);

router.post("/", createOutlet);

module.exports = router;