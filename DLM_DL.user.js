// ==UserScript==
// @name         DLM DL
// @namespace    http://axezor.blogspot.com
// @version      0.1
// @description  Enjoy :)
// @author       AxEzOr
// @match        http://www.dailymotion.com/video/*
// @match        http://www.dailymotion.com/embed/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    function doStepOne(){


        var emmd = document.querySelector('#player embed').outerHTML;

        var emd1 = emmd.substring(emmd.indexOf('config=')+7);
        emd1 = emd1.substring(0,emd1.indexOf('"'));

        var emDocor = decodeURIComponent(emd1);
        var finalTxt = emDocor.substring(emDocor.indexOf('"qualities":{'));

        finalTxt = finalTxt.substring(12,finalTxt.indexOf('"}]},'))+"}]}";

        finalTxt = finalTxt.substring(0,finalTxt.indexOf('],"auto"'));

        finalTxt = finalTxt +"]}";


        var jjss = JSON.parse(finalTxt);

        var aDiv = document.createElement("div");

        aDiv.style.position = "absolute";
        aDiv.style.top = "60px";
        aDiv.style.right = "80px";
        aDiv.style.backgroundColor = "bisque";

        if(typeof jjss[240] !== "undefined"){

            var atag = document.createElement("a");
            atag.href = jjss[240][0].url;
            var linkText = document.createTextNode("-240-");
            atag.appendChild(linkText);
            aDiv.appendChild(atag);

            aDiv.appendChild(document.createElement("br"));
            aDiv.appendChild(document.createElement("br"));

        }

        if(typeof jjss[380] !== "undefined"){
            var atag2 = document.createElement("a");
            atag2.href = jjss[380][0].url;
            var linkText2 = document.createTextNode("-380-");
            atag2.appendChild(linkText2);
            aDiv.appendChild(atag2);

            aDiv.appendChild(document.createElement("br"));
            aDiv.appendChild(document.createElement("br"));
        }

        if(typeof jjss[480] !== "undefined"){
            var atag3 = document.createElement("a");
            atag3.href = jjss[480][0].url;
            var linkText3 = document.createTextNode("-480-");
            atag3.appendChild(linkText3);
            aDiv.appendChild(atag3);

            aDiv.appendChild(document.createElement("br"));
            aDiv.appendChild(document.createElement("br"));
        }

        if(typeof jjss[720] !== "undefined"){
            var atag4 = document.createElement("a");
            atag4.href = jjss[720][0].url;
            var linkText4 = document.createTextNode("-720-");
            atag4.appendChild(linkText4);
            aDiv.appendChild(atag4);

            aDiv.appendChild(document.createElement("br"));
            aDiv.appendChild(document.createElement("br"));
        }

        if(typeof jjss[1080] !== "undefined"){
            var atag5 = document.createElement("a");
            atag5.href = jjss[1080][0].url;
            var linkText5 = document.createTextNode("-1080-");
            atag5.appendChild(linkText5);
            aDiv.appendChild(atag5);

            aDiv.appendChild(document.createElement("br"));
            aDiv.appendChild(document.createElement("br"));
        }


        document.body.appendChild(aDiv);

    }

    function doStepTwo(){



        var vArrayScript = document.getElementsByTagName('script');
        var mainIndex = 0;
        var foundScript;

        for (var aindex = 0; aindex < vArrayScript.length; aindex++) {
            if ( vArrayScript[aindex].innerHTML.indexOf('qualities') !== -1 ) {
                // console.log(aindex);
                mainIndex = aindex;

                foundScript = vArrayScript[mainIndex];
                break;
            }

        }

        if(mainIndex !== 0){


            var txtdata = foundScript.innerHTML;


            var finalTxt = txtdata.substring(txtdata.indexOf('"qualities":{'));

            finalTxt = finalTxt.substring(12,finalTxt.indexOf('"}]},'))+'"}]}';

            finalTxt = finalTxt.substring(finalTxt.indexOf('"240"'));
            //finalTxt = finalTxt.substring(0,finalTxt.indexOf('],"auto"'));

            finalTxt = "{"+finalTxt.substring(0,finalTxt.indexOf('}]}')+3);
            // finalTxt = finalTxt +"]}";

            //console.log(finalTxt);

            var jjss = JSON.parse(finalTxt);

            var aDiv = document.createElement("div");

            aDiv.style.position = "absolute";
            aDiv.style.top = "60px";
            aDiv.style.right = "80px";
            aDiv.style.backgroundColor = "bisque";

            if(typeof jjss[240] !== "undefined"){

                var atag = document.createElement("a");
                atag.href = jjss[240][0].url;
                var linkText = document.createTextNode("-240-");
                atag.appendChild(linkText);
                aDiv.appendChild(atag);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));

            }

            if(typeof jjss[380] !== "undefined"){
                var atag2 = document.createElement("a");
                atag2.href = jjss[380][0].url;
                var linkText2 = document.createTextNode("-380-");
                atag2.appendChild(linkText2);
                aDiv.appendChild(atag2);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));
            }

            if(typeof jjss[480] !== "undefined"){
                var atag3 = document.createElement("a");
                atag3.href = jjss[480][0].url;
                var linkText3 = document.createTextNode("-480-");
                atag3.appendChild(linkText3);
                aDiv.appendChild(atag3);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));
            }

            if(typeof jjss[720] !== "undefined"){
                var atag4 = document.createElement("a");
                atag4.href = jjss[720][0].url;
                var linkText4 = document.createTextNode("-720-");
                atag4.appendChild(linkText4);
                aDiv.appendChild(atag4);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));
            }

            if(typeof jjss[1080] !== "undefined"){
                var atag5 = document.createElement("a");
                atag5.href = jjss[1080][0].url;
                var linkText5 = document.createTextNode("-1080-");
                atag5.appendChild(linkText5);
                aDiv.appendChild(atag5);

                aDiv.appendChild(document.createElement("br"));
                aDiv.appendChild(document.createElement("br"));
            }


            document.body.appendChild(aDiv);


        }


    }




    if(document.querySelector('#player embed')){

        doStepOne();
        //console.log(jjss.);

    }else{

        doStepTwo();

    }

    var toDo = true;

function loopingFunction1() {

    if(document.querySelector('.dmp_ControlBar.dmp_will-transition') && toDo){
           toDo = false;
            document.querySelector('.dmp_ControlBar.dmp_will-transition').style.opacity = '0';

            document.querySelector('.dmp_ControlBar.dmp_will-transition').addEventListener('mouseover', function() {
                document.querySelector('.dmp_ControlBar.dmp_will-transition').style.opacity = '1';
            });

            document.querySelector('.dmp_ControlBar.dmp_will-transition').addEventListener('mouseout', function() {
                document.querySelector('.dmp_ControlBar.dmp_will-transition').style.opacity = '0';
            });
            
        }
    
    setTimeout(loopingFunction1, 5000);
}


loopingFunction1();




    // Your code here...
})();
