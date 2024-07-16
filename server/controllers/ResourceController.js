const Resource = require("../models/ResourceModel");


const getResources = async (req, res) => 
    {
        try {
            const resources = await Resource.find();
            res.status(200).json(resources);
            console.log(req.method);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

const createResource = async (req, res) => 
    {
        try{
            const resource = await Resource.create(req.body);
            res.status(200).json(resource);
            console.log(req.method);
        } catch(err){
            res.status(400).json({ message: err });
        }
    }

    const deleteResource = async (req, res) => {
        try {
          await Resource.findByIdAndDelete(req.params.id);
          res.json("Data row Deleted.");
          console.log(req.params.id);
        } catch (err) {
          res.status(400).json("Error: " + err);
        }
      };





  module.exports = {
    getResources,
    createResource,
    deleteResource
  };