const { request } = require('../../utils/MiniPro.js')
Component({
  properties: {
    goodInfo: {
      type: Object
    },
    color: {
      type: Array,
      value: ['默认']
    },
    imgPre: {
      type: String
    },
    maxCount: {
      type: Number
    }
  },
  data: {
    top: 0,
    animationData:"",
    _show:false,
    selectInfo: [],
    selSize: '',
    selColor: '',
    selCount: ''
  },
  methods: {
    show: function () {
      let me = this
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      animation.top(0).step();
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
      let me = this
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      animation.top("100%").step();
      Promise.resolve().then(() => {
        me.setData({
          _show: false
        })
      }).then(() => {
        me.setData({
          animationData: animation.export()
        })
      })
    },
    close: function () {
      this.hide()
    },
    selectSize(key) {
      this.setData({
        selSize: key.detail
      })
    },
    selectColor(key) {
      this.setData({
        selColor: key.detail
      })
    },
    selectCount(e) {
      this.setData({
        selCount: e.detail.number
      })
    },
    //添加购物车
    selected(e) {
      let id = e.target.dataset.id
      let me = this
      let size = me.data.selSize
      let count = me.data.selCount
      let color = me.data.selColor
      let title = me.data.goodInfo.title
      request({
        url: 'product/product/addshopcar',
        data: {
          param: JSON.stringify({
            id,
            size,
            color,
            count,
            title,
            price: me.data.goodInfo.price,
            src: me.data.goodInfo.files[0].src
          })
        }
      }).then(() => {
         me.hide()
      })
    }
  }
})