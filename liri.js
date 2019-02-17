

require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify)


// liri.js will accept on of these commands 
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says