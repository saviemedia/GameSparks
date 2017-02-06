// ====================================================================================================
//
// Cloud Code for InsertQuestionsMembers, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var myArray = Spark.getData().theArray;

var idGame = myArray["idGame"];


var responses = myArray["reponses"];

for (var item in responses)
{
    var docInsert;
    var docSearch;
    var objPlayer = {};
    var objPlayerSearch = {};
    //var bIsInsert = false;
   // var reponse = responses[item];
   var playerID =  responses[item]["NoMembre"];
   var noQuestion = responses[item]["NoQuestion"];
   var time = responses[item]["timeQuestion"];
   var bonneRep = responses[item]["BonneReponse"];
    
    
    objPlayer["playerID"] = playerID;
    objPlayer["games"] = {};
    objPlayer["games"][idGame] = {};
    objPlayer["games"][idGame]["Questions"] = {};
    objPlayer["games"][idGame]["Questions"]["Question_" + noQuestion] = {};
    objPlayer["games"][idGame]["Questions"]["Question_" + noQuestion]["time"] = time;
    
    objPlayerSearch["playerID"] = playerID;
    
    docSearch = objPlayerSearch;
    var myObjPlayer = Spark.metaCollection("QuestionsMembres").find(docSearch);
    
    
    if(!myObjPlayer.hasNext())
    {
        if(bonneRep == true)
        {
           objPlayer["games"][idGame]["Questions"]["Question_" + noQuestion]["good"] = 1;
        }
        else
        {
           objPlayer["games"][idGame]["Questions"]["Question_" + noQuestion]["wrong"] = 1;
        }
        
        objPlayer["games"][idGame]["NbParties"] = 1;
        
        docInsert = objPlayer;
        
        Spark.metaCollection("QuestionsMembres").insert(docInsert);
       
    }
    else
    {
        myObjPlayer.next();
        var myPlayer = myObjPlayer.curr();
        var myGame = myPlayer["games"][idGame];
        
        var query = {"playerID" : playerID};
        var updateQuery = {};
        var docQuery = {};
        var sentence = "games." + idGame + "Questions.Question_" + noQuestion;
        
        if(bonneRep == true)
        {
            sentence += ".good";
        }
        else
        {
            sentence += ".wrong";
        }
        
        sentencePartie = "games." + idGame + "NbParties";
        
        docQuery["$inc"] = updateQuery;
        docQuery["$inc"][sentence] = 1;
        docQuery["$inc"][sentencePartie] = 1;
        Spark.metaCollection("QuestionsMembres").update(query,  docQuery);
    }
}

Spark.setScriptData("succes", true);