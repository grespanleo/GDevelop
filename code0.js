gdjs.Interstitials_95AdCode = {};
gdjs.Interstitials_95AdCode.GDImage1Objects1_1final = [];

gdjs.Interstitials_95AdCode.GDImage1Objects1= [];
gdjs.Interstitials_95AdCode.GDImage1Objects2= [];
gdjs.Interstitials_95AdCode.GDImage1Objects3= [];
gdjs.Interstitials_95AdCode.GDBut_953_954Objects1= [];
gdjs.Interstitials_95AdCode.GDBut_953_954Objects2= [];
gdjs.Interstitials_95AdCode.GDBut_953_954Objects3= [];
gdjs.Interstitials_95AdCode.GDBut_951_952Objects1= [];
gdjs.Interstitials_95AdCode.GDBut_951_952Objects2= [];
gdjs.Interstitials_95AdCode.GDBut_951_952Objects3= [];
gdjs.Interstitials_95AdCode.GDChiffreObjects1= [];
gdjs.Interstitials_95AdCode.GDChiffreObjects2= [];
gdjs.Interstitials_95AdCode.GDChiffreObjects3= [];
gdjs.Interstitials_95AdCode.GDNumber2Objects1= [];
gdjs.Interstitials_95AdCode.GDNumber2Objects2= [];
gdjs.Interstitials_95AdCode.GDNumber2Objects3= [];
gdjs.Interstitials_95AdCode.GDNumber3Objects1= [];
gdjs.Interstitials_95AdCode.GDNumber3Objects2= [];
gdjs.Interstitials_95AdCode.GDNumber3Objects3= [];
gdjs.Interstitials_95AdCode.GDNumber4Objects1= [];
gdjs.Interstitials_95AdCode.GDNumber4Objects2= [];
gdjs.Interstitials_95AdCode.GDNumber4Objects3= [];
gdjs.Interstitials_95AdCode.GDNumber5Objects1= [];
gdjs.Interstitials_95AdCode.GDNumber5Objects2= [];
gdjs.Interstitials_95AdCode.GDNumber5Objects3= [];
gdjs.Interstitials_95AdCode.GDNumber6Objects1= [];
gdjs.Interstitials_95AdCode.GDNumber6Objects2= [];
gdjs.Interstitials_95AdCode.GDNumber6Objects3= [];
gdjs.Interstitials_95AdCode.GDNumber7Objects1= [];
gdjs.Interstitials_95AdCode.GDNumber7Objects2= [];
gdjs.Interstitials_95AdCode.GDNumber7Objects3= [];
gdjs.Interstitials_95AdCode.GDNumber8Objects1= [];
gdjs.Interstitials_95AdCode.GDNumber8Objects2= [];
gdjs.Interstitials_95AdCode.GDNumber8Objects3= [];
gdjs.Interstitials_95AdCode.GDNumberObjects1= [];
gdjs.Interstitials_95AdCode.GDNumberObjects2= [];
gdjs.Interstitials_95AdCode.GDNumberObjects3= [];
gdjs.Interstitials_95AdCode.GDlinkObjects1= [];
gdjs.Interstitials_95AdCode.GDlinkObjects2= [];
gdjs.Interstitials_95AdCode.GDlinkObjects3= [];

gdjs.Interstitials_95AdCode.conditionTrue_0 = {val:false};
gdjs.Interstitials_95AdCode.condition0IsTrue_0 = {val:false};
gdjs.Interstitials_95AdCode.condition1IsTrue_0 = {val:false};
gdjs.Interstitials_95AdCode.condition2IsTrue_0 = {val:false};
gdjs.Interstitials_95AdCode.condition3IsTrue_0 = {val:false};
gdjs.Interstitials_95AdCode.condition4IsTrue_0 = {val:false};
gdjs.Interstitials_95AdCode.conditionTrue_1 = {val:false};
gdjs.Interstitials_95AdCode.condition0IsTrue_1 = {val:false};
gdjs.Interstitials_95AdCode.condition1IsTrue_1 = {val:false};
gdjs.Interstitials_95AdCode.condition2IsTrue_1 = {val:false};
gdjs.Interstitials_95AdCode.condition3IsTrue_1 = {val:false};
gdjs.Interstitials_95AdCode.condition4IsTrue_1 = {val:false};


