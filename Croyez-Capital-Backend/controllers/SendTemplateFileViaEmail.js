const nodemailer = require("nodemailer");

const SendTemplateFile = async (req, res) => {
    try {
        const { Email } = req.body;
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // create reusable transporter object using the default SMTP transport
        const _SmtpService = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'itismyworkspace@gmail.com', // generated ethereal user
            pass: 'mitlndcbonnoffev', // generated ethereal password
          },
        });
        //Email Object
    
        const _EmailObject = {
          from: 'itismyworkspace@gmail.com', // sender address
          to: Email, // list of receivers
          subject: "Skillstitute", // Subject linea
          
        };
    
        // Send Email 
    
        const _SendEmail = await _SmtpService.sendMail(_EmailObject);
        res.json( {
          Message: `Important Information Has Sent Successfully from ${_SendEmail.envelope.from} To ${_SendEmail.envelope.to} Please Check Your Email!`,
          Data: _SendEmail.messageId,
          Result: _SendEmail.response,
        });
      } catch (error) {
        res.json( {
          Message: error.message,
          Data: false,
          Result: null
        })
    
      }
}

module.exports={
    SendTemplateFile
}