// ====================================================================================================
//
// Cloud Code for SetChallengeFull, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var idChallenge = Spark.getData().idChallenge;

var myPlayer = Spark.getPlayer();
var idConnectPlayer = myPlayer.getPlayerId();
var segmentName = myPlayer.getSegmentValue("GameTemplateSegment");


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
         if(segmentName == segmentPlayer && idPlayer != idConnectPlayer)
        {
           arr_playerNotified.push(idPlayer);
        }
    }
}


var documentToSend = {"challengeID" : idChallenge};

var nsg = Spark.message("CHALLENGE_FULL");
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();