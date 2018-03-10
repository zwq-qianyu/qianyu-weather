// pages/search/search.js
Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  getCityName:function(e){
    //获取用户输入的内容
    //console.log(e.detail.value);

    //将信息保存到data中
    this.setData({cityName:e.detail.value});
  },
  searchWt:function(){
    //console.log(this.data.cityName);
    wx.navigateTo({
      url: '/pages/info/info?cityName='+this.data.cityName
    })
  }
})