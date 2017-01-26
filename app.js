	// indique que mon fichier app.js a besoin du module express
	var express = require('express')

	// démarrage de l'application express
	var app = express();

	// définition de la route "/" 
	// cette route exécute une fonction retournant "hello world"
	app.get('/', function (req, res) {
	  res.send('Hello World!')
	})

	// l'application expresse est maintenant dépoyée sur le port 3000
	app.listen(3000, function () {
		// ce log permet d'indiquer le moment précis où l'application est déployée
	  console.log('Example app listening on port 3000!')
	})