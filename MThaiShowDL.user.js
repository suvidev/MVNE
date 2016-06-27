// ==UserScript==
// @name MThai Show DL
// @namespace http://axezor.blogspot.com
// @version 1.0.0
// @description Enjoy.
// @author AxEzOr
// @match http://video.mthai.com/*/player/*
// @updateURL       https://github.com/axezor/Steam-Next-Queue/raw/master/MThaiShowDL.user.js
// @downloadURL     https://github.com/axezor/Steam-Next-Queue/raw/master/MThaiShowDL.user.js
// @grant none
// ==/UserScript==
//--- Config ----//
var enableBtnHideBar = false; // true , false

var enableAutoVDL_Link = true; // true , false

var enableHotKeyGenVDL_Link = true; // true , false


var GBGM_KEY = "MTSDL_";

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
        if ( vArrayScript[aindex].innerHTML.indexOf('var sources_temp') !== -1 ) {
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

        mainData = mainData.substring(mainData.indexOf('var sources_temp =') + 18);
         mainData = mainData.substring(0, mainData.indexOf(';'));



        var ctMData = mainData;


        //ctMData = '{'+ctMData+'}';


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
        
        var aTable = document.createElement("table");
        
        var aTR1 = document.createElement("tr");
        var aTD1 = document.createElement("td");
        var aButton = document.createElement("button");
        aButton.id = 'showFixed_'+x;
        var linkTextBtn = document.createTextNode(" - ");
        aButton.appendChild(linkTextBtn);
        aButton.addEventListener('click', function() {
            showOrHideDiv();
        });
        aTD1.appendChild(aButton);
        aTR1.appendChild(aTD1);
        
        for(var x=0;x<jjss.length;x++){
            var atag = document.createElement("a");
            atag.href = jjss[x].file;
            atag.style.color = '#fdfeff';
            var linkText = document.createTextNode("- "+jjss[x].label+" -");
            atag.appendChild(linkText);
            aDiv.appendChild(atag);
            aDiv.appendChild(document.createElement("br"));
            aDiv.appendChild(document.createElement("br"));
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
