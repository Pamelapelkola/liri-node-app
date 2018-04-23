# liri-node-app
Liri
Liri is an application that retrieves tweets, spotifies song tracks and searches for movies.  The app then logs the data retrieved in Node.JS. 
The application has a text file that can be used to run text in the spotify function.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

Prerequisites
In order to run the program you will need to retrieve and API KEY and SECRET for twitter, and spotify and save them in a key.js file.
The file should look like this:
console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

You will need to create an ENV file with the following information:
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret



Install
node modules
DS_store
npm i dotenv

1.To search Twitter

access bash terminal

node liri.js mytweets

(This will load last 20 tweets time stamped with date and the text of the tweet.)

2. To search Spotify

access bash terminal

node liri.js spotify_this_song song title

(This will load 5 tracks with that song title)

3. To search OMDB movies

access bash terminal

node liri.js moviethis movie title

(This will load the movie along with the rating, year, title, plot, actors, language and country)

4. To search text file

access bash terminal

node liri.js do_what_it_says 

(This will load the song name in the text file and run it through spotify function giving the 5 tracks with that song title)

Example

$ node liri.js moviethis incredibles

The movie's rating is: 8.0
The movie's release year is: 2004
The movie's title is: The Incredibles
The movie's plot is: A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.
The movie's actors are : Craig T. Nelson, Holly Hunter, Samuel L. Jackson, Jason Lee
The movie's language is : English, French
The movie's country is : USA

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Javascript-Jquery- Node.js

Authors
Pamela Pelkola
contact with questions https://github.com/Pamelapelkola

Acknowledgments
University of Minnesota Coding Bootcamp through Trilogy
