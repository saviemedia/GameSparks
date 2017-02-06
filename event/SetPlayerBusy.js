// ====================================================================================================
//
// Cloud Code for SetPlayerBusy, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var isPlayerBusy;
var typeMessage;
var myPlayer = Spark.getPlayer();
var myId = myPlayer.getPlayerId();
var documentToSend;


if(Spark.getData().isBusy == "True")
{
    isPlayerBusy = true;
    documentToSend = {"callerID" : myId};
    typeMessage = "DISCONNECTED_PLAYERS";
 }
 else
 {
    isPlayerBusy = false;
    var urlAvatar = Spark.getPlayer().getPrivateData("urlAvatar");
    var myAvatar = Spark.getPlayer().getPrivateData("avatar");
    var displayNamePlayer = Spark.getPlayer().getDisplayName();
    var myDocument = {"idPlayer" :  myId, "displayName" : displayNamePlayer, "avatar" : myAvatar};
    documentToSend = {"newPlayer" : myDocument};
    typeMessage = "CONNECTED_PLAYERS";
 }

myPlayer.setScriptData("busy", isPlayerBusy);


segmentName = myPlayer.getSegmentValue("GameTemplateSegment");

// Send message to other that you connected to the game
var myConnectedPlayers = Spark.runtimeCollection("PlayerConnected").find();
var arr_playerNotified = new Array();

while(myConnectedPlayers.hasNext())
{
    myConnectedPlayers.next();
    var myCurrPlayer = myConnectedPlayers.curr();
    var idPlayer = myCurrPlayer["idPlayer"];
    var myPlayer = Spark.loadPlayer(idPlayer);
    var segmentPlayer = myPlayer.getSegmentValue("GameTemplateSegment");
    
    if( myPlayer.getSegmentValue("GameTemplateSegment") != null)
    {
         if(segmentName == segmentPlayer && idPlayer != Spark.getPlayer().getPlayerId())
        {
           arr_playerNotified.push(idPlayer);
        }
    }
}


var nsg = Spark.message(typeMessage);
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();