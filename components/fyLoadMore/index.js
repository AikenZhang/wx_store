const types ={
  load:"fy-spin icon-ai244",
  end:"icon-xiangxia",
}
const text = {
  load:'加载中...',
  end:'到底了'
}

Component({
  properties: {
    type:{
      type:String,
      value:"load"
    }
  },
  data:{
    text:'',
    icon:''
  },
  ready () {
    let type = this.data.type
    this.setData({
      icon:types[type],
      text: text[type]
    })
  }
});