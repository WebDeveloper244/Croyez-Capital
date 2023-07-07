const PortfolioModel = require("../models/portfolioManagementModel");
const fs = require("fs");

const portfolioData = async (req, res) => {

    try {
        const {
            titleName,
            shortDescription,
            addYear,
            linkedIn,
            twitter,
            website,
            description
        } = req.body;
        const docToCreate = await PortfolioModel({
            titleName,
            shortDescription,
            addYear,
            description,
            website,
            twitter,
            linkedIn,
            imageDetails: {
                imageUrl: `assets/PortFolio-Images/${titleName}/${req.file.filename}`,
                imageName: req.file.originalname,
                imageMimeType: req.file.mimetype,
            }
        })
        const docToSave = await docToCreate.save()
        res.json({
            data:true,
            message: `Data save successfuly`,
            result: docToSave
        })
    } catch (error) {
        res.json({
            data:false,
            message: error,
            result: null
        })
    }
}

const getPortFolioData = async (req, res) => {
    try {

        const DoctToGet = await PortfolioModel.find()
        res.json({
            message: 'Document has found',
            data: true,
            result: DoctToGet
        })
    } catch (error) {
        res.json({
            message: error.message,
            result: null,
            data: false
        })
    }
}

const getPortFolioDataById = async (req, res) => {
    try {
        const ID = req.params._id;
        const docToFind = await PortfolioModel.findOne({ _id: ID })
        res.json({
            message: "Data Fond",
            data: true,
            result: docToFind
        })
    }
    catch (error) {
        res.json({
            message: error.message,
            result: null,
            data: false
        })
    }
}

const deletePortFolioData = async (req, res) => {
    try {
        const _id = req.params._id;
        const getDoc = await PortfolioModel.findById({ _id: _id }).lean();
        const { imageUrl } = getDoc.imageDetails;
        const deleteTheDoc = await PortfolioModel.deleteOne({ _id: _id })
        fs.unlinkSync(`${imageUrl}`);
        fs.rmdirSync(`./assets/PortFolio-Images/${getDoc.titleName}`)
        res.json({
            message: 'data deleted successfuly',
            data: true,
            result: deleteTheDoc
        })
    } catch (error) {
        res.json({
            message: error.message,
            result: null,
            data: false
        })
    }
}

const updatePortFolioDataById = async (req, res) => {
    try {
        const ID = req.body._id;
        const PayLoad = req.body;

        const docToUpDate = await PortfolioModel.updateOne(
            { _id: ID },
            PayLoad
        )
        res.json({
            message: `Document has been Updated`,
            result: docToUpDate,
            data: true
        })
    } catch (error) {
        res.json({
            message: error,
            result: null,
            data: false
        })
    }
}
module.exports = {
    portfolioData,
    getPortFolioData,
    getPortFolioDataById,
    updatePortFolioDataById,
    deletePortFolioData
}