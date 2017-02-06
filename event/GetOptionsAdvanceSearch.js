// ====================================================================================================
//
// Cloud Code for GetOptionsAdvanceSearch, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var theLang = Spark.getData().strLang;

// NIVEAUX
var niveauxToFind = theLang + ".Niveaux";
var resultNiveaux = Spark.metaCollection("Textes").distinct(niveauxToFind);

var myNiveaux = resultNiveaux[0];
var allNiveaux = new Array();
for(item in myNiveaux)
{
    var myNiv = {};
    myNiv[item] = myNiveaux[item];
    allNiveaux.push(myNiv);
}

//MATIERES
var matterToFind = theLang + ".Matieres";
var resultMatieres = Spark.metaCollection("Textes").distinct(matterToFind);

var myMatieres = resultMatieres[0];
var allMatieres = new Array();
for(key in myMatieres)
{
    var myMat = {};
    myMat[key] = myMatieres[key];
    allMatieres.push(myMat);
}


allMatieres.sort(function(a, b){
    var nameA = RemoveAccents(a[Object.keys(a)[0]]);
    var nameB = RemoveAccents(b[Object.keys(b)[0]]);

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


Spark.setScriptData("allNiveaux", allNiveaux);
Spark.setScriptData("allMatieres", allMatieres);