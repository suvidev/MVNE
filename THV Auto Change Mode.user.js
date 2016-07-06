// ==UserScript==
// @name THV Auto Change Mode/Equip
// @namespace http://axezor.blogspot.com
// @version 1.5
// @description Enjoy :)
// @author AxEzOr
// @match http://hentaiverse.org/*
// @grant none
// @updateURL       https://github.com/axezor/Steam-Next-Queue/raw/master/THV%20Auto%20Change%20Mode.user.js
// @downloadURL     https://github.com/axezor/Steam-Next-Queue/raw/master/THV%20Auto%20Change%20Mode.user.js
// @icon http://g.e-hentai.org/favicon.ico
// ==/UserScript==


// --@--grant GM_setValue
// --@--grant GM_getValue

var EnableChangeMode = true;
var EnableChangeEquip = true;

var GBGM_KEY = "IMCH_";

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function GM_setValue(vKeyv, vValuev){
    localStorage.setItem(GBGM_KEY+vKeyv, vValuev);
}

function GM_getValue(vKeyv){

    var vlu = localStorage.getItem(GBGM_KEY+vKeyv);

    if(vlu === 'true'){
        return true;
    }else if(vlu === 'false'){
        return false;
    }else if(isNumber(vlu)){
        return parseFloat(vlu);
    }else if(vlu === 'null'){
        return null;
    }

    return vlu;
}


function autoModeDW(){



}

function resetSkill(){
    if(document.querySelector('img[src="/y/ab/reset_a.png"]')){
        var rrtxt = document.querySelector('img[src="/y/ab/reset_a.png"]').onclick+'';
        var vllid = rrtxt.substring(rrtxt.indexOf('.value')+7,rrtxt.indexOf('; document'));
        document.getElementById('reset_ability').value = vllid;
        document.getElementById('form_resetability').submit();
        return false;
    }

    return true;

    //document.getElementById('reset_ability').value=2201; document.getElementById('form_resetability').submit();
}

var sk1H = ["'1H Damage'","'1H Accuracy'","'1H Block'"];
var sk2H = ["'2H Damage'","'2H Accuracy'","'2H Parry'"];
var skDW = ["'DW Damage'","'DW Accuracy'","'DW Crit'"];

var amLi = ["'Light Acc'","'Light Crit'","'Light Speed'","'Light HP/MP'"];
var amHv = ["'Heavy Crush'","'Heavy Prcg'","'Heavy Slsh'","'Heavy HP'"];

function removeSkillSelected( arrayMain ){
    var chkre = true;


    for(var j=0;j<arrayMain.length;j++){
        var arrayAmSk = arrayMain[j];

        for(var i=0;i<arrayAmSk.length;i++){
            if(document.getElementById('toppane')){
                if(document.getElementById('toppane').querySelector('div[onmouseover*="'+arrayAmSk[i]+'"]')){
                    chkre = false;
                    document.getElementById('toppane').querySelector('div[onmouseover*="'+arrayAmSk[i]+'"]').onclick();
                }
            }
        }
    }

    return chkre;

}


function upskillnow(arraySkAm, nowIndexUp){
    var chkre = true;
    // for(var i=0;i<arraySkAm.length;i++){
    if(document.getElementById('botpane')){
        if(document.getElementById('botpane').querySelector('div[onmouseover*="'+arraySkAm[nowIndexUp]+'"]')){
            chkre = false;
            var ii = GM_getValue('doNowIndexUp');
            GM_setValue('doNowIndexUp',parseInt(ii)+1);
            document.getElementById('botpane').querySelector('div[onmouseover*="'+arraySkAm[nowIndexUp]+'"]').onclick();
        }
    }
    //  }


    return chkre;

}


function genRunOfTheDay(vName, vId, dMode, dGoUrl, vTop, vMColor){

    var linkx = document.createElement("a");
    linkx.href = "javascript:void(0)";
    var linkText = document.createTextNode(vName);
    linkx.appendChild(linkText);
    linkx.id = vId;
    linkx.style.position = "absolute";
    linkx.style.top = vTop;
    linkx.style.right = "10px";
    linkx.style.cursor = "pointer";

    if( GM_getValue('doModesetColor') === vMColor ){
        linkx.style.backgroundColor = '#9AF6FF';
    }

    document.getElementsByClassName('stuffbox csp')[0].appendChild(linkx);
    document.getElementById(vId).addEventListener('click', function() {
        GM_setValue('doMode',dMode);
        GM_setValue('doHrefMode',dGoUrl);
        GM_setValue('doModesetColor',vMColor);
        GM_setValue('doRemoveSelected',true);
        GM_setValue('doNowIndexUp',0);
        window.location.href = goUrlWeapon[GM_getValue('doHrefMode')];// 'http://hentaiverse.org/?s=Character&ss=ab&tree=twohanded';
        autoModeDW();
        //window.location.href = window.location.href;
    });
}


