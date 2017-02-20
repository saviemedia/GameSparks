// ====================================================================================================
//
// Cloud Code for ChallengeRestartDecision, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var challengeId = Spark.getData().challengeId;
var decisionState = Spark.getData().decisionState;

var challenge = Spark.getChallenge(challengeId);

var acceptedPlayerIds = challenge.getAcceptedPlayerIds();
var arr_playerNotified = new Array();

for (var i = 0; i < acceptedPlayerIds.length; i++) 
{
    if(acceptedPlayerIds[i] != userId)
	{
		arr_playerNotified.push(acceptedPlayerIds[i]);
	}
}

var nsg = Spark.message("CHALLENGE_RESTART_DECISION");
documentToSend = {"decisionState" : decisionState};
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();