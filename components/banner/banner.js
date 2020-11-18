// components/banner/banner.js
Component({
  // 传值 小程序里面使用properties接收父组件传过来的值
  properties:{
    bannerArr:{ //自定义组件里面传值的名称
      type:Array, //数据类型
      value:[] //默认值
    }
  },
  data: {
    // 当前小圆点的值
    swiperCurrent:"",
  },
  // 组件中的事件要加在methods里面
  methods:{
    swiperChange(e){
      // console.log(e.detail.current);
      this.setData({
        swiperCurrent:e.detail.current
      })
    }
  }
})