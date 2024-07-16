const express = require("express");
const { getResources, createResource, deleteResource} = require("../controllers/ResourceController");
const router = express.Router();





router.post("/", createResource);
router.get("/", getResources);
router.delete("/:id", deleteResource);



module.exports = router;