gdjs.Interstitials_95AdCode.eventsList0x7c79d4 = function(runtimeScene) {

{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.Interstitials_95AdCode.eventsList0x7c79d4
gdjs.Interstitials_95AdCode.eventsList0x7c83ec = function(runtimeScene) {

{


{
gdjs.Interstitials_95AdCode.GDChiffreObjects1.createFrom(runtimeScene.getObjects("Chiffre"));
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDChiffreObjects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDChiffreObjects1[i].setAnimationFrame(2);
}
}}

}


}; //End of gdjs.Interstitials_95AdCode.eventsList0x7c83ec
gdjs.Interstitials_95AdCode.eventsList0x7c8cdc = function(runtimeScene) {

{

gdjs.Interstitials_95AdCode.GDChiffreObjects2.createFrom(runtimeScene.getObjects("Chiffre"));

gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDChiffreObjects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDChiffreObjects2[i].getAnimationFrame() == 2 ) {
        gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = true;
        gdjs.Interstitials_95AdCode.GDChiffreObjects2[k] = gdjs.Interstitials_95AdCode.GDChiffreObjects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDChiffreObjects2.length = k;}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
{gdjs.Interstitials_95AdCode.conditionTrue_1 = gdjs.Interstitials_95AdCode.condition1IsTrue_0;
gdjs.Interstitials_95AdCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8164660);
}
}}
if (gdjs.Interstitials_95AdCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Interstitials_95AdCode.GDChiffreObjects2 */
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDChiffreObjects2.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDChiffreObjects2[i].setAnimationFrame(0);
}
}}

}


{


{
}

}


}; //End of gdjs.Interstitials_95AdCode.eventsList0x7c8cdc
gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDBut_95951_95952Objects1Objects = Hashtable.newFrom({"But_1_2": gdjs.Interstitials_95AdCode.GDBut_951_952Objects1});gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDChiffreObjects2Objects = Hashtable.newFrom({"Chiffre": gdjs.Interstitials_95AdCode.GDChiffreObjects2});gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDChiffreObjects2Objects = Hashtable.newFrom({"Chiffre": gdjs.Interstitials_95AdCode.GDChiffreObjects2});gdjs.Interstitials_95AdCode.eventsList0x7c9a5c = function(runtimeScene) {

{

gdjs.Interstitials_95AdCode.GDChiffreObjects2.createFrom(runtimeScene.getObjects("Chiffre"));

gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition2IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition3IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDChiffreObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Interstitials_95AdCode.condition1IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ChiffreDelay");
}if ( gdjs.Interstitials_95AdCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDChiffreObjects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDChiffreObjects2[i].getAnimationFrame() == 0 ) {
        gdjs.Interstitials_95AdCode.condition3IsTrue_0.val = true;
        gdjs.Interstitials_95AdCode.GDChiffreObjects2[k] = gdjs.Interstitials_95AdCode.GDChiffreObjects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDChiffreObjects2.length = k;}}
}
}
if (gdjs.Interstitials_95AdCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Interstitials_95AdCode.GDChiffreObjects2 */
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDChiffreObjects2.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDChiffreObjects2[i].setAnimationFrame(gdjs.Interstitials_95AdCode.GDChiffreObjects2[i].getAnimationFrame() + (1));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChiffreDelay");
}}

}