if(EnableChangeMode){

    if( !document.getElementById('monsterpane') ){

        if(document.querySelector('p.emsg')){
            GM_setValue('doMode','break');
        }


        //GM_setValue('doRemoveSelected',true);




        var doMode = GM_getValue('doMode');
        console.log('doMode = '+doMode);

        //0-staff , 1-one , 2-two , 3-dualwield , 4-niten , 5-cloth , 6-light , 7-heavy
        var goUrlWeapon = ['http://hentaiverse.org/?s=Character&ss=ab&tree=staff','http://hentaiverse.org/?s=Character&ss=ab&tree=onehanded','http://hentaiverse.org/?s=Character&ss=ab&tree=twohanded','http://hentaiverse.org/?s=Character&ss=ab&tree=dualwield','http://hentaiverse.org/?s=Character&ss=ab&tree=niten','http://hentaiverse.org/?s=Character&ss=ab&tree=cloth','http://hentaiverse.org/?s=Character&ss=ab&tree=light','http://hentaiverse.org/?s=Character&ss=ab&tree=heavy'];

        //0-cloth , 1-light , 2-heavy
        var goUrlArmor = ['http://hentaiverse.org/?s=Character&ss=ab&tree=cloth','http://hentaiverse.org/?s=Character&ss=ab&tree=light','http://hentaiverse.org/?s=Character&ss=ab&tree=heavy'];







        if(doMode === 'DW-L'){

            if(removeSkillSelected([sk1H,sk2H,amHv])){

                var doListHref = [1,2,5,7];
                if(resetSkill()){
                    GM_setValue('doHrefMode',parseInt(GM_getValue('doHrefMode'))+1);

                    if(GM_getValue('doHrefMode') == 5){
                        GM_setValue('doMode','DW-L-UP');
                        window.location.href = goUrlWeapon[3];

                    }else{

                        window.location.href = goUrlWeapon[doListHref[GM_getValue('doHrefMode')-1]];

                    }

                }
            }
        }else if(doMode === '2H-H'){
            if(removeSkillSelected([sk1H,skDW,amLi])){
                var doListHref = [1,3,5,6];
                if(resetSkill()){
                    GM_setValue('doHrefMode',parseInt(GM_getValue('doHrefMode'))+1);

                    if(GM_getValue('doHrefMode') == 5){
                        GM_setValue('doMode','2H-H-UP');
                        window.location.href = goUrlWeapon[2];
                    }else{
                        window.location.href = goUrlWeapon[doListHref[GM_getValue('doHrefMode')-1]];
                    }

                }
            }

        }else if(doMode === '1H-L'){
            if(removeSkillSelected([sk2H,skDW,amHv])){
                var doListHref = [2,3,5,7];
                if(resetSkill()){
                    GM_setValue('doHrefMode',parseInt(GM_getValue('doHrefMode'))+1);

                    if(GM_getValue('doHrefMode') == 5){
                        GM_setValue('doMode','1H-L-UP');
                        window.location.href = goUrlWeapon[1];

                    }else{
                        window.location.href = goUrlWeapon[doListHref[GM_getValue('doHrefMode')-1]];

                    }

                }
            }
        }

        ///// DW-L
        if(doMode === 'DW-L-UP'){
            if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2301"]') ){
                document.getElementById('unlock_ability').value=2301;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2302"]') ){
                document.getElementById('unlock_ability').value=2302;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2303"]') ){
                document.getElementById('unlock_ability').value=2303;
                document.getElementById('form_unlockability').submit();
            }else{
                if(upskillnow(skDW, GM_getValue('doNowIndexUp'))){
                    GM_setValue('doMode','DW-L-UP-A');
                    GM_setValue('doNowIndexUp',0);
                    window.location.href = goUrlWeapon[6];
                }
            }
        }else if(doMode === 'DW-L-UP-A'){
            if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3201"]') ){
                document.getElementById('unlock_ability').value=3201;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3202"]') ){
                document.getElementById('unlock_ability').value=3202;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3203"]') ){
                document.getElementById('unlock_ability').value=3203;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3204"]') ){
                document.getElementById('unlock_ability').value=3204;
                document.getElementById('form_unlockability').submit();
            }else{

                if(upskillnow(amLi, GM_getValue('doNowIndexUp'))){
                    GM_setValue('doMode','Done');
                }
                //window.location.href = goUrlWeapon[6];
            }

            ///////// 2H-H
        }else if(doMode === '2H-H-UP'){
            if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2201"]') ){
                document.getElementById('unlock_ability').value=2201;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2202"]') ){
                document.getElementById('unlock_ability').value=2202;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2203"]') ){
                document.getElementById('unlock_ability').value=2203;
                document.getElementById('form_unlockability').submit();
            }else{
                if(upskillnow(sk2H, GM_getValue('doNowIndexUp'))){
                    GM_setValue('doMode','2H-H-UP-A');
                    GM_setValue('doNowIndexUp',0);
                    window.location.href = goUrlWeapon[7];
                }
            }
        }else if(doMode === '2H-H-UP-A'){
            if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3301"]') ){
                document.getElementById('unlock_ability').value=3301;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3302"]') ){
                document.getElementById('unlock_ability').value=3302;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3303"]') ){
                document.getElementById('unlock_ability').value=3303;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3304"]') ){
                document.getElementById('unlock_ability').value=3304;
                document.getElementById('form_unlockability').submit();
            }else{
                if(upskillnow(amHv, GM_getValue('doNowIndexUp'))){
                    GM_setValue('doMode','Done');
                }
                //window.location.href = goUrlWeapon[6];
            }

            ///// 1H-L
        }else if(doMode === '1H-L-UP'){
            if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2101"]') ){
                document.getElementById('unlock_ability').value=2101;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2102"]') ){
                document.getElementById('unlock_ability').value=2102;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=2103"]') ){
                document.getElementById('unlock_ability').value=2103;
                document.getElementById('form_unlockability').submit();
            }else{
                if(upskillnow(sk1H, GM_getValue('doNowIndexUp'))){
                    GM_setValue('doMode','1H-L-UP-A');
                    GM_setValue('doNowIndexUp',0);
                    window.location.href = goUrlWeapon[6];
                }
            }
        }else if(doMode === '1H-L-UP-A'){
            if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3201"]') ){
                document.getElementById('unlock_ability').value=3201;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3202"]') ){
                document.getElementById('unlock_ability').value=3202;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3203"]') ){
                document.getElementById('unlock_ability').value=3203;
                document.getElementById('form_unlockability').submit();
            }else if( document.querySelector('div[onclick*="(\'unlock_ability\').value=3204"]') ){
                document.getElementById('unlock_ability').value=3204;
                document.getElementById('form_unlockability').submit();
            }else{
                if(upskillnow(amLi, GM_getValue('doNowIndexUp'))){
                    GM_setValue('doMode','Done');
                    //window.location.href = goUrlWeapon[6];
                }
            }
        }


        genRunOfTheDay("Dual Wielding - Light", 'setModeDW-L', 'DW-L', 0, '344px',1);
        genRunOfTheDay("Two Hand - Heavy", 'setMode2H-H', '2H-H', 0, '364px',2);
        genRunOfTheDay("One Hand - Light", 'setMode1H-L', '1H-L', 0, '384px',3);

    }
}


