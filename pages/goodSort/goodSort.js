const { request } = require('../../utils/MiniPro.js')
const { Paging } = require('../../utils/util.js')
const paging = new Paging({
  url:'product/type/getprodsort'
})
const app=getApp();
let types = ''
let sort = ''
let key = ''
let page = 1
let pageSize = 10
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { title: '综合',key:"01" },
      { title: '热度', key: '02',sort:true },
      { title: '价格', key: '03',sort:true},
    ],
    goodsInfo:[],
    _loadImg:false
  },
  onLoad (options) {
    console.log(options)
     types = options.type
  },
  tabChange: function(e) {
    let detail = e.detail
    page = 1
    sort = detail.sort
    key = detail.key
    let me = this
    paging.setParam({
      type:types,
      key:key,
      sort: sort
    })
    paging.setLoading(true)
    paging.load(1).then((data) => {
     me.setData({
       goodsInfo: data
     })
    })
  },
  loadDate () {
    let me =this
    page++
    paging.setParam({
      type: types,
      key: key,
      sort:sort
    })
    paging.beforeLoad(() => {
        me.setData({
          _loadImg:true
        })
    })
    paging.afterLoad(() => {
      console.log("after")
      me.setData({
        _loadImg: false
      })
    })
    paging.load(page).then((data) => {
      me.setData({
        goodsInfo: data
      })
    })
  }

})