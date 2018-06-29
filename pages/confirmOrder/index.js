// pages/confirmOrder/index.js
const { request } = require('../../utils/MiniPro.js')
let temp = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultAddress:{
      name:"",
      tel:"",
      address:''
    },
    goodInfo:[],
    addressArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let me = this
    temp = options.temp.split(',')
    //获取订单信息
    request({
      url:'product/product/getshopcarbyid',
      data:{
        param:JSON.stringify({
          idArr: temp
        })
      }
    }).then((result) => {
      if(result && result.code == '0') {
        let sum = 0
        let data = result.data
        data.forEach((v, k) => {
          sum += (parseInt(v.count) * parseInt(v.price))
        })
        this.setData({
          sum,
          goodInfo:data
        })
      }
    })
    //获取地址信息
    request({
      url: 'wx/user/getaddress'
    }).then((result) => {
      if (result && result.code == '0') {
        //提取默认信息
        let data = result.data
        let defaultAddress = {
          name:"",
          tel:"",
          address:''
        }
        data.forEach((v,k) =>{
          if (v.default == '1'){
            defaultAddress = v
          }
        })
        me.setData({
          addressArr:data,
          defaultAddress
        })
      }
    })
  },
  submit () {
    let userInfo = this.data.defaultAddress
    if (userInfo.name == '') {
      wx.showToast({
        title: '地址不能为空',
        icon:'none'
      })
      return;
    }
    request({
      url: 'product/order/addorder',
      data: {
        param:JSON.stringify({
          prodArr:temp,
          userInfo:{
            address: userInfo.address,
            tel: userInfo.tel,
            name:userInfo.name
          }
        })
      }
    }).then((result) => {
      console.log(result)
      if (result && result.code == '0') {
         wx.showModal({
           title: '提交成功',
           content: '请到个人中心完成支付',
           success (res) {
             if (res.confirm){
               wx.reLaunch({
                 url: '/pages/user/user'
               })
             } else if (res.cancel) {
               wx.reLaunch({
                 url: '/pages/index/index'
               })
             }
           }
         })
      } else if (result && result.code == '0') {
        wx.showModal({
          title:'提示',
          content: result.errMsg + '库存不足',
          showCancel:false
        })
      }
    })
  },
  //选择信息
  selectInfo () {
    let me = this
    this.selectComponent('#popup').show()
  },
  //选择地址
  selectAddress (e) {
    let id = e.currentTarget.dataset.key
    console.log(id)
    let addressArr = this.data.addressArr
    for (let i = 0; i < addressArr.length;i++) {
      console.log(addressArr[i])
      if (addressArr[i]._id == id) {
        this.setData({
          defaultAddress:addressArr[i]
        })
      }
    }
  }
})