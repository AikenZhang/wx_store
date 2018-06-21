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
    _editorClass: 'icon-duigou1', // icon-circle2yuanquan
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me =this
      // request({
      //   url:'product/getshopcarlist'
      // }).then((result) => {
      //   console.log(result)
      //     if (result && result.code == '0') {
      //       me.setData({
      //         goodInfo:result.data
      //       })
      //     }
      // })
  },
  //选中操作
  itemselect(e) {
    let detail = e.detail
    console.log(detail)
  },
  //删除操作
  del() {
    console.log('343434')
  },
  // 全部选中
  slectAll() {
    let edClass = this.data._editorClass
    if (edClass == 'icon-duigou1') {
      this.setData({
        _editorClass: 'icon-circle2yuanquan'
      })
      this.selectComponent(".fy-shopCaritem").selectDom(false)
    } else {
      this.setData({
        _editorClass: 'icon-duigou1'
      })
      console.log(this.selectComponent(".fy-shopCaritem"))
      this.selectComponent(".fy-shopCaritem").selectDom(true)
    }
   
  }
})