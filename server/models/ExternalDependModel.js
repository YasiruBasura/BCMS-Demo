const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const ExternalDependSchema = new Schema(
    {
        sectionName:{
            type: String,
            required: true,
        },
        
        criticalFunction: {
            type: String,
            required: true,
        },

        organization:{
            type: String,
            required: true,
        },

        dependancy:{
            type: String,
            required: true,
        },

        primaryContact:{
            type: String,
            required: true,
        },

        secondaryContact: {
            type: String,
            required: true,
        },

        justification:{
            type: String,
            required: true,
        },
        
    },
    { 
        timestamps: true 
    }
);

const ExternalDepend = mongoose.model("ExternalDependancy", ExternalDependSchema);
module.exports = ExternalDepend;
