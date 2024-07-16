const express = require("express");
const {   getInternalDepend, createInternalDepend, deleteInternalDepend} = require("../controllers/InternalDependController");
const router = express.Router();





router.post("/", createInternalDepend);
router.get("/", getInternalDepend);
router.delete("/:id", deleteInternalDepend);



module.exports = router;