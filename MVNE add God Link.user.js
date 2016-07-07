// ==UserScript==
// @name         MVNE add God Link.
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://crm.catmvne.co.th/index.php*
// @match        http://crmpreprod.catmvne.co.th/index.php*
// @--match        http://crm.catmvne.co.th/index.php?module=Accounts&view=DashBoard
// @--match        http://crmpreprod.catmvne.co.th/index.php?module=Accounts&view=DashBoard
// @updateURL       https://github.com/suvidev/MVNE/raw/master/MVNE%20add%20God%20Link.user.js
// @downloadURL     https://github.com/suvidev/MVNE/raw/master/MVNE%20add%20God%20Link.user.js
// @icon        http://bsspreprod.catmvne.co.th/images/crestel_favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...


    function genGodLink(){

        if(document.getElementById('CustomerList').querySelectorAll('td a').length > 0){

            var arrayLink = document.getElementById('CustomerList').querySelectorAll('td a');

            for(var i=0;i<arrayLink.length;i++){

                if( arrayLink[i].href.indexOf('&tab_label') === -1 ){
                    //console.log( arrayLink[i].href);
                    arrayLink[i].href = arrayLink[i].href + '&mode=showDetailViewByMode&requestMode=full&tab_label=Customer Details';
                    arrayLink[i].textContent = arrayLink[i].textContent + ' [SVT] ';
                }

            }

        }

    }

    function allCustomerLink(){


        var arrayCusotmer = document.querySelectorAll('a[data-original-title="Customers"]');

        if(arrayCusotmer.length > 0 ){

            for(var i2=0;i2<arrayCusotmer.length;i2++){

                if( arrayCusotmer[i2].href.indexOf('&tab_label') === -1 ){
                    //console.log( arrayCusotmer[i2].href);
                    arrayCusotmer[i2].href = arrayCusotmer[i2].href + '&mode=showDetailViewByMode&requestMode=full&tab_label=Customer Details';
                    arrayCusotmer[i2].textContent = arrayCusotmer[i2].textContent + ' [SVT] ';
                }

            }

        }

    }



    function loopingFunction1() {

        if( (window.location.href+'') === 'http://crm.catmvne.co.th/index.php?module=Accounts&view=DashBoard' || (window.location.href+'') === 'http://crmpreprod.catmvne.co.th/index.php?module=Accounts&view=DashBoard' ){
            genGodLink();  
        }
        
        allCustomerLink();

        //console.log('loop 1');
        setTimeout(loopingFunction1, 1000);
    }


    loopingFunction1();


})();
