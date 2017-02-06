// ====================================================================================================
//
// Cloud Code for GetAvatarName, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var mySection;
var urlAvatar;
var externalId;

var idPlayer = Spark.getData().idPlayer;
var myPlayer = Spark.loadPlayer(idPlayer);
var myAvatarName = myPlayer.getPrivateData("avatar");


if(myAvatarName != "")
{
    mySection = "SAVIE";
    
    var shortCodeNameAvatar = myPlayer.getPrivateData("avatar");
     var getDownloadableResponse = Spark.sendRequest({
     "@class": ".GetDownloadableRequest",
     "shortCode": shortCodeNameAvatar
    })

     urlAvatar = getDownloadableResponse.url;
}
else
{
  mySection = myPlayer.getUserName().substring(0, 2);
  var myIds = myPlayer.getExternalIds();
  externalId = myIds[mySection];
}

Spark.setScriptData("urlAvatar", urlAvatar);
Spark.setScriptData("typeConnection", mySection);
Spark.setScriptData("externalId", externalId);