// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 3,
    scrollHeight: '',
    scrollWidth: '',
    recommend: [
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: '1234',
        danmuCounts: '153',
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【10月】Just Because！ 09【独家正版】',
        imgURL: 'https://i1.hdslb.com/bfs/archive/9a30778a6a50f9c301efaaa91b334cc4160dcc55.jpg@320w_200h.webp',
        viewCounts: '92.4万',
        danmuCounts: '4.0万',
        time: '23:48',
        type: '番剧'
      },
      {
        title: '【JO极沙雕】JOJO方式打开沙雕视频 PART3',
        imgURL: 'https://i1.hdslb.com/bfs/archive/ad186e31784fc6707b6004e0bbda2634fa6abd35.jpg@320w_200h.webp',
        viewCounts: '10.9万',
        danmuCounts: '266',
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【4月】鬼灭之刃 23【独家正版】',
        imgURL: 'https://i0.hdslb.com/bfs/archive/ac1784e38d05fba51a9bc1fffda9598d4e11250b.jpg@320w_200h.webp',
        viewCounts: '1009万',
        danmuCounts: '13万',
        time: '23:46',
        type: '番剧'
      },
      {
        title: '『网易云』“我已经过了餐桌上有只鸡就一定能吃到鸡腿的年纪了”',
        imgURL: 'https://i0.hdslb.com/bfs/archive/3272f502de85bdfc0e97e378c3be2414d6199c34.jpg@320w_200h.webp',
        viewCounts: '1.0万',
        danmuCounts: '25',
        time: '04:18',
        type: '音乐'
      },
      {
        title: '小技巧维修省大钱，MacBook air这个故障还不至于淘汰掉。',
        imgURL: 'https://i1.hdslb.com/bfs/archive/aa437ad56162119fa7fe2db4155e3fc83b1a8a6b.jpg@320w_200h.webp',
        viewCounts: '236',
        danmuCounts: '1',
        time: '05:31',
        type: '数码'
      },
      {
        title: '影史第一！DC《小丑》将破10亿票房！为什么观众喜欢看反派？',
        imgURL: 'https://i0.hdslb.com/bfs/archive/8ef9d588ee77fa3a7911fd8b1048ec8a9c09b4cd.jpg@320w_200h.webp',
        viewCounts: '26.5万',
        danmuCounts: '2137',
        time: '08:43',
        type: '影视'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      },
      {
        title: '【嘿！英雄】英雄联盟同人动画 之 亚索和萌萌的婚后生活 之 峡谷的冒险路途 之 索蛋儿有妹妹了？？？',
        imgURL: 'https://i1.hdslb.com/bfs/archive/15ad379a77e75e43d3b187b9094fd482ff7becb2.jpg@320w_200h.webp',
        viewCounts: 1234,
        danmuCounts: 153,
        time: '03:45',
        type: '游戏'
      }
    ],
    animation_swiper_image:[
      'http://i0.hdslb.com/bfs/archive/33d13a1cdb750a28eab650525579bb28834c6799.png@880w_440h.png',
      'https://i0.hdslb.com/bfs/sycp/creative_img/201911/31f25bf2725931324ce2856c09812047.jpg@880w_440h.jpg',
      'https://i0.hdslb.com/bfs/sycp/creative_img/201911/5845a238d33053f59355edac53cd28fe.jpg@880w_440h.jpg',
      'https://i0.hdslb.com/bfs/archive/4dc7e5d4ce349b84b4bd6fc96e9a82da9efb479e.jpg@880w_440h.webp',
      'https://i0.hdslb.com/bfs/archive/eccb50607127cb2a2564c5348cfe54e930fff705.jpg@880w_440h.webp'
    ],
    animation_item: [
      {
        imgURL: '../../images/shipin.png',
        title: '番剧',
        bgc: '#e42b5a'
      },
      {
        imgURL: '../../images/guochuang.png',
        title: '国创',
        bgc: '#e42b5a'
      },
      {
        imgURL: '../../images/shijianbiao.png',
        title: '时间表',
        bgc: 'aqua'
      },
      {
        imgURL: '../../images/suoyin.png',
        title: '索引',
        bgc: 'aqua'
      },
      {
        imgURL: '../../images/paixingbang.png',
        title: '排行榜单',
        bgc: 'rgb(255, 140, 0)'
      }
    ],
    my_animation: [
      {
        imgURL: 'http://i0.hdslb.com/bfs/archive/855a87786ff59b9f45c293fa2b97bef06b46fd8b.jpg@160w_100h.webp',
        name: '【10月】喜欢本大爷的竟然就你一个？06 【独家正版】',
        number: '1'
      },
      {
        imgURL: 'http://i1.hdslb.com/bfs/archive/6a6e77fcf05c92fd2e87a64e560cca9123145216.jpg@320w_200h.webp',
        name: '【10月】喜欢本大爷的竟然就你一个？06 【独家正版】',
        number: '1'
      },
      {
        imgURL: 'http://i0.hdslb.com/bfs/archive/855a87786ff59b9f45c293fa2b97bef06b46fd8b.jpg@160w_100h.webp',
        name: '【10月】喜欢本大爷的竟然就你一个？06 【独家正版】',
        number: '1'
      },
      {
        imgURL: 'http://i0.hdslb.com/bfs/archive/855a87786ff59b9f45c293fa2b97bef06b46fd8b.jpg@160w_100h.webp',
        name: '【10月】喜欢本大爷的竟然就你一个？06 【独家正版】',
        number: '1'
      },
      {
        imgURL: 'http://i0.hdslb.com/bfs/archive/855a87786ff59b9f45c293fa2b97bef06b46fd8b.jpg@160w_100h.webp',
        name: '【10月】喜欢本大爷的竟然就你一个？06 【独家正版】',
        number: '1'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight,
          scrollWidth: res.windowWidth
        })
      }
    });
    console.log(this.data.scrollHeight)

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
  // 头部导航栏点击效果切换
  swichTab: function (e) {
    console.log(e.currentTarget.dataset.current)
    if (this.currentTab != e.currentTarget.dataset.current) {
      this.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
  },
  goSearch: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  changeBar: function (e) {
    console.log(e.detail.current)
    this.setData({
      currentTab: e.detail.current
    })
  }
})