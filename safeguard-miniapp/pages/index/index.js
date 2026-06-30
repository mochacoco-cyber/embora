const { submitReservation } = require('../../utils/api');

Page({
  data: {
    showReserveModal: false,
    formName: '',
    formPhone: '',
    formScenes: {
      elder: true,
      baby: false,
      smart: false
    },
    submitting: false
  },

  onLoad() {
    wx.setNavigationBarTitle({ title: 'SafeGuard 智感' });
  },

  onShareAppMessage() {
    return {
      title: 'SafeGuard 智感 — 不用摄像头也能守护家人',
      path: '/pages/index/index',
      imageUrl: '/images/share-cover.png'
    };
  },

  // 点击预约
  onReserveTap() {
    this.setData({ showReserveModal: true });
  },

  // 了解更多 — 滚动到功能区域
  onLearnMore() {
    wx.pageScrollTo({ scrollTop: 600, duration: 300 });
  },

  // 场景卡片点击
  onScenarioTap(e) {
    const scene = e.currentTarget.dataset.scene;
    wx.showToast({ title: '即将跳转详情', icon: 'none' });
  },

  // 关闭弹窗
  onModalClose() {
    this.setData({ showReserveModal: false });
  },

  noop() {},

  // 表单输入
  onNameInput(e) {
    this.setData({ formName: e.detail.value });
  },
  onPhoneInput(e) {
    this.setData({ formPhone: e.detail.value });
  },
  onSceneToggle(e) {
    const key = e.currentTarget.dataset.key;
    const scenes = { ...this.data.formScenes };
    scenes[key] = !scenes[key];
    this.setData({ formScenes: scenes });
  },

  // 提交预约
  async onSubmitReserve() {
    const { formName, formPhone } = this.data;
    
    if (!formName.trim()) {
      wx.showToast({ title: '请填写姓名', icon: 'none' });
      return;
    }
    if (!/^1[3-9]\d{9}$/.test(formPhone)) {
      wx.showToast({ title: '请输入正确的手机号', icon: 'none' });
      return;
    }

    this.setData({ submitting: true });

    try {
      await submitReservation({
        name: formName.trim(),
        phone: formPhone,
        scenes: this.data.formScenes
      });

      wx.showToast({ title: '预约成功！🎉', icon: 'success' });
      this.setData({ showReserveModal: false });
      
      // 清空表单
      setTimeout(() => {
        this.setData({
          formName: '',
          formPhone: '',
          formScenes: { elder: true, baby: false, smart: false }
        });
      }, 500);
    } catch (err) {
      wx.showToast({ title: err.message || '提交失败，请重试', icon: 'none' });
    } finally {
      this.setData({ submitting: false });
    }
  }
});
