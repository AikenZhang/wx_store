Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { title: '综合',key:"01" },
      { title: '销量', key: '02' },
      { title: '热度', key: '03' },
      { title: '价格', key: '04' },
    ],
    goods: [
      {
        id: '0000100',
        src: "http://58.87.72.54/img/001.jpeg",
        tag: ["长袖", " 时尚"],
        price: "66.00",
        start: 3
      }, {
        id: '0000101',
        src: "http://58.87.72.54/img/001.jpeg",
        tag: ["长袖", " 时尚"],
        price: "66.00",
        start: 3
      }, {
        id: '0000102',
        src: "http://58.87.72.54/img/001.jpeg",
        tag: ["长袖", " 时尚"],
        price: "66.00",
        start: 3
      }, {
        id: '0000103',
        src: "http://58.87.72.54/img/001.jpeg",
        tag: ["长袖", " 时尚"],
        price: "66.00",
        start: 3
      }, {
        id: '0000104',
        src: "http://58.87.72.54/img/001.jpeg",
        tag: ["长袖", " 时尚"],
        price: "66.00",
        start: 3
      }, {
        id: '0000105',
        src: "http://58.87.72.54/img/001.jpeg",
        tag: ["长袖", " 时尚"],
        price: "66.00",
        start: 3
      }, {
        id: '0000106',
        src: "http://58.87.72.54/img/001.jpeg",
        tag: ["长袖", " 时尚"],
        price: "66.00",
        start: 3
      }, {
        id: '0000107',
        src: "http://58.87.72.54/img/001.jpeg",
        tag: ["长袖", " 时尚"],
        price: "66.00",
        start: 3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  tabChange: function(e) {
    console.log(e);
  }
})