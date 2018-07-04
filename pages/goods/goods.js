const { request } = require('../../utils/MiniPro.js')
const config = getApp().config
//商品id
let prodId = ''
Page({
  data: {
    imgPre: config.imgPreSrc,
    productInfo:[],
    _collect:false
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'FASHION衣妆',
      path: 'pages/goods/goods?id=' + prodId,
      success: function (res) {
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
      }
    }
  },
  onLoad(option) {
    let me = this
    prodId = option.id
    //获取产品信息
    request({
      url: "product/product/getprolist",
      data: {
        param:JSON.stringify({
          prodId: prodId
        })
      }
    }).then((result) => {
      if (result && result.code == '0') {
        let data = result.data
        me.setData({
          productInfo:data[0]
        })
      }
    })
    //获取收藏信息
    request({
      url:"product/product/getCollectbyid",
      data:{
        param:JSON.stringify({
          id:prodId
        })
      }
    }).then((result) => {
       if (result && result.code == '0' && result.data == '1') {
         me.setData({
           _collect:true
         })
       }
    })
  },
  //显示尺寸选择弹窗
  modelShow: function () {
    this.selectComponent("#popUPs").show()
  },
  //跳转购物车
  toShopCar () {
    wx.switchTab({
      url:'/pages/shopCar/shopCar'
    })
  },
  toCollect () {
    let me = this
    let collect = this.data._collect
    //操作状态  0 取消收藏 1 添加收藏
    let code = '0'
    if (!collect) {
      code = '1'
    }else{
      code = '0'
    }
    request({
      url:'product/product/updateCollect',
      data:{
        param:JSON.stringify({
          id:prodId,
          code
        })
      }
    }).then((result) => {
      if (result && result.code == '0') {
        me.setData({
          _collect: !collect
        })
      }
    })
  },
  navto () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})