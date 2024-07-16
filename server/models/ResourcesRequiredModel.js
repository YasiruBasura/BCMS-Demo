const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const ResourcesRequiredSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        altname:{
            type: String,
            required: true,
        },

        id:{
            type: String,
            required: true,
        },
       
        rto: {
            type: String,
            required: true,
        },

        justification:{
            type: String,
            required: true,
        },

        rpo: {
            type: String,
            required: true,
        },

        manualWorkaround:{
            type: String,
            required: true,
        },

        operationalduration:{
            type: String,
            required: true,
        },
        
    },
    { 
        timestamps: true 
    }
);

const ResourcesRequired = mongoose.model("ResourceRequired", ResourcesRequiredSchema);
module.exports = ResourcesRequired;
