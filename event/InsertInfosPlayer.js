// ====================================================================================================
//
// Cloud Code for InsertInfosPlayer, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================


var socialStatusResponse = Spark.sendRequest({
 "@class": ".SocialStatusRequest"
})

var myStatus = socialStatusResponse.statuses;


if(myStatus == undefined)
{
    // Add avatar shor_name for donwloadables
    var shortCodeNameAvatar = Spark.getData().avatarName;
    Spark.getPlayer().setPrivateData("avatar", shortCodeNameAvatar);
}

var gender = Spark.getData().gender;
Spark.getPlayer().setPrivateData("gender", gender);

var birthday = Spark.getData().birthDate;
Spark.getPlayer().setPrivateData("birth", birthday);

var now = new Date();
var birth = new Date(birthday);
playerAge = now.getFullYear() - birth.getFullYear();


Spark.getPlayer().setPrivateData("age", playerAge);

Spark.setScriptData("succes", true);