Component(
  {
    properties: {
      content: {
        type: Array,
        default:[]
      }
    },
    data: {
      selActive:"selct-active",
      selectContent:[]
    },
    methods: {
      //选择事件
      select(e) {
        let selContent = this.data.selectContent
        let key = e.target.dataset.key
        if (key) {
          for (let i = 0; i < selContent.length; i++) {
             if (selContent[i]['key'] == key){
               selContent[i]['class'] = 'selct-active'
             }else{
               selContent[i]['class'] = ''
             }
          }
          this.setData({
            selectContent: selContent
          })
          this.triggerEvent('select',key)
        }
      }
    },
    ready () {
       let content =  this.data.content
       let selContent = []
       setTimeout(() => {
         for (let i = 0; i < content.length; i++) {
           selContent.push({
             class: '',
             key: content[i]['key'],
             value: content[i]['value']
           })
         }
         this.setData({
           selectContent: selContent
         })
        console.log('1111')
       },100)
       

    }
  }
)