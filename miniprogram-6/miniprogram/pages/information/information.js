// miniprogram/pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active1:0,
    active3:0,
    introduce:'这一阶段，孩子逐渐进入学校开始了正式学习。在这一时期，儿童的大脑发育进一步发展，天赋才能进一步展现。因此，小学阶段，家长要对孩子的各项才能进行深度挖掘，并重点培养科学天赋。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  set1:function(){
    this.setData({
      active1:1,
    })
  },
  set2:function(){
    this.setData({
      active1:0,
    })
  },
  set3:function(){
    this.setData({
      active3:1,
      introduce:'这一阶段是宝贝潜能被无限开发的时期。在这一时期，宝贝的大脑不断被开发，天赋逐渐被挖掘。因此在3-6岁这一大脑发育黄金阶段，家长要对孩子的各项能力进行培养，科学开发孩子大脑。'
    })
  },
  set4:function(){
    this.setData({
      active3:0,
      introduce:'这一阶段，孩子逐渐进入学校开始了正式学习。在这一时期，儿童的大脑发育进一步发展，天赋才能进一步展现。因此，小学阶段，家长要对孩子的各项才能进行深度挖掘，并重点培养科学天赋。'
    })
  },
  back:function(){
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})