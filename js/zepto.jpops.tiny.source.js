// zepto Alert Dialogs Plugin
// Version 1.0
// iancj
// 2013-12-04
// Visit http://github.com/iancj for more information

Zepto.jPops={
	conf:{
		//type:"alert",//弹窗类型
		content:"内容",//提示窗内容
		okButton:"确定",//确定按钮文字
		cancelButton:"取消",//取消按钮文字
		callback:null//回调函数
	},
	alert:function(options){
		var opts=$.extend(this.conf,options);//合并配置参数
			opts.type="alert";//设定为alert类型

		this.showAlerts(opts);
	},
	confirm:function(options){
		var opts=$.extend(this.conf,options);//合并配置参数
			opts.type="confirm";//设定为confirm类型

		this.showAlerts(opts);
	},
	showAlerts:function(opts){
		if($(".popup-container").length<1){
			var html='<section class="popup-container">'+
					'<a href="javascript:;" class="popup-close"></a>'+
					'<div class="popup-content"></div>'+
					'<div class="popup-panel">'+
						'<a href="javascript:;" class="popup-ok">'+opts.okButton+'</a>'+
						'<a href="javascript:;" class="popup-cancel">'+opts.cancelButton+'</a>'+
					'</div>'+
				'</section>';

			$("body").append(html);
		}
		this.showOverlay();
		
		var self=this,
			pop=$(".popup-container"),//主窗体
			btnOk=$(".popup-ok"),//确定按钮
			btnCancel=$(".popup-cancel"),//取消按钮
			btnClose=$(".popup-close");//关闭按钮

		switch(opts.type){//alert类型不显示取消按钮
			case "alert":btnCancel.hide();break;
			case "confirm":btnCancel.show();break;
		}

		pop.find(".popup-content").text(opts.content);
		// btnOk.text(opts.okButton);
		// btnCancel.text(opts.cancelButton);
		pop.show();
		pop.css({"marginTop":-$(".popup-container").height()/2});

		btnOk.click(function(){
			self.hideAlerts();
			if(opts.callback){
				opts.callback(true);
				opts.callback=null;
			}
			return false;
		});

		btnCancel.click(function(){
			self.hideAlerts();
			if(opts.callback){
				opts.callback(false);
				opts.callback=null;
			}
			return false;
		});

		btnClose.click(function(){
			self.hideAlerts();
			if(opts.callback){
				opts.callback(false);
				opts.callback=null;
			}
			return false;
		})

	},
	hideAlerts:function(){//隐藏弹窗
		$(".popup-container").hide();
		this.hideoverlay();
	},
	showOverlay:function(){//显示遮罩
		if($(".popup-overlay").length!=1){
			var html='<div class="popup-overlay"></div>';
			$("body").append(html);
			$(".popup-overlay").css({"height":$(window).height()});
		}
		$(".popup-overlay").show();
	},
	hideoverlay:function(){//隐藏遮罩
		$(".popup-overlay").hide();
	}
}