const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const CriticalFunctionSchema = new Schema(
    {

        sectionName:{
            type: String,
            required: true,
        },

        
        function: {
            type: String,
            required: true,
        },

        description:{
            type: String,
            required: true,
        },
        
        criticality: {
            type: String,
            required: true,
        },

        rto: {
            type: String,
            required: true,
        },
        rpo: {
            type: String,
            required: true,
        },
        mtpd: {
            type: String,
            required: true,
        },
        
    },
    { 
        timestamps: true 
    }
);

const CriticalFunction = mongoose.model("CriticalFunction", CriticalFunctionSchema);
module.exports = CriticalFunction;