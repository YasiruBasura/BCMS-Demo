const express = require("express");
const { getCriticalFunctions, createCriticalFunction, deleteCriticalFunction} = require("../controllers/CriticalFunctionController");
const router = express.Router();





router.post("/", createCriticalFunction);
router.get("/", getCriticalFunctions);
router.delete("/:id", deleteCriticalFunction);



module.exports = router;