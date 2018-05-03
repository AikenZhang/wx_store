Component({
  properties:{
    goodInfo: {
      type:Object,
      value:{
        price:900,
        src:"http://58.87.72.54/img/001.jpeg"
      }
    }
  },
  methods: {
    close: function () {
      this.triggerEvent("close")
    }
  }
 
})