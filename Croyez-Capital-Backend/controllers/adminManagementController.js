const _AdminManagementModel = require('../models/adminManagementModel');  //import from admin-model

const jwt = require('jsonwebtoken');  
const bcrypt = require('bcrypt');
const MyKey = process.env.SECRET_KEY;

const AdminRegister= async(req,res) => {                                                        //create AdminRegister 
    try {
        const {firstName, lastName, email, password} = req.body;                               // destruct (FirstName, LastName, Email, Password) from req.body
        const _GetAdminUserLength = await _AdminManagementModel.find();                              // find _AdminManagementModel 
        if (_GetAdminUserLength.length >= 1) {
            res.json({
                message:`Admin Regesteration is Constraint`,
                Status:null,
                Data:false
            })
        } else {
            const _RegisterAdmin = new _AdminManagementModel({
                firstName,
                lastName ,
                email,
                password
                            
            });
            await _RegisterAdmin.save();
            res.json({
                message:`Admin Register Successfully`,
                data:true,
                result:_RegisterAdmin
            })
        }
    } catch (error) {
        res.json({ 
            message: error.message, 
            result: false, 
            data:false 
        });
    }
}

const AdminLogin = async (req,res) =>{
    try {
        _Email = req.body.email;
        _Password = req.body.password;
        let _AdminToAuthenticate = await _AdminManagementModel.findOne({ email: _Email }); //_Email ==> req.body
        if (_AdminToAuthenticate === null) {
            return res.json({
                message: 'Authentication Failed Either Incorrect Password or AdminName',
                result: null,
                data:false
            })
        }

        const _Result = await bcrypt.compare(_Password, _AdminToAuthenticate.password);  // req.body.password (front-end Form) and AdminToAuthenticate.Password <==_AdminManagementModel.password
        if (!_Result) {
            return res.json({
                message: 'Authentication Failed Either Incorrect Password or AdminName',
                data: false,
                result: null
            })
        }                                             // when Password and email matched then go to next step 
        const _Token = jwt.sign(                     // jwt.sign take three arguments first payload/body second secreate-key third expire-time
            {
                _FirstName: _AdminToAuthenticate.firstName,   
                SaltString: _AdminToAuthenticate.saltString // payload/body
            },
            MyKey,                                       // secreate-key 
            { expiresIn: '1h' }                           //  expire-time
        )

        return res.json({
            message: 'Authentication SuccessFull',
            data: true,
            token: _Token,
            result: _AdminToAuthenticate
        })
   
        

    } catch (error) {
        res.json({
            message: error.message,
            data: false,
            result: null
        })
    }
}

module.exports={AdminRegister,AdminLogin}