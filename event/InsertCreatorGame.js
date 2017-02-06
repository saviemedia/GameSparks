// ====================================================================================================
//
// Cloud Code for InsertCreatorGame, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var idPlayer = Spark.getPlayer().getPlayerId();
var idGame = Spark.getData().idGame;

var creator = Spark.metaCollection("CreateurJeu").find( {"idPlayer" : idPlayer});

var documentInsert;
var theGames;
if(!creator.hasNext())
{
    theGames = [idGame];
     documentInsert = {"idPlayer" : idPlayer, "games" : theGames};
    Spark.metaCollection("CreateurJeu").insert(documentInsert);
}
else
{
    creator.next();
    var result = creator.curr();
    theGames = result["games"];
    theGames.push(idGame);
    documentInsert = {"idPlayer" : idPlayer, "games" : theGames};
    Spark.metaCollection("CreateurJeu").update({"idPlayer" : idPlayer}, documentInsert);
}


Spark.setScriptData("name", theGames);