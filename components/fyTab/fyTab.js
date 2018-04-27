Component({
  properties:{
    tabs:{
      type:Array,
      value:[],
    },
    key:{
      type:Array,
      value:[]
    },
    tabTextActiveColor:{
      type:String,
      value:""
    },
    defaultIndex: {
      type:String,
      value:""
    }
  },
  data: {
    _index:""
  },
  attached: function(d) {
    console.log(this)
  },
  methods: {
    tabChange: function(e) {
    let key=e.target.dataset.key;
     if(this.data._index!==key){
      this.triggerEvent("tabChange",{key:key});
      console.log(e.target.style)
     }
     //缓存当前的panel
      this.setData({
        _index: key
      })
    }
  }
})