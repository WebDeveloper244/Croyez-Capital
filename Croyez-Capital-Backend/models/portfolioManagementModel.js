const mongoose = require("mongoose")

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();


const portfolioSchema = new mongoose.Schema({
    titleName: { type: String, required: true },
    shortDescription: { type: String, required: true },
    addYear: { type: Number, required: true },
    website: { type: String},
    twitter: { type: String},
    linkedIn: { type: String},
    description: { type: String, required: true },
    imageDetails: {
        imageName:{type:String},
        imageUrl:{type:String},
        imageMimeType:{type:String}
    },
    CreateDate: {
        type: String,
        default: `${day}-${month}-${year}-${time}`
    }
}, { timestamps: true })

module.exports = mongoose.model("PortFolioCollection", portfolioSchema)