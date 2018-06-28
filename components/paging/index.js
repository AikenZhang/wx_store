const { request } = require('../../utils/MiniPro.js')
const { Paging } = require('../../utils/util.js')
const app = getApp();
let paging= ''
let types = ''
let sort = ''
let key = ''
let page = 1
let pageSize = 10
let param = ''
Component({
  properties:{
    url:{
      type:String,
      value:''
    },
    param:{
      type:String,
      value:''
    }
  },
  data:{
    _loadImg:false,
    _end:false
  },
  attached () {
    let url = this.data.url
    paging = new Paging({
      url
    })
  },
  methods:{
    //初始化首页
    init (params) {
      let me = this
      param = params
      page = 1
      paging.setParam(param)
      paging.setLoading(true)
      paging.load(1).then((data) => {
         me.triggerEvent('setData',data)
      })
    },
    loadData () {
      let me = this
      page++
      paging.beforeLoad(() => {
        me.setData({
          _loadImg: true
        })
      })
      paging.afterLoad(() => {
        me.setData({
          _loadImg: false
        })
      })
      paging.endLoad(() => {
        me.setData({
          _end:true
        })
      })
      paging.load(page).then((data) => {
        me.triggerEvent('setData',data)
      })
    }
  }
})