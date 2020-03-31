// pages/capsule/capsule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    capsule: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    const markers = wx.getStorageSync('markers')
    markers.map((item, index) => {
      if(item.id == options.id) {
        this.setData({
          capsule: item
        })
        markers.splice(index, 1)
        console.log(markers)
        wx.setStorageSync('markers', markers)
      }
    })
    console.log(this.data.capsule)
  },
  toIndex () {
    wx.navigateTo({
      url: '/pages/index/index',
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

  }
})