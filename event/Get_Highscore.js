// ====================================================================================================
//
// Cloud Code for Get_Highscore, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var HIGHSCORE = Spark.getPlayer().getScriptData("HIGHSCOREVAR");

Spark.setScriptData("HIGHSCORE", HIGHSCORE);