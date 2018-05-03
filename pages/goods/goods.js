Page({
  data: {
    imgUrls: [
      'http://58.87.72.54/img/001.jpeg',
      'http://58.87.72.54/img/001.jpeg',
      'http://58.87.72.54/img/001.jpeg'
    ],
    title:"欢迎欢迎dsfsdfsdfsdfsdfsdfwerwerwe rwerwerwerwerwerwerwerwerwerwerwerwererwerwerwerwerwerwrwerwerw",
    price:"66.00",
    detaImgs:[
      {
        src:"http://58.87.72.54/img/001.jpeg"
      },
      {
        src: "http://58.87.72.54/img/001.jpeg"
      },
      {
        src: "http://58.87.72.54/img/001.jpeg"
      },
      {
        src: "http://58.87.72.54/img/001.jpeg"
      }
    ],
    goodId:"001203230",
    _collect:true
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'FASHION衣妆',
      path: 'pages/kinds/kinds',
      success: function (res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
      }
    }
  },
  share:function(){
  },
  //显示尺寸选择弹窗
  modelShow:function(){
    this.selectComponent("#popUPs").show()
  },
  modelClose: function() {
    this.selectComponent("#popUPs").hide()
  }
})