{

gdjs.Interstitials_95AdCode.GDChiffreObjects2.createFrom(runtimeScene.getObjects("Chiffre"));

gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition2IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition3IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDChiffreObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Interstitials_95AdCode.condition1IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ChiffreDelay");
}if ( gdjs.Interstitials_95AdCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDChiffreObjects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDChiffreObjects2[i].getAnimationFrame() == 1 ) {
        gdjs.Interstitials_95AdCode.condition3IsTrue_0.val = true;
        gdjs.Interstitials_95AdCode.GDChiffreObjects2[k] = gdjs.Interstitials_95AdCode.GDChiffreObjects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDChiffreObjects2.length = k;}}
}
}
if (gdjs.Interstitials_95AdCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Interstitials_95AdCode.GDChiffreObjects2 */
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDChiffreObjects2.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDChiffreObjects2[i].setAnimationFrame(gdjs.Interstitials_95AdCode.GDChiffreObjects2[i].getAnimationFrame() - (1));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChiffreDelay");
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.Interstitials_95AdCode.eventsList0x7c9a5c
gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDBut_95953_95954Objects1Objects = Hashtable.newFrom({"But_3_4": gdjs.Interstitials_95AdCode.GDBut_953_954Objects1});gdjs.Interstitials_95AdCode.eventsList0x7caf04 = function(runtimeScene) {

{

gdjs.Interstitials_95AdCode.GDBut_953_954Objects1.createFrom(runtimeScene.getObjects("But_3_4"));

gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDBut_95953_95954Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Interstitials_95AdCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}}

}


}; //End of gdjs.Interstitials_95AdCode.eventsList0x7caf04
gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDlinkObjects1Objects = Hashtable.newFrom({"link": gdjs.Interstitials_95AdCode.GDlinkObjects1});gdjs.Interstitials_95AdCode.eventsList0xb4be0 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().get("just_changed_scene").setNumber(0);
}}

}


{


gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Interstitials_95AdCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("just_changed_scene").setNumber(1);
}
{ //Subevents
gdjs.Interstitials_95AdCode.eventsList0x7c79d4(runtimeScene);} //End of subevents
}

}


{


gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
{
{gdjs.Interstitials_95AdCode.conditionTrue_1 = gdjs.Interstitials_95AdCode.condition0IsTrue_0;
gdjs.Interstitials_95AdCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8159212);
}
}if (gdjs.Interstitials_95AdCode.condition0IsTrue_0.val) {
gdjs.Interstitials_95AdCode.GDChiffreObjects1.createFrom(runtimeScene.getObjects("Chiffre"));
gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDImage1Objects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDChiffreObjects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDChiffreObjects1[i].pauseAnimation();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));

gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDImage1Objects1.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDImage1Objects1[i].getAnimationFrame() < 1 ) {
        gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = true;
        gdjs.Interstitials_95AdCode.GDImage1Objects1[k] = gdjs.Interstitials_95AdCode.GDImage1Objects1[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDImage1Objects1.length = k;}if (gdjs.Interstitials_95AdCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Interstitials_95AdCode.GDImage1Objects1 */
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDImage1Objects1[i].setAnimationFrame(0);
}
}}

}


