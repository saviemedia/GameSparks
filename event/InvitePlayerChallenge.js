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
var challengerID = Spark.getPlayer().getPlayerId();
var challengerSavieID = Spark.getPlayer().getScriptData("savieID");
var challengeLanguage = Spark.getPlayer().getScriptData("languageJeu");

// Send message to other that you invited someone to your challenge
var myConnectedPlayers = Spark.runtimeCollection("PlayerConnected").find();
var arr_playerNotified = new Array();
var segmentName = Spark.getPlayer().getSegmentValue("GameTemplateSegment");

while(myConnectedPlayers.hasNext())
{
    myConnectedPlayers.next();
    var myCurrConnectedPlayer = myConnectedPlayers.curr();
    var myCurrPlayerId = myCurrConnectedPlayer["idPlayer"];
    var myCurrPlayer = Spark.loadPlayer(myCurrPlayerId);
    var segmentPlayer = myCurrPlayer.getSegmentValue("GameTemplateSegment");
    
    if(myCurrPlayer.getSegmentValue("GameTemplateSegment") != null)
    {
         if(segmentName == segmentPlayer && myCurrPlayerId == idPlayer)
        {
			arr_playerNotified.push(idPlayer);
        }
    }
}

var infosSend = {"idChallenge" : idChallenge, "challengerID" : challengerID, "challengeLanguage" : challengeLanguage, "challengerName" : challengerName, "challengerSavieID" : challengerSavieID, "opponentId" : opponentId ,  "opponentName" : opponentName};

var msg = Spark.message("INVITE_PLAYER_CHALLENGE");
msg.setMessageData(infosSend);
msg.setPlayerIds(arr_playerNotified);
msg.send();