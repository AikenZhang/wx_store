// pages/order/index.js
const { request } = require('../../utils/MiniPro.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo:[]
  },

  onLoad: function (options) {
    let mode = options.mode 
    console.log(options)
    let me = this
    request({
      url: 'wx/user/getorder',
      data:{
        param:JSON.stringify({
          type:mode
        })
      }
    }).then((result) => {
      if (result && result.code == '0') {
        me.setData({
            orderInfo:result.data
          })
        console.log('1')
      }
    })
  },
})