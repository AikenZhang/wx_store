// pages/user/collect/index.js
const { request } = require('../../../utils/MiniPro.js')
const config = getApp().config
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectInfo:[],
    imgPre: config.imgPreSrc
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectComponent('#paging').init()
  },
  loadData (e) {
    let me = this
    let data = e.detail
    let temp = me.data.collectInfo
    temp.push(...data)
    me.setData({
      collectInfo:temp
    })
  },
  del (e) {
    let id = e.currentTarget.dataset.id
    request({
      url:'wx/user/deletecollect',
      data:{
        param:JSON.stringify({
          id
        })
      }
    }).then((result) =>{
      if (result && result.code == '0'){
        wx.showToast({
          title: '删除成功',
          icon:'success'
        })
        this.setData({
          collectInfo:[]
        })
        this.selectComponent('#paging').init()
      }
    })
    console.log(e.currentTarget.dataset)
  },
  navto (e) {
    wx.navigateTo({
      url: '/pages/goods/goods?id=' + e.currentTarget.dataset.id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})