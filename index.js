// const creds = require('../config');
// import config from 'config';
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

var transport = {
	host: process.env.REACT_APP_TRANSPORT_HOST, // Don’t forget to replace with the SMTP host of your provider
	port: process.env.REACT_APP_TRANSPORT_PORT,
	auth: {
		user: process.env.REACT_APP_MAIL_USER,
		pass: process.env.REACT_APP_MAIL_PASS,
	},
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});

router.post('/send', (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
	var subject = req.body.subject;
	var message = req.body.message;
	var content = `name: ${name} \n email: ${email} \n  subject:${subject} \n message: ${message} `;
	var mail = {
		from: name,
		to: process.env.REACT_APP_MY_EMAIL, // Change to email address that you want to receive messages on
		subject: subject,
		text: content,
	};
	console.log(`really got here`);
	console.log(process.env.REACT_APP_MAIL_USER);
	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});
		}
	});
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);
