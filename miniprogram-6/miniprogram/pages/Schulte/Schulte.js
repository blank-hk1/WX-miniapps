//index.js
var init;
var waittime;
var app = getApp();
Page({
  data: {
    difficulty: 3, //难度
    array: [0, 1, 2, 3], // 用于生成方块的数组
    flag: 0, // 标记已选方块
    timecount: "0:00", // 计时器文字
    second: 0, // 计时器 - 秒
    millisecond: 0, // 计时器 - 毫秒
    Settle:false,
    Score:"A",
    over:'下一关',
    isSuspend: '0', //是否暂停,
    curret:0,
    isDisabled:'false',
    wait:0
  },


  onLoad: function () { // 页面加载
    var that = this
    if(app.globalData.judge==0){
      this.initGame();  
      setTimeout(function() {
        wx.showToast({
          title: '依次选择方框中的数字',
          icon:'success',
          duration:2000,
          icon:'none'
        })
      }, 500);
      setTimeout(function() {
        wx.showToast({
          title: '首先点击数字1',
          icon:'success',
          duration:2000,
          icon:'none'
        })
      }, 3500);
      setTimeout(function(){
        that.setData({
          flag: that.data.flag + 1
        })
      },5500);
      setTimeout(function() {
        wx.showToast({
          title: '其次点击数字2',
          icon:'success',
          duration:2000,
          icon:'none'
        })
      }, 6000);
      setTimeout(function(){
        that.setData({
          flag: that.data.flag + 1
        })
      },8500);
      setTimeout(function() {
        wx.showToast({
          title: '之后按顺序依次点击相应数字',
          icon:'success',
          duration:2000,
          icon:'none'
        })
      }, 9000);
      setTimeout(function(){
        var time = setInterval(function(){
          that.setData({
            flag: that.data.flag + 1
          })
          if(that.data.flag == 9){
            clearInterval(time)
          }
        }, 1000)    
      },10000)
    }
    else{
      this.initGame();
      setTimeout(function() {
        wx.showToast({
          title: '3',
          icon:'success',
          duration:1000,
          icon:'none'
        })
      }, 1000);
      setTimeout(function() {
        wx.showToast({
          title: '2',
          icon:'success',
          duration:1000,
          icon:'none'
        })
      }, 2000);
      setTimeout(function() {
        wx.showToast({
          title: '1',
          icon:'success',
          duration:1000,
          icon:'none'
        })
      }, 3000);
    }
      
  },
  
  onUnload() { // 页面退出 - 清空计时器
    clearInterval(init);
    clearInterval(waittime);
    this.initGame();
    console.log("123")   
  },
  
  initGame: function () { // 游戏初始化
    let that = this;
    clearInterval(init);
    if(this.data.difficulty==3){
      setTimeout(function(){ 
        init = setInterval(that.timer, 10);       
     },4000)
    }
    else{
      setTimeout(function(){ 
        init = setInterval(that.timer, 10);       
     },2000)
    }
    var num = [];
    var list = [];
    for (var i = 0; i < this.data.difficulty * this.data.difficulty; i++) { // 根据难度初始化标记数组和方块生成数组
      num.push(i + 1);
    }
    for (var i = 0; i < this.data.difficulty; i++) { // 随机打乱方块数组
      var tmp = [];
      for (var j = 0; j < this.data.difficulty; j++) {
        var idx = Math.floor(Math.random() * (this.data.difficulty * this.data.difficulty - this.data.difficulty * i - j));
        tmp.push(num[idx]);
        num.splice(idx, 1);
      }
      list.push(tmp);
    }
    this.setData({ // 更新数据
      timecount: "0:00",
      array: list,
      flag: 0,
    })
  },

  tapNum: function (e) {
    if(app.globalData.judge==1&&this.data.curret>10){
      var that = this;
        var num = e.currentTarget.dataset.num - 1;   
        if (that.data.flag == num) {
          if (num == 0) {
            that.setData({
              millisecond: 0,
              second: 0,
            });
          }
          if (num == that.data.difficulty * that.data.difficulty - 1) {
            if(that.data.difficulty<5){
              that.setData({
                //   Settle:true,
                    difficulty:that.data.difficulty+1
                 })
                 wx.showToast({
                   title: '请继续挑战下一关',
                   icon:'success',
                   duration:2000,
                   icon:'none'
                 })
                 clearInterval(init);
                 that.initGame();
            }
           else if(that.data.difficulty==5){
            clearInterval(init);
            that.setData({
               Settle:true,     
             })
           }
           that.setData({
            flag:-1
          })
          }
          that.setData({
            flag: that.data.flag + 1,
          })
        }
    }
  },
  timer: function () { // 计时器
    if(this.data.curret==120000){
      wx.navigateTo({
        url: '../index/index'
      })
    } 
    this.setData({
      millisecond: this.data.millisecond + 1,
      curret:this.data.curret+10,
    })
    if (this.data.millisecond >= 100) {
      this.setData({
        millisecond: 0,
        second: this.data.second + 1
      })
    }
    this.setData({
      timecount: this.data.second + ":" + (this.data.millisecond < 10 ? "0" + this.data.millisecond : this.data.millisecond),
    })
  },
})