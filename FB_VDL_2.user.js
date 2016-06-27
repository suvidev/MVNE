// ==UserScript==
// @name FB VDL 2
// @namespace http://axezor.blogspot.com
// @version 1.0.14
// @description Enjoy.
// @author AxEzOr
// @match https://www.facebook.com/*/videos/*
// @match http://www.facebook.com/*/videos/*
// @match https://www.facebook.com/video.php?v=*
// @match http://www.facebook.com/video.php?v=*
// @match https://www.facebook.com/photo.php?v=*
// @match http://www.facebook.com/photo.php?v=*
// @grant none
// --@grant GM_setValue
// --@grant GM_getValue
// @icon data:image/png;base64,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
// ==/UserScript==
//--- Config ----//
var enableBtnHideBar = false; // true , false

var enableAutoVDL_Link = true; // true , false

var enableHotKeyGenVDL_Link = true; // true , false


var GBGM_KEY = "FBVDL2_";

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function GM_setValue(vKeyv, vValuev) {
    localStorage.setItem(GBGM_KEY + vKeyv, vValuev);
}

function GM_getValue(vKeyv) {

    var vlu = localStorage.getItem(GBGM_KEY + vKeyv);

    if (vlu === 'true') {
        return true;
    } else if (vlu === 'false') {
        return false;
    } else if (isNumber(vlu)) {
        return parseFloat(vlu);
    } else if (vlu === 'null') {
        return null;
    }

    return vlu;
}



String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function showOrHideDiv() {
    var txt2 = document.getElementById('fbvdldiv').style.display;

    if(txt2 == 'none'){
        document.getElementById('fbvdldiv').style.display = 'block';
        document.getElementById('showFixed').innerHTML = ' - ';

    }else{
        document.getElementById('fbvdldiv').style.display = 'none';
        document.getElementById('showFixed').innerHTML = ' +';
    }
}


///--- FUNCTION ----///


function genFBVDL() {

    //new facebook video search tag script for hd_src

    var vArrayScript = document.getElementsByTagName('script');
    var mainIndex = 0;
    var foundScript;

    for (var aindex = 0; aindex < vArrayScript.length; aindex++) {
        //console.log(vArrayScript[aindex].innerHTML.indexOf('hd_src'));
        if (( vArrayScript[aindex].innerHTML.indexOf('hd_src') !== -1 || vArrayScript[aindex].innerHTML.indexOf('sd_src') !== -1) && vArrayScript[aindex].innerHTML.indexOf('aHdSrcID') === -1) {
            // console.log(aindex);
            mainIndex = aindex;

            foundScript = vArrayScript[mainIndex];

            break;
        }

    }





    if (mainIndex !== 0) {

        var txtdata = foundScript.innerHTML;

        var mainData = txtdata;

        try {
            mainData = decodeURIComponent(txtdata);
        }
        catch(err) {
            console.log(''+err.message);
        }

        mainData = mainData.substring(mainData.indexOf('.guard(function()') + 17);


        //mainData = mainData.substring(mainData.indexOf('videoData:[{')+12);
        var doConvert = false;
        if(mainData.indexOf('"videoData":[{') !== -1){
            mainData = mainData.substring(mainData.indexOf('"videoData":[{')+14, mainData.indexOf('"stream_type"')-1);
        }else{
            mainData = mainData.substring(mainData.indexOf('videoData:[{')+12, mainData.indexOf("stream_type")-1);
            doConvert = true;
        }


        var ctMData = mainData;

        if(doConvert){


            ctMData = ctMData.replaceAll('://','@#@');

            ctMData = ctMData.replaceAll(':','":');

            ctMData = ctMData.replaceAll('@#@','://');

            ctMData = ctMData.replaceAll(',',',"');

            ctMData = '"'+ctMData;

        }

        ctMData = '{'+ctMData+'}';


        var jjss = JSON.parse(ctMData);



        var aDiv = document.createElement("div");
        aDiv.id="fbvdldiv";
        aDiv.style.displaly = "block";

        var aDivMain = document.createElement("div");
        aDivMain.id = "fbvdlv2";
        aDivMain.style.position = "fixed";
        aDivMain.style.displaly = "block";
        aDivMain.style.top = "100px";
        aDivMain.style.left = "5px";
        aDivMain.style.backgroundColor = "#5a5753";
        aDivMain.style.zIndex = "2000";

        //<button id="showFixed" onclick="showOrHideDiv()" class="btn2"> Show [Tools Reload Error IMG]</button>
        var aTable = document.createElement("table");

        var aTR1 = document.createElement("tr");
        var aTD1 = document.createElement("td");
        var aButton = document.createElement("button");
        aButton.id = 'showFixed';
        var linkTextBtn = document.createTextNode(" - ");
        aButton.appendChild(linkTextBtn);
        aButton.addEventListener('click', function() {
            showOrHideDiv();
        });
        aTD1.appendChild(aButton);
        aTR1.appendChild(aTD1);

        if(typeof jjss.hd_src !== "undefined"){

            if(jjss.hd_src !== null){
                var atag = document.createElement("a");
                atag.href = jjss.hd_src;
                atag.style.color = '#fdfeff';
                var linkText = document.createTextNode("- HD -");
                atag.appendChild(linkText);
                aDiv.appendChild(atag);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));
            }



        }

        if(typeof jjss.hd_src_no_ratelimit !== "undefined"){

            if(jjss.hd_src_no_ratelimit !== null){
                var atag2 = document.createElement("a");
                atag2.href = jjss.hd_src_no_ratelimit;
                atag2.style.color = '#fdfeff';
                var linkText2 = document.createTextNode("- HD [no rate] -");
                atag2.appendChild(linkText2);
                aDiv.appendChild(atag2);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));
            }

        }

        if(typeof jjss.sd_src !== "undefined"){

            if(jjss.sd_src !== null){
                var atag3 = document.createElement("a");
                atag3.href = jjss.sd_src;
                atag3.style.color = '#fdfeff';
                var linkText3 = document.createTextNode("- SD -");
                atag3.appendChild(linkText3);
                aDiv.appendChild(atag3);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));
            }



        }

        if(typeof jjss.sd_src_no_ratelimit !== "undefined"){

            if(jjss.sd_src_no_ratelimit !== null){

                var atag4 = document.createElement("a");
                atag4.href = jjss.sd_src_no_ratelimit;
                atag4.style.color = '#fdfeff';
                var linkText4 = document.createTextNode("- SD [no rate] -");
                atag4.appendChild(linkText4);
                aDiv.appendChild(atag4);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));
            }


        }

        var aTR2 = document.createElement("tr");
        var aTD2 = document.createElement("td");

        aTD2.appendChild(aDiv);
        aTR2.appendChild(aTD2);

        aTable.appendChild(aTR1);
        aTable.appendChild(aTR2);

        aDivMain.appendChild(aTable);

        document.body.appendChild(aDivMain);




    }




}



function loopingFunction1() {

    if(!document.getElementById('fbvdlv2')){
        genFBVDL();  
    }

    //console.log('loop 1');
    setTimeout(loopingFunction1, 15000);
}


loopingFunction1();
