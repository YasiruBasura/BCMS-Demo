const PeaksnDeadline = require("../models/PeaksnDeadlineModel");


const getPeaksnDeadlines = async (req, res) => 
    {
        const {sectionName} = req.query;
        try {
            const query = sectionName ? { sectionName } : {};
            const peaksnDeadlines = await PeaksnDeadline.find(query);
            res.status(200).json(peaksnDeadlines);
            console.log(req.method);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

const createPeaksnDeadline = async (req, res) => 
    {
        try{
            const peaksnDeadline = await PeaksnDeadline.create(req.body);
            res.status(200).json(peaksnDeadline);
            console.log(req.method);
        } catch(err){
            res.status(400).json({ message: err });
        }
    }

    const deletePeaksnDeadline = async (req, res) => {
        try {
          await PeaksnDeadline.findByIdAndDelete(req.params.id);
          res.json("Data row Deleted.");
          console.log(req.params.id);
        } catch (err) {
          res.status(400).json("Error: " + err);
        }
      };





  module.exports = {
    getPeaksnDeadlines,
    createPeaksnDeadline,
    deletePeaksnDeadline
  };