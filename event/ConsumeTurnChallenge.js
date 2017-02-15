// ====================================================================================================
//
// Cloud Code for ConsumeTurnChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var challengeId = Spark.getData().challengeId;
var cellIndex = Spark.getData().cellIndex;
var symbol = Spark.getData().symbol;
var isAnswerGood = Spark.getData().isAnswerGood;
var userId = Spark.getData().userId;

var challenge = Spark.getChallenge(challengeId).consumeTurn(userId);

var acceptedPlayerIds = challenge.getAcceptedPlayerIds();
var arr_playerNotified = new Array();

for (var i = 0; i < acceptedPlayerIds.length; i++) 
{
    if(acceptedPlayerIds[i] != userId)
	{
		arr_playerNotified.push(acceptedPlayerIds[i]);
	}
}

var nsg = Spark.message("CHALLENGE_TURN_TAKEN");
documentToSend = {"cellIndex" : cellIndex, "symbol" : symbol, "isAnswerGood" : isAnswerGood};
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();