const { request } = require('../../utils/MiniPro.js')
const app = getApp();
let types = ''
let sort = ''
let key = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { title: '综合', key: "01" },
      { title: '热度', key: '02', sort: true },
      { title: '价格', key: '03', sort: true },
    ],
    goodsInfo: [],
    _loadImg: false
  },
  onLoad(options) {
    console.log(options)
    types = options.type
  },
  tabChange: function (e) {
    let detail = e.detail
    page = 1
    sort = detail.sort
    key = detail.key
    this.setData({
      goodsInfo:[]
    })
    this.selectComponent("#paging").init({
      type: types,
      key: key,
      sort: sort
    })
  },
  loadData (e) {
    console.log(e)
    let me = this
    let data = e.detail
    let temp = me.data.goodsInfo
    temp.push(...data)
    me.setData({
      goodsInfo:temp
    })
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