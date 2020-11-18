// pages/menu/menu.js
// 定义一个变量接收周期函数里面循环出来的高度height
var initNum = 0; 
// 定义一个空数组，将循环里面获取到的高度添加进来
var arr = [];
Page({
  data: {
    // 轮播图
    bannerArr: [
      "/images/banner/menubanner1.jpg",
      "/images/banner/menubanner2.jpg",
      "/images/banner/menubanner3.jpg",
    ],
    // 左右两边的菜单数据
    menuArr: [
      {
        "id": 0,
        "title": "人气Top",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "拿铁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "桃桃芝士红宝石" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "咖啡风味安慕希" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "陨石拿铁" }
        ]
      },
      {
        "id": 1,
        "title": "大师咖啡",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "冲绳黑糖拿铁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "陨石拿铁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "拿铁" }
        ]
      },
      {
        "id": 2,
        "title": "小鹿茶精选",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "标准美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "加浓美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "焦糖标准美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "焦糖加浓拿铁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "银河气泡美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "银河气泡美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "银河气泡美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "银河气泡美式" }
        ]
      },
      {
        "id": 3,
        "title": "瑞纳冰",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "乐岛桃桃冰" }
        ]
      },
      {
        "id": 4,
        "title": "鲜榨果蔬汁",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "NFC鲜榨橙汁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "NFC鲜榨西柚汁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "猕猴桃复合果汁" }
        ]
      },
      {
        "id": 5,
        "title": "经典饮品",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "巧克力" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "纯牛奶" }
        ]
      },
      {
        "id": 6,
        "title": "健康轻食",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "京味烤鸭鲜蔬卷" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "夏威夷菠萝火山卷" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "火腿芝士羊角" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "鸡肉卷" }
        ]
      }
    ],
    // 左侧的id
    leftId:"left0",
    // 左侧的num
    leftNum:0,
    // 右侧的id
    rightId:"right0"
  },
  // 左侧的点击事件，点击可以显示当前样式和右边对应的内容
  leftClickFn(e){
    this.setData({
      leftId:"left" +　e.currentTarget.dataset.myindex,
      leftNum:e.currentTarget.dataset.myindex,
      rightId:"right" + e.currentTarget.dataset.myindex
    })
  },
  // 右侧的滚动事件，滚动可以改变左侧对应的内容
  rightScrollFn(e){
    //获取到滚动的距离
    var st = e.detail.scrollTop
    for(var i = 0; i < arr.length; i++){
      if(st>=arr[i]-10 && st<arr[i+1]-10){
        this.setData({
          leftId:"left" +　i,
          leftNum:i
        })
      }
    }
    
  },
  onReady(){
    setTimeout(()=>{
      const query = wx.createSelectorQuery()
      query.selectAll('.box').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function(res){
        var newArr = res[0]
        newArr.map((item)=>{
          arr.push(initNum)
          initNum += item.height
        })
        // console.log(arr);
      })
    },500)
  }

})