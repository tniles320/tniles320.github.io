// Requiring necessary npm packages
const express = require("express");

// built into node.js 
const path  = require('path')

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static( path.resolve( __dirname + '/public')));

// Requiring our routes
require("./routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});
