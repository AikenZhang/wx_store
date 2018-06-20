const appConfig = require('../appConfig.js')
const getToken = () => {
  return wx.getStorageSync('token')
}
//请求数据
const request = (option) => {
  return new Promise((resolve, rej) => {
    console.log(appConfig)
    wx.request({
      url: appConfig.baseUrl + option.url,
      header: {
        "Content-Type": "application/json",
        "Author-Token": getToken()
      },
      data: option.data,
      method: option.method || 'POST',
      success (res) {
        if (res.statusCode == 200) {
          resolve(res.data)
        }
      },
      fail (error) {
        console.log(error)
        rej(error)
      }
    })
  }).then((data) => {
    if (data) {
      if (data.code == '111') {
        loginOut()
        //模拟刷新当前页面
        wx.reLaunch({
          url: '/pages/user/user'
        })
        throw new Error('请登录')
      }
      if (data.code == '-1') {
        throw new Error(data.errMSg)
      } 
      return data
    }
  }).catch((error) => {
    wx.showToast({
      title: error.message || "网络错误",
    })
  })
}
//登录逻辑
const login = () => {
  return new Promise((resolve, rej) => {
    //获取code
    wx.login({
      success: res => {
        console.log(res)
        //获取userInfo
        wx.getUserInfo({
          lang:'zh_CN',
          success : resu => {
            console.log(resu)
            request({
              url: 'wx/user/login',
              data: {
                code: res.code,
                userInfo: resu
              }
            }).then((result) => {
              if (result.code == '0') {
                wx.setStorageSync('token', result.data.token)
                resolve()
              }
            })
          }
        })
      }
    })
  })
}
//退出登录
const loginOut = () => {
  return new Promise((reslove, rej) => {
    wx.removeStorage({
      key: 'token',
      success: (res) => {
        reslove(true)
      },
      fail: (e) => {
        rej(e)
      }
    })
  })
}

module.exports = {
  login,
  loginOut,
  request
}
