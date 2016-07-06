// ==UserScript==
// @name         THV Track Drop
// @namespace    http://axezor.blogspot.com
// @version      0.3
// @description  Enjoy :)
// @author       AxEzOr
// @match        http://hentaiverse.org/*
// --@--match        file:///C:/Users/AxEzOr/Downloads/Video/THV/The%20HentaiVerse.html
// @grant        none
// @icon http://g.e-hentai.org/favicon.ico
// ==/UserScript==



(function() {
    'use strict';

    var foundPony = false;

    var GBGM_KEY = "TTDp_";

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

    function axeccp(a1, b1) {
        var a = a1.id;
        var b = b1.id;
        //console.log('a = '+a);
        //console.log('b = '+b);
        var ax = [],
            bx = [];

        a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
            ax.push([$1 || Infinity, $2 || ""]);
        });

        b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
            bx.push([$1 || Infinity, $2 || ""]);
        });

        while (ax.length && bx.length) {
            var an = ax.shift();
            var bn = bx.shift();
            var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
            if (nn) return nn;
        }

        return ax.length - bx.length;
    }

    var enableDel = GM_getValue('enableDel');

    function addDataToJson(vKey, vValue, vColor) {

        if (GM_getValue('detailLogs'))
            var logs = JSON.parse(GM_getValue('detailLogs'));
        else
            var logs = [];

        var keyAlready = false;

        for (var i = 0; i < logs.length; i++) {

            if (logs[i].id === vKey) {
                logs[i].value = (parseInt(vValue) + parseInt(logs[i].value));

                keyAlready = true;
                break;
            }
        }

	var chkEquip = true;

	if(vColor === 'rgb(255, 0, 0)'){
		if(!vKey.startsWith('Legendary') && !vKey.startsWith('Magnificent')){
			chkEquip = false;
		}
	}

        if (!keyAlready && chkEquip) {
			    logs.push({
				"id" : vKey,
				"value" : vValue,
				"color" : vColor
			    });
			}

        GM_setValue('detailLogs', JSON.stringify(logs));

        GM_setValue('enableDel', false);
        GM_setValue('enableKeep', false);
        enableDel = false;
    }

    function keepTrackDrop(){
        if (GM_getValue('detailLogsHistory'))
            var logs = JSON.parse(GM_getValue('detailLogsHistory'));
        else
            var logs = [];

        if (GM_getValue('detailLogs'))
            var logsOld = JSON.parse(GM_getValue('detailLogs'));
        else
            var logsOld = [];

        console.log('logsOld = '+logsOld.length+' logs='+logs.length);
        var keyAlready = false;

        for(var j=0;j<logsOld.length;j++){
            keyAlready = false;
            for (var i = 0; i < logs.length; i++) {

                if (logs[i].id === logsOld[j].id) {
                    logs[i].value = (parseInt(logsOld[j].value) + parseInt(logs[i].value));
                    keyAlready = true;
                    break;
                }
            }

            if (!keyAlready) {
                logs.push({
                    "id" : logsOld[j].id,
                    "value" : logsOld[j].value,
                    "color" : logsOld[j].color
                });
            }
        }



        GM_setValue('detailLogsHistory', JSON.stringify(logs));
    }

    function setUsername(id, newValue, jsonObj) {
        for (var i = 0; i < jsonObj.length; i++) {
            if (jsonObj[i].id === id) {
                jsonObj[i].value = newValue;
                return;
            }
        }
    }

    var _table_ = document.createElement('table'),
        _tr_ = document.createElement('tr'),
        _th_ = document.createElement('th'),
        _td_ = document.createElement('td');

    // Builds the HTML Table out of myList json data from Ivy restful service.
    function buildHtmlTable(arr) {
        var table = _table_.cloneNode(false),
            columns = addAllColumnHeaders(arr, table);
        for (var i = 0, maxi = arr.length; i < maxi; ++i) {
            var tr = _tr_.cloneNode(false);
            var nextChk = false;
            for (var j = 0, maxj = columns.length; j < (maxj-1); ++j) {
                var td = _td_.cloneNode(false);
                var cellValue = arr[i][columns[j]];
                if (nextChk) {
                    td.style.fontWeight = 'bold';
                    //td.style.color = '#001dfb';
                    nextChk = false;
                }

                if(j===0 || j===1){
                    if(columns.length === 3){
                        td.style.color = arr[i][columns[2]];
                    }
                }

                if (cellValue === 'Credits' || cellValue === 'Precursor Artifact' || cellValue === '** Found Pony **') {
                    td.style.fontWeight = 'bold';
                    //td.style.color = '#001dfb';
                    nextChk = true;
                }
                td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }

    // Adds a header row to the table and returns the set of columns.
    // Need to do union of keys from all records as some records may not contain
    // all records
    function addAllColumnHeaders(arr, table) {
        var columnSet = [],
            tr = _tr_.cloneNode(false);
        for (var i = 0, l = arr.length; i < l; i++) {
            for (var key1 in arr[i]) {
                if (arr[i].hasOwnProperty(key1) && columnSet.indexOf(key1) === -1) {
                    columnSet.push(key1);
                    var th = _th_.cloneNode(false);
                    if (key1 === 'id') {
                        key1 = "Items";
                    } else if (key1 === 'value') {
                        key1 = "Count";
                    }

                    if(key1 === 'color'){
                        //skip
                    }else{
                        th.appendChild(document.createTextNode(key1));
                        tr.appendChild(th);
                    }
                }
            }
        }
        table.appendChild(tr);
        return columnSet;
    }

    function showOrHideDivTTD(id1, id2) {
        var txt2 = document.getElementById(id1).style.display;

        if(txt2 == 'none'){
            document.getElementById(id1).style.display = 'block';
            document.getElementById(id2).innerHTML = ' - ';

            if(document.getElementById(id1+'cls')){
                document.getElementById(id1+'cls').style.display = 'inherit';
            }


        }else{
            document.getElementById(id1).style.display = 'none';
            document.getElementById(id2).innerHTML = ' +';

            if(document.getElementById(id1+'cls')){
                document.getElementById(id1+'cls').style.display = 'none';
            }

        }


    }

    function genShowList(vDivId, vMDivId, vSFId, vKeyLogs, vTop, vBottom, vLeft, vRight, vTdAlign, vDisplay){


        var divPS = document.createElement("DIV");

        divPS.style.position = 'fixed';

        if(vTop !== '')
            divPS.style.top = vTop;

        if(vBottom !== '')
            divPS.style.bottom = vBottom;

        if(vLeft !== '')
            divPS.style.left = vLeft;

        if(vRight !== '')
            divPS.style.right = vRight;

        divPS.style.backgroundColor = '#E0D8C1';
        divPS.style.boxShadow = '-1px -1px 9px #888888';

        divPS.id = vDivId;
        divPS.style.zIndex = '2222';
        divPS.style.overflowY = 'auto';
        divPS.style.display = vDisplay;

        var aDiv = document.createElement("div");
        aDiv.id=vMDivId;
        aDiv.style.display = "none";

        var legHei = 15;
        try{
            legHei = legHei + (Object.keys(JSON.parse(GM_getValue(vKeyLogs))).length*17);
        }catch(ee){console.log(ee.message);}

        var maxHei = screen.height - 210;
        if(legHei > maxHei){
            legHei = maxHei;
        }

        aDiv.style.height = legHei+'px';

        aDiv.appendChild(buildHtmlTable(JSON.parse(GM_getValue(vKeyLogs)).sort(axeccp)));

        var aTR2 = document.createElement("tr");
        var aTD2 = document.createElement("td");

        aTD2.appendChild(aDiv);
        aTR2.appendChild(aTD2);

        var aTable = document.createElement("table");

        var aTR1 = document.createElement("tr");
        var aTD1 = document.createElement("td");
        aTD1.align = vTdAlign;
        var aButton = document.createElement("button");
        aButton.id = vSFId;
        var linkTextBtn = document.createTextNode(" + ");
        aButton.appendChild(linkTextBtn);
        aButton.addEventListener('click', function() {
            showOrHideDivTTD(vMDivId, vSFId);
        });


        if('right' === vTdAlign){
            var aButtonH = document.createElement("button");
            aButtonH.id = 'divTTDHiscls';
            var linkTextBtnH = document.createTextNode(" Clear ");
            aButtonH.appendChild(linkTextBtnH);
            aButtonH.addEventListener('click', function() {
                GM_setValue('detailLogsHistory', null);
            });
            aButtonH.style.marginRight = '8em';
            aButtonH.style.display = 'none';
            aTD1.appendChild(aButtonH);

            aTD1.appendChild(aButton);
            aTR1.appendChild(aTD1);

            aTable.appendChild(aTR1);
            aTable.appendChild(aTR2);

        }else{
            var cbFFx = document.createElement("INPUT");
            cbFFx.id = 'divTTDcls';
            cbFFx.setAttribute("type", "checkbox");
            cbFFx.style.marginLeft = '8px';
            cbFFx.style.display = 'none';

            cbFFx.addEventListener('change', function() {
                GM_setValue('showHistory', this.checked); 

                if(this.checked){
                    document.getElementById(mMainId).style.display = 'block';
                }else{
                    document.getElementById(mMainId).style.display = 'none';
                }
            });

            cbFFx.checked = GM_getValue('showHistory');

             aTD1.appendChild(aButton);
            aTD1.appendChild(cbFFx);

            aTR1.appendChild(aTD1);

            aTable.appendChild(aTR2);
            aTable.appendChild(aTR1);
        }

        divPS.appendChild(aTable);
        document.body.appendChild(divPS);
    }



    if (document.getElementById('monsterpane') !== null) {
        if (document.getElementById('monsterpane').innerHTML.indexOf('Choose the right answer based on the image below.') !== -1) {
            foundPony = true;
        }
    }

    if(document.querySelectorAll('#togpane_log td.t1').length > 0 && document.getElementById('quickbar') && !foundPony){

        if(enableDel){
            GM_setValue('detailLogs', null);
            GM_setValue('enableDel', false);
            GM_setValue('enableKeep', false);
            enableDel = false;
        }

        var elArray = document.querySelectorAll('#togpane_log td.t3b span');

        var lastIdTrack = GM_getValue('lastIdTrack');

        var chkCurrent = document.querySelectorAll('#togpane_log td.t1')[0].textContent;

        if(chkCurrent === "1"){
            lastIdTrack = "1";
        }

        if (lastIdTrack !== chkCurrent) {

            for (var i = 0; i < elArray.length; i++) {

                if (chkCurrent === elArray[i].parentNode.parentNode.childNodes[0].textContent) {

                    var dataTracking = elArray[i].textContent;

                    var repx = /^\[(\d){1,2}x[A-Za-z0-9_ ]*\]$/;

                    var cColor = elArray[i].style.color;

                    if (repx.test(dataTracking)) {

                        var nowC = dataTracking.match(/(\d){1,2}/g);

                        if (nowC !== null) {
                            var countItem = nowC[0];
                            var cNameText = dataTracking.match(/\ [A-Za-z0-9_ ]*/g)[0].trim();

                            addDataToJson(cNameText, countItem, cColor);

                        }

                    } else {
                        var countItem2 = 1;
                        var cNameText2 = dataTracking.replace('[', '').replace(']', '');

                        if(/^\d{1,}\ Credits$/.test(cNameText2)){
                            countItem2 = cNameText2.match(/\d{1,}/g)[0];
                            cNameText2 = 'Credits';
                        }

                        addDataToJson(cNameText2, countItem2, cColor);
                    }


                }
            }

            GM_setValue('lastIdTrack', chkCurrent);

        }

    }else{

        if(foundPony){

            if(GM_getValue('detailLogs')){
                addDataToJson('** Found Pony **', 1, 'blue');
            }

        }else{

            if(GM_getValue('detailLogs')){

                //function gen +
                genShowList('divTTDMain', 'divTTD', 'showFixedTTD', 'detailLogs', '', '35px', '25px', '', 'left', 'block');

                if(!GM_getValue('enableKeep')){
                    keepTrackDrop();
                    GM_setValue('enableKeep', true);
                }

                GM_setValue('enableDel', true);

                if(GM_getValue('detailLogsHistory')){
                    var mMainId = 'divTTDMainHis';
                    genShowList(mMainId, 'divTTDHis', 'showFixedTTDHis', 'detailLogsHistory', '14px', '', '', '25px', 'right', 'none');

                    if(GM_getValue('showHistory')){
                        document.getElementById(mMainId).style.display = 'block';
                    }

                }

            }

        }

    }

})();









