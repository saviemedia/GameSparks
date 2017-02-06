// ====================================================================================================
//
// Cloud Code for GetAllMostPlayGames, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var noJeuFind = Spark.getData().NoTypeJeu;
var noLang = Spark.getData().NoLangue;

// Enumeration of all item in projection (1 = in, 0 = out)
var projectionNotoHave = {"_id" : 1};
var documentToFind =  {"TypeJeu.NoTypeJeu" : noJeuFind, "Langue.NoLangue" : noLang};
  
var result = Spark.metaCollection("Jeu").find(documentToFind, projectionNotoHave);
var resultPartie;


var allGame = new Array();
var cpt = 0;
while(result.hasNext())
{
    result.next();
    var myGame = result.curr();
    var idGame = myGame["_id"]["$oid"];
    
    var matchDoc = { "$group": { _id : idGame,
                            total : { "$sum": "$games." + idGame + ".NbParties" } } };
                            
    resultParties =  Spark.metaCollection("QuestionsMembres").aggregate(matchDoc);
    if(resultParties[0]["total"] > 0)
    {
        var myGames = {};
        myGames = resultParties[0];
        allGame.push(myGames);
        cpt++;
    }
}


// sorting descending
allGame.sort(function(a, b){
 var nameA=a["total"], nameB=b["total"];

    return (nameB - nameA);
})


var projectionNotoHave = {Questions : 0, Illustration : 0, Rules : 0, NoTournoi : 0, Tutoriel : 0, Langue : 0};
var theGames = {};
for(var it = 0; it < allGame.length; it++)
{
    var nameData = "jeu" + it;
    var documentToFind = {"_id" : { "$oid" : allGame[it]["_id"] }};
    
    var result = Spark.metaCollection("Jeu").find(documentToFind, projectionNotoHave);
    result.next();
    theGames["Jeu" + it] = result.curr();
}


Spark.setScriptData("games", theGames);