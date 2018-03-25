const globalData = getApp().globalData;
Component(
  {
    properties:{
      goodInfo:{
        type:Object,
        value:{
          src: globalData.config.imgerror,
          price:"**",
          start:1,
          tag:[]
        }
      }
    }
  }
)