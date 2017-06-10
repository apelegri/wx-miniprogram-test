Page({
  data: {
    src: []
  },
  onload: function () {
    wx.showNavigationBarLoading()
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: 'API IMAGE',
      success: function (res) {
        console.log(res)
      }
    })
  },
  listenerBtnChooseImage: function () {
    var that = this
    // Upload an image
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('success')
        that.setData({
          src: res.tempFilePaths
        })
        // Get image info
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res.width)
            console.log(res.height)
            console.log(res.path)
          }
        })
      }
    })
  },
  imgLongTap: function () {
    console.log('ok 1')
    wx.saveImageToPhotosAlbum({
      filePath: this.data.src[0],
      success(res) {
        wx.showToast({
          title: 'Save',
          icon: 'success',
          duration: 1500
        });
        wx.reLaunch({
          url: '/pages/index/index'
        });
      }
    })
  }
})