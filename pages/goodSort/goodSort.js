const app=getApp();
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
    goods:app.globalData.imgList
  },
  tabChange: function(e) {
    
  }
})