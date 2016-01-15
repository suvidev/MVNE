// ==UserScript==
// @name         Banmanga
// @namespace    axezor.blogspot.com
// @version      0.3
// @description  Enjoy.:)
// @author       AxEzOr
// @match        http://www.banmanga.com/*
// @match        http://banmanga.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';


function showObj(){
    if(document.querySelector('.king-header-top')){
        document.querySelector('.king-header-top').style.opacity = '1';
    }
    
    if(document.querySelector('div.sharetop')){
        document.querySelector('div.sharetop').style.opacity = '1';   
    }
    
    if(document.querySelector('div.leftmenu')){
        document.querySelector('div.leftmenu').style.opacity = '1';
    }
}

function hideObj(){
    if(document.querySelector('.king-header-top')){
        document.querySelector('.king-header-top').style.opacity = '0';
    }
    
    if(document.querySelector('div.sharetop')){
        document.querySelector('div.sharetop').style.opacity = '0';   
    }
    
    if(document.querySelector('div.leftmenu')){
        document.querySelector('div.leftmenu').style.opacity = '0';
    }
}


if(document.querySelector('.king-header-top')){

 
    document.querySelector('.king-header-top').addEventListener('mouseover', function() {
        showObj();
    });

    document.querySelector('.king-header-top').addEventListener('mouseout', function() {
        hideObj();
    });


    if(document.querySelector('.king-header-top')){
        document.querySelector('.king-header-top').style.opacity = '0';
    }

    document.body.style.backgroundColor = 'black';

}



if(document.querySelector('content')){
    document.querySelector('content').style.backgroundColor = 'black';
}

if(document.querySelectorAll('content img').length > 0){
    var imgList = document.querySelectorAll('content img');

    for(var i=0;i<imgList.length;i++){
        imgList[i].style.maxHeight = '100%';
    }
}


if(document.querySelectorAll('div.king-q-view-main img').length > 0){
    var imgList2 = document.querySelectorAll('div.king-q-view-main img');

    for(var i2=0;i2<imgList2.length;i2++){
        imgList2[i2].style.maxHeight = '100%';
    }
}

if(document.querySelector('div.leftmenu')){

    document.querySelector('div.leftmenu').addEventListener('mouseover', function() {
        showObj();
    });

    document.querySelector('div.leftmenu').addEventListener('mouseout', function() {
        hideObj();
    });


    if(document.querySelector('div.leftmenu')){
        document.querySelector('div.leftmenu').style.opacity = '0';
    }

}

if(document.querySelector('div.sharetop')){
 document.querySelector('div.sharetop').style.opacity = '0';   
}
