// ====================================================================================================
//
// Cloud Code for RemovePlayerChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var myIdChallenge = Spark.getData().idChallenge;
var myIdPlayer = Spark.getData().idPlayer;

var myChallenge = Spark.getChallenge(myIdChallenge);
myChallenge.removePlayer(myIdPlayer);

var arr_playerNotified = new Array();

var myChallengerId = myChallenge.getChallengerId();
var arr_playerNotified = new Array();
arr_playerNotified.push(myChallengerId);

Spark.setScriptData("arr_playerNotified", arr_playerNotified);

var documentToSend = {"idChallenge" : myIdChallenge, "idPlayer" : myIdPlayer};
var nsg = Spark.message("CHALLENGE_PARTICIPANT_LEFT");
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();