{

gdjs.Interstitials_95AdCode.GDImage1Objects1.length = 0;


gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
{
{gdjs.Interstitials_95AdCode.conditionTrue_1 = gdjs.Interstitials_95AdCode.condition0IsTrue_0;
gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.length = 0;gdjs.Interstitials_95AdCode.condition0IsTrue_1.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_1.val = false;
{
gdjs.Interstitials_95AdCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDImage1Objects2[i].getAnimationFrame() < 1 ) {
        gdjs.Interstitials_95AdCode.condition0IsTrue_1.val = true;
        gdjs.Interstitials_95AdCode.GDImage1Objects2[k] = gdjs.Interstitials_95AdCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDImage1Objects2.length = k;if( gdjs.Interstitials_95AdCode.condition0IsTrue_1.val ) {
    gdjs.Interstitials_95AdCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.indexOf(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]) === -1 )
            gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.push(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.Interstitials_95AdCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDImage1Objects2[i].getAnimationFrame() > 2 ) {
        gdjs.Interstitials_95AdCode.condition1IsTrue_1.val = true;
        gdjs.Interstitials_95AdCode.GDImage1Objects2[k] = gdjs.Interstitials_95AdCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDImage1Objects2.length = k;if( gdjs.Interstitials_95AdCode.condition1IsTrue_1.val ) {
    gdjs.Interstitials_95AdCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.indexOf(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]) === -1 )
            gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.push(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(gdjs.Interstitials_95AdCode.GDImage1Objects1_1final);
}
}
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
{gdjs.Interstitials_95AdCode.conditionTrue_1 = gdjs.Interstitials_95AdCode.condition1IsTrue_0;
gdjs.Interstitials_95AdCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8160700);
}
}}
if (gdjs.Interstitials_95AdCode.condition1IsTrue_0.val) {
gdjs.Interstitials_95AdCode.GDNumberObjects1.createFrom(runtimeScene.getObjects("Number"));
gdjs.Interstitials_95AdCode.GDNumber2Objects1.createFrom(runtimeScene.getObjects("Number2"));
gdjs.Interstitials_95AdCode.GDNumber3Objects1.createFrom(runtimeScene.getObjects("Number3"));
gdjs.Interstitials_95AdCode.GDNumber4Objects1.createFrom(runtimeScene.getObjects("Number4"));
gdjs.Interstitials_95AdCode.GDNumber5Objects1.createFrom(runtimeScene.getObjects("Number5"));
gdjs.Interstitials_95AdCode.GDNumber6Objects1.createFrom(runtimeScene.getObjects("Number6"));
gdjs.Interstitials_95AdCode.GDNumber7Objects1.createFrom(runtimeScene.getObjects("Number7"));
gdjs.Interstitials_95AdCode.GDNumber8Objects1.createFrom(runtimeScene.getObjects("Number8"));
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumberObjects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumberObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber2Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber2Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber3Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber3Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber4Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber4Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber5Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber5Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber6Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber6Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber7Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber7Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber8Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber8Objects1[i].setString("");
}
}
{ //Subevents
gdjs.Interstitials_95AdCode.eventsList0x7c83ec(runtimeScene);} //End of subevents
}

}


{

gdjs.Interstitials_95AdCode.GDImage1Objects1.length = 0;


gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
{
{gdjs.Interstitials_95AdCode.conditionTrue_1 = gdjs.Interstitials_95AdCode.condition0IsTrue_0;
gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.length = 0;gdjs.Interstitials_95AdCode.condition0IsTrue_1.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_1.val = false;
{
gdjs.Interstitials_95AdCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDImage1Objects2[i].getAnimationFrame() == 1 ) {
        gdjs.Interstitials_95AdCode.condition0IsTrue_1.val = true;
        gdjs.Interstitials_95AdCode.GDImage1Objects2[k] = gdjs.Interstitials_95AdCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDImage1Objects2.length = k;if( gdjs.Interstitials_95AdCode.condition0IsTrue_1.val ) {
    gdjs.Interstitials_95AdCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.indexOf(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]) === -1 )
            gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.push(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.Interstitials_95AdCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDImage1Objects2[i].getAnimationFrame() == 2 ) {
        gdjs.Interstitials_95AdCode.condition1IsTrue_1.val = true;
        gdjs.Interstitials_95AdCode.GDImage1Objects2[k] = gdjs.Interstitials_95AdCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDImage1Objects2.length = k;if( gdjs.Interstitials_95AdCode.condition1IsTrue_1.val ) {
    gdjs.Interstitials_95AdCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.indexOf(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]) === -1 )
            gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.push(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(gdjs.Interstitials_95AdCode.GDImage1Objects1_1final);
}
}
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
{gdjs.Interstitials_95AdCode.conditionTrue_1 = gdjs.Interstitials_95AdCode.condition1IsTrue_0;
gdjs.Interstitials_95AdCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8162948);
}
}}
if (gdjs.Interstitials_95AdCode.condition1IsTrue_0.val) {
gdjs.Interstitials_95AdCode.GDNumberObjects1.createFrom(runtimeScene.getObjects("Number"));
gdjs.Interstitials_95AdCode.GDNumber2Objects1.createFrom(runtimeScene.getObjects("Number2"));
gdjs.Interstitials_95AdCode.GDNumber3Objects1.createFrom(runtimeScene.getObjects("Number3"));
gdjs.Interstitials_95AdCode.GDNumber4Objects1.createFrom(runtimeScene.getObjects("Number4"));
gdjs.Interstitials_95AdCode.GDNumber5Objects1.createFrom(runtimeScene.getObjects("Number5"));
gdjs.Interstitials_95AdCode.GDNumber6Objects1.createFrom(runtimeScene.getObjects("Number6"));
gdjs.Interstitials_95AdCode.GDNumber7Objects1.createFrom(runtimeScene.getObjects("Number7"));
gdjs.Interstitials_95AdCode.GDNumber8Objects1.createFrom(runtimeScene.getObjects("Number8"));
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumberObjects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumberObjects1[i].setString("1");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber2Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber2Objects1[i].setString("2");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber3Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber3Objects1[i].setString("3");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber4Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber4Objects1[i].setString("4");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber5Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber5Objects1[i].setString("5");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber6Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber6Objects1[i].setString("6");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber7Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber7Objects1[i].setString("7");
}
}{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDNumber8Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDNumber8Objects1[i].setString("");
}
}
{ //Subevents
gdjs.Interstitials_95AdCode.eventsList0x7c8cdc(runtimeScene);} //End of subevents
}

}


