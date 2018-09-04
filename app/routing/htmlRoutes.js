//npm modules   
const PATH = require('path');

module.exports = function (app) {

    //Users looking for the root get home.html
    app.get("/", function (req, res) {
        res.sendFile(PATH.join(__dirname, "../public/home.html"));
    });

    //users looking for the /survey get it
    app.get("/survey", function (req, res) {
        res.sendFile(PATH.join(__dirname, "../public/survey.html"));
    });

    //Instead of 404, we just send users back home
    app.get("/*", function (req, res) {
        res.sendFile(PATH.join(__dirname, "../public/home.html"));
    });
}