Component({
  behaviors: [],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    type:{
      type:String,
      value:'text'
    },
    maxlength:{
      type:Number,
      value:11
    },
    value:{
      type:String
    }
  },
  methods:{
    //失去焦点事件
    blur (e) {
       this.triggerEvent('blur',e.detail.value)
    }
  }
});