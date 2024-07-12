const OperatingSite = require("../models/OperatingSiteModel");

// const getOperatingSites = (req, res) => {
//     OperatingSite.find()
//       .then((OperatingSite) => res.status(200).json(OperatingSite))
//       .catch((err) => {
//         res.status(400).json({ message: err });
//       });
//   };

const getOperatingSites = async (req, res) => 
    {
        try {
            const operatingSites = await OperatingSite.find();
            res.status(200).json(operatingSites);
            console.log(req.method);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

const createOperatingSite = async (req, res) => 
    {
        try{
            const operatingSite = await OperatingSite.create(req.body);
            res.status(200).json(operatingSite);
            console.log(req.method);
        } catch(err){
            res.status(400).json({ message: err });
        }
    }

    const deleteOperatingSite = async (req, res) => {
        try {
          await OperatingSite.findByIdAndDelete(req.params.id);
          res.json("Operating Site Deleted.");
          console.log(req.params.id);
        } catch (err) {
          res.status(400).json("Error: " + err);
        }
      };





  module.exports = {
    getOperatingSites,
    createOperatingSite,
    deleteOperatingSite
  };