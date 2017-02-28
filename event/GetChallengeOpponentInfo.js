// ====================================================================================================
//
// Cloud Code for GetChallengeOpponentInfo, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var userId = Spark.getData().userId;
var player = Spark.loadPlayer(userId);
var isOnline = player.isOnline();

Spark.setScriptData("isOnline", isOnline);