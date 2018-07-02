const config =getApp().config
const { request } = require('../../utils/MiniPro.js')
//数量改变频率拦截器实例
let  _countTimer = ''
const sum = (arr) => {
  let theSum = 0
  for(let i =0;i<arr.length;i++){
     theSum += parseInt(arr[i].sum)
  }
  return theSum
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodInfo: [],
    _editorClass: 'icon-circle2yuanquan',//  icon-duigou1
    sum:0,
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    let me =this
      request({
        url:'product/product/getshopCar'
      }).then((result) => {
          if (result && result.code == '0') {
            me.setData({
              goodInfo:result.data
            })
            me._sum()
          }
      })
  },
  //选中操作
  itemselect(e) {
    this._sum()
  },
  //删除操作
  del(e) {
    request({
      url:'product/product/deleteShopCar',
      data: {
        param:JSON.stringify({
          id:[e.detail]
        })
      }
    }).then((result) =>{
      if (result && result.code == '0') {
        wx.reLaunch({
          url: '/pages/shopCar/shopCar'
        })
      }
    })   
  },
  // 全部选中
  slectAll() {
    let edClass = this.data._editorClass
    let data = this.data.goodInfo
    
    //对勾操作
    if (edClass == 'icon-duigou1') {
      this.setData({
        _editorClass: 'icon-circle2yuanquan'
      })
      for (let i = 0; i < data.length; i++) {
        this.selectComponent("#fy_shopItem_"+i ).selectDom(false)
     }
    } else {
      this.setData({
        _editorClass: 'icon-duigou1'
      })
      for (let i = 0; i < data.length;i++){
        this.selectComponent("#fy_shopItem_"+i).selectDom(true)
      }
    }
    this._sum()
  },
  //选取 购物车
  _theSelectd () {
    let me = this
    let temp = []
    for (let i = 0; i < this.data.goodInfo.length; i++) {
      let shopCarItem = this.selectComponent("#fy_shopItem_" + i)
      if (shopCarItem.data._select == '1') {
        temp.push({ 
          id: shopCarItem.data.key,
          sum: shopCarItem.data.sum
        })
      }
    }
    return temp
  },
  //计算总钱数
  _sum() {
    let data = this._theSelectd()
    this.setData({
      sum: sum(data)
    })
  },
  //数量变化 钱数也变化
  numberChange  (e) {
    //总价的变化
    this._sum()
    //更新数据库购物车数量
    let data = e.detail.shopCarItem.data
    if (_countTimer) {
      clearTimeout(_countTimer)
    }
    _countTimer = setTimeout(() => {
       request({
         url:"product/product/updateshopcarcount",
         data:{
           param:JSON.stringify({
             id: data.key,
             count: data._count
           })
         }
       })
    },500)
  },
  //生成订单
  order () {
    let temp = []
    let selectd = this._theSelectd()
    for(let i=0;i<selectd.length;i++){
      temp.push(selectd[i].id)
    }
    if (temp.length > 0) {
      wx.navigateTo({
        url: '../confirmOrder/index?temp=' + temp.join(","),
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请选择要结算的商品'
      })
    }
  }
})