// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serachValue: '新海诚这次拆散恋人了吗',
    fontBlack: false
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
  //返回上一层
  backHome: function () {
    wx.navigateBack()
  },
  //获取到光标，删除默认内容 且输入字体为黑色
  getFocus: function () {
    this.setData({
      serachValue: '',
      fontBlack: true
    })
  }
})