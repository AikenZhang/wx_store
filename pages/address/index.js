// pages/address/index.js
const { request } = require('../../utils/MiniPro.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[
      {
        name:'张先生',
        tel:'18310471340',
        address:"北京市朝阳区康营家园",
        default:'1'
      }, {
        name: '张先生',
        tel: '18310471340',
        address: "北京市朝阳区康营家园"
      }
    ]
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
    wx.reLaunch({
      url: "/pages/address/addressEdit/index?id="+id
    })
  }
})