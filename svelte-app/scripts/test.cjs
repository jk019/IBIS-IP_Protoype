const bonjour = require('bonjour')(); //Diese Zeile importiert das bonjour-Modul und erstellt eine neue Instanz des Bonjour-Service. Die Klammern nach require('bonjour') bedeuten, dass sofort nach dem Importieren eine Instanz des Moduls erstellt wird.

// Entdecken Sie alle Dienste im Netzwerk
bonjour.find({}, function (service) {
  console.log('Found an HTTP server:', service);
});
