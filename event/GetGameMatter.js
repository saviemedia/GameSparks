// ====================================================================================================
//
// Cloud Code for GetGameMatter, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var myIdGame = Spark.getData().idGame;

var result = Spark.metaCollection("Jeu").find({"_id" : {"$oid" : myIdGame}});

var matter;
var obj;
if( result.hasNext()) 
{
    result.next(); 
    obj = result.curr()
    matter = obj["Matiere"]["NomMatiere"];
}

Spark.setScriptData("matter", matter);