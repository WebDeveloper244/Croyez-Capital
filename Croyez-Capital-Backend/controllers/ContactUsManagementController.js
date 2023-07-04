const ContactUsModel = require('../models/ContactUsManagementModel');


const CreateContactUs = async (req, res) => {
    try {
        const { 
            firstName,
            lastName,
            subject,
            phoneNumber,
            email,
            description,
        } = req.body;

        const DocToCreate = new ContactUsModel({
            firstName,
            lastName,
            subject,
            phoneNumber,
            email,
            description,
        });

        const DocToSave = await DocToCreate.save();

        res.json({
            Message:'Contact Has Created Successfuly',
            Data:true,
            Result:DocToSave
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const GetAllContactUs = async (req, res) => {
    try {
        const GetAllDocs = await ContactUsModel.find();
        res.json({
            Message:'Docs Fond Successfuly Successfuly',
            Data:true,
            Result:GetAllDocs
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}



module.exports={
    CreateContactUs,
    GetAllContactUs
}