{


{
}

}


{

gdjs.Interstitials_95AdCode.GDBut_951_952Objects1.createFrom(runtimeScene.getObjects("But_1_2"));

gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDBut_95951_95952Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Interstitials_95AdCode.condition1IsTrue_0.val) {
gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDImage1Objects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.Interstitials_95AdCode.GDImage1Objects1.length = 0;


gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 6;
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
{gdjs.Interstitials_95AdCode.conditionTrue_1 = gdjs.Interstitials_95AdCode.condition1IsTrue_0;
gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.length = 0;gdjs.Interstitials_95AdCode.condition0IsTrue_1.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_1.val = false;
{
gdjs.Interstitials_95AdCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDImage1Objects2[i].getAnimationFrame() == 1 ) {
        gdjs.Interstitials_95AdCode.condition0IsTrue_1.val = true;
        gdjs.Interstitials_95AdCode.GDImage1Objects2[k] = gdjs.Interstitials_95AdCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDImage1Objects2.length = k;if( gdjs.Interstitials_95AdCode.condition0IsTrue_1.val ) {
    gdjs.Interstitials_95AdCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.indexOf(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]) === -1 )
            gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.push(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.Interstitials_95AdCode.GDImage1Objects2.createFrom(runtimeScene.getObjects("Image1"));
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDImage1Objects2[i].getAnimationFrame() == 2 ) {
        gdjs.Interstitials_95AdCode.condition1IsTrue_1.val = true;
        gdjs.Interstitials_95AdCode.GDImage1Objects2[k] = gdjs.Interstitials_95AdCode.GDImage1Objects2[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDImage1Objects2.length = k;if( gdjs.Interstitials_95AdCode.condition1IsTrue_1.val ) {
    gdjs.Interstitials_95AdCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Interstitials_95AdCode.GDImage1Objects2.length;j<jLen;++j) {
        if ( gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.indexOf(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]) === -1 )
            gdjs.Interstitials_95AdCode.GDImage1Objects1_1final.push(gdjs.Interstitials_95AdCode.GDImage1Objects2[j]);
    }
}
}
{
gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(gdjs.Interstitials_95AdCode.GDImage1Objects1_1final);
}
}
}}
if (gdjs.Interstitials_95AdCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Interstitials_95AdCode.GDImage1Objects1 */
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDImage1Objects1[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.Interstitials_95AdCode.eventsList0x7c9a5c(runtimeScene);} //End of subevents
}

}


