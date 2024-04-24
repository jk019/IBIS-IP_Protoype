const bonjour = require('bonjour')();

// Funktion, um alle Dienste im Netzwerk zu entdecken und zurückzugeben
function discoverServices() {
  return new Promise((resolve, reject) => {
    let services = [];
    // Entdecken Sie alle Dienste im Netzwerk
    const browser = bonjour.find({});

    // Event-Handler, wenn ein Dienst gefunden wird
    browser.on('up', service => {
      console.log('Service found:', service);
      services.push(service);
    });

    // Event-Handler, wenn die Suche abgeschlossen ist
    browser.on('end', () => {
      resolve(services);
    });

    // Fehlerbehandlung
    browser.on('error', (err) => {
      reject(err);
    });
  });
}

// Die Funktion verwenden
discoverServices()
  .then(services => {
    console.log('All discovered services:', services);
  })
  .catch(err => {
    console.error('Error discovering services:', err);
  });