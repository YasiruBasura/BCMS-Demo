const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const VersionSchema = new Schema(
    {
        
        sectionName:{
            type: String,
            required: true,
        },
        
        dateApproved: {
            type: String,
            required: true,
        },

        dateLastReviewed:{
            type: String,
            required: true,
        },
        
        description: {
            type: String,
            required: true,
        },

        dateNextReview: {
            type: String,
            required: true,
        },
        
    },
    { 
        timestamps: true 
    }
);

const Version = mongoose.model("Version", VersionSchema);
module.exports = Version;
