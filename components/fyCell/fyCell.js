Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    arrow: {
      type:Boolean,
      value: true
    },
    icon:{
      type:String,
      value:''
    },
    title:{
      type:String,
      value:''
    },
    description:{
      type:String,
      value:''
    },
    navtoUrl:{
      type:String
    }
  },
  methods:{
    navto () {
      let navtoUrl = this.data.navtoUrl
      if (navtoUrl) {
        wx.navigateTo({
          url: navtoUrl,
        })
      }
    }
  }
})