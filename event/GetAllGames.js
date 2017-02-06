// ====================================================================================================
//
// Cloud Code for GetAllGames, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var noJeuFind = Spark.getData().NoTypeJeu;
var noLang = Spark.getData().NoLangue;

// Enumeration of all item in projection (1 = in, 0 = out)
var projectionNotoHave = {Questions : 0, Illustration : 0, Rules : 0, NoTournoi : 0, Tutoriel : 0, Langue : 0};
var documentToFind =  {"TypeJeu.NoTypeJeu" : noJeuFind, "Langue.NoLangue" : noLang};
var result = Spark.metaCollection("Jeu").find(documentToFind, projectionNotoHave);

var myGames = new Array();
while(result.hasNext())
{
    result.next();
    var game = result.curr();
    myGames.push(game);
}


myGames.sort(function(a, b){
 var nameA = RemoveAccents(a["NomJeu"]);
 var nameB = RemoveAccents(b["NomJeu"]);

 if ( nameA < nameB )
       return -1;
     if ( nameA > nameB )
       return 1;
     return 0;
})

function RemoveAccents(str) {
  var accents    = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  str = str.split('');
  var strLen = str.length;
  var i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) != -1) {
      str[i] = accentsOut[x];
    }
  }
  return str.join('');
}


var objGame = {};
for(var it = 0; it < myGames.length; it++)
{
    objGame["Jeu"+it] = myGames[it];
}



Spark.setScriptData("games", objGame);