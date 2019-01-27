This application can return information on a song, movie or upcoming concert depending on the parameters given

Commands

"spotify-this-song": Returns information on the title on a song through the spotify database. If you would like more than one song, add a number after the command.

Example: node.js spotify-this-song; Sleeping on the blacktop

"movie-this": Returns information on the title of a movie through OMDB

Example: node.js movie-this; Finding Dory

"concert-this": Returns information on a musical artist for an upcoming concert through the Bands in Town database

Example: node.js concert-this; Tech N9ne

"do-what-it-says": Reads random text and runs liri based on whatever is inside the text file if it is a valid command

If random text contains "movie-this, Gladiator" Then the application will run the OMDB search for Gladiator.