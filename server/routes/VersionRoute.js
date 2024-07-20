const express = require("express");
const { getVersions, createVersion, deleteVersion} = require("../controllers/VersionController");
const router = express.Router();





router.post("/", createVersion);
router.get("/", getVersions);
router.delete("/:id", deleteVersion);



module.exports = router;