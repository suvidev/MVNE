// ==UserScript==
// @name         MVNE-SHOW-SI
// @namespace    http://kormajudpai.blogspot.com
// @version      0.3
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


    var GBGM_KEY = "MVSSI_";

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


    function addShowCheckbox(){

        if(!document.getElementById('ssciCB') && document.getElementById('menu')){

            var cbFFx = document.createElement("INPUT");
            cbFFx.style.position = 'fixed';
            cbFFx.style.right = '7px';
            cbFFx.id = 'ssciCB';
            cbFFx.setAttribute("type", "checkbox");
            cbFFx.style.marginLeft = '8px';
            cbFFx.style.display = 'block';

            cbFFx.addEventListener('change', function() {
                GM_setValue('showHistory', this.checked); 

                if(this.checked){
                    document.getElementById('menu').style.position = 'fixed';
                }else{
                    document.getElementById('menu').style.position = 'absolute';
                }
            });

            cbFFx.checked = GM_getValue('showHistory');

            if(GM_getValue('showHistory')){
                document.getElementById('menu').style.position = 'fixed';
                document.getElementById('menu').style.right = '7px';
            }

            document.getElementById('menu').appendChild(cbFFx);

        }
    }




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
        addShowCheckbox();
        //  }

        //console.log('loop 1');
        setTimeout(loopingFunction1, 3000);
    }


    loopingFunction1();






})();
