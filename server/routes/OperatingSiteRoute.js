const express = require("express");
const { getOperatingSites, createOperatingSite, deleteOperatingSite } = require("../controllers/OperatingSiteController");
const router = express.Router();





router.post("/", createOperatingSite);
router.get("/", getOperatingSites);
router.delete("/:id", deleteOperatingSite);



module.exports = router;