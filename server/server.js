const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("../client/public/"));

app.get("/", (req, res) => {
    res.send("../client/public/");
});

app.listen(port, () => {
    console.log("Server is up and running");
});