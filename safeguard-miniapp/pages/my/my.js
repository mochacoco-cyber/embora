Page({
  data: {},

  onLoad() {
    wx.setNavigationBarTitle({ title: '我的' });
  },

  onMenuTap(e) {
    const type = e.currentTarget.dataset.type;
    
    switch (type) {
      case 'orders':
        wx.showToast({ title: '订单功能开发中', icon: 'none' });
        break;
      case 'alerts':
        wx.showToast({ title: '推送设置开发中', icon: 'none' });
        break;
      case 'share':
        // 触发分享
        break;
      case 'about':
        wx.navigateTo({ url: '/pages/product-detail/product-detail' });
        break;
      case 'help':
        wx.showToast({ title: '帮助文档开发中', icon: 'none' });
        break;
      case 'feedback':
        wx.showToast({ title: '反馈功能开发中', icon: 'none' });
        break;
      case 'github':
        wx.setClipboardData({
          data: 'https://github.com/mochacoco-cyber/embora',
          success: () => {
            wx.showToast({ title: 'GitHub 地址已复制', icon: 'success' });
          }
        });
        break;
      default:
        break;
    }
  },

  onShareAppMessage() {
    return {
      title: 'SafeGuard 智感 — 不用摄像头也能守护家人',
      path: '/pages/index/index'
    };
  }
});
