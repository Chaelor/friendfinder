//npm modules
const PATH = require('path');
const friends = require('../data/friends');

module.exports = function (app) {

    //Give the user back data in the form of json for api calls.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Post data to the api
    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var userScore = userInput.scores;
        var matchName = "";
        var matchPhoto = "";

        for (i in friends){
            for (j in userScore) {
                var difference = Math.abs(friends[i].scores[j] - userScore[j]);
            }
            if (difference) {
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
            };
        };

        friends.push(userInput);
        res.json({
            status: "ok",
            matchName: matchName,
            matchPhoto: matchPhoto
        });
    });
}