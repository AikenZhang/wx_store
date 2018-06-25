// pages/order/index.js
const { request } = require('../../utils/MiniPro.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo: [],
    mode: ''
  },

  onLoad: function (options) {
    let mode = options.mode
    let me = this
    request({
      url: 'wx/user/getorder',
      data: {
        param: JSON.stringify({
          type: mode
        })
      }
    }).then((result) => {
      if (result && result.code == '0') {
        me.setData({
          orderInfo: result.data,
          mode
        })
      }
    })
  },
  //删除订单
  del() {
    console.log("sdfdsf")
  },
  //操作
  but(e) {
    let _id = e.currentTarget.dataset.id
    console.log(_id)
    let mode = this.data.mode
    //支付操作
    if (mode == '1') {

    } else if (mode == '2') {
      console.log('22')
      wx.showModal({
        title: '提示',
        content: '是否确认收货?',
        success(e) {
          if (e.confirm) {
            request({
              url: "wx/user/receiptOrder",
              data: {
                param: JSON.stringify({
                  _id
                })
              }
            }).then((result) => {
              if (result && result.code == '0') {
                  wx.switchTab({
                    url: '/pages/user/user',
                  })
              }
            })
          }
        }
      })

    }
  }
})