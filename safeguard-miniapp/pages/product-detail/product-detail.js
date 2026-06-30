Page({
  data: {},

  onLoad(options) {
    wx.setNavigationBarTitle({ title: '产品详情' });
  },

  onReserve() {
    wx.switchTab({ url: '/pages/index/index' });
    setTimeout(() => {
      // 触发首页的预约弹窗
      const pages = getCurrentPages();
      const indexPage = pages.find(p => p.route === 'pages/index/index');
      if (indexPage && indexPage.onReserveTap) {
        indexPage.onReserveTap();
      }
    }, 300);
  }
});
