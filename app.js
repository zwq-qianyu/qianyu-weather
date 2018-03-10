App({
  onLaunch: function () {
    //函数会在程序加载时调用

    //获取用户的位置信息
    /*wx.getLocation({
      
      success: function(res){
        // success
        console.log(res.latitude);
         console.log(res.longitude);

        
        //latitude	纬度
        //longitude 经度
         
      }

    })*/

    //需要向该地址发送请求
    /*var api = "https://free-api.heweather.com/s6/weather?location=changsha&key=b9f4dd66660e481bb1f9445820421ed5";

    wx.request({
      //要发送请求的地址
      url: api,
      //要发送请求的请求参数
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
      }
    })*/

  },
  onShow: function () {
    
  },
  onHide: function () {
    
  },
  onError: function (msg) {
    
  }
  
})
