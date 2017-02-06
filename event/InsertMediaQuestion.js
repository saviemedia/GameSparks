// ====================================================================================================
//
// Cloud Code for InsertMedia, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

//var theMediaUrl = Spark.getData().


// Get url image
// Get id game
// Get id question
// Get no format type
/*  1 = Texte
    2 = Image
    3 = Vidéo
    4 = Son
*/

// Get GS Uploade adress


/* TEST TEST TEST TEST */
var idGame = {"_id": { "$oid": "56a91ff6e4b025c78f373fd2"}};
//////////////////////////////////

var noFormat = 2;
var idQuestion = "Question"  + 1;
var documentQuestion = {"Questions" : {idQuestion : {"TypeFormat" : {}}}};
var theMediaUrl = "";


var uploadUrlRequest = Spark.sendRequest({
"@class": ".GetUploadUrlRequest"
})

var prefixAdress = uploadUrlRequest.url;

var uplaodFileRequest = Spark.sendRequest({
"@class": ".UploadFile",
"file" : "",
"fileName" : "",
})



/*var urlUpaloadedRequest = Spark.sendRequest({
"@class": ".GetUploadUrlRequest"
})


var documentToUpdate = {};*/


//var myGame = Spark.metaCollection("Jeu").find(idGame);


Spark.setScriptData("name", uplaodFileRequest);