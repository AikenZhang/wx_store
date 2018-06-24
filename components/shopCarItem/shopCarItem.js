const config = getApp().config;
Component(
  {
    properties: {
      count:{
        type:Number
      },
      goodsInfo:{
        type:Object
      }, 
      key: {
        type:String
      }
    },
    data: {
      _imgPre: config.imgPreSrc,
      _editorClass: 'icon-circle2yuanquan', //  icon-duigou1
      select:false,
      _count:0,
      _select:'0',
      sum:0
    },
    ready() {
      this.setData({
        _count:this.data.count,
        sum: (parseInt(this.data.goodsInfo.count)* parseInt(this.data.goodsInfo.price))
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
          this.triggerEvent('select', this.data.key)
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
        this.triggerEvent('delete',this.data.key)
      },
      //数量
      numberChange (e) {
        this.setData({
          _count:e.detail.number,
          sum: parseInt(this.data.goodsInfo.price) * e.detail.number
        })
        this.triggerEvent('numberChange',{
          target:e,
          shopCarItem:this
        })
      }
    }
  }
)