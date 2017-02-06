// ====================================================================================================
//
// Cloud Code for CreateChallengeResponse, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//get the maxPlayer number from the scriptData from the request
var maxPlayers = Spark.getScriptData("maxPlayers");
 
//get the challengeInstanceID from the response
var challengeInstanceId = Spark.getData().challengeInstanceId;
 
//use the challengeinstanceID to set the maxPlayers to the challenges scriptData
var scriptData = Spark.getChallenge(challengeInstanceId).setScriptData("maxPlayers", maxPlayers);