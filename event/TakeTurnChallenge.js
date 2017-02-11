// ====================================================================================================
//
// Cloud Code for TakeTurnChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var challengeId = Spark.getData().challengeId;
var playerId = Spark.getData().playerId;
var cellIndex = Spark.getData().cellIndex;

Spark.getChallenge(challengeId).takeTurn(playerId);
Spark.setScriptData("cellIndex", cellIndex);