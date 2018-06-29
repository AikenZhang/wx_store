const { request } = require('../../utils/MiniPro.js')
const config = getApp().config
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPre: config.imgPreSrc,
    orderInfo: [],
    mode: '',
    payInfo: {
      wx: '',
      wxQRcode: '',
      orderId: ''
    },
  },
  onLoad: function (options) {
    let mode = options.mode
    this.selectComponent("#paging").init({
      type: mode
    })
  },
  //分页
  loadData(e) {
    console.log(1)
    let me = this
    let data = e.detail
    let temp = me.data.orderInfo
    temp.push(...data)
    me.setData({
      orderInfo: temp
    })
  },
  //删除订单
  del() {
    console.log("sdfdsf")
  },
  pay(e) {
    let me = this
    let userId = e.detail.userId
    let orderId = e.detail.orderId
    console.log(e)
    request({
      url: 'wx/user/getinfobyuserid',
      data: {
        param: JSON.stringify({
          userId: userId
        })
      }
    }).then((result) => {
      if (result && result.code == '0') {
        me.setData({
          payInfo: {
            wx: result.data.wx,
            wxQRcode: result.data.wxQRcode,
            orderId: orderId
          }
        })
        me.selectComponent("#pay").show()
      }
    })
  },
  //复制信息
  copy(e) {
    let data = e.currentTarget.dataset.value
    wx.setClipboardData({
      data,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  //关闭支付信息
  close() {
    this.selectComponent("#pay").hide()
  }
})