const globData = getApp().globalData
const { login, request } = require('../../utils/MiniPro.js')
//获取用户详细信息
const getUserInfo = () => {
  return request({
    url: '/user/getuserinfo'
  }).then((res) => {
    if (res.code == '0') {
      return res.data
    }
  })
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
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
                me.setData({
                  userInfo: data
                })
              })
            },
            fail: () => {
              login()
            }
          })
        }
      }
    })
  },
  //页面授权
  getUserInfo: (e) => {
    if (e.detail.encryptedData) {
      //模拟刷新当前页面
      wx.reLaunch({
        url: 'user'
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('sdfsd')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('sdfsd')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //编辑
  editor: function () {
    console.log("editor")
  }
})