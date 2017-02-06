// ====================================================================================================
//
// Cloud Code for WithdrawChallengeResponse, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var idChallenge = Spark.getData().challengeInstanceId;
var myChallenge = Spark.getChallenge(idChallenge);
var playerInChallenge = myChallenge.getChallengedPlayerIds();

var myPlayer = Spark.getPlayer();
var idConnectPlayer = myPlayer.getPlayerId();
var segmentName = myPlayer.getSegmentValue("GameTemplateSegment");


var myConnectedPlayers = Spark.runtimeCollection("PlayerConnected").find();
var arr_playerNotified = new Array();
var arr_playerKicked = new Array();

while(myConnectedPlayers.hasNext())
{
    myConnectedPlayers.next();
    var myCurrPlayer = myConnectedPlayers.curr();
    var idPlayer = myCurrPlayer["idPlayer"];
    var myPlayer = Spark.loadPlayer(idPlayer);
    var segmentPlayer = myPlayer.getSegmentValue("GameTemplateSegment");
    var isBusy = myPlayer.getScriptData("busy");
    var isInChallenge = false;
    
    for(var it = 0; it < playerInChallenge.length; it++)
    {
        if(playerInChallenge[it] == idPlayer)
        {
            isInChallenge = true;
        }
    }
    

    if( myPlayer.getSegmentValue("GameTemplateSegment") != null)
    {
         if(segmentName == segmentPlayer && idPlayer != idConnectPlayer)
        {
            if(!isBusy)
            {
              arr_playerNotified.push(idPlayer);
            }
          
            if(isBusy && !isInChallenge)
            {
              arr_playerKicked.push(idPlayer);  
            }
        }
    }
}


var documentToSend = {"challengeID" : idChallenge};

var nsg = Spark.message("CHALLENGE_WITHDRAWN");
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();

var nsgKick = Spark.message("KCIK_OUT_CHALLENGE_ROOM");
nsgKick.setMessageData(documentToSend);
nsgKick.setPlayerIds(arr_playerKicked);
nsgKick.send();