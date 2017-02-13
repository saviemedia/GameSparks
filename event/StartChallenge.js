// ====================================================================================================
//
// Cloud Code for StartChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var idChallenge = Spark.getData().idChallenge;
var challenge = Spark.getChallenge(idChallenge);

challenge.startChallenge();