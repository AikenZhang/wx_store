const { request } = require('../../utils/MiniPro.js')
const config = getApp().config
let mode = ''
const formData = (data) => {
  data.forEach((item,index) =>{
    if (item.is_pay == '0' && item.is_vaild == '0' && item.is_ship == '0' && item.is_end == '0') {
      item["mode"] = 1
    } else if (item.is_pay == '1' && item.is_ship == '1' && item.is_vaild == '0' && item.is_end == '0') {
      item["mode"] = 2
    } else if (item.is_pay == '1' && item.is_ship == '1' && item.is_vaild == '0' && item.is_end == '1') {
      item["mode"] = 3
    }
  })
  return data
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPre: config.imgPreSrc,
    orderInfo: [],
    mode: '',
    payInfo: {},
  },
  onLoad: function (options) {
    mode = options.mode
    this.selectComponent("#paging").init({
      type: mode
    })
  },
  //分页
  loadData(e) {
    let me = this
    let data = formData(e.detail)
    console.log(data)
    let temp = me.data.orderInfo
    temp.push(...data)
    me.setData({
      orderInfo: temp
    })
  },
  //删除订单
  del(e) {
    request({
      url:'product/order/deleteorder',
      data:{
        param:JSON.stringify({
          id:e.detail.id
        })
      }
    }).then((result) =>{
      if(result && result.code == '0') {
        this.setData({
          orderInfo:[]
        })
        this.selectComponent("#paging").init({
          type: mode
        })
      }
    })
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