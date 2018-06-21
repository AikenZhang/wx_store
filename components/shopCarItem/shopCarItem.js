const config = getApp().config;
Component(
  {
    properties: {
      maxCount: {
        type:Number,
        value:10
      },
      count:{
        type:Number,
        value:0
      },
      src: {
        type:String,
        value:config.imgError
      },
      price:{
        type:Number,
        value:0
      },
      title:{
        type:String
      },
      select:{
        type:String,
        value:'0'
      },
      id: {
        type:String,
        value:'34'
      }
    },
    data: {
      _editorClass: 'icon-duigou1', // icon-circle2yuanquan
      select:false
    },
    methods: {
      //选中事件
      select (e) {
          let edClass = this.data._editorClass
          if (edClass == 'icon-duigou1') {
             this.selectDom(false)
          }else{
            this.selectDom(true)
          }
      },
      selectDom (b) {
          if (!b) {
            this.setData({
              _editorClass: 'icon-circle2yuanquan'
            })
            this.triggerEvent('select', {
              id: this.data.id,
              but: '0'
            })
          }else {
            this.setData({
              _editorClass: 'icon-duigou1'
            })
            this.triggerEvent('select', {
              id: this.data.id,
              but: '1'
            })
          }
      },
      //删除操作
      del () {
        this.triggerEvent('delete',this.data.id)
      }
    }
  }
)