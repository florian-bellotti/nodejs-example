// indique que mon fichier app.js a besoin du module express
var express = require('express')

	// importe mon fichier "/controllers/helloWorldApi.js"
var helloWorldRouter = require('./controllers/helloWorldApi');

// démarrage de l'application express
var app = express();


// définition des routes
// ici, j'indique que je veux que mes routes du fichiers helloWordApi
// soient implémentées dans "/helloWorld"
app.use('/helloWorld', helloWorldRouter);


// l'application expresse est maintenant dépoyée sur le port 3000
app.listen(3000, function () {
	// ce log permet d'indiquer le moment précis où l'application est déployée
  console.log('Example app listening on port 3000!')
})