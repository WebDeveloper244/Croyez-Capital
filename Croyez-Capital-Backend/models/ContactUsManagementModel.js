//Dependencies
const mongoose = require('mongoose');

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const time = today.getTime();

//Start Block Schema Creating
const ContactUsSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    subject: { type: String },
    phoneNumber: { type: Number },
    email: { type: String },
    description: { type: String },
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
})


//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('ContactUsCollection', ContactUsSchema);