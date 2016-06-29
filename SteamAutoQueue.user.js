// ==UserScript==
// @name         Steam Auto Skip Queue
// @namespace    https://www.google.com
// @version      0.1
// @description  :)
// @author       XG
// @require      http://code.jquery.com/jquery-latest.js
// @match        http://store.steampowered.com/*
// @updateURL       https://github.com/axezor/Steam-Next-Queue/raw/master/SteamAutoQueue.user.js
// @downloadURL     https://github.com/axezor/Steam-Next-Queue/raw/master/SteamAutoQueue.user.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var type = "fast";
var maxTime = 6000;
var minTime = 500;

if(type=="fast"){
    if ($('div.discover_queue_empty_refresh_btn').length) {
        $( "<div class='autoQueueBox' align='center'><div class='discover_queue_empty winter_sale' style=''><div class='discover_queue_empty_refresh_btn'><span class='btnv6_lightblue_blue btn_medium' id='instant_queue_btn'><span>ข้าม 3 คิว ทันที <b>คลิก</b> &gt;&gt;</span></span></div>" ).insertBefore( ".discovery_queue_apps" );
        $( "#instant_queue_btn" ).click(function() {
            GenerateQueue(0);
        });
    }
    if ($('span.queue_sub_text').length || $('span.finish_queue_text').length) {
        $J('#next_in_queue_form').submit();
    }
} else {
    if ($('span.queue_sub_text').length) {
        setTimeout(function(){ $J('#next_in_queue_form').submit(); }, (maxTime-minTime)*Math.random() + minTime);
    }
    if ($('span.finish_queue_text').length) {
        setTimeout(function(){ $J('#next_in_queue_form').submit(); }, (maxTime-minTime)*Math.random() + minTime);
    }
}

var GenerateQueue = function( queueNumber ){
    $J('#instant_queue_btn').html("<span>คิวชุดที่ " + ++queueNumber + " กำลังทำงาน...</span>");
    jQuery.post( 'http://store.steampowered.com/explore/generatenewdiscoveryqueue', { sessionid: g_sessionID, queuetype: 0 } ).done( function( data ){
        var requests = [];
        for( var i = 0; i < data.queue.length; i++ ){
            requests.push( jQuery.post( 'http://store.steampowered.com/app/10', { appid_to_clear_from_queue: data.queue[ i ], sessionid: g_sessionID } ) );
        }
        
        jQuery.when.apply( jQuery, requests ).done( function(){
            if( queueNumber < 3 ){
                GenerateQueue( queueNumber );
            } else {
                $J('#instant_queue_btn').html("<span>คิวทั้งหมด ทำงานเรียบร้อย โปรดกลับมาใหม่ในวันพรุ่งนี้</span>");
            }
        });
    });
};
