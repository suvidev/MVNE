// ==UserScript==
// @name         Steam Next Queue
// @namespace    http://axezor.blogspot.com
// @version      0.3
// @description  Enjoy :P
// @author       AxEzOr
// @match        http://store.steampowered.com/app/*
// @match        http://store.steampowered.com/explore/
// @match        http://store.steampowered.com/agecheck/app/*
// @grant        none
// @grant    GM_setValue
// @grant    GM_getValue
// ==/UserScript==
/* jshint -W097 */
'use strict';


//GM_setValue("autoNextSQ", false); 
//GM_setValue("nowRoundSQ", 0);

// Your code here...
function getNowRound(){
    
    if(typeof(GM_getValue("nowRoundSQ")) === 'undefined'){
        GM_setValue("nowRoundSQ", 0);
    }
    
    return GM_getValue("nowRoundSQ");
    
}

var autoNextSQ = GM_getValue("autoNextSQ");

var nowRoundSQ = getNowRound();//parseInt(GM_getValue("nowRoundSQ"));
var cRefresh = GM_getValue("cRefresh");

//console.log('nowRoundSQ = '+nowRoundSQ);
//console.log('autoNextSQ = '+autoNextSQ);
//console.log('cRefresh = '+cRefresh);

function goNextSQ(){
    if(autoNextSQ){

        if(document.getElementById('ageYear')){
            
            document.getElementById('ageYear').value = '1988';
            if(document.querySelector('a.btnv6_blue_hoverfade.btn_small')){
                document.querySelector('a.btnv6_blue_hoverfade.btn_small').click();
            }

        }else{
            if(document.getElementById('global_action_menu') && cRefresh < 3){
                if(document.getElementById('global_action_menu').querySelector('a.global_action_link')){
                    if(document.getElementById('global_action_menu').querySelector('a.global_action_link').id === ''){

                        window.location.href = window.location.href;
                        GM_setValue("cRefresh", parseInt(cRefresh) + 1); 
                        return;
                    }
                }
            }
            
            GM_setValue("cRefresh", 0); 
            
            if(document.querySelector('div.queue_actions_ctn div')){

                if(document.querySelector('div.queue_actions_ctn div').onclick){


                    if(document.querySelector('div.queue_actions_ctn div span')){
                        if(document.querySelector('div.queue_actions_ctn div span').textContent === 'Finish Queue' ||  document.querySelector('div.queue_actions_ctn div span').textContent === 'สิ้นสุดคิว'){
                            GM_setValue("autoNextSQ", false); 
                        }
                    }

                    setTimeout(function(){ 
                        document.querySelector('div.queue_actions_ctn div').click();
                    },(2000));



                }else{
                    GM_setValue("autoNextSQ", false); 
                }

            }
        }

    }
}

if(autoNextSQ){
    goNextSQ();
}else{
    
    if(nowRoundSQ <= 2){
        console.log('G1');
        if(document.getElementById('refresh_queue_btn')){
            GM_setValue("autoNextSQ", true); 
            GM_setValue("nowRoundSQ", parseInt(nowRoundSQ) + 1);
            document.getElementById('refresh_queue_btn').click();
        }
        
    }
    
}



function genRunBot(){
    var linkx = document.createElement("a");
    linkx.href = "javascript:void(0)";
    var linkText = document.createTextNode("Run");
    linkx.appendChild(linkText);
    linkx.id = "runstq";
    linkx.style.position = "absolute";
    linkx.style.top = "8px";
    linkx.style.right = "50px";
    linkx.style.cursor = "pointer";

    document.body.appendChild(linkx);
    document.getElementById('runstq').addEventListener('click', function() { 
        GM_setValue("autoNextSQ", true); 
        GM_setValue("nowRoundSQ", 1);
        window.location.href = window.location.href;

    });   
}

if(document.querySelector('div.queue_actions_ctn div') && !autoNextSQ){
    if(document.querySelector('div.queue_actions_ctn div').onclick){
        genRunBot();
    }
}
    

