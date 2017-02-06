// ====================================================================================================
//
// Cloud Code for RemovePlayerChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var myIdChallenge = Spark.getData().idChallenge;
var myIdPlayer = Spark.getData().idPlayer;

Spark.getChallenge(myIdChallenge).removePlayer(myIdPlayer);


Spark.setScriptData("myIdPlayer", myIdPlayer);