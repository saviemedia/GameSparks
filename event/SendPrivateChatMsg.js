// ====================================================================================================
//
// Cloud Code for SendPrivateChatMsg, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var arr_playerNotified = new Array();
var me = Spark.getPlayer();
var myId = me.getPlayerId();
var recipientPlayerID = Spark.getData().idPlayerTo;
var msg = Spark.getData().theMsg;

arr_playerNotified.push(myId);
arr_playerNotified.push(recipientPlayerID);


var documentToSend = {"message" : msg, "callerID" : myId, "receiverID" : recipientPlayerID};



var nsg = Spark.message("PRIVATE_CHAT_MESSAGE");
nsg.setMessageData(documentToSend);
nsg.setPlayerIds(arr_playerNotified);
nsg.send();