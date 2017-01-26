// récupération du fichier avec les variables
var env = require('./env.json');

exports.config = function() {
	// on récupère la variable d'environnement "NODE_ENV"
	// si elle n'est pas définit, l'environnement est "development"
  var node_env = process.env.NODE_ENV || 'development';

  // on retourne les variables
  return env[node_env];
};