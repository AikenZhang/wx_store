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
    goodsInfo: []
  },
  loadData(e) {
    console.log(e)
    let me = this
    let data = e.detail
    let temp = me.data.goodsInfo
    temp.push(...data)
    me.setData({
      goodsInfo: temp
    })
  },
  onLoad () {
    this.selectComponent("#paging").init()
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
