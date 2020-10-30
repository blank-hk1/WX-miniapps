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
    dl2:"未能成功捡到漂流瓶",
    content:"请点击下方按钮",
    content1:""
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
    var number;
    var that =this;
    //console.log(num);
    const db = wx.cloud.database({});
    const cont = db.collection('Floating');
    if(num>5){
      app.globalData.get=app.globalData.get+1,
    db.collection("Floating").count()
    .then(async res=>{
    let totals = res.total;
    number= Math.round(Math.random() * totals + 1);
    //console.log(number)
    db.collection("Floating").where({
      数据id:number,
    }).get({
      success: function (res) {
        //console.log(res.data[0].数据内容)
        
        that.setData({
          content:res.data[0].数据内容
        })            
      }
    })
    })
    console.log(that.data.content)
    this.setData({
      bgPng: this.data.getPngThrid,
      dl:this.data.dl1,
      content1:"漂流瓶上的内容是"
    })  
    
    }
    else{
      this.setData({
        bgPng: this.data.getPngSecond,
        dl:this.data.dl2,
        content:"",
        content1:""
      })
    }
  }
})
