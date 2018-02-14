// ====================================================================================================
//
// Cloud Code for IsChallengerOnline, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var idPlayer = Spark.getData().idPlayer;
var myPlayer = Spark.loadPlayer(idPlayer);
var isOnline = myPlayer.isOnline();
var isBusy = myPlayer.getScriptData("busy");

Spark.setScriptData("isOnline", isOnline);
Spark.setScriptData("isBusy", isBusy);