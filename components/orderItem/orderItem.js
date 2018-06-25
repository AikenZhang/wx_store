const conifg = getApp().config
Component({
  properties:{
    orderInfo: {
      type:Object,
      value:{
        src:"46c8eca0-7216-11e8-aa92-459b3731610c.jpg",
        title:"fsdfsdfsd",
        color:'默认',
        size:'s',
        count:7,
        price:100,
        prodId:"23",
        userId:'3243',
        id:"231423"
      }
    },
    mode:{
      type:String,
      value:'1'
    }
  },
  data:{
    imgPre: conifg.imgPreSrc
  },
   methods: {
     //支付操作
      but () {
        let data = this.data.orderInfo
        this.triggerEvent('but',{
          id:data.id,
          prodId:data.prodId,
          useId:data.userId
        })
      },
     del () {
       let data = this.data.orderInfo
       this.triggerEvent('delete', {
         id: data.id,
         prodId: data.prodId,
         useId: data.userId
       })
     }
    }
})