require("dotenv").config();

var request = require("request");

var fs = require("fs")

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var Twitter = require("twitter");

var sp1 = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var nodeArgs = process.argv;

var mytweets = "";

var spotify_this_song = "";

var moviethis = "";

var do_what_it_says = "";

var params = {
    screen_name: "@pambootcamp",
    count: 20,

}

function tweetfunction() {

    for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {

            mytweets = mytweets + "+" + nodeArgs[i];

        } else {

            mytweets += nodeArgs[i];

        }
    }

    client.get('statuses/user_timeline', params, function (error, tweets, response) {

        if (!error) {

            for (var i = 0; i < tweets.length; i++) {

                console.log("The date is: " + JSON.stringify(tweets[i].created_at));
                console.log("The tweet says: " + JSON.stringify(tweets[i].text));
            }
        }
    })
}

function spotifyfunction() {
    // // Create a default if nothing is entered to log Mr. Nobody
    // if (nodeArgs === [2]){
    // console.log('this worked');
    // }else{
    for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {

            spotify_this_song = "" + nodeArgs[i];


        } else {
            spotify_this_song += nodeArgs[i];
        }
    }

    sp1.search({
        type: 'track',
        limit: 5,
        query: spotify_this_song,
    },

   function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items);
    });


}


// OMDB

function moviefunction() {
    // Create a default if nothing is entered to log Mr. Nobody
    // if (nodeArgs === [2]){
    // console.log('this worked');
    // }else{
    for (var i = 2; i < nodeArgs.length; i++) 
    

        if (i > 2 && i < nodeArgs.length) {

            moviethis = "" + nodeArgs[i];
            console.log(moviethis);

        } else {

            moviethis += nodeArgs[i];

        }

    var queryUrl = "http://www.omdbapi.com/?t=" + moviethis + "&y=&plot=short&apikey=trilogy";
    

    request(queryUrl, function (error, response, body) {


        if (!error && response.statusCode === 200) {


            console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            console.log("The movie's release year is: " + JSON.parse(body).Year);
            console.log("The movie's on IMDB here: " + JSON.parse(body).Title);
            console.log("The movie's on IMDB here: " + JSON.parse(body).Plot);
            console.log("The movie's on IMDB here: " + JSON.parse(body).Actors);
            console.log("The movie's on IMDB here: " + JSON.parse(body).Language);
            console.log("The movie's on IMDB here: " + JSON.parse(body).Country);


        }

    })
}

function doitfunction(){
    
fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // create function that will spotify the song I want it that way
   do_what_it_says += (spotifyfunction() + data);
  console.log(do_what_it_says);

});

}



switch (nodeArgs[2]) {
    case 'mytweets':
        tweetfunction()
        break;
    case 'spotify_this_song':
        spotifyfunction()
        break;
    case 'moviethis':
        moviefunction()
        break;
    case 'do_what_it_says':
        doitfunction()
        break;   
    default:
        console.log('Not an option');
        break;
}
