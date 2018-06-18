//index.js
//获取应用实例
const { request } = require('../../utils/MiniPro.js')
const req = (page) => {
  return request({
    url: "product/getprolist",
    data: {
      param: {
        page,
        pageSize: 10
      }
    }
  })
}
const app = getApp()
Page({
  data: {
    motto: '欢迎进入FASHION衣妆',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods: [],
    _page: 1,
    _isLoading: true,
    _loadImg: false
  },
  onLoad: function () {
    let me = this
    req(1).then((result) => {
      if (result && result.code == '0') {
        let data = result.data
        me.setData({
          goods: data
        })
      }
    })
  },
  //分页加载
  loadDate: function () {
    let me = this
    let data = this.data
    if (data._isLoading) {
      me.setData({
        _isLoading: false,
        _loadImg: true
      })
      let page = data._page + 1
      me.setData({
        _page: page
      })
      req(page).then((result) => {
        if (result && result.code == '0') {
          if (result.data.length > 0) {
            let goods = data.goods
            goods.push(...result.data)
            console.log(goods)
            me.setData({
              _isLoading: true,
              goods: goods
            })
          }
        }
        me.setData({
          _loadImg:false
        })
      })
    }
  },
  onPullDownRefresh: function () {
    console.log("sdsd");
  },
  naTo: function (e) {
    wx.navigateTo({
      url: '../goods/goods?id=' + e.target.dataset.id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  scroll: function (e) {
    //console.log(e)
  }
})
