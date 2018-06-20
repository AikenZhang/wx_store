const config =  require('./appConfig.js')
const { touch } = require('./utils/util.js')
App({
  onLaunch: function () {

  },
  globalData: {
    login:false,
    userInfo: null,
    /**
     * 项目配置
     */
  },
  //系统 配置
  config,
  touch
})