// pages/zy/zy.js
var app = getApp()
Page({
  data: {
    getSrc: "../../images/a.png",//捡一个
    throwSrc: "../../images/b.png",//扔一个
    mySrc: "../../images/c.png",//我的
    throwing:0,
    geting:""
  },
  //捡一个

  onShow:function(){
    console.log(app.globalData.throw)
    this.setData({
           throwing:app.globalData.throw,
           geting:app.globalData.get
    })
  },
  get: function () {
    console.log("捡一个")
    //随机去后台拉取一个录音
    wx.navigateTo({
      url: '../get/get',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  //扔一个
  throw: function () {
    console.log("扔一个")
    wx.navigateTo({
      url: '../write/write',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  //我的瓶子
  mine: function () {
    console.log("我的瓶子")
    wx.navigateTo({
      url: '../mine/mine',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
 
})
