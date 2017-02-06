// ====================================================================================================
//
// Cloud Code for SocialStatusResponse, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var systemId = Spark.getData().statuses[0].systemId;

Spark.setScriptData("systemId", systemId)