const config =getApp().config
const { request } = require('../../utils/MiniPro.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodInfo: [{
      price: 1000,
      maxCount: 12,
      title: "夏日三家套",
      id: '2342342423',
      count: 3
    }, {
      price: 1000,
      maxCount: 12,
      title: "夏日三家34套",
      id: '2342342433423',
      count: 3
    }, {
      price: 1000,
      maxCount: 12,
      title: "夏日三家34套",
      id: '2342342433423',
      count: 3
    }, {
      price: 1000,
      maxCount: 12,
      title: "夏日三家34套",
      id: '2342342433423',
      count: 3
    }, {
      price: 1000,
      maxCount: 12,
      title: "夏日三家34套",
      id: '2342342433423',
      count: 3
    }, {
      price: 1000,
      maxCount: 12,
      title: "夏日三家34套",
      id: '2342342433423',
      count: 3
    }, {
      price: 1000,
      maxCount: 12,
      title: "夏日三家34套",
      id: '2342342433423',
      count: 3
    }, {
      price: 1000,
      maxCount: 12,
      title: "夏日三家34套",
      id: '2342342433423',
      count: 3
    }, {
      price: 1000,
      maxCount: 12,
      title: "夏日三家34套",
      id: '2342342433423',
      count: 3
    }],
    _editorClass: 'icon-circle2yuanquan', //  icon-duigou1
    info: {
      title:'33',
      color:"2",
      types:'33',
      price:120,
      src: config.imgPreSrc +'46c8eca0-7216-11e8-aa92-459b3731610c.jpg'
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me =this
      request({
        url:'product/getshopcarlist'
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
      url: 'product/getshopcarlist',
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