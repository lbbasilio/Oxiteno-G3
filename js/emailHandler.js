const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'stenio.rapchan@gmail.com',
        pass: '########'
    }
});

var mailOptions = {
    from: 'Chamados Oxiteno <chamados@oxiteno.com>',
    to: 'steniodr@hotmail.com',
    subject: 'Teste',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});