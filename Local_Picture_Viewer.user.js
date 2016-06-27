// ==UserScript==
// @name         Local Picture Viewer
// @namespace    http://axezor.blogspot.com/p/lpv.html
// @version      3.1.10
// @description  enjoy. :P
// @author       AxEzOr
// @match        file:///*
// @grant        none
// @date 2015-04-19
// @icon data:image/png;base64,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
// @updateURL       https://raw.githubusercontent.com/axezor/Local-Picture-Viewer/master/script/LocalPictureViewer.meta.js
// @downloadURL     https://raw.githubusercontent.com/axezor/Local-Picture-Viewer/master/script/LocalPictureViewer.user.js
// ==/UserScript==

var abc = "";

function hidepic() {
        if (abc.length === 0) {
                abc = document.getElementById("webpic").innerHTML;
                document.getElementById("webpic").innerHTML = "<center><button id='btnHidepic2' class='myButton' title='SHOW'>&nbsp;&nbsp;ShoW&nbsp;&nbsp;</button></center>";
        document.getElementById('btnHidepic2').addEventListener('click', function (){hidepic();});
        } else {
                document.getElementById("webpic").innerHTML = abc;
        document.getElementById('btnHidepic').addEventListener('click', function (){hidepic();});
                abc = "";
        }
}


function toggleFullScreen() {

        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
                if (document.documentElement.requestFullScreen) {
                        document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {

                        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                }
        } else {
                if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                }
        }
}

    function axeccp(a, b) {
        var ax = [],
            bx = [];

        a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
            ax.push([$1 || Infinity, $2 || ""])
        });
        b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
            bx.push([$1 || Infinity, $2 || ""])
        });

        while (ax.length && bx.length) {
            var an = ax.shift();
            var bn = bx.shift();
            var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
            if (nn) return nn;
        }

        return ax.length - bx.length;
    }




