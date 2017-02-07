// ====================================================================================================
//
// Cloud Code for AddSavieId, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var system = Spark.getData().system;
var id = Spark.getData().id;
var self = Spark.getPlayer();

self.setScriptData("SAVIE", id);