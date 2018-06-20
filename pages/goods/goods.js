const { request } = require('../../utils/MiniPro.js')
const config = getApp().config
Page({
  data: {
    imgPre: config.imgPreSrc,
    productInfo:[]
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'FASHION衣妆',
      path: 'pages/kinds/kinds',
      success: function (res) {
        wx.showToast({
          title: '成功',
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
    request({
      url: "product/getprolist",
      data: {
        param:{
          prodId: option.id
        }
      }
    }).then((result) => {
      if (result.code == '0') {
        let data = result.data
        me.setData({
          productInfo:data[0]
        })
      }
    })
  },
  //显示尺寸选择弹窗
  modelShow: function () {
    this.selectComponent("#popUPs").show()
  }
})