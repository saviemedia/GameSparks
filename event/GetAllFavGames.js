// ====================================================================================================
//
// Cloud Code for GetAllFavGames, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var noJeuFind = Spark.getData().NoTypeJeu;
var noLang = Spark.getData().NoLangue;

// Enumeration of all item in projection (1 = in, 0 = out)
var projectionNotoHave = {Questions : 0, Illustration : 0, Rules : 0, NoTournoi : 0, Tutoriel : 0, Langue : 0};
var documentToFind =  {"TypeJeu.NoTypeJeu" : noJeuFind, "Langue.NoLangue" : noLang};
var sorting = {"Rating" : -1, "NomJeu" : 1};
  
var result = Spark.metaCollection("Jeu").find(documentToFind, projectionNotoHave).sort(sorting);

var myGames = new Array();
var cpt = 0;
var objGame = {};
while(result.hasNext())
{
    result.next();
    var game = result.curr();
    objGame["Jeu" + cpt] = game;
    cpt++;
}

Spark.setScriptData("games", objGame);