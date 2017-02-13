// ====================================================================================================
//
// Cloud Code for TakeTurnChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var challengeId = Spark.getData().challengeId;
var cellIndex = Spark.getData().cellIndex;
var userId = Spark.getData().userId;

var challenge = Spark.getChallenge(challengeId).takeTurn(userId);