const Version = require("../models/VersionModel");


const getVersions = async (req, res) => 
    {
        const {sectionName} = req.query;
        try {
            const query = sectionName ? { sectionName } : {};
            const versions = await Version.find(query);
            res.status(200).json(versions);
            console.log(req.method);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

const createVersion = async (req, res) => 
    {
        try{
            const version = await Version.create(req.body);
            res.status(200).json(version);
            console.log(req.method);
        } catch(err){
            res.status(400).json({ message: err });
        }
    }

    const deleteVersion = async (req, res) => {
        try {
          await Version.findByIdAndDelete(req.params.id);
          res.json("Data row Deleted.");
          console.log(req.params.id);
        } catch (err) {
          res.status(400).json("Error: " + err);
        }
      };





  module.exports = {
    getVersions,
    createVersion,
    deleteVersion
  };