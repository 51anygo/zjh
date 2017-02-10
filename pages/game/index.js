// pages/game/index.js
Page({
  data: {
    percent: 0,
    stageHidden: true,
    //遮罩，防止恶意连续点击剪刀石头布图片；
    //tip:开发工具中wx.showToast(loading)会阻止页面所有事件，
    //但在真机测试中有问题，所以自己加了个阻止事件的遮罩
    maskHidden: true,
    progressHidden: false,
    winNum: 0,
    successionWinNum: 0,
    sayWords: "点击图标随机生成三张牌！",
    winOrlose: "",
    playerImg: " ",
    pcImg1: " ",
    winNumAnimation: '',
    sayWordsAnimation: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.preloadImgs();
  },
  onReady: function () {
    // 页面渲染完成


  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  getImages: function () {
    //节省包资源大小，从服务器上获取图片
    var imgs = {
      jd: '../images/jd.png',
      jdWin: '../images/jdWin.png',
      jdLose: '../images/jdLose.png',
      st: '../images/st.png',
      stWin: '../images/stWin.png',
      stLose: '../images/stLose.png',
      bu: '../images/bu.png',
      buWin: '../images/buWin.png',
      buLose: '../images/buLose.png',
      card1: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_1.jpg',
      card2: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_2.jpg',
      card3: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_3.jpg',
      card4: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_4.jpg',
      card5: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_5.jpg',
      card6: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_6.jpg',
      card7: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_7.jpg',
      card8: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_8.jpg',
      card9: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_9.jpg',
      card10: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_10.jpg',
      card11: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_11.jpg',
      card12: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_12.jpg',
      card13: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_13.jpg',
      card14: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_14.jpg',
      card15: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_15.jpg',
      card16: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_16.jpg',
      card17: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_17.jpg',
      card18: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_18.jpg',
      card19: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_19.jpg',
      card20: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_20.jpg',
      card21: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_21.jpg',
      card22: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_22.jpg',
      card23: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_23.jpg',
      card24: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_24.jpg',
      card25: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_25.jpg',
      card26: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_26.jpg',
      card27: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_27.jpg',
      card28: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_28.jpg',
      card29: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_29.jpg',
      card30: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_30.jpg',
      card31: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_31.jpg',
      card32: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_32.jpg',
      card33: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_33.jpg',
      card34: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_34.jpg',
      card35: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_35.jpg',
      card36: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_36.jpg',
      card37: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_37.jpg',
      card38: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_38.jpg',
      card39: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_39.jpg',
      card40: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_40.jpg',
      card41: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_41.jpg',
      card42: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_42.jpg',
      card43: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_43.jpg',
      card44: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_44.jpg',
      card45: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_45.jpg',
      card46: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_46.jpg',
      card47: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_47.jpg',
      card48: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_48.jpg',
      card49: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_49.jpg',
      card50: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_50.jpg',
      card51: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_51.jpg',
      card52: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_52.jpg',
      card53: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_53.jpg',
      card54: 'https://raw.githubusercontent.com/51anygo/anygo/master/puke_images/veryhuo.com_pkp_54.jpg'
    }

    return imgs;
  },
  preloadImgs: function () {//服务器图片预加载
    var count = 0;
    var that = this;
    var imgs = this.getImages();
    //var preLoadRes = [imgs.jd, imgs.jdWin, imgs.jdLose, imgs.st, imgs.stWin, imgs.stLose, imgs.bu, imgs.buWin, imgs.buLose];
    var preLoadRes = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12",                           "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23",                            "card24", "card25", "card26", "card27", "card28", "card29", "card30", "card31", "card32", "card33", "card34",                            "card35", "card36", "card37", "card38", "card39", "card40", "card41", "card42", "card43", "card44", "card45",                            "card46", "card47", "card48", "card49", "card50", "card51", "card52", "card53", "card54"
                  ];
    for (var i = 0; i < preLoadRes.length; i++) {
      wx.request({
        url: preLoadRes[i],
        complete: function (res) {
          count++;
          var percent = (count / preLoadRes.length).toFixed(2) * 100;
          that.setData({
            percent: percent
          });
          if (percent >= 100) {
            that.showStage();
          }
        }
      });
    }
  },
  showStage: function () {
    this.setData({
      stageHidden: false,
      progressHidden: true,
    });
  },
  getResult: function (a, b) {//获取猜拳结果
    /*
    定义剪刀==1，石头==2，布==3
    a为玩家的选择，b为电脑随机生成，c为差值结果
    */
    var winOrlose, c = a - b;
    var state = {
      win: false,
      lose: false,
      draw: false
    };
    if (c == -2 || c == 1) {
      state.win = true;//赢
    } else if (c == -1 || c == 2) {
      state.lose = true;//输
    } else {
      state.draw = true;//平局
    }
    return state;
  },
  setWinOrloseTxt: function (txt) {//动态显示输赢标识语
    this.setData({
      winOrlose: txt
    });
  },
  setWinNumTxt: function (num, successionNum) {//总获胜次数
    var that = this;
    this.setData({
      winNum: num,
      winNumAnimation: "transform: scale(2)"
    });
    setTimeout(function () {//移除动画样式
      that.setData({
        winNumAnimation: ""
      });
    }, 200);
  },
  beforePlay: function () {//每次玩之前清除结果区数据
    this.setData({
      winOrlose: "",
      maskHidden: false,
      playerImg: "../images/alpha.png",
      pcImg1: "../images/alpha.png",
      pcImg2: "../images/alpha.png",
      pcImg3: "../images/alpha.png"
    });
  },

  play: function (event) {//点击剪刀石头布图片开始游戏
    var that = this;
    var playerVal = parseInt(event.currentTarget.dataset.val);//获取代表剪刀石头布的数字
    var randomVal1 = parseInt(Math.random() * 52 + 1, 10);//随机生成1-3的整数
    var randomVal2 = parseInt(Math.random() * 52 + 1, 10);//随机生成1-3的整数
    var randomVal3 = parseInt(Math.random() * 52 + 1, 10);//随机生成1-3的整数
    var result = this.getResult(playerVal, randomVal1, randomVal2, randomVal3);
    that.beforePlay();
    wx.showToast({
      title: '随机生成牌中...',
      icon: 'loading'
    });
    setTimeout(function () {
      wx.hideToast();
      that.setResultImg(result, playerVal, randomVal1, randomVal2, randomVal3);
      that.setData({
        maskHidden: true
      });
    }, 600)

  },
  setResultImg: function (state, player, pc1, pc2, pc3) {//设置比赛结果显示对应的输赢图片
    var imgs = this.getImages();
    var imgName = ["card1", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12",                           "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23",                            "card24", "card25", "card26", "card27", "card28", "card29", "card30", "card31", "card32", "card33", "card34",                            "card35", "card36", "card37", "card38", "card39", "card40", "card41", "card42", "card43", "card44", "card45",                            "card46", "card47", "card48", "card49", "card50", "card51", "card52", "card53", "card54"
                  ];
    var playerImg = imgName[player - 1];
    var pcImg1 = imgName[pc1 - 1];
    var pcImg2 = imgName[pc2 - 1];
    var pcImg3 = imgName[pc3 - 1];
    var winOrlose;
    var winNum = this.data.winNum;//获胜总次数
    var successionWinNum = this.data.successionWinNum;//连续获胜次数

    if (true) {
      winOrlose = "Win!";
      winNum++; successionWinNum++;
      this.setData({
        playerImg: imgs[playerImg + "Win"],
        pcImg1: imgs[pcImg1],
        pcImg2: imgs[pcImg2],
        pcImg3: imgs[pcImg3],
        successionWinNum: successionWinNum
      });
      this.setWinNumTxt(winNum);
    }

  }



})