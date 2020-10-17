//get.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto:"打捞漂流瓶",
    bgPng:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1699162582,1738986241&fm=26&gp=0.jpg",
    getPngSecond: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602692242325&di=c3cbad90b6a86eba9f22b3391bc63fdb&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fcp%2Fmh%2FQJ6226751079.jpg",//海星
    getPngThrid: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1699162582,1738986241&fm=26&gp=0.jpg",//漂流瓶 
    dl1:"成功捡到漂流瓶",
    dl2:"未能成功捡到漂流瓶"
  },
  onLoad: function () {
    var _this = this;
    //获取屏幕宽高  
    wx.getSystemInfo({
      success: function (res) {
  
      }
    })
  },
  getAnswer: function (){
    var num = Math.round(Math.random() * 9 + 1);
    console.log(num);
    if(num>5){
      /**wx.showModal({
        title: '提示',
        content: '未捡到漂流瓶',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return**/
      this.setData({
        bgPng: this.data.getPngThrid,
        dl:this.data.dl1
      })
    }
    else{
      /**wx.showModal({
        title: '提示',
        content: '捡到了漂流瓶',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return**/
      app.globalData.get=app.globalData.get+1,
      this.setData({
        bgPng: this.data.getPngSecond,
        dl:this.data.dl2
      })
    }
  }
})
