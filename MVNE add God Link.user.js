// ==UserScript==
// @name         MVNE add God Link.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://crm.catmvne.co.th/index.php?module=Accounts&view=DashBoard
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
                    console.log( arrayLink[i].href);
                    arrayLink[i].href = arrayLink[i].href + '&mode=showDetailViewByMode&requestMode=full&tab_label=Customer Details';
                    arrayLink[i].textContent = arrayLink[i].textContent + ' SVT ';
                }
                
            }
            
        }
        
        
    }
    
    
    
    function loopingFunction1() {

    if(!document.getElementById('fbvdlv2')){
        genGodLink();  
    }

    //console.log('loop 1');
    setTimeout(loopingFunction1, 1000);
}


loopingFunction1();
    
    
})();
