// pages/address/addressEdit/index.js
const { request } = require('../../../utils/MiniPro.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     id:'',
     name:'',
     tel:'',
     address:'',
     default:'',
     _default:''
  },
  onLoad (options) {
    let id = options.id
    this.setData({
      id
    })
    request({
      url:'wx/user/getaddressById',
      data:{
        param:JSON.stringify({
          id
        })
      }
    }).then((result) =>{
      if (result && result.code == '0') {
        let data = result.data
        this.setData({
          name:data.name,
          tel:data.tel,
          address:data.address,
          default:data.default,
          _default:data.default
        })
      }
    })
  },
  blur (e) {
      let type = e.currentTarget.dataset.type
      let data = {}
      data[type] = e.detail
      this.setData(data)
  },
  getAddress () {
    let me = this
    wx.chooseLocation({
      success (res) {
        me.setData({
          address:res.address
        })
      }
    })
  },
  switchChange (e) {
     let me = this
     if (e.detail.value) {
       me.setData({
         default:'1'
       })
     }else{
       me.setData({
         default:'0'
       })
     }
  },
  submit () {
    let data = this.data
    request({
      url:'wx/user/updateaddress',
      data:{
        param:JSON.stringify({
           id:data.id,
           name:data.name,
           tel:data.tel,
           address:data.address,
           default:data.default
        })
      }
    }).then((result) => {
       if (result && result.code == '0') {
           wx.showToast({
             title: '修改成功',
             icon: 'success',
             success () {
               setTimeout(() =>{
                 wx.switchTab({
                   url: "/pages/user/user",
                 })
               },1500)
             }
           })
       }
    })
  },
  delete () {
    let data = this.data
    request({
      url: 'wx/user/deleteaddress',
      data: {
        param: JSON.stringify({
          id: data.id
        })
      }
    }).then((result) => {
      if (result && result.code == '0') {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          success() {
            setTimeout(() => {
              wx.switchTab({
                url: "/pages/user/user",
              })
            }, 1500)
          }
        })
      }
    })
  }
})