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
      goodsInfo:{
        type:Object
      }, 
      key: {
        type:String,
        value:'34'
      }
    },
    data: {
      _editorClass: 'icon-circle2yuanquan', //  icon-duigou1
      select:false,
      _count:0,
      _select:'0'
    },
    ready() {
      this.setData({
        _count:this.data.count
      })
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
          let data = this.data
          if (!b) {
            this.setData({
              _editorClass: 'icon-circle2yuanquan',
              _select:'0'
            })
          }else {
            this.setData({
              _editorClass: 'icon-duigou1',
              _select: '1'
            })
          }
      },
      //删除操作
      del () {
        this.triggerEvent('delete',this.data.id)
      },
      //数量
      numberChange (e) {
        this.setData({
          _count:e.detail.number
        })
      }
    }
  }
)