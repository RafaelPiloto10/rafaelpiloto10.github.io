const express = require('express');
const app = express();
const path = require('path');
const gmail = require("./api-scripts/gmail");

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + "/../client/public/")));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send(path.join(__dirname + "/../client/public/"));
});

app.post("/", (req, res) => {
    console.log(req.body);
    gmail.sendEmail(process.env.EMAIL.toString(), process.env.PASS.toString(), process.env.PEMAIL.toString(), undefined, JSON.stringify(req.body))
        .then(x => {
            res.status(200);
            res.json({
                message: "200"
            });
            gmail.sendEmail(process.env.EMAIL.toString(), process.env.PASS.toString(), req.body.email, req.body.name, undefined);
        }).catch(x => {
            res.status(500);
            res.json({
                error: "Could not send email"
            });
            gmail.sendEmail(process.env.EMAIL.toString(), process.env.PASS.toString(), req.body.email, req.body.name, undefined);
        });
});

app.get("*", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/../client/public/404/"));
});


app.listen(port, () => {
    console.log("Server is up and running");
});