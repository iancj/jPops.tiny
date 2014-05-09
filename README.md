##用法

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


##参数

- **title** 标题
- **icon** 标题显示的图标
- **content** 内容
- **okButton** 确定按钮文字
- **cancelButton** 取消按钮文字
- **callback** 回调函数