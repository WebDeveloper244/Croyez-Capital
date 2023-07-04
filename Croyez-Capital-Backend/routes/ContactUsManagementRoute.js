//Depnedemcies and Initialization
const express = require('express');
const Router = express.Router();
//Depnedemcies and Initialization


//Start Block Accessing The Library Files And Routes
const { 
    CreateContactUs,
    GetAllContactUs,
 } = require('../controllers/ContactUsManagementController');


//Start Block For Accessing The Controlers
Router.post('/CreateContactUs',CreateContactUs);
Router.get('/GetAllContactUs',GetAllContactUs);
//End Block For Accessing The Controlers


module.exports = Router;