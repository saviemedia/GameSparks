// ====================================================================================================
//
// Cloud Code for AddSavieId, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var savieID = Spark.getData().savieID;
var self = Spark.getPlayer();

self.setScriptData("SAVIE", savieID);