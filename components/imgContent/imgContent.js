const config = getApp().config;
Component(
  {
    properties:{
      goodInfo:{
        type:Object,
        value:{
          src:config.imgError,
          price:"**",
          start:1,
          tag:[]
        }
      }
    },
    data:{
      imgPreSrc: config.imgPreSrc
    }
  }
)