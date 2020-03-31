// pages/put/put.js
const util = require('../../utils/util'); // 引入util
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clickMark: {},
    date: '',
    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let date = util.formatDate(new Date()) // 获取当前日期
    // console.log(date)
    // console.log(wx.getStorageSync('clickMark'))
    let clickMark = wx.getStorageSync('clickMark') // 获取 Storage 中的 clickMark
    let markers = wx.getStorageSync('markers') // 获取 Storage 中的 markers
    // 将数据给到data
    this.setData({
      clickMark,
      date,
      markers
    })
  },
  // 提交按钮触发事件
  formSubmit(e) {
    // console.log(e)
    // 获取到data中的clickMark
    let clickMark = this.data.clickMark
    // 修改clickMark中的一些值
    clickMark.username = e.detail.value.username
    clickMark.text = e.detail.value.textarea
    clickMark.date = e.detail.value.date
    clickMark.id = this.data.markers.length
    clickMark.iconPath = '../../assets/icon/jiaonang.png'
    clickMark.fromUsername = wx.getStorageSync('username')
    // 将这个胶囊加入到markers数组 中
    this.setData({
      markers: [clickMark, ...this.data.markers]
    })
    // console.log(this.data.markers)
    // 重新在 Storage 保存markers
    wx.setStorageSync('markers', this.data.markers);
    // 跳回首页
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
  // 时间选择器事件
  bindDateChange (e) {
    console.log(e)
    // 将选择的时间给到data中的date
    this.setData({
      date: e.detail.value
    })
  }
})