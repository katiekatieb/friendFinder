var path = require("path");

var friends = [
  {
    "name": "Tom",
    "photo": "https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg",
    "score": ["5", "1", "4", "4", "5", "1"]
  }
]

module.exports = function(app) {

  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);
  });

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

};

