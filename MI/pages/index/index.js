//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg: [
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f69f6975b7def933aa0856340df34548.jpg?w=2452&amp;h=920",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6db5921636a16dec17814c86c0b68aec.jpg?w=2452&h=920",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e3bb63711cc0e361e31617c11694894.jpg?w=2452&amp;h=920",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6c9b8131dbe21685d4d94a3205c462.jpg?w=2452&h=920"
    ],
    nav_data1: [{
      nav_urls: "../channel/phone/phone",
      nav_img: "../../assets/navicon/shouji.png",
      nav_title: "手机"
    },
    {
      nav_urls: "../channel/tv/tv",
      nav_img: "../../assets/navicon/dianshi.png",
      nav_title: "电视"
    },
    {
      nav_urls: "../channel/computer/computer",
      nav_img: "../../assets/navicon/diannao.png",
      nav_title: "电脑"
    },
    {
      nav_urls: "",
      nav_img: "../../assets/navicon/kanjia.png",
      nav_title: "助力砍价"
    },
    {
      nav_urls: "",
      nav_img: "../../assets/navicon/jiangpin.png",
      nav_title: "0元抽奖"
    }
    ],
    nav_data2: [{
      nav_urls: "../channel/phone/phone",
      nav_img: "../../assets/navicon/pintuan.png",
      nav_title: "1分拼团"
    },
    {
      nav_urls: "../channel/tv/tv",
      nav_img: "../../assets/navicon/zongchou.png",
      nav_title: "小米众筹"
    },
    {
      nav_urls: "../channel/computer/computer",
      nav_img: "../../assets/navicon/miaosha.png",
      nav_title: "小米秒杀"
    },
    {
      nav_urls: "",
      nav_img: "../../assets/navicon/huangou.png",
      nav_title: "以旧换新"
    },
    {
      nav_urls: "",
      nav_img: "../../assets/navicon/hongbao.png",
      nav_title: "签到有礼"
    }
    ],
    recommend: {
      url:'',
      name: '分体蓝牙耳机',
      profile: '雅致简约/分体式耳机/收纳充电盒/蓝牙5.0/触控操作',
      price: '199',
      old: ''
    }
  },
})