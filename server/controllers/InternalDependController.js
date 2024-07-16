const InternalDepend = require("../models/InternalDependModel");


const getInternalDepend = async (req, res) => 
    {
        try {
            const internalDependencies = await InternalDepend.find();
            res.status(200).json(internalDependencies);
            console.log(req.method);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

const createInternalDepend = async (req, res) => 
    {
        try{
            const internalDependency = await InternalDepend.create(req.body);
            res.status(200).json(internalDependency);
            console.log(req.method);
        } catch(err){
            res.status(400).json({ message: err });
        }
    }

    const deleteInternalDepend = async (req, res) => {
        try {
          await InternalDepend.findByIdAndDelete(req.params.id);
          res.json("Data row Deleted.");
          console.log(req.params.id);
        } catch (err) {
          res.status(400).json("Error: " + err);
        }
      };





  module.exports = {
    getInternalDepend,
    createInternalDepend,
    deleteInternalDepend
  };