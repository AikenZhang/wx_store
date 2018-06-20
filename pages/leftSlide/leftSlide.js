// pages/leftSlide/leftSlide.js
const Touch = require('./leftSlideUtil.js')
const touch = new Touch()
const itemData = require('./mock.js')
Page({
  data: {
    itemData,
  },
  touchS: function (e) {  // touchstart
    let startX = touch.getClientX(e)
    startX && this.setData({ startX })
  },
  touchM: function (e) {  // touchmove
    let itemData = touch.touchM(e, this.data.itemData, this.data.startX)
    itemData && this.setData({ itemData })

  },
  touchE: function (e) {  // touchend
    const width = 150  // 定义操作列表宽度
    let itemData = touch.touchE(e, this.data.itemData, this.data.startX, width)
    itemData && this.setData({ itemData })
  },
  itemDelete: function (e) {  // itemDelete
    let itemData = touch.deleteItem(e, this.data.itemData)
    itemData && this.setData({ itemData })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})