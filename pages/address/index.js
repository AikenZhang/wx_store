// pages/address/index.js
const { request } = require('../../utils/MiniPro.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[]
  },
  onLoad () {
    let me = this
    request({
      url:'wx/user/getaddress'
    }).then((result) => {
       if(result && result.code == '0') {
          me.setData({
            userInfo:result.data
          })
       }
    })
  },
  nato (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: "/pages/address/addressEdit/index?id="+id
    })
  },
  add () {
    wx.navigateTo({
      url: "/pages/address/addressAdd/index"
    })
  }
})