// Imports
const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const bonjour = require('bonjour')();

// Set up App
const app = express();
app.use(cors()); // Allow all cross-origing requests. More information: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.static("public")); // Host all static files in the folder /public
app.use(bodyParser.json()); // Support json encoded bodies
const port = process.env.PORT || "3001"; // Set Port
app.set("port", port);

const server = http.createServer(app);



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

    // Finding services using bonjour
    bonjour.find({}, function (service) {
      console.log('Found a service:', service);
      services.push(service);
    });

    // Since bonjour.find() is asynchronous and does not return a promise,
    // I use a timeout to delay the response until data is collected
    setTimeout(() => {
      res.send(services);
    }, 10000); // Adjust the timeout based on expected discovery time

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});





//--------------------------------------------------------------------------------------------------
// Start the server
//--------------------------------------------------------------------------------------------------
server.listen(port, () => console.log("app listening on port " + port));
