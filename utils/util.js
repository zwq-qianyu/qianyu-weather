/*通过全局函数 getApp() 可以获取全局的应用实例*/
var app = getApp();

/*获取位置 
    - 并通过回调函数将位置信息返回
    - 回调函数会返回两个值：
        第一个 latitude 纬度
        第二个 longitude 经度
*/
function getCurrentLoaction(callback){

    //纬度
    var latitude = 40.1246996852;

    //经度
    var longitude = 116.673182721;

    //调用微信api加载位置信息
    wx.getLocation({

      success: function(res){
        latitude = res.latitude;
        longitude = res.longitude;
      },
      
      complete: function() {
        callback &&　callback(latitude , longitude);
      }
    })

}

/*获取城市名*/
function getCtiyName(callback){

    /*根据位置信息调取baidu API获取城市名 */
    getCurrentLoaction(function(latitude , longitude){

      var baiduApi = "https://api.map.baidu.com/geocoder/v2/";

        var cityName = "长沙";

        wx.request({
          url: baiduApi,
          data: {
              "location":latitude+","+longitude,
              "output":"json",
              "pois":1,
              "ak":"VNoOQ18pq9YegHNOMVr5GTgWG5fG8Wp6"
          },

          success: function(res){
             cityName = res.data.result.addressComponent.city;
          },

          complete: function() {
            callback && callback(cityName);
          }
        })

    });

}

/*
    根据城市名来加载天气信息
    cityName 要加载的城市的名字
    callback 用来将加载到的数据发回
*/
function getWeather(cityName,callback){

     //判断cityName是否存在
     if(!cityName){
         getCtiyName(function(cn){
            loadWeather(cn,callback);
         });
         
     }else{
         loadWeather(cityName,callback);
     }   

     
}


/*
    根据城市名加载天气信息，并通过回调函数返回
        回调函数会返回一个对象，对象的数据格式：
            状态 status
            城市 city
            日期 date
            更新时间 upTime
            温度 temp
            描述 desc
            各种指数 suggestion
 */
function loadWeather(cityName , callback){

    //根据城市名来加载天气信息
  var weAPI = "https://free-api.heweather.com/s6/weather";

    //发送请求
     wx.request({
       url: weAPI,
       data:{
        location:cityName,
        key:"b9f4dd66660e481bb1f9445820421ed5"
       },
       success: function(res){
        

         //将我们需要的数据提取出来
         /*
            状态 status
            城市 city
            日期 date
            更新时间 upTime
            温度 temp
            描述 desc
            各种指数 suggestion
          */
        //console.log(res.data.HeWeather5[0]);

        var wt = res.data.HeWeather6[0];

        //创建一个对象，来保存信息
        var wData = {
            status:"error"
        };

        //判断数据是否加载成功
        if(wt.status == "ok"){
            //解析数据
            wData = {
                status:"ok" , 
                city: wt.basic.location + " " + wt.basic.admin_area + " " + wt.basic.cnty,
                date: formatDate(),
                upTime: wt.update.loc.slice(-5),
                temp: wt.now.tmp,
                desc: wt.now.cond_txt,
                win: wt.now.wind_dir,
                lifestyle: wt.lifestyle
            }

        }

        //console.log(wData);
        //将数据返回
        callback && callback(wData);
       }
     })
}


//创建一个数组，保存星期
var dayArr = ["周日","周一","周二","周三","周四","周五","周六"];

//创建一个函数，对指定的日期进行格式化
//需要一个日期对象作为参数，返回一个字符串
//2月14日 周二
function formatDate(dt){
    //判断dt是否存在
    if(!dt){
        dt = new Date();
    }

    //获取月份
    var m = dt.getMonth() + 1;

    //获取日期
    var d = dt.getDate();

    //获取星期
    var day = dt.getDay();

    return m+"月"+d+"日 "+ dayArr[day];


}

module.exports = {
    getWeather:getWeather
}