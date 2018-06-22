const config =getApp().config
const { request } = require('../../utils/MiniPro.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodInfo: [],
    _editorClass: 'icon-circle2yuanquan'//  icon-duigou1
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me =this
      request({
        url:'product/product/getshopCar'
      }).then((result) => {
        console.log(result)
          if (result && result.code == '0') {
            me.setData({
              goodInfo:result.data
            })
          }
      })
  },
  //选中操作
  itemselect(e) {
    let detail = e.detail
    let temp = this.data.selectGoods
    if (e.but == '1') {
      temp.push(detail)
    }
    console.log(detail)
  },
  //删除操作
  del() {
    console.log('343434')
  },
  // 全部选中
  slectAll() {
    let edClass = this.data._editorClass
    let data = this.data.goodInfo
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
  },
  //生成订单
  order () {
    let me =this
    let temp = []
    for (let i = 0; i < this.data.goodInfo.length; i++) {
      let shopCarItem = this.selectComponent("#fy_shopItem_" + i)
      console.log(shopCarItem.data._select)
      if (shopCarItem.data._select == '1') {
        temp.push({
          count:shopCarItem.data._count,
          id: shopCarItem.data.key
        })
      }
    }
    request({
      url: 'product/order/add',
      data: {
        param:JSON.stringify(temp)
      }
    }).then((result) => {
      console.log(result)
      if (result && result.code == '0') {
         wx.showToast({
           title: '提交成功',
         })
         setTimeout(()=> {
           wx.reLaunch({
             url: 'shopCar'
           })
         },2000)
      }
    })
  }
})