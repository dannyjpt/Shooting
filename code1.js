gdjs.Game_32overCode = {};
gdjs.Game_32overCode.GDNewObjectObjects1= [];
gdjs.Game_32overCode.GDNewObjectObjects2= [];
gdjs.Game_32overCode.GDNewObject2Objects1= [];
gdjs.Game_32overCode.GDNewObject2Objects2= [];
gdjs.Game_32overCode.GDNewObject32Objects1= [];
gdjs.Game_32overCode.GDNewObject32Objects2= [];
gdjs.Game_32overCode.GDNewObject3Objects1= [];
gdjs.Game_32overCode.GDNewObject3Objects2= [];
gdjs.Game_32overCode.GDNewTextObjects1= [];
gdjs.Game_32overCode.GDNewTextObjects2= [];
gdjs.Game_32overCode.GDNewSpriteObjects1= [];
gdjs.Game_32overCode.GDNewSpriteObjects2= [];

gdjs.Game_32overCode.conditionTrue_0 = {val:false};
gdjs.Game_32overCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32overCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32overCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32overCode.condition3IsTrue_0 = {val:false};
gdjs.Game_32overCode.conditionTrue_1 = {val:false};
gdjs.Game_32overCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32overCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32overCode.condition2IsTrue_1 = {val:false};
gdjs.Game_32overCode.condition3IsTrue_1 = {val:false};


gdjs.Game_32overCode.mapOfGDgdjs_46Game_9532overCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.Game_32overCode.GDNewObject2Objects1});
gdjs.Game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Game_32overCode.GDNewObject2Objects1);

gdjs.Game_32overCode.condition0IsTrue_0.val = false;
gdjs.Game_32overCode.condition1IsTrue_0.val = false;
gdjs.Game_32overCode.condition2IsTrue_0.val = false;
{
gdjs.Game_32overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32overCode.mapOfGDgdjs_46Game_9532overCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32overCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32overCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Game_32overCode.condition1IsTrue_0.val ) {
{
{gdjs.Game_32overCode.conditionTrue_1 = gdjs.Game_32overCode.condition2IsTrue_0;
gdjs.Game_32overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10742180);
}
}}
}
if (gdjs.Game_32overCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene");
}}

}


{


gdjs.Game_32overCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32overCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32overCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject32"), gdjs.Game_32overCode.GDNewObject32Objects1);
{for(var i = 0, len = gdjs.Game_32overCode.GDNewObject32Objects1.length ;i < len;++i) {
    gdjs.Game_32overCode.GDNewObject32Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


};

gdjs.Game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32overCode.GDNewObjectObjects1.length = 0;
gdjs.Game_32overCode.GDNewObjectObjects2.length = 0;
gdjs.Game_32overCode.GDNewObject2Objects1.length = 0;
gdjs.Game_32overCode.GDNewObject2Objects2.length = 0;
gdjs.Game_32overCode.GDNewObject32Objects1.length = 0;
gdjs.Game_32overCode.GDNewObject32Objects2.length = 0;
gdjs.Game_32overCode.GDNewObject3Objects1.length = 0;
gdjs.Game_32overCode.GDNewObject3Objects2.length = 0;
gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;
gdjs.Game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32overCode.GDNewSpriteObjects2.length = 0;

gdjs.Game_32overCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32overCode'] = gdjs.Game_32overCode;
