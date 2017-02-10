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
    this.showStage();
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
      card1: '../images/puke_1.jpg',
      card2: '../images/puke_2.jpg',
      card3: '../images/puke_3.jpg',
      card4: '../images/puke_4.jpg',
      card5: '../images/puke_5.jpg',
      card6: '../images/puke_6.jpg',
      card7: '../images/puke_7.jpg',
      card8: '../images/puke_8.jpg',
      card9: '../images/puke_9.jpg',
      card10: '../images/puke_10.jpg',
      card11: '../images/puke_11.jpg',
      card12: '../images/puke_12.jpg',
      card13: '../images/puke_13.jpg',
      card14: '../images/puke_14.jpg',
      card15: '../images/puke_15.jpg',
      card16: '../images/puke_16.jpg',
      card17: '../images/puke_17.jpg',
      card18: '../images/puke_18.jpg',
      card19: '../images/puke_19.jpg',
      card20: '../images/puke_20.jpg',
      card21: '../images/puke_21.jpg',
      card22: '../images/puke_22.jpg',
      card23: '../images/puke_23.jpg',
      card24: '../images/puke_24.jpg',
      card25: '../images/puke_25.jpg',
      card26: '../images/puke_26.jpg',
      card27: '../images/puke_27.jpg',
      card28: '../images/puke_28.jpg',
      card29: '../images/puke_29.jpg',
      card30: '../images/puke_30.jpg',
      card31: '../images/puke_31.jpg',
      card32: '../images/puke_32.jpg',
      card33: '../images/puke_33.jpg',
      card34: '../images/puke_34.jpg',
      card35: '../images/puke_35.jpg',
      card36: '../images/puke_36.jpg',
      card37: '../images/puke_37.jpg',
      card38: '../images/puke_38.jpg',
      card39: '../images/puke_39.jpg',
      card40: '../images/puke_40.jpg',
      card41: '../images/puke_41.jpg',
      card42: '../images/puke_42.jpg',
      card43: '../images/puke_43.jpg',
      card44: '../images/puke_44.jpg',
      card45: '../images/puke_45.jpg',
      card46: '../images/puke_46.jpg',
      card47: '../images/puke_47.jpg',
      card48: '../images/puke_48.jpg',
      card49: '../images/puke_49.jpg',
      card50: '../images/puke_50.jpg',
      card51: '../images/puke_51.jpg',
      card52: '../images/puke_52.jpg',
      card53: '../images/puke_53.jpg',
      card54: '../images/puke_54.jpg'
    }

    return imgs;
  },
  /*
  preloadImgs: function () {//服务器图片预加载
    var count = 0;
    var that = this;
    var imgs = this.getImages();
    //var preLoadRes = [imgs.jd, imgs.jdWin, imgs.jdLose, imgs.st, imgs.stWin, imgs.stLose, imgs.bu, imgs.buWin, imgs.buLose];
    var preLoadRes = [imgs.card1, imgs.card2, imgs.card3, imgs.card4, imgs.card5, imgs.card6, imgs.card7, imgs.card8, imgs.card9, imgs.card10, imgs.card11, imgs.card12, imgs.card13, imgs.card14, imgs.card15, imgs.card16, imgs.card17, imgs.card18, imgs.card19, imgs.card20, imgs.card21, imgs.card22, imgs.card23, imgs.card24, imgs.card25, imgs.card26, imgs.card27, imgs.card28, imgs.card29, imgs.card30, imgs.card31, imgs.card32, imgs.card33, imgs.card34, imgs.card35, imgs.card36, imgs.card37, imgs.card38, imgs.card39, imgs.card40, imgs.card41, imgs.card42, imgs.card43, imgs.card44, imgs.card45, imgs.card46, imgs.card47, imgs.card48, imgs.card49, imgs.card50, imgs.card51, imgs.card52, imgs.card53, imgs.card54
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
  */
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
    var imgName = ["card1", "card2", "card3", "card4", "card6", "card7", "card8", "card9", "card10", "card11", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24", "card25", "card26", "card27", "card28", "card29", "card30", "card31", "card32", "card33", "card34", "card35", "card36", "card37", "card38", "card39", "card40", "card41", "card42", "card43", "card44", "card45", "card46", "card47", "card48", "card49", "card50", "card51", "card52", "card53", "card54"
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