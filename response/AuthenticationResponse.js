// ====================================================================================================
//
// Cloud Code for AuthenticationResponse, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var b_isOnline = Spark.getPlayer().isOnline();

Spark.setScriptData("isLoggin", b_isOnline);