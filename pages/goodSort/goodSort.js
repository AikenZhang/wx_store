const { request } = require('../../utils/MiniPro.js')
const app=getApp();
let types = ''
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
    types:''
  },
  onLoad (options) {
    console.log(options)
     this.setData({
       types: options.type
     })
  },
  tabChange: function(e) {
  
    let detail = e.detail
    let me = this
    let types = this.data.types
    request({
      url:"product/type/getprodsort",
      data:{
        param: JSON.stringify({
          type: types,
          key: detail.key,
          sort: detail.sort
        })
      }
    }).then((result) =>{
        if(result && result.code == '0') {
          me.setData({
            goodsInfo:result.data
          })
        }
    })
  }
})