const { request } = require('./MiniPro.js')
const Paging = function ({url,page,pageSize,param}) {

  this._isloading = true
  this._page = page || 1
  this._pageSize = pageSize || 10,
  this._url = url
  this._param = param
  this._beforeLoad = ''
  this._afterLoad = ''
  this._endLoad = ''
}
Paging.prototype.beforeLoad = function(callback){
    if(callback) {
      console.log('beforeLoad')
     this._beforeLoad = callback
    }
}
Paging.prototype.load = function (Page, PageSize) {
  console.log('load')
  let me = this
  let page = Page || me._page
  let pageSize = PageSize || me._pageSize
  return new Promise((resolve, rej) => {
    console.log(me._param)
    if (me._isloading) {
      //加载之前
      if (me._beforeLoad) {
        me._beforeLoad()
      }
      request({
        url: me._url,
        data: {
          param: JSON.stringify({
            ...me._param,
            page,
            pageSize
          })
        }
      }).then((result) => {
        if (result && result.code == '0') {
          //加载成功之后
          if (me._afterLoad) {
            me._afterLoad()
          }
          if (result.data && result.data.length > 0) {
            resolve(result.data)
          }
          else {
            me._isloading = false
            if (me._endLoad) {
              me._endLoad()
            }
          }

        } 
      })
    }
  })
}
Paging.prototype.afterLoad = function (callback) {
  if (callback) {
    this._afterLoad = callback
  }
}
Paging.prototype.endLoad = function (callback) {
  if (callback) {
    this._endLoad = callback
  }
} 
Paging.prototype.setParam = function (param) {
    this._param = param 
}
Paging.prototype.setLoading = function (b) {
  this._isloading = b
}
module.exports = {
  Paging
}