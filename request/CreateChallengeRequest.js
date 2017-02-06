// ====================================================================================================
//
// Cloud Code for CreateChallengeRequest, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================


var maxPlayers = Spark.getData().maxPlayers;
 
//set it to scriptData
Spark.setScriptData("maxPlayers", maxPlayers);