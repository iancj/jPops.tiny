##用法

jPops.tiny 依赖于```zepto```，jPops主体js```zepto.jpops.tiny.source.js```,jPops样式```jpops.tiny.source.css```

**alert:**
```js
$.jPops.alert({
    content:"alert信息",
    callback:function(r){
        if(r){
            $("body").append("<div>alert:确定</div>")
        }
    }
});
```

**confirm:**
```js
$.jPops.confirm({
    content:"confirm信息",
    okButton:"ok",
    cancelButton:"cancel",
    callback:function(r){
        if(r){
            $("body").append("<div>confirm:确定</div>")
        }
        else{
            $("body").append("<div>confirm:取消</div>")
        }
    }
});
```

**<a href="http://iancj.com/jPops.tiny/" target="_blank">点击查看在线示例</a>**

##参数

- **content** 内容
- **okButton** 确定按钮文字
- **cancelButton** 取消按钮文字
- **callback** 回调函数