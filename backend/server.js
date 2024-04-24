// Imports
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb"); // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const config = require("./config");
const bonjour = require('bonjour')();
/* const axios = require('axios'); */

// Set up App
const app = express();
app.use(cors()); // Allow all cross-origing requests. More information: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.static("public")); // Host all static files in the folder /public
app.use(bodyParser.json()); // Support json encoded bodies
const port = process.env.PORT || "3001"; // Use the PORT variable if set (e.g., when deploying to Heroku)
app.set("port", port);

const server = http.createServer(app);

// Create the client and connect to the database
let database;
const client = new MongoClient(config.mongodb_connection_string);
client.connect((error, db) => {
  if (error || !db) {
    console.log("Could not connect to MongoDB:");
    console.log(error.message);
  } else {
    database = db.db("Moebelhaus");
    console.log("Successfully connected to MongoDB.");
  }
});

//##################################################################################################
// ENDPOINTS
//##################################################################################################

//--------------------------------------------------------------------------------------------------
// Welcome message
//--------------------------------------------------------------------------------------------------
app.get("/api", async (req, res) => {
  res.send("Welcome to the Services Database API");
});




app.get("/api/services", async (req, res) => {
  try {
    // Initialize an empty array to collect services
    const services = [];

    // Find services using bonjour
    bonjour.find({}, function (service) {
      console.log('Found a service:', service);
      services.push(service);
    });

    // Since bonjour.find() is asynchronous and does not return a promise,
    // use a timeout or another method to delay the response until data is collected
    setTimeout(() => {
      res.send(services);
    }, 1000); // Adjust the timeout based on expected discovery time

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});





//--------------------------------------------------------------------------------------------------
// Start the server
//--------------------------------------------------------------------------------------------------
server.listen(port, () => console.log("app listening on port " + port));
