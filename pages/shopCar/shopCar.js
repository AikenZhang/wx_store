Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  editor:function(){
    this.data.show?this.setData({show:false}):this.setData({show:true});
  }
})