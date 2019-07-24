let nodemailer = require('nodemailer');

function sendEmail(EMAIL, PASS, TO, NAME, MESSAGE) {
    return new Promise((resolve, reject) => {

        let m = `Hello ${NAME},\nThanks for reaching out to me! I will get back to you as soon as possible!\nSincerely,\nRafael Piloto`
        let message = MESSAGE || m;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL.toString(),
                pass: PASS.toString()
            }
        });

        let mailOptions = (MESSAGE) ? {
            from: EMAIL.toString(),
            to: TO.toString(),
            subject: "Form Submission",
            text: message
        } : {
            from: EMAIL.toString(),
            to: TO.toString(),
            subject: "Form Submission",
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            transporter.close();
            if (error) {
                console.log("Could not send email to: " + TO + "\n" + error);
                reject();
            } else {
                console.log('Email sent to ' + TO + '- Log: ' + info.response);
                resolve();
            }
        });
    });
}

module.exports = {
    sendEmail: sendEmail
}