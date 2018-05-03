Component({
  data: {
    top: 0,
    animationData:"",
    _show:false
  },
  methods: {
    show: function () {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      animation.top(0).step();
      let me=this;
      Promise.resolve().then(()=>{
        me.setData({
          _show: true
        })
      }).then(()=>{
        me.setData({
          animationData: animation.export()
        })
      })
    },
    hide: function () {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      animation.top("100%").step();
      this.setData({
        animationData: animation.export()
      })
    },
    touchMove:function(e){
    }
  }
})