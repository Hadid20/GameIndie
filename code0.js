gdjs.Home_32ScreenCode = {};
gdjs.Home_32ScreenCode.localVariables = [];
gdjs.Home_32ScreenCode.GDLargePlayButtonObjects1= [];
gdjs.Home_32ScreenCode.GDLargePlayButtonObjects2= [];
gdjs.Home_32ScreenCode.GDLargeExitButtonObjects1= [];
gdjs.Home_32ScreenCode.GDLargeExitButtonObjects2= [];
gdjs.Home_32ScreenCode.GDGreyPlayerObjects1= [];
gdjs.Home_32ScreenCode.GDGreyPlayerObjects2= [];
gdjs.Home_32ScreenCode.GDYellowBackgroundObjects1= [];
gdjs.Home_32ScreenCode.GDYellowBackgroundObjects2= [];
gdjs.Home_32ScreenCode.GDAbstractPurpleBackgroundHillsObjects1= [];
gdjs.Home_32ScreenCode.GDAbstractPurpleBackgroundHillsObjects2= [];
gdjs.Home_32ScreenCode.GDBlueFloorObjects1= [];
gdjs.Home_32ScreenCode.GDBlueFloorObjects2= [];
gdjs.Home_32ScreenCode.GDWallForBlueFloorObjects1= [];
gdjs.Home_32ScreenCode.GDWallForBlueFloorObjects2= [];
gdjs.Home_32ScreenCode.GDAlternativeSmallCastleObjects1= [];
gdjs.Home_32ScreenCode.GDAlternativeSmallCastleObjects2= [];
gdjs.Home_32ScreenCode.GDTreeObjects1= [];
gdjs.Home_32ScreenCode.GDTreeObjects2= [];
gdjs.Home_32ScreenCode.GDTITLEObjects1= [];
gdjs.Home_32ScreenCode.GDTITLEObjects2= [];
gdjs.Home_32ScreenCode.GDsubtitleObjects1= [];
gdjs.Home_32ScreenCode.GDsubtitleObjects2= [];


gdjs.Home_32ScreenCode.mapOfGDgdjs_9546Home_959532ScreenCode_9546GDLargePlayButtonObjects1Objects = Hashtable.newFrom({"LargePlayButton": gdjs.Home_32ScreenCode.GDLargePlayButtonObjects1});
gdjs.Home_32ScreenCode.mapOfGDgdjs_9546Home_959532ScreenCode_9546GDLargeExitButtonObjects1Objects = Hashtable.newFrom({"LargeExitButton": gdjs.Home_32ScreenCode.GDLargeExitButtonObjects1});
gdjs.Home_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.Home_32ScreenCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Home_32ScreenCode.mapOfGDgdjs_9546Home_959532ScreenCode_9546GDLargePlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "computer-mouse-click-352734.mp3", false, 100, 1);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeExitButton"), gdjs.Home_32ScreenCode.GDLargeExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Home_32ScreenCode.mapOfGDgdjs_9546Home_959532ScreenCode_9546GDLargeExitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "computer-mouse-click-352734.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreyPlayer"), gdjs.Home_32ScreenCode.GDGreyPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITLE"), gdjs.Home_32ScreenCode.GDTITLEObjects1);
{for(var i = 0, len = gdjs.Home_32ScreenCode.GDGreyPlayerObjects1.length ;i < len;++i) {
    gdjs.Home_32ScreenCode.GDGreyPlayerObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "kids-game-gaming-background-music-295075.mp3", true, 100, 1);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Home_32ScreenCode.GDTITLEObjects1.length === 0 ) ? 0 :gdjs.Home_32ScreenCode.GDTITLEObjects1[0].getX()), "", 0);
}}

}


};

