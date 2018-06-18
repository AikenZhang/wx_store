
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
    selectInfo: [],
    selSize: '',
    selColor: '',
    selCount: ''
  },
  methods: {
    close: function () {
      this.triggerEvent("close")
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
      request({
        url: 'user/addshopcar',
        data: {
          param: JSON.stringify({
            id,
            size,
            color,
            count
          })
        }
      })
    }
  }
})