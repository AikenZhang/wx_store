const globData = getApp().globalData
const { login, request } = require('../../utils/MiniPro.js')
//获取用户详细信息
const getUserInfo = () => {
  return request({
    url: 'wx/user/getuserinfo'
  }).then((res) => {
    if (res && res.code == '0') {
      return res.data
    }
  })
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    _login: false

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me = this
    wx.getSetting({
      success: res => {
        //确认已经授权
        if (res.authSetting['scope.userInfo']) {
          wx.getStorage({
            key: 'token',
            success: function(res) {
              me.setData({
                _login: true
              })
              getUserInfo().then((data) => {
                if (data) {
                  me.setData({
                    user: {
                      img: data.imgUrl,
                      name: data.nickNam
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  //页面授权
  getUserInfo: (e) => {
    if (e.detail.encryptedData) {
      //登陆
      wx.showLoading({
        title: '正在登陆',
      })
      login().then(() => {
        wx.hideLoading()
        //模拟刷新当前页面
        wx.reLaunch({
          url: 'user'
        })
      })
    }
  },
  //编辑
  editor: function () {
    console.log("editor")
  },
  getOrder (e) {
    let mode = e.currentTarget.dataset.mode
    console.log(e)
    wx.navigateTo({
      url: '/pages/order/index?mode='+mode,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})