gdjs.Home_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Home_32ScreenCode.GDLargePlayButtonObjects1.length = 0;
gdjs.Home_32ScreenCode.GDLargePlayButtonObjects2.length = 0;
gdjs.Home_32ScreenCode.GDLargeExitButtonObjects1.length = 0;
gdjs.Home_32ScreenCode.GDLargeExitButtonObjects2.length = 0;
gdjs.Home_32ScreenCode.GDGreyPlayerObjects1.length = 0;
gdjs.Home_32ScreenCode.GDGreyPlayerObjects2.length = 0;
gdjs.Home_32ScreenCode.GDYellowBackgroundObjects1.length = 0;
gdjs.Home_32ScreenCode.GDYellowBackgroundObjects2.length = 0;
gdjs.Home_32ScreenCode.GDAbstractPurpleBackgroundHillsObjects1.length = 0;
gdjs.Home_32ScreenCode.GDAbstractPurpleBackgroundHillsObjects2.length = 0;
gdjs.Home_32ScreenCode.GDBlueFloorObjects1.length = 0;
gdjs.Home_32ScreenCode.GDBlueFloorObjects2.length = 0;
gdjs.Home_32ScreenCode.GDWallForBlueFloorObjects1.length = 0;
gdjs.Home_32ScreenCode.GDWallForBlueFloorObjects2.length = 0;
gdjs.Home_32ScreenCode.GDAlternativeSmallCastleObjects1.length = 0;
gdjs.Home_32ScreenCode.GDAlternativeSmallCastleObjects2.length = 0;
gdjs.Home_32ScreenCode.GDTreeObjects1.length = 0;
gdjs.Home_32ScreenCode.GDTreeObjects2.length = 0;
gdjs.Home_32ScreenCode.GDTITLEObjects1.length = 0;
gdjs.Home_32ScreenCode.GDTITLEObjects2.length = 0;
gdjs.Home_32ScreenCode.GDsubtitleObjects1.length = 0;
gdjs.Home_32ScreenCode.GDsubtitleObjects2.length = 0;

gdjs.Home_32ScreenCode.eventsList0(runtimeScene);
gdjs.Home_32ScreenCode.GDLargePlayButtonObjects1.length = 0;
gdjs.Home_32ScreenCode.GDLargePlayButtonObjects2.length = 0;
gdjs.Home_32ScreenCode.GDLargeExitButtonObjects1.length = 0;
gdjs.Home_32ScreenCode.GDLargeExitButtonObjects2.length = 0;
gdjs.Home_32ScreenCode.GDGreyPlayerObjects1.length = 0;
gdjs.Home_32ScreenCode.GDGreyPlayerObjects2.length = 0;
gdjs.Home_32ScreenCode.GDYellowBackgroundObjects1.length = 0;
gdjs.Home_32ScreenCode.GDYellowBackgroundObjects2.length = 0;
gdjs.Home_32ScreenCode.GDAbstractPurpleBackgroundHillsObjects1.length = 0;
gdjs.Home_32ScreenCode.GDAbstractPurpleBackgroundHillsObjects2.length = 0;
gdjs.Home_32ScreenCode.GDBlueFloorObjects1.length = 0;
gdjs.Home_32ScreenCode.GDBlueFloorObjects2.length = 0;
gdjs.Home_32ScreenCode.GDWallForBlueFloorObjects1.length = 0;
gdjs.Home_32ScreenCode.GDWallForBlueFloorObjects2.length = 0;
gdjs.Home_32ScreenCode.GDAlternativeSmallCastleObjects1.length = 0;
gdjs.Home_32ScreenCode.GDAlternativeSmallCastleObjects2.length = 0;
gdjs.Home_32ScreenCode.GDTreeObjects1.length = 0;
gdjs.Home_32ScreenCode.GDTreeObjects2.length = 0;
gdjs.Home_32ScreenCode.GDTITLEObjects1.length = 0;
gdjs.Home_32ScreenCode.GDTITLEObjects2.length = 0;
gdjs.Home_32ScreenCode.GDsubtitleObjects1.length = 0;
gdjs.Home_32ScreenCode.GDsubtitleObjects2.length = 0;


return;

}

gdjs['Home_32ScreenCode'] = gdjs.Home_32ScreenCode;
