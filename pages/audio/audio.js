// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // audioSrc:"../resource/static/audio/YunYuHai.m4a",
    audioSrc:"http://isure.stream.qqmusic.qq.com/C400004IFjwP42XBGI.m4a?guid=8054457740&vkey=A8B030C5018FABE584A653F4131774E829E5ACE7CFA63DA6F89714F0BF1A4962FD3D84E8DDF594088DF50B46453510E8298760E167923C19&uin=7506&fromtag=66",
    postUrl:"../resource/static/image/CloudAndSea.jpg",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
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

  },
  play(){
    this.audioCtx.play();
  },
  pause(){
    this.audioCtx.pause();
  },
  restart(){
    this.audioCtx.seek(0);
  },
  setTime(){
    this.audioCtx.seek(5);
  }
})