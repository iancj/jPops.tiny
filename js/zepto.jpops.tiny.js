Zepto.jPops={conf:{content:"\u5185\u5bb9",okButton:"\u786e\u5b9a",cancelButton:"\u53d6\u6d88",callback:null},alert:function(a){var b=$.extend(this.conf,a);b.type="alert";this.showAlerts(b)},confirm:function(a){var b=$.extend(this.conf,a);b.type="confirm";this.showAlerts(b)},showAlerts:function(e){if($(".popup-container").length<1){var d='<section class="popup-container"><a href="javascript:;" class="popup-close"></a><div class="popup-content"></div><div class="popup-panel"><a href="javascript:;" class="popup-ok">'+e.okButton+'</a><a href="javascript:;" class="popup-cancel">'+e.cancelButton+"</a></div></section>";$("body").append(d)}this.showOverlay();var b=this,a=$(".popup-container"),c=$(".popup-ok"),f=$(".popup-cancel"),g=$(".popup-close");switch(e.type){case"alert":f.hide();break;case"confirm":f.show();break}a.find(".popup-content").text(e.content);a.show();a.css({marginTop:-$(".popup-container").height()/2});c.click(function(){b.hideAlerts();if(e.callback){e.callback(true);e.callback=null}return false});f.click(function(){b.hideAlerts();if(e.callback){e.callback(false);e.callback=null}return false});g.click(function(){b.hideAlerts();if(e.callback){e.callback(false);e.callback=null}return false})},hideAlerts:function(){$(".popup-container").hide();this.hideoverlay()},showOverlay:function(){if($(".popup-overlay").length!=1){var a='<div class="popup-overlay"></div>';$("body").append(a);$(".popup-overlay").css({height:$(window).height()})}$(".popup-overlay").show()},hideoverlay:function(){$(".popup-overlay").hide()}};