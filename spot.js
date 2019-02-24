require("dotenv").config();
var keys = require ('./keys')
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var firstPram = process.argv[2];
var secondPram = process.argv[3]


if (firstPram == '') {
    songName = "The Sign Ace of Base";
} else {
    songName = firstPram;
}

spotify
  .search({ type: 'track', query: firstPram }, function(err, response) {
      if(err) {
          console.log('error occured', err);
          return;
      } else {
        
    console.log('Song Name: ', response.tracks.items[0].name);
    console.log('Artist: ', response.tracks.items[0].artists[0].name);
    console.log('Album Name: ', response.tracks.items[0].album.name);
    console.log('Preview URL: ', response.tracks.items[0].preview_url);
 
      }
  })
  
  

 