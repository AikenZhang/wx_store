//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: '欢迎进入FASHION衣妆',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods:[],
    _startIndex:0,
    _isLoading:false,
    _loadImg:true
  },
  onLoad: function () {
      this.setData({
        goods:[
          {
            id:'0000100',
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
      })
  },
  loadDate:function(){
    if(this._isLoading){
      let data = this.data.goods;
      data.push({
        goodInfo: {
          src: "http://58.87.72.54/img/001.jpeg",
          tag: ["长袖", " 时尚"],
          price: "66.00",
          start: 3
        }
      })
      this.setData({
        goods: data
      })
    }
  },
  onPullDownRefresh:function(){
    console.log("sdsd");
  },
  naTo:function(){
    console.log("a");
    wx.navigateTo({
      url: '../home/home?id=45',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  scroll:function(e){
    console.log(e)
  }
})
