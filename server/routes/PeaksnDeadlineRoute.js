const express = require("express");
const { createPeaksnDeadline, getPeaksnDeadlines, deletePeaksnDeadline} = require("../controllers/PeaksnDeadlineController");
const router = express.Router();





router.post("/", createPeaksnDeadline);
router.get("/", getPeaksnDeadlines);
router.delete("/:id", deletePeaksnDeadline);



module.exports = router;