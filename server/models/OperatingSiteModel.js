const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const OperatingSiteSchema = new Schema(
    {
        location: {
            type: String,
            required: true,
        },

        type:{
            type: String,
            required: true,
        },
        
        address: {
            type: String,
            required: true,
        },
        
    },
    { 
        timestamps: true 
    }
);

const OperatingSite = mongoose.model("OperatingSite", OperatingSiteSchema);
module.exports = OperatingSite;

