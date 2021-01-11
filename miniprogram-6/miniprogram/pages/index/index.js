//index.js
//获取应用实例
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();
var chart = null;
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    color: ["#000000", "#FF9F7F"],
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle'
      radius: '50%',
      center: ['50%', '42%'],
      indicator: [{
        name: '舒尔特方块',
        max: 500,
      },
      {
        name: '连接能手',
        max: 500
      },
      {
        name: '听声辩位',
        max: 500
      },
      {
        name: '图形记忆',
        max: 500
      },
      {
        name: '图形推理',
        max: 500
      },
      {
        name: '字词回忆',
        max: 500
      }
      ],
      name:{
        textStyle:{
          color:'#8e57aa'
        }
      }
    },
    
    series: [{
      name: '预算',
      type: 'radar',
      radius:'65%',
      data: [{
        value: [430, 340, 500, 300, 490, 400], //分数大小，从数据库中读取
        name: '分析报告',
        areaStyle:{
          color: "#4378e4",
        },
        history:'' //历史成绩
      },
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}
Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    currentTab: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ec: {
      onInit: initChart
    },
    score:'60%' //分数大小，从数据库中读取
  },
  onReady() {
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getSchutle:function(){
    wx.navigateTo({
      url: '../Schulte/Schulte'
    })
  },
  connect:function(){
      wx.navigateTo({
        url: '../Schulte/Schulte',
      })
  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  swiperTab: function(e){
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  clickTab: function(e) { 
    var that = this; 
    if( this.data.currentTab === e.target.dataset.current ) { 
      return false; 
    } else { 
      that.setData( { 
        currentTab: e.target.dataset.current 
      }) 
    }
    this.getData()
  },
  getData(){
    var option = {
      color: ["#000000", "#FF9F7F"],
      xAxis: {
        show: false
      },
      yAxis: {
        show: false
      },
      radar: {
        // shape: 'circle'
        radius: '50%',
        center: ['50%', '42%'],
        indicator: [{
          name: '舒尔特方块',
          max: 500,
        },
        {
          name: '连接能手',
          max: 500
        },
        {
          name: '听声辩位',
          max: 500
        },
        {
          name: '图形记忆',
          max: 500
        },
        {
          name: '图形推理',
          max: 500
        },
        {
          name: '字词回忆',
          max: 500
        }
        ],
        name:{
          textStyle:{
            color:'#8e57aa'
          }
        }
      },
      
      series: [{
        name: '预算',
        type: 'radar',
        radius:'65%',
        data: [{
          value: [430, 340, 500, 300, 490, 400], //分数大小，从数据库中读取
          name: '分析报告',
          areaStyle:{
            color: "#4378e4",
          },
          history:'' //历史成绩
        },
        ]
      }]
    };
    chart.clear()
    chart.setOption(option);
  }
})
