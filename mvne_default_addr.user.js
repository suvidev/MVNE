// ==UserScript==
// @name         MVNE default address detail
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://crmpreprod.catmvne.co.th/index.php?module=Accounts&view=Edit
// @match        http://crm.catmvne.co.th/index.php?module=Accounts&view=Edit
// @icon        http://bsspreprod.catmvne.co.th/images/crestel_favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var toDo = true;

    function makeDefault(){
        var returnChk = false;

        if(toDo){

            var tableArray = document.querySelectorAll('table tr th.blockHeader');
            var tableAddr = null;
            for(var i=0;i<tableArray.length;i++){
                if("Address Details" === tableArray[i].textContent){
                    tableAddr = tableArray[i].parentNode.parentNode.parentNode;
                    break;
                }
            }

            if(tableAddr){

                var fieldInputArray = tableAddr.querySelectorAll('input[data-fieldinfo*="mandatory"]');

                for(var j=0;j<fieldInputArray.length;j++){
                    fieldInputArray[j].value = '-';
                    returnChk = true;
                    toDo = false;
                }

            }
        }

        return returnChk;

    }


    if(!makeDefault()){
        setTimeout(makeDefault, 3000);
    }

    // Your code here...
})();
