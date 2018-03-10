//引入util
var util = require("../../utils/util.js");
// pages/info/info.js
Page({
  data:{},
  onLoad:function(options){
    var _this = this;
   //获取上一个页面发送的请求参数
   //console.log(options.cityName);
   util.getWeather(options.cityName,function(wd){
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