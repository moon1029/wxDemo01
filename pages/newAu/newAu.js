// pages/newAu/newAu.js
const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicName: "云与海",
    musicAuthor: "阿YUE",
    musicDuration: "",
    musicCurrent: "",
    isPlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // innerAudioContext.autoplay = true
    innerAudioContext.src = "http://isure.stream.qqmusic.qq.com/C400004IFjwP42XBGI.m4a?guid=8054457740&vkey=891A74FE49B173EC235BEA20F285D7A5EAC555689DC66F096372A730B8A6606C06D57DF3264CD4A4ACC51829040C6E8E582A3B0BAC55E961&uin=0&fromtag=66"
    innerAudioContext.onPlay(() => {
      this.setData({
        isPlay: true
      })
      console.log("正在播放")
    })
    innerAudioContext.onError((res) => {
      wx.showToast({
        title: res.errMsg,
      })
      console.log(res.errCode)
      console.log(res.errMsg)
    })
    innerAudioContext.onPause(() => {
      this.setData({
        isPlay: false
      })
      console.log("停止播放")
    })
    // 在onCanplay里获取并设置音频时长和播放进度
    innerAudioContext.onCanplay(() => {
      innerAudioContext.duration;
      setTimeout(() => {
        this.setData({
          musicDuration: format(innerAudioContext.duration),
          musicCurrent: format(innerAudioContext.currentTime)
        })
      }, 1000)
    })
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

  },
  //播放
  play() {
    innerAudioContext.startTime = this.data.musicCurrent;
    innerAudioContext.play()
    this.setData({
      isPlay: true
    })
    innerAudioContext.onTimeUpdate(() => {
      this.setData({
        myAudioPos: innerAudioContext.currentTime / innerAudioContext.duration * 100,
        musicCurrent: format(innerAudioContext.currentTime)
      })
    })
  },
  //暂停
  pause() {
    innerAudioContext.pause()
    this.setData({
      isPlay: false
    })
  },
  //点击听取上一首
  pre() {
    wx.showToast({
      icon:'none',
      title: '此功能暂未开放',
    })
  },
  //点击听取上一首
  next() {
    wx.showToast({
      icon:'none',
      title: '此功能暂未开放',
    })
  },
  //拖动进度条到指定位置
  handlerSliderChange(e) {
    const position = e.detail.value;
    var currentTime = position / 100 * innerAudioContext.duration;
    innerAudioContext.seek(currentTime);
    this.setData({
      myAudioPos: position,
      myAudioCurrent: format(currentTime)
    })
  },
})
// 时间格式化
function format(t) {
  let time = Math.floor(t / 60) >= 10 ? Math.floor(t / 60) : '0' + Math.floor(t / 60);
  t = time + ':' + ((t % 60) / 100).toFixed(2).slice(-2);
  return t;
}