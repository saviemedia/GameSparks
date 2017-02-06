// ====================================================================================================
//
// Cloud Code for InvitePlayerChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var arr_playerNotified = new Array();
var idPlayer = Spark.getData().idPlayer;
var opponentPlayer = Spark.loadPlayer(idPlayer);
var opponentName = opponentPlayer.getDisplayName();
var opponentId = opponentPlayer.getPlayerId();


var idChallenge = Spark.getData().idChallenge;
var challengerName = Spark.getPlayer().getDisplayName();
var challergerID = Spark.getPlayer().getPlayerId();

// Send message to other that you invited someone to your challenge
var myConnectedPlayers = Spark.runtimeCollection("PlayerConnected").find();
var arr_playerNotified = new Array();
var segmentName = Spark.getPlayer().getSegmentValue("GameTemplateSegment");

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



var infosSend = {"idChallenge" : idChallenge, "challengerID" : challergerID, "challengerName" : challengerName, "opponentId" : opponentId ,  "opponentName" : opponentName};

var msg = Spark.message("INVITE_PLAYER_CHALLENGE");
msg.setMessageData(infosSend);
msg.setPlayerIds(arr_playerNotified);
msg.send();