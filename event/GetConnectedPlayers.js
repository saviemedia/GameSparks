// ====================================================================================================
//
// Cloud Code for EnterMultiposte, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var self = Spark.getPlayer();
var selfPlayerId = Spark.getPlayer().getPlayerId();
var selfSegmentName = self.getSegmentValue("GameTemplateSegment");
var myConnectedPlayers = Spark.runtimeCollection("PlayerConnected").find();
var arr_connectedPlayers = new Array();

while(myConnectedPlayers.hasNext())
{
    myConnectedPlayers.next();
    var myCurrPlayer = myConnectedPlayers.curr();	
    var idPlayer = myCurrPlayer["idPlayer"];
    var myPlayer = Spark.loadPlayer(idPlayer);
    var myPlayerSegment = myPlayer.getSegmentValue("GameTemplateSegment");
    var isBusy = myPlayer.getScriptData("busy");
	var isOnline = myPlayer.isOnline();
    
    if(isOnline && !isBusy)
    {
        if(myPlayer.getSegmentValue("GameTemplateSegment") != null)
        {
            if(myPlayerSegment == selfSegmentName && idPlayer != selfPlayerId)
            {
				var connectedPlayer = {};
				connectedPlayer["idPlayer"] = myCurrPlayer["idPlayer"];
				connectedPlayer["displayName"] = myCurrPlayer["displayName"];
				connectedPlayer["avatar"] = myCurrPlayer["avatar"];
				connectedPlayer["savieID"] = myPlayer.getScriptData("savieID");
				
                arr_connectedPlayers.push(connectedPlayer);
            }
        }
    }
}

Spark.setScriptData("playerId", selfPlayerId);
Spark.setScriptData("players", arr_connectedPlayers);