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
}

var myIdGame = myChallenge.getScriptData("jeu");
/*var projectionNotoHave = {Questions : 0, Illustration : 0, Rules : 0, NoTournoi : 0, Tutoriel : 0, Langue : 0};
var documentToFind =  {"_id" : {"$oid" : myIdGame}}
var result = Spark.metaCollection("Jeu").find(documentToFind, projectionNotoHave);

var myGame;

if(result.hasNext())
{
    result.next();
    myGame = result.curr();
}*/

Spark.setScriptData("idGame", myIdGame);
Spark.setScriptData("challenger", myChallenger);
Spark.setScriptData("maxPlayers", myChallenge.getScriptData("maxPlayers"));