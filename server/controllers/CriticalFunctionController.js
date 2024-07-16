const CriticalFunction = require("../models/CriticalFunctionModel");


const getCriticalFunctions = async (req, res) => 
    {
        try {
            const criticalFunctions = await CriticalFunction.find();
            res.status(200).json(criticalFunctions);
            console.log(req.method);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

const createCriticalFunction = async (req, res) => 
    {
        try{
            const criticalFunction = await CriticalFunction.create(req.body);
            res.status(200).json(criticalFunction);
            console.log(req.method);
        } catch(err){
            res.status(400).json({ message: err });
        }
    }

    const deleteCriticalFunction = async (req, res) => {
        try {
          await CriticalFunction.findByIdAndDelete(req.params.id);
          res.json("Data row Deleted.");
          console.log(req.params.id);
        } catch (err) {
          res.status(400).json("Error: " + err);
        }
      };





  module.exports = {
    getCriticalFunctions,
    createCriticalFunction,
    deleteCriticalFunction
  };