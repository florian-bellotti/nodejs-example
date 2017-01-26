// indique que mon fichier app.js a besoin du module express
var express = require('express');

// je récupère la fonction Router d'express
var router = express.Router();


// fonction permettant de retourner "hello world"
function getHelloWorld(req, res){
	res.status(200).send('Hello World!');
}

// fonction permettant de retourner "other message"
function getOtherMessage(req, res){
	res.status(200).send('Other message!');
}

// définition des différentes routes
// ici "/" implémente la function returnHelloWorld
router.get('/', getHelloWorld);
router.get('/otherMessage', getOtherMessage);

// export des différentes routes
module.exports = router;