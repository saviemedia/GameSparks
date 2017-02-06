// ====================================================================================================
//
// Cloud Code for DisconnectPlayer, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var ExitMultiposteresponse = Spark.sendRequest({
 "@class": ".LogEventRequest",
 "eventKey": "ExitMultiposte"
});

Spark.getPlayer().disconnect(false);