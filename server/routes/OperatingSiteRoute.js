const express = require("express");
const { getOperatingSites, createOperatingSite } = require("../controllers/OperatingSiteController");
const router = express.Router();





router.post("/", createOperatingSite);
router.get("/", getOperatingSites);



module.exports = router;