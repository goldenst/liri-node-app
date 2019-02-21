
require("dotenv").config();
//var keys = require ('./keys');

var axios = require('axios');
var spotify = require('node-spotify-api');
var moment = require('moment');
var dotenv = require('dotenv');

var firstPram = process.argv[2];
var secondPram = process.argv[3]
//var spotify = new Spotify(keys.spotify)

// liri.js will accept on of these commands 
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

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
      //console.log()
      console.log("The movie's Actors are: " + response.data.Actors);
      //console.log(response.data);
    }
  );
}

// concert this 
if (firstPram === 'concert-this') {
  var queryURL = "https://rest.bandsintown.com/artists/" + secondPram + "/events?app_id=codingbootcamp";
  console.log(queryURL)
  axios.get(queryURL).then(
    function (response) {

      for (var i = 0; i<response.data.length; i++){
        //console.log(response.data[i].venue)
        console.log(response.data[i].venue.name,'-', response.data[i].venue.city, '-',response.data[i].datetime  );
        var date = moment(response.data[i].datetime, "MM-DD-YY")
        console.log(date)

      }


     //console.log(response.data[0]);
      //console.log(artist)
    }
  );
}


//  spotify-this-song
 
  // var spotify = new Spotify({
  //   id:"1c6e98e12bed49f7924cb491a9b49bc2" ,
  //   secret: "337081dd68cc4c818171e940cee916b7"
  // });
   
 
  // spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  //   if (err) {
  //     return console.log('Error occurred: ' + err);
  //   }
   
  // console.log(data); 
  // });
// do what it says