function genRunOfTheDay2(vName, vId, vVal, vTop){

    var linkx = document.createElement("a");
    linkx.href = "javascript:void(0)";
    var linkText = document.createTextNode(vName);
    linkx.appendChild(linkText);
    linkx.id = vId;
    linkx.style.position = "absolute";
    linkx.style.top = vTop;
    linkx.style.right = "10px";
    linkx.style.cursor = "pointer";

    if( GM_getValue('doEQsetColor') === vVal ){
        linkx.style.backgroundColor = '#9AF6FF';
    }

    document.getElementsByClassName('stuffbox csp')[0].appendChild(linkx);
    document.getElementById(vId).addEventListener('click', function() {
        GM_setValue('doModeEQSet','GO');
        GM_setValue('modeSetEQ',vVal);
        GM_setValue('doEQsetColor',vVal);
        //window.location.href = 'http://hentaiverse.org/?s=Character&ss=eq';
        if( (location.href + "") === 'http://hentaiverse.org/?s=Character&ss=eq'){
            GM_setValue('doEQClose',false);
            window.location.href = window.location.href;
        }else{
            GM_setValue('doEQClose',true);
            window.open('http://hentaiverse.org/?s=Character&ss=eq','_blank');
            setTimeout(function(){
                window.location.href = window.location.href;
            },(5000));
        }
    });

}

if(EnableChangeEquip){

    if( !document.getElementById('monsterpane') ){

        var doModeEQSet = GM_getValue('doModeEQSet');




        if(doModeEQSet === 'GO'){
            document.getElementById('equip_set').value=GM_getValue('modeSetEQ');
            document.getElementById('setform').submit();
            GM_setValue('doModeEQSet','Done');

        }else if(doModeEQSet === 'Done'){
            GM_setValue('doModeEQSet','End');
            if(GM_getValue('doEQClose')){
                window.close();
            }

        }


        if(document.querySelector('img[src="/y/equip/set1_on.png"]')){
            GM_setValue('doEQsetColor',1);
        }else if(document.querySelector('img[src="/y/equip/set2_on.png"]')){
            GM_setValue('doEQsetColor',2);
        }else if(document.querySelector('img[src="/y/equip/set3_on.png"]')){
            GM_setValue('doEQsetColor',3);
        }else if(document.querySelector('img[src="/y/equip/set4_on.png"]')){
            GM_setValue('doEQsetColor',4);
        }

        genRunOfTheDay2("Set 2 [Dw]", 'idSet2' , 2, '264px');
        genRunOfTheDay2("Set 3 [2H]", 'idSet3',3, '284px');
        genRunOfTheDay2("Set 4 [1H]", 'idSet4',4, '304px');


    }
}
