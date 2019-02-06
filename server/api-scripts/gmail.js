let nodemailer = require('nodemailer');

function sendEmail(EMAIL, PASS, TO, NAME, MESSAGE) {
    return new Promise((resolve, reject) => {

        let html = '<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
            '<meta charset="utf-8"/>' +
            '<meta http-equiv="X-UA-Compatible">' +
            '<meta name="viewport" content="width=device-width, initial-scale=1">' +
            '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">' +
            '</head>' +
            '<body style="background: rgb(33, 28, 63); width: 100vw; height: 100vh;">' +
            '<div style="text - align: left; height: 100 %; color: white; font - size: 18px;">' +
            '<h1>Hello ' + NAME + '!</h1>' +
            '<h1>I got your message and will be in contact shortly!</h1>' +
            '<h1>Sincerely,</h1>' +
            '<h1>Rafael Piloto</h1>' +
            '<br/>' +
            '<h1 style="display:inline; color:white; font-size: 32px; margin-right: 20px;"><a href="https://github.com/RafaelPiloto10" style="color: inherit; text-decoration:none; font-size: 32px;">' +
            '<i class="fab fa-github-square h1"></i>' +
            '</a></h1>' +
            '<h1 style="display:inline; color:white; font-size: 32px; margin-right: 20px;"><a href="https://www.instagram.com/rafael.1010/" style="color: inherit; text-decoration:none; font-size: 32px;">' +
            '<i class="fab fa-instagram h1"></i>' +
            '</a></h1>' +
            '<h1 style="display:inline; color:white; font-size: 32px; margin-right: 20px;"><a href="https://rafaelpiloto10.now.sh/" style="color: inherit; text-decoration:none; font-size: 32px;">' +
            '<i class="fas fa-desktop h1"></i>' +
            '</a></h1>' +
            '<br/><br/> <br/> <br/> <br/> <br/> <br/></div></body></html>';

        let message = MESSAGE || html;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL.toString(),
                pass: PASS
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
                html: message
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