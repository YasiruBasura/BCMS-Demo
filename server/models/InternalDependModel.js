const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const InternalDependSchema = new Schema(
    {
        criticalFunction: {
            type: String,
            required: true,
        },

        section:{
            type: String,
            required: true,
        },

        dependancy:{
            type: String,
            required: true,
        },
       
        downUpstream: {
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

const InternalDepend = mongoose.model("InternalDependancy", InternalDependSchema);
module.exports = InternalDepend;
