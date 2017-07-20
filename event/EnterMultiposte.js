// ====================================================================================================
//
// Cloud Code for EnterMultiposte, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

// Add player to the player Connected list to show to others that you have connected the multipose section
// OR
// Receive that the other player is connected to the multiposte section

var myConnectedPlayersColl = Spark.runtimeCollection("PlayerConnected");

var myId = Spark.getPlayer().getPlayerId();
var displayNamePlayer = Spark.getPlayer().getDisplayName();
var shortCodeNameAvatar = Spark.getPlayer().getPrivateData("avatar");


// Add segment
var me = Spark.loadPlayer(myId);
var savieID = me.getScriptData["savieID"];
segmentName = me.getSegmentValue("GameTemplateSegment");

var urlAvatar = Spark.getPlayer().getPrivateData("urlAvatar");
var myAvatar = Spark.getPlayer().getPrivateData("avatar");
var myDocument = {"idPlayer" :  myId, "displayName" : displayNamePlayer, "avatar" : myAvatar, "savieID" : savieID};
var playerConnect = Spark.runtimeCollection("PlayerConnected").find({"idPlayer" :myId });


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


if(!playerConnect.hasNext())
{
    myConnectedPlayersColl.insert(myDocument);
}

documentToSend = {"newPlayer" : myDocument};

var nsg = Spark.message("CONNECTED_PLAYERS");
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();