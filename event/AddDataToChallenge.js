// ====================================================================================================
//
// Cloud Code for AddDataToChallenge, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

// Add some infos for the challenge, the game infos
var idJeu = Spark.getData().idJeu;
var idChallenge = Spark.getData().idChallenge;
var myChallenge = Spark.getChallenge(idChallenge);

/*
var documentToAdd = {};
documentToAdd["idJeu"] = idJeu;

var result = Spark.metaCollection("Jeu").find({"_id" : {"$oid" : idJeu}});

var matter;
var obj;
if( result.hasNext()) 
{
    result.next(); 
    obj = result.curr()
    matter = obj["Matiere"]["NomMatiere"];
}

documentToAdd["nomMatiere"] = matter;*/
myChallenge.setScriptData("jeu", idJeu);

// SEND MESSAGE TO ALL PLAYERS
var me = Spark.getPlayer();
var segmentName = me.getSegmentValue("GameTemplateSegment");

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
    
    if(myPlayer.getSegmentValue("GameTemplateSegment") != null)
    {
        if(segmentName == segmentPlayer && idPlayer != Spark.getPlayer().getPlayerId())
        {
           arr_playerNotified.push(idPlayer);
        }
    }
}

var newChallenge = {};

newChallenge["challengeID"] = myChallenge.getId();
newChallenge["challengerID"] = myChallenge.getChallengerId();
var username = Spark.getPlayer().getDisplayName()
newChallenge["challengerName"] = username;
var infos =  myChallenge.getScriptData("jeu");
var infosGame = {};
var theInfosGame = myChallenge.getScriptData("jeu")
infosGame["idJeu"] =  theInfosGame["idJeu"];
infosGame["nomMatiere"] = theInfosGame["nomMatiere"];
newChallenge["infosGame"] = infosGame;
newChallenge["maxPlayers"] = myChallenge.getScriptData("maxPlayers");

documentToSend = {"theChallenge" : newChallenge};

var nsg = Spark.message("CHALLENGE_CREATED");
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();