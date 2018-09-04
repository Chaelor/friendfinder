//npm modules   
const PATH = require('path');

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(PATH.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(PATH.join(__dirname, "../public/survey.html"));
});
}