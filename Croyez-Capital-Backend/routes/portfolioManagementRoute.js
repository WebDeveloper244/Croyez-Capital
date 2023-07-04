const express = require("express");
const Router = express.Router();

const { 
    portfolioData,
    getPortFolioData,
    getPortFolioDataById,
    updatePortFolioDataById,
    deletePortFolioData
} = require("../controllers/portfolioManagementController")
// const {middleware} = require("../middleware/m-first-middleware")
const {UploadProductImage} = require("../middleware/portfolioManagementMiddleWare")

Router.post("/portfolioData",UploadProductImage.single("image"),portfolioData)
Router.get("/getPortFolioData",getPortFolioData)
Router.get(`/getPortFolioDataById/:_id`,getPortFolioDataById)
Router.delete("/deletePortFolioData/:_id",deletePortFolioData)
Router.post("/updatePortFolioDataById",updatePortFolioDataById)

module.exports=Router