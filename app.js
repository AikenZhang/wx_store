// const data=require("./utils/data.js")f
// //app基本信息
const appConfig = {
    url: "http://localhost:3345",
    logo:"http://58.87.72.54/img/fashion.jpg",
    imgerror:"http://58.87.72.54/img/background.jpg"
}
//登录逻辑
const login = () => {
  // 登录
  wx.login({
    success: res => {
      console.log('request')
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      wx.request({
        url: appConfig.url + '/user/login',
        method: 'post',
        data: {
          code: res.code
        },
        success: resu => {
          console.log(resu)
          if (resu.data.success) {
             wx.setStorage({
               key: 'token',
               data: resu.data.data.token
             })
          }
        }
      })
    }
  })
}
// //app.js
// App({
//   onLaunch: function () {
//     // const me = this
//     // wx.getStorage({
//     //   key: 'token',
//     //   success: function(res) {
//     //     //判断是否登陆过
//     //     if (res.token) {
//     //       console.log('token login')
//     //         wx.checkSession({
//     //           success: function () {
//     //           },
//     //           fail: function () {
//     //             // session_key 已经失效，需要重新执行登录流程
//     //             login() //重新登录
//     //           }
//     //         })
//     //     }else{
//     //       console.log('no token login')
//     //       login()
//     //     }
//     //   },
//     //   fail: () => {
//     //     console.log('no token')
//     //     login()
//     //   }
//     // })
    
//     // // 获取用户信息
//     // wx.getSetting({
//     //   success: res => {
//     //     if (res.authSetting['scope.userInfo']) {
//     //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//     //       wx.getUserInfo({
//     //         success: res => {
//     //           // 可以将 res 发送给后台解码出 unionId
//     //           this.globalData.userInfo = res.userInfo

//     //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//     //           // 所以此处加入 callback 以防止这种情况
//     //           if (this.userInfoReadyCallback) {
//     //             this.userInfoReadyCallback(res)
//     //           }
//     //         }
//     //       })
//     //     }
//     //   }
//     // })
//   },
//   globalData: {
//     userInfo: null,
//     /**
//      * 项目配置
//      */
//     config:appConfig,
//     imgList: data.imgList
//   }
// })
const data = require("./utils/data.js")
//app.js
App({
  onLaunch: function () {
    wx.getStorage({
      key: 'token',
      success: function(res) {
        //判断是否登陆过
        if (res.data) {
          console.log('token login')
            wx.checkSession({
              success: function () {
                console.log('没过期')
              },
              fail: function () {
                // session_key 已经失效，需要重新执行登录流程
                login() //重新登录
              }
            })
        }else{
          console.log('no token login')
          login()
        }
      },
      fail: () => {
        console.log('no token')
        login()
      }
    })
  },
  globalData: {
    userInfo: null,
    /**
     * 项目配置
     */
    config: {
      url: "http://localhost/",
      logo: "http://58.87.72.54/img/fashion.jpg",
      imgerror: "http://58.87.72.54/img/background.jpg"
    },
    imgList: data.imgList
  },
})