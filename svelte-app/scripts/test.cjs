const bonjour = require('bonjour')();

// Entdecken Sie alle Dienste im Netzwerk
bonjour.find({}, function (service) {
  console.log('Found an HTTP server:', service);
});
