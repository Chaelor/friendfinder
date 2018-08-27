//node modules
const express = require('express');
const bodyParser = require('body-parser');
const PATH = require('path');

//Runs express and stores it into an "APP" variable
const APP = express();
const PORT = process.env.PORT || 3300;

//Setup the Express APP to handle data parsing
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());

APP.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});

APP.get("/", function (req, res) {
    res.sendFile(PATH.join("/app/public/", "home.html"));
});