{


gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 5;
}if (gdjs.Interstitials_95AdCode.condition0IsTrue_0.val) {
gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDImage1Objects1[i].setAnimationFrame(2);
}
}
{ //Subevents
gdjs.Interstitials_95AdCode.eventsList0x7caf04(runtimeScene);} //End of subevents
}

}


{


gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
{gdjs.Interstitials_95AdCode.conditionTrue_1 = gdjs.Interstitials_95AdCode.condition1IsTrue_0;
gdjs.Interstitials_95AdCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8172396);
}
}}
if (gdjs.Interstitials_95AdCode.condition1IsTrue_0.val) {
gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDImage1Objects1[i].setAnimationFrame(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Link");
}}

}


{


gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
{
gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Link");
}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}}
if (gdjs.Interstitials_95AdCode.condition1IsTrue_0.val) {
gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
{for(var i = 0, len = gdjs.Interstitials_95AdCode.GDImage1Objects1.length ;i < len;++i) {
    gdjs.Interstitials_95AdCode.GDImage1Objects1[i].setAnimationFrame(4);
}
}}

}


{

gdjs.Interstitials_95AdCode.GDImage1Objects1.createFrom(runtimeScene.getObjects("Image1"));
gdjs.Interstitials_95AdCode.GDlinkObjects1.createFrom(runtimeScene.getObjects("link"));

gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = false;
gdjs.Interstitials_95AdCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Interstitials_95AdCode.GDImage1Objects1.length;i<l;++i) {
    if ( gdjs.Interstitials_95AdCode.GDImage1Objects1[i].getAnimationFrame() == 4 ) {
        gdjs.Interstitials_95AdCode.condition0IsTrue_0.val = true;
        gdjs.Interstitials_95AdCode.GDImage1Objects1[k] = gdjs.Interstitials_95AdCode.GDImage1Objects1[i];
        ++k;
    }
}
gdjs.Interstitials_95AdCode.GDImage1Objects1.length = k;}if ( gdjs.Interstitials_95AdCode.condition0IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Interstitials_95AdCode.mapOfGDgdjs_46Interstitials_9595AdCode_46GDlinkObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Interstitials_95AdCode.condition1IsTrue_0.val ) {
{
gdjs.Interstitials_95AdCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
if (gdjs.Interstitials_95AdCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.bravoloto.com/onepage/fr/index.html", runtimeScene);
}}

}


}; //End of gdjs.Interstitials_95AdCode.eventsList0xb4be0


gdjs.Interstitials_95AdCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Interstitials_95AdCode.GDImage1Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDImage1Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDImage1Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDBut_953_954Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDBut_953_954Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDBut_953_954Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDBut_951_952Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDBut_951_952Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDBut_951_952Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDChiffreObjects1.length = 0;
gdjs.Interstitials_95AdCode.GDChiffreObjects2.length = 0;
gdjs.Interstitials_95AdCode.GDChiffreObjects3.length = 0;
gdjs.Interstitials_95AdCode.GDNumber2Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDNumber2Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDNumber2Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDNumber3Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDNumber3Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDNumber3Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDNumber4Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDNumber4Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDNumber4Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDNumber5Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDNumber5Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDNumber5Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDNumber6Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDNumber6Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDNumber6Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDNumber7Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDNumber7Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDNumber7Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDNumber8Objects1.length = 0;
gdjs.Interstitials_95AdCode.GDNumber8Objects2.length = 0;
gdjs.Interstitials_95AdCode.GDNumber8Objects3.length = 0;
gdjs.Interstitials_95AdCode.GDNumberObjects1.length = 0;
gdjs.Interstitials_95AdCode.GDNumberObjects2.length = 0;
gdjs.Interstitials_95AdCode.GDNumberObjects3.length = 0;
gdjs.Interstitials_95AdCode.GDlinkObjects1.length = 0;
gdjs.Interstitials_95AdCode.GDlinkObjects2.length = 0;
gdjs.Interstitials_95AdCode.GDlinkObjects3.length = 0;

gdjs.Interstitials_95AdCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Interstitials_95AdCode'] = gdjs.Interstitials_95AdCode;
