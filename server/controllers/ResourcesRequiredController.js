const ResourcesRequired = require("../models/ResourcesRequiredModel");


const getResourcesRequired = async (req, res) => 
    {
        try {
            const resourcesRequired = await ResourcesRequired.find();
            res.status(200).json(resourcesRequired);
            console.log(req.method);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

const createResourceRequired = async (req, res) => 
    {
        try{
            const resourceRequired = await ResourcesRequired.create(req.body);
            res.status(200).json(resourceRequired);
            console.log(req.method);
        } catch(err){
            res.status(400).json({ message: err });
        }
    }

    const deleteResourceRequired = async (req, res) => {
        try {
          await ResourcesRequired.findByIdAndDelete(req.params.id);
          res.json("Data row Deleted.");
          console.log(req.params.id);
        } catch (err) {
          res.status(400).json("Error: " + err);
        }
      };





  module.exports = {
    getResourcesRequired,
    createResourceRequired,
    deleteResourceRequired
  };