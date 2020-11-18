// components/box/box.js
Component({
  properties:{
    num:{
      type:Number,
      value:'1'
    }
  },
  data: {

  },
  methods:{
    boxClickFn(){
      this.triggerEvent("boxClick",666)
    }
  }
})