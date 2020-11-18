// pages/new/new.js
Page({
  data: {
    // 大图的数据
    imgSrc:"/images/oder/1.jpg",
    // 小图的数据
    oderArr:[
      "/images/oder/1.jpg",
      "/images/oder/2.jpg",
      "/images/oder/3.jpg",
      "/images/oder/4.jpg",
      "/images/oder/5.jpg",
      "/images/oder/6.jpg",
      "/images/oder/7.jpg",
      "/images/oder/8.jpg",
      "/images/oder/9.jpg",
    ],
    // 小图的默认值
    smallNum:0,
    // 选择口味的数据
    tasteArr:[
      "原味","加冰","浓烈","香甜","加奶","狂野",
    ],
    // 选择口味的默认值
    optTasteNum:0

  },
  // 小图的点击事件
  smallClick(e){
    // console.log(e.currentTarget.dataset.myindex);
    this.setData({
      // 在数据循环的标签里面添加data自定义属性，然后赋值给定义好的smallNum(索引)和imgSrc(大图)
      smallNum:e.currentTarget.dataset.myindex,
      imgSrc:e.currentTarget.dataset.mybig
    })
  },
  tasteClick(e){
    this.setData({
      // 在数据循环的标签里面添加data自定义属性，然后赋值给定义好的optTasteNum(索引)
      optTasteNum:e.currentTarget.dataset.mykey
    })
  }
})