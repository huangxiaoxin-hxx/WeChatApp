const util = require('../../utils/util')
const app = getApp();

Page({
  data: {
    //当前经纬度
    longitude: 116.397390,
    latitude: 39.908860,
    // 时间舱信息数组
    markers: [],
    // 缩放比
    scale: 18,
    // 提示信息
    toast: '',
    // 是否显示提示信息
    isShow: 'close',
    // 当前时间
    date: '',
    // 当前用户
    username: '',
    isOpen: 'close',
    // 用来保存找到的胶囊的id
    CapsuleId: '',
    // 判断地图上是否有点
    isMark: false
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    // 展示loading
    wx.showLoading({
      title: '加载中',
    })
    // 获取位置信息
    wx.getLocation({
      success: (res) => {
        let longitude = res.longitude;
        let latitude = res.latitude;
        this.setData({
          longitude,
          latitude
        })
        // console.log(this.data.longitude, this.data.latitude)
      }
    })
    wx.hideLoading(); //隐藏loading
  },
  onReady: function (e) {
    const that = this
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
    // 获取当前日期
    const date = util.formatDate(new Date()) // 获取当前日期
    // 获取当前登录的用户
    if (wx.getStorageSync('username') != '') {
      const username = wx.getStorageSync('username')
      this.setData({
        username
      })
    }
    this.setData({
      date
    })
    // 开始前后台实时定位
    wx.startLocationUpdateBackground({
      success(res) {
        console.log('开启后台定位', res)
      },
      fail(res) {
        console.log('开启后台定位失败', res)
      }
    })
    // 实时定位
    wx.onLocationChange(function (res) {
      console.log('location change', res)
      that.openCapsule(res)
      // console.log(Object.prototype.toString.call(that.openCapsule))
    })
  },
  onShow: function () {
    // console.log('show')
    // 将StorageSync中的markers取出来，给到data中的markers
    if (wx.getStorageSync('markers') != '') {
      let markers = wx.getStorageSync('markers');
      this.setData({
        markers
      });
    }
  },
  // 能否开启时间胶囊
  openCapsule: function (res) {
    const markers = this.data.markers
    const that = this
    markers.map(item => {
      if (that.hasCapsule(res, item) && item.username == that.data.username && item.date == that.data.date) {
        that.setData({
          isOpen: '',
          CapsuleId: item.id,
          toast: '发现一个时间胶囊，是否打开?'
        })
        // 如果检测到附近有，就关闭实时定位监控
        wx.stopLocationUpdate()
      }
    })
  },
  //复位按钮  已完成
  toReset() {
    //复位后调整缩放比，提升体验
    this.mapCtx.moveToLocation();
    this.setData({
      scale: 18
    })
  },
  // 判断附近是否有胶囊
  hasCapsule(res, item) {
    if (res.longitude - item.longitude < 0.001 && res.latitude - item.latitude < 0.001) {
      return true
    } else {
      return false
    }
  },
  //关闭提示按钮
  closeMask() {
    this.setData({
      isShow: 'close'
    })
  },
  // 点击地图触发的事件
  clickMap: function (e) {
    console.log(e.detail.latitude, e.detail.longitude)
    var clickMark = {
      "id": -1,
      "iconPath": "/assets/icon/point_in_map.png",
      "callout": {},
      "latitude": e.detail.latitude,
      "longitude": e.detail.longitude,
      "width": 20,
      "height": 30
    }
    // 将clickMark 保存到 StorageSync 中 方便之后使用
    wx.setStorageSync('clickMark', clickMark);
    let markers = this.data.markers
    markers.map((item, index) => {
      // 地图上只能存在一个选中
      if (item.id == -1) {
        markers.splice(index, 1)
        return
      }
    })
    // 将这个clickMark放到markers数组 第一个
    this.setData({
      markers: [clickMark, ...markers]
    })
    console.log(this.data.markers)
  },
  // 跳转到加入信息页面
  putIn: function () {
    let markers = this.data.markers
    let username = wx.getStorageSync('username')
    console.log(username)
    if (username == '') {
      this.setData({
        isShow: '',
        toast: '请登录',
        isMark: true
      })
    } else {
      markers.map(item => {
        if (item.id == -1) {
          wx.navigateTo({
            url: '/pages/put/put',
          })
          this.setData({
            isMark: true
          })
          // console.log(this.data.isShow)
        }
      })
    }
    if(!this.data.isMark) {
      this.setData({
        isShow: '',
        toast: '请在地图上选择要放入的点'
      })
    }
  },
  // 去用户界面
  toUser: function () {
    // 判断用户是否登录
    let username = wx.getStorageSync('username')
    if (username == '') {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.navigateTo({
        url: '/pages/user/user',
      })
    }
  },
  // 去看找到的时间胶囊
  toCapsule() {
    // console.log('id:', this.data.CapsuleId)
    this.setData({
      isOpen: 'close'
    })
    wx.navigateTo({
      url: '/pages/capsule/capsule?id='+this.data.CapsuleId,
    })
  },
  // 关闭胶囊提示按钮
  closeCapsule() {
    const that = this
    this.setData({
      isOpen: 'close'
    })
    const markers = this.data.markers
    markers.map((item, index) => {
      if (item.id == this.data.CapsuleId) {
        markers.splice(index, 1)
        console.log('删除成功')
      }
    })
    wx.setStorageSync('markers', markers)
    this.setData({
      markers
    })
    // 去重新启动实时定位
    wx.startLocationUpdateBackground({
      success(res) {
        console.log('开启后台定位', res)
      },
      fail(res) {
        console.log('开启后台定位失败', res)
      }
    })
    wx.onLocationChange(function (res) {
      // console.log('location change', res)
      // that.openCapsule(res)
      // console.log(Object.prototype.toString.call(that.openCapsule))
    })
  }
})