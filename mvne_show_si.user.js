// ==UserScript==
// @name         MVNE-SHOW-SI
// @namespace    http://kormajudpai.blogspot.com
// @version      0.2
// @description  Enjoy :)
// @author       AxEzOr
// @match        http://bsspreprod.catmvne.co.th/*
// @match        http://bssom.catmvne.co.th/*
// @updateURL       https://github.com/axezor/Steam-Next-Queue/raw/master/mvne_show_si.user.js
// @downloadURL     https://github.com/axezor/Steam-Next-Queue/raw/master/mvne_show_si.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function genShowAccNo(){
       // console.log('...b.');
        //if(document.getElementById('accountinfolistbox-rows')){

        if( document.querySelectorAll('td div a[id*="serviceinstancename"]').length > 0 ){

            var ggArray = document.querySelectorAll('td div a[id*="serviceinstancename"]');

            for(var i=0;i<ggArray.length;i++){

                if(ggArray[i].textContent.indexOf('[[') === -1){

                    var nTxt = ggArray[i].href+'';
                    nTxt = nTxt.substring((nTxt.indexOf('c_strAccountNo=')+15));
                    nTxt = nTxt.substring(0, (nTxt.indexOf('&')));

                    ggArray[i].textContent = ggArray[i].textContent + ' [[' +nTxt+']]';

                }else{
                    break;
                }

            }

        }else if( document.querySelectorAll('td div a[id*="planname_"]').length > 0 ){

            var ggArray2 = document.querySelectorAll('td div a[id*="planname_"]');

            for(var i2=0;i2<ggArray2.length;i2++){

                if(ggArray2[i2].textContent.indexOf('[[') === -1){

                    var nTxt2 = ggArray2[i2].href+'';
                    nTxt2 = nTxt2.substring((nTxt2.indexOf('c_strAccountNo=')+15));
                    nTxt2 = nTxt2.substring(0, (nTxt2.indexOf('&')));

                    ggArray2[i2].textContent = ggArray2[i2].textContent + ' [[' +nTxt2+']]';

                }else{
                    break;
                }

            }

        }
        


        //}

    }

    function loopingFunction1() {
        //console.log('a....');
        // if(!document.getElementById('fbvdlv2')){
        genShowAccNo();  
        //  }

        //console.log('loop 1');
        setTimeout(loopingFunction1, 3000);
    }


    loopingFunction1();






})();
