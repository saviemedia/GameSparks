// ====================================================================================================
//
// Cloud Code for ExitMultiposte, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

// Remove player to the player Connected list to show to others that you have disconnected the multipose section
// OR
// Receive that the other player is disconnected to the multiposte section


var myConnectedPlayersColl = Spark.runtimeCollection("PlayerConnected");
var idConnectPlayer = Spark.getPlayer().getPlayerId();
var playerConnect = Spark.runtimeCollection("PlayerConnected").find({"idPlayer" : idConnectPlayer });


// Remove segment
var me = Spark.loadPlayer(idConnectPlayer);
segmentName = me.getSegmentValue("GameTemplateSegment");

if(playerConnect.hasNext())
{
    playerConnect.next();
    myConnectedPlayersColl.remove(playerConnect.curr());
}


// Send message to other that you connected to the game
var myConnectedPlayers = Spark.runtimeCollection("PlayerConnected").find();
var arr_playerNotified = new Array(); // SparkPlayer

while(myConnectedPlayers.hasNext())
{
    myConnectedPlayers.next();
    var myCurrPlayer = myConnectedPlayers.curr();
    var idPlayer = myCurrPlayer["idPlayer"];
    var myPlayer = Spark.loadPlayer(idPlayer);
    var segmentPlayer = myPlayer.getSegmentValue("GameTemplateSegment");
    
    if( myPlayer.getSegmentValue("GameTemplateSegment") != null)
    {
        if(segmentName == segmentPlayer)
        {
           arr_playerNotified.push(idPlayer);
        }
    }
}


 documentToSend = {"callerID" : idConnectPlayer};
var nsg = Spark.message("DISCONNECTED_PLAYERS");
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();