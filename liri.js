
require("dotenv").config();
var fs = require('fs')

var keys = require('./keys')
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');

var spotify = new Spotify(keys.spotify);

var firstPram = process.argv[2];
var secondPram = process.argv[3]


// liri.js will accept on of these commands 
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

// console log if no perams are entered
if (firstPram && secondPram === ''){

  console.log(`liri.js will accept one of these commands

concert-this
spotify-this-song
movie-this
do-what-it-says

If second pram is more than one word use "" 
`)
}

  

  // do what i say
  if (firstPram === 'do-what-it-says') {
    fs.readFile('random.txt', 'utf8', function (err, data) {
      if (err) {
        console.log(err);
      }
      // consoles text from random text file
      console.log(data);
    })
  }

  // movie- this 
  if (firstPram === 'movie-this') {
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get(`http://www.omdbapi.com/?t=${secondPram}&y=&plot=short&apikey=trilogy`).then(
      function (response) {
        console.log("The movie title is: " + response.data.Title);
        console.log("The movie was releases in: " + response.data.Year);
        console.log("The movie's rating is: " + response.data.imdbRating);
        console.log("The movie's Rotten tomateos Rating: " + response.data.Ratings[1]);
        console.log("The movie was produced in: " + response.data.Country);
        console.log("The movie language is: " + response.data.Language);
        console.log("The movie's plot is: " + response.data.Plot);
        console.log("The movie's Actors are: " + response.data.Actors);
      }
    );
  }

  // concert this
  if (firstPram === 'concert-this') {
    var queryURL = "https://rest.bandsintown.com/artists/" + secondPram + "/events?app_id=codingbootcamp";
    console.log(queryURL)
    axios.get(queryURL).then(
      function (response) {
        // loop through responce array
        for (var i = 0; i < response.data.length; i++) {
          // format date responce
          var date = response.data[i].datetime;
          var concert = moment(date).format('lll');
          //console.log(concert info)
          console.log(response.data[i].venue.name, '/', response.data[i].venue.city, '/', concert);
        }
      }
    );
  }

  //  spotify-this-song
  if (firstPram === 'spotify-this-song') {

    if (secondPram == '') {
      // default song
      songName = "The Sign Ace of Base";
    } else {
      // put secondperam into song
      songName = secondPram;
     }

    spotify.search({ type: 'track', query: secondPram }, function (err, response) {
      if (err) {
        console.log('error occured', err);
        return;
      } else {
        // logs responce to console
        console.log('Song Name: ', response.tracks.items[0].name);
        console.log('Artist: ', response.tracks.items[0].artists[0].name);
        console.log('Album Name: ', response.tracks.items[0].album.name);
        console.log('Preview URL: ', response.tracks.items[0].preview_url);
      }
    });
  }
  
  
