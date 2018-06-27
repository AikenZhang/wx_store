//index.js
//获取应用实例
const { request } = require('../../utils/MiniPro.js')
const { Paging } = require('../../utils/util.js')
const paging = new Paging({
  url: 'product/product/getprolist'
})
const app = getApp()
Page({
  data: {
    motto: '欢迎进入FASHION衣妆',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods: [],
    _page: 1,
    _loadImg: false
  },
  onLoad: function () {
    let me = this
    paging.load(1).then((data) => {
      me.setData({
        goods: data
      })
    })
  },
  //分页加载
  loadDate: function () {
    let me = this
    let data = this.data
    let page = data._page + 1
    paging.load(page).then((result) => {
      let goods = data.goods
      console.log(goods)
      goods.push(...result)
      console.log(goods)
      me.setData({
        _page:page,
        goods: goods
      })
    })
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
  }
})
