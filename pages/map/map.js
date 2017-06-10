// pages/map/map.js
Page({
  data: {
    location:{}// used to manipulate the map in the view
  },
  onLoad: function () {
    wx.showNavigationBarLoading()
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: 'API MAP',
      success: function (res) {
        console.log(res)
      }
    })
    wx.hideNavigationBarLoading()
  },
  onLoad: function (e) {
   this.setData({
     location: { 
       latitude: "31.232711", 
       longitude: "121.47575499999994", 
       scale: "9"
     },
    })
   wx.showNavigationBarLoading()
  },
  getLocation: function(e) {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(res)
        that.setData({
          location: { 
            latitude: latitude, 
            longitude: longitude,
            scale: "14",
          },
          markers: [{
            iconPath: "/images/marker.png",
            id: 0,
            latitude: latitude,
            longitude: longitude,
            width: 33,
            height: 50,
            callout: { 
              content: "My location", 
              fontSize: 15,
              borderRadius: 50, 
              bgColor: "#34495E",
              color: "#95A5A6",
              display: "ALWAYS", 
              padding: 10 
            }
          }]      
        })  
       }
     })
   },
   tencentLocation: function (e) {
     var latitude = "23.128994";
     var longitude = "113.253250";
     this.setData({
       location: { 
         latitude:latitude, 
         longitude:longitude,
         scale: "9" 
       },
       markers: [{
         iconPath: "/images/wechat-marker.png",
         id: 0,
         latitude:latitude,
         longitude:longitude,
         width: 30,
         height: 50,
       }]
     })
   }
})