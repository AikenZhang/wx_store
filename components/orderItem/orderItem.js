const conifg = getApp().config
const { request } = require('../../utils/MiniPro.js')
Component({
  properties:{
    orderInfo: {
      type:Object
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
     //操作
     but(e) {
       let orderInfo = this.data.orderInfo
       let data = this.data
       let mode = data.mode
       console.log(mode)
       //支付操作
       if (mode == '1') {
          this.triggerEvent("pay",{
            userId:orderInfo.userId,
            orderId:orderInfo._id
          })
       } else if (mode == '2') {
         console.log('22')
         wx.showModal({
           title: '提示',
           content: '是否确认收货?',
           success(e) {
             if (e.confirm) {
               request({
                 url: "wx/user/receiptOrder",
                 data: {
                   param: JSON.stringify({
                     _id
                   })
                 }
               }).then((result) => {
                 if (result && result.code == '0') {
                   wx.switchTab({
                     url: '/pages/user/user',
                   })
                 }
               })
             }
           }
         })

       }
     },
     del () {
       let data = this.data.orderInfo
       this.triggerEvent('delete', {
         id: data._id
       })
     }
    }
})