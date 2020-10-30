//write.js
//获取应用实例
var app = getApp()
const db = wx.cloud.database({})
const cont = db.collection('hkcloud')
Page({
  data: {
    jp: "../../images/jp.png",
    ht: "../../images/ht.png",
    isInput: true,//默认键盘输入
    j: 1,//帧动画初始图片  
    isSpeaking: false,//是否正在说话  
    animationBottle: {},//扔出漂流瓶动画
    bottle: false,//漂流瓶
    contentInput: '',//内容
    num:0
  },
  onLoad: function () {
    //在leancloud生成目录
    // 声明类型
    // var TodoFolder = AV.Object.extend('TodoFolder');
    // 新建对象
    // var todoFolder = new TodoFolder();
    // 设置名称
    //  todoFolder.set('name', "文本漂流瓶");
    // 设置优先级
    //  todoFolder.set('priority', 1);
    //  todoFolder.save().then(function (todo) {
    //   console.log('objectId is ' + todo.id);
    //  }, function (error) {
    //   console.error(error);
    //  });
  },
    onReady: function () {
    // 标题栏
    wx.setNavigationBarTitle({
      title: '扔一个'
    })
  },
  //切换话筒和键盘
  inputSwitch: function () {
    this.setData({
      isInput: !this.data.isInput
    })
  },
  //手指按下  
  touchdown: function () {
    var _this = this;
    //话筒的时候,点击按钮无效
    if (!this.data.isInput) return
    this.data.contentInput
    console.log("new date : " + new Date)
    speaking.call(this);
    this.setData({
      isSpeaking: true
    })
    //开始录音  
    wx.startRecord({
      success: function (res) {
        //临时路径,下次进入小程序时无法正常使用  
        var tempFilePath = res.tempFilePath
        console.log("tempFilePath: " + tempFilePath)
        //录音完成后直接上传,不再持久保存本地
        //持久保存  
        //wx.saveFile({
        // tempFilePath: tempFilePath,
        // success: function (res) {
        //持久路径  
        //本地文件存储的大小限制为 100M  
        //var savedFilePath = res.savedFilePath
        //console.log("savedFilePath: " + savedFilePath)
        // }
        //  })

        wx.showToast({
          title: '恭喜!录音成功',
          icon: 'success',
          duration: 1000
        })

      },
      fail: function (res) {
        //录音失败  
        wx.showModal({
          title: '提示',
          content: '录音的姿势不对!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              return
            }
          }
        })
      }
    })
  },
  //手指抬起  
  touchup: function () {
    //话筒的时候,点击按钮无效
    if (!this.data.isInput) return
    console.log("手指抬起了...")
    clearInterval(this.timer)
    wx.stopRecord()
    //开发工具测试有效.真机不执行.
    throwBottleAnimation.call(this);
    this.setData({
      isSpeaking: false,
    })
  },
  //扔出去
  //获取多行输入框内容
  bindTextAreaBlur: function (e) {
    //console.log(e.detail.value)
    this.setData({
      contentInput: e.detail.value
    });
  },
  throwBottle: function () {
    let self = this;
    var _this = this;
    //键盘的时候,点击按钮无效
    if (this.data.isInput) return
    //button获取焦点后,textarea才失去焦点,contentInput有值
    setTimeout(function () {
      if (_this.data.contentInput == '') {
        wx.showModal({
          title: '提示',
          content: '请输入内容',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
        return
      }
      else{
        app.globalData.throw=app.globalData.throw+1,
        wx.showModal({
          title: '提示',
          content: '成功扔出漂流瓶!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              console.log(self.data.contentInput)
            }
          }
        })
    const db = wx.cloud.database({});
    const cont = db.collection('Floating');
    db.collection("Floating").count()
    .then(async res=>{
      let totals = res.total+1;
      cont.add({
        data:{
          数据内容: self.data.contentInput,
          数据id:totals,
        }
      })
    })  
    return
        
      }
      //将文本漂流瓶上传到leancloud
      // 执行 CQL 语句实现新增一个 TodoFolder 对象
      //扔出漂流瓶动画
      throwBottleAnimation.call(_this);
    }, 50)
  },
})

//麦克风帧动画  
function speaking() {
  var _this = this;
  //话筒帧动画  
  var i = 1;
  this.timer = setInterval(function () {
    i++;
    i = i % 5;
    _this.setData({
      j: i
    })
  }, 200);
}


//扔出漂流瓶动画
function throwBottleAnimation() {
  this.setData({
    bottle: true
  })
  var animation = wx.createAnimation({
    duration: 1500,//动画持续时间
  })

  // 旋转同时缩小
  animation.translate(-150, -180).rotateZ(720).scale(0, 0).step()

  this.setData({
    animationBottle: animation.export()
  })

}
