// ====================================================================================================
//
// Cloud Code for SetSegmentGame, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var segmentGameName = Spark.getData().SegmentGameName;
var myPlayer = Spark.getPlayer();

myPlayer.setSegmentValue("GameTemplateSegment", segmentGameName);

Spark.setScriptData("Success", true);