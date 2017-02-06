// ====================================================================================================
//
// Cloud Code for RemoveChallengerChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var myIdChallenge = Spark.getData().idChallenge;
var selfPlayerId = Spark.getPlayer().getPlayerId();

Spark.getChallenge(myIdChallenge).removePlayer(selfPlayerId);

Spark.setScriptData("myIdPlayer", myIdPlayer);