if(document.getElementsByTagName('body')[0].innerHTML.indexOf('icon up') !== -1){
    
    var axezorhello, axezorggg = true, axezoraxe = '', axezorair = {}, axezorasb = {}, axezorasg = [];

    if (document.getElementById('webpic') === null) {
        

        if(document.getElementById('table')){
            axezorhello = document.getElementById('table').cloneNode(axezorggg);
        }else if(document.getElementsByTagName('table').length>0){
            axezorhello = document.getElementsByTagName('table')[0].cloneNode(axezorggg);
        }

        
        var axezorasd = axezorhello.rows.length - 2;
        var j = 0;
        var c = 2;
        while (j < axezorasd) {
            axezorhello.rows[c].deleteCell(1);
            axezorhello.rows[c].deleteCell(1);
            c++;
            j++;

        }
        var axezormak = '';
        var axezorwvu = axezorhello.innerHTML;
        var axezordll = axezorwvu.split('<a class=\"icon file\"');
        var axezordlk = false;
        var i = 0;
        while (i < axezordll.length) {
            if (i === 0) {
                var axezoropc = axezordll[0];

                axezoraxe = axezoropc.substring(axezoropc.indexOf('<a class=\"icon up\"'), axezoropc.indexOf('>['));
                axezoraxe += ' style=\" opacity: 0.3;\" onmouseout=\"this.style.opacity=0.3;\" title=\"Upper\"  onmouseover=\"this.style.opacity=1;\"></a>';

                axezoropc = axezoropc.substring(axezoropc.indexOf('<a class=\"icon up\"'), axezoropc.indexOf(']</a>') + 5);


                //onclick=\"hidepic()\"
                axezormak = '<center><button id=\"btnHidepic\" class=\"myButton\" title=\"HIDE\">&nbsp;&nbsp;HidE&nbsp;&nbsp;</button></center><a href=\"http://axezor.blogspot.com/p/gen-web-pic.html\" id=\"pix\" target=\"_blank\" style=\"color: #FF7070;\">AxEzOr</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + axezoropc + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

                var axezorops = document.createElement('script');


                //var t = document.createTextNode('var abc=\"\"; function hidepic(){if(abc.length==0){abc=document.getElementById(\"webpic\").innerHTML; document.getElementById(\"webpic\").innerHTML = \"<center><button onclick=\'hidepic()\' class=\'myButton\' title=\'SHOW\'>&nbsp;&nbsp;ShoW&nbsp;&nbsp;</button></center>\";}else{document.getElementById(\"webpic\").innerHTML=abc;abc=\"\";}}     function toggleFullScreen() {  if ((document.fullScreenElement && document.fullScreenElement !== null) ||       (!document.mozFullScreen && !document.webkitIsFullScreen)) {    if (document.documentElement.requestFullScreen) {        document.documentElement.requestFullScreen();      } else if (document.documentElement.mozRequestFullScreen) {        document.documentElement.mozRequestFullScreen();      } else if (document.documentElement.webkitRequestFullScreen) {        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);      }    } else {      if (document.cancelFullScreen) {        document.cancelFullScreen();      } else if (document.mozCancelFullScreen) {        document.mozCancelFullScreen();      } else if (document.webkitCancelFullScreen) {        document.webkitCancelFullScreen();      }    }  }   ');
                //axezorops.appendChild(t);


                //document.getElementsByTagName('head')[0].appendChild(axezorops);


                var axezorkokk = ' .myButton {        -moz-box-shadow:inset 0px 39px 0px -24px #e67a73;        -webkit-box-shadow:inset 0px 39px 0px -24px #e67a73;        box-shadow:inset 0px 39px 0px -24px #e67a73;        background-color:#e4685d;        -moz-border-radius:4px;        -webkit-border-radius:4px;        border-radius:4px;        border:1px solid #ffffff;        display:inline-block;        cursor:pointer;        color:#ffffff;        font-family:arial;        font-size:15px;        padding:6px 15px;        text-decoration:none;        text-shadow:0px 1px 0px #b23e35;} .myButton:hover {        background-color:#eb675e;} .myButton:active {        position:relative;        top:1px;} #banner_floating_right_bottom {display:block;position: fixed;width: 160px; bottom: 20px; right:-32px; z-index: 9999999999;} .imgx {        width:            24px;        height:           24px;        background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAPUExURevi4vXx8Xs7PlwNEf///+9hCrkAAAAFdFJOU/////8A+7YOUwAAAHBJREFUeNqUkkESwCAIAyHm/29ui4joWFs5ITvEgEqpwQgvyAZwEV+gNkMVTTcDKOlkD7qRLEUmUIAyA0irWRrglm8qlgbQJ/GB/RggdSTQ/VRv6XJ0V8Bs922OYXIz40AY3n4ucbX20xc8/CWXAAMAhVQHRQAZfi0AAAAASUVORK5CYII=\');}   ',
                    axezorkok = document.head || document.getElementsByTagName('head')[0],
                    axezoryui = document.createElement('style');

                axezoryui.type = 'text/css';
                if (axezoryui.styleSheet) {
                    axezoryui.styleSheet.cssText = axezorkokk;
                } else {
                    axezoryui.appendChild(document.createTextNode(axezorkokk));
                }

                axezorkok.appendChild(axezoryui);



            } else {

                var axezorzzx = axezordll[i].toLowerCase();
                if (axezorzzx.match(/\.(jpg|jpeg|png|gif|exif|tiff|rif|bmp|dib|webp)/)) {

                    axezordll[i] = axezordll[i].replace('draggable=\"true\" href', '<img src');

                    if (axezordll[i].indexOf('icon dir') != -1) {
                        axezordll[i] = axezordll[i].replace('a><', 'img><br></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<');

                    } else {
                        axezordll[i] = axezordll[i].replace('a><', 'img><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<');

                    }

                    var axezorzxc = axezordll[i].substring(0, axezordll[i].indexOf('</img>'));
                    axezorzxc = axezorzxc.substring(axezorzxc.lastIndexOf('/') + 1, axezorzxc.lastIndexOf('.'));

                    axezorasb[i] = axezorzxc;
                    axezorasg.push(axezorzxc);
                    axezorair[axezorzxc] = axezordll[i];
                    axezordlk = axezorggg;

                }
            }
            i++;


        }
        //console.log(axezorasg);
        axezorasg.sort(axeccp);

        if (axezormak.indexOf('pix') != -1) {

            for (var z = 0; z < (i - 1); z++) {
                //console.log(axezorair[axezorasg[z]]);
                axezormak += axezorair[axezorasg[z]];
            }
        }


        if (axezordlk) {
            header.innerHTML = header.innerHTML + '<br/><br/><div id=\"divtop\"></div><div id=\"webpic\"></div><div id=\"banner_floating_right_bottom\" style=\"text-align:center;\">   <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAPUExURevi4vXx8Xs7PlwNEf///+9hCrkAAAAFdFJOU/////8A+7YOUwAAAHBJREFUeNqUkkESwCAIAyHm/29ui4joWFs5ITvEgEqpwQgvyAZwEV+gNkMVTTcDKOlkD7qRLEUmUIAyA0irWRrglm8qlgbQJ/GB/RggdSTQ/VRv6XJ0V8Bs922OYXIz40AY3n4ucbX20xc8/CWXAAMAhVQHRQAZfi0AAAAASUVORK5CYII=" alt=\"Pree Key F11\"  id=\"fullcc\" title=\"Full Screen Recommend Pree Key F11\" onmouseout=\"this.style.opacity=0.3;\"  onmouseover=\"this.style.opacity=1;\" style=\" opacity: 0.3;     cursor: pointer; background-color: white;\" />  <br/><br/><br/>' + axezoraxe + '<br/><input action=\"action\" type=\"button\" style=\" opacity: 0.3;\" class=\"myButton\" value=\"Back\" onclick=\"history.go(-1);\" onmouseout=\"this.style.opacity=0.3;\"  onmouseover=\"this.style.opacity=1;\" title=\"Back\"></div>';

            if (axezormak.indexOf('pix') != -1) {
                document.getElementById('webpic').innerHTML = document.getElementById('webpic').innerHTML + axezormak;
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'wheat';
                
                
                document.getElementById('btnHidepic').addEventListener('click', function (){hidepic();});
                document.getElementById('fullcc').addEventListener('click', function (){toggleFullScreen();});
                
                
            }


        }
    }



    
}



