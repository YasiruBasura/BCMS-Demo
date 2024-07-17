const ExternalDepend = require("../models/ExternalDependModel");


const getExternalDepend = async (req, res) => 
    {
        const {sectionName} = req.query;
        try {
            const query = sectionName ? { sectionName } : {};
            const externalDependencies = await ExternalDepend.find(query);
            res.status(200).json(externalDependencies);
            console.log(req.method);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

const createExternalDepend = async (req, res) => 
    {
        try{
            const externalDependency = await ExternalDepend.create(req.body);
            res.status(200).json(externalDependency);
            console.log(req.method);
        } catch(err){
            res.status(400).json({ message: err });
        }
    }

    const deleteExternalDepend = async (req, res) => {
        try {
          await ExternalDepend.findByIdAndDelete(req.params.id);
          res.json("Data row Deleted.");
          console.log(req.params.id);
        } catch (err) {
          res.status(400).json("Error: " + err);
        }
      };





  module.exports = {
    getExternalDepend,
    createExternalDepend,
    deleteExternalDepend
  };