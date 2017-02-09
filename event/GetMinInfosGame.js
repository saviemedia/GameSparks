// ====================================================================================================
//
// Cloud Code for GetMinInfosGame, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var idChallenge = Spark.getData().idChallenge;
var myChallenge = Spark.getChallenge(idChallenge);
var challengerID = myChallenge.getChallengerId();

var documentChallengerToFind =  {"idPlayer" : challengerID};
var myConnectedPlayers = Spark.runtimeCollection("PlayerConnected").find(documentChallengerToFind);

var myChallenger;
if(myConnectedPlayers.hasNext())
{
    myConnectedPlayers.next();
    myChallenger = myConnectedPlayers.curr();
	var myChallengerInfos = Spark.loadPlayer(myChallenger["idPlayer"]);
	myChallenger["savieID"] = myChallengerInfos.getScriptData("savieID");
}

Spark.setScriptData("idJeu", myChallenge.getScriptData("jeu"));
Spark.setScriptData("maxPlayers", myChallenge.getScriptData("maxPlayers"));
Spark.setScriptData("challenger", myChallenger);