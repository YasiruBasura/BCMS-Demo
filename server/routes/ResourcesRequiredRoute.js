const express = require("express");
const {getResourcesRequired, createResourceRequired, deleteResourceRequired} = require("../controllers/ResourcesRequiredController");
const router = express.Router();





router.post("/", createResourceRequired);
router.get("/", getResourcesRequired);
router.delete("/:id", deleteResourceRequired);



module.exports = router;