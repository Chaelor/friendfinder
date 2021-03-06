//node modules
const express = require('express');
const bodyParser = require('body-parser');
const PATH = require('path');

//Runs express and stores it into an "APP" variable
const APP = express();
const PORT = process.env.PORT || 3300 || 8888;

//Setup the Express APP to handle data parsing
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());

//For the css files
APP.use(express.static(__dirname + '/app/public'));

//this handles the routing for both the api and the html
require('./app/routing/apiRoutes')(APP);
require('./app/routing/htmlRoutes')(APP);

//App is listenining
APP.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});


