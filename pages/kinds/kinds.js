const { request } = require('../../utils/MiniPro.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kinds:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me =this
    request({
      url:'product/type/gettypelist'
    }).then((result) => {
      if (result && result.code == '0') {
        me.setData({
          kinds:result.data
        })
      }
    })
  },
  navto (e) {
    let types = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/goodSort/goodSort?_v='+Date.now()+'&&type='+types
    })
  }
})