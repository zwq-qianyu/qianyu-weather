//使用require来引入外部的js文件
var util = require("../../utils/util.js");

Page({
  //数据，data中的内容，可以在其对应的页面中直接访问
  data:{
      
  },

  onLoad:function(options){
    //创建一个变量，来引入外部的this
    var _this = this;

    //这个函数会在当前页面加载时调用
    util.getWeather(null , function(wd){
      _this.setData({wd:wd});
    });
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
  
})