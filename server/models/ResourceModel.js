const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const ResourceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        altname:{
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
        
    },
    { 
        timestamps: true 
    }
);

const Resource = mongoose.model("Resource", ResourceSchema);
module.exports = Resource;
