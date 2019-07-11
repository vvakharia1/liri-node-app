// setting any environment variables with the dotenv package
require("dotenv").config();
// Node Spotify API
var Spotify = require("node-spotify-api");
// code to import keys.js file 
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// Grab and define command line arguments
var input = process.argv;
var search = process.argv[2];
console.log(input);
console.log(search);

// conditionals for user search input

spotify.search({ type: "track", query: "All the Small Things" }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
   
  console.log(data.tracks.items); 
  });
