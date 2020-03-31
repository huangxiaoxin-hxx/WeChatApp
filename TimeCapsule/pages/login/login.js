// pages/login/login.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [
      {
        username: '10011001100',
        password: "123456"
      },
      {
        username: '10066668888',
        password: "123456"
      },
      {
        username: '13388886666',
        password: "123456"
      },
      {
        username: '12345678910',
        password: "123456"
      }
    ],
    isShow: 'close',
    toast: ''
  },
  formSubmit(e) {
    console.log(e)
    let username = e.detail.value.username
    let password = e.detail.value.password
    console.log(username, password)
    const users = this.data.users
    console.log(username == users[3].username)
    // console.log(Object.prototype.toString.call(users))
    // console.log(username.length)
    if (username == '' || password == '') {
      this.setData({
        isShow: '',
        toast: '用户名或密码不能为空'
      })
    } else if (username.length < 11) {
      this.setData({
        isShow: '',
        toast: '用户名不正确,应为11为数字'
      })
    } else {
      users.map(item => {
        if (item.username == username && item.password == password) {
          wx.setStorageSync('username', username)
          wx.navigateTo({
            url: '/pages/index/index',
          })
          return
        }
      })
    }
  },
  closeMask() {
    this.setData({
      isShow: 'close'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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