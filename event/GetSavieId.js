// ====================================================================================================
//
// Cloud Code for GetSavieId, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var idPlayer = Spark.getData().idPlayer;
var myPlayer = Spark.loadPlayer(idPlayer);

var savieID = myPlayer.getScriptData("SAVIE");

Spark.setScriptData("SAVIE", savieID);