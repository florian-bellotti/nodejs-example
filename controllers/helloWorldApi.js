// indique que mon fichier app.js a besoin du module express
var express = require('express');

// récupération du fichier commons.js
var common = require('./../commons');

// on récupère maintenant les variables
config = common.config();

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

// fonction permettant de retourner "other message"
function renderHelloWorld(req, res){
	res.render('helloWorld', { title: 'helloWorld' });
}

// fonction permettant de retourner l'environnement 
function getEnv(req, res){
	res.status(200).send("Mon environnement est l'environnemt de " + config.env);
}

// définition des différentes routes
// ici "/" implémente la function returnHelloWorld
router.get('/', getHelloWorld);
router.get('/env', getEnv);
router.get('/otherMessage', getOtherMessage);
router.get('/helloWorld', renderHelloWorld);

// export des différentes routes
module.exports = router;