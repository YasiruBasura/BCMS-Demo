const mongoose = require("mongoose");  
const Schema = mongoose.Schema;

const PeaksnDeadlineSchema = new Schema(
    {
        
        sectionName:{
            type: String,
            required: true,
        },
        
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },

        timeoftheday: {
            type: String,
            required: true,
        },

        dayoftheweek:{
            type: String,
            required: true,
        },

        businessday: {
            type: String,
            required: true,
        },

        calenderday: {
            type: String,
            required: true,
        },
        
        month: {
            type: String,
            required: true,
        },
        
    },
    { 
        timestamps: true 
    }
);

const PeaksnDeadline = mongoose.model("PeaksnDeadline", PeaksnDeadlineSchema);
module.exports = PeaksnDeadline;

