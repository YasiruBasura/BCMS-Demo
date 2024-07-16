const express = require("express");
const {getExternalDepend, createExternalDepend, deleteExternalDepend} = require("../controllers/ExternalDependController");
const router = express.Router();





router.post("/", createExternalDepend);
router.get("/", getExternalDepend);
router.delete("/:id", deleteExternalDepend);



module.exports = router;