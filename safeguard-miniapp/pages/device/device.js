const { getDevices, getAlerts, startPairing } = require('../../utils/api');
const { formatRelativeTime, ALERT_TYPE_MAP, DEVICE_MODE_MAP } = require('../../utils/util');

Page({
  data: {
    devices: [],
    alerts: [],
    unhandledAlerts: 0,
    todayAlerts: 0,
    showPairModal: false,
    pairing: false
  },

  onLoad() {
    wx.setNavigationBarTitle({ title: '设备管理' });
  },

  onShow() {
    this.loadData();
  },

  async loadData() {
    try {
      const [devRes, alertRes] = await Promise.all([
        getDevices(),
        getAlerts()
      ]);

      const devices = (devRes.data || []).map(d => ({
        ...d,
        modeLabel: DEVICE_MODE_MAP[d.mode] || d.mode,
        lastSeenLabel: formatRelativeTime(d.lastSeen)
      }));

      const rawAlerts = (alertRes.data?.list || []);
      const alerts = rawAlerts.map(a => ({
        ...a,
        ...ALERT_TYPE_MAP[a.type],
        timeLabel: formatRelativeTime(a.time)
      }));

      const unhandledAlerts = alerts.filter(a => !a.handled && a.level !== 'info').length;
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      const todayAlerts = alerts.filter(a => a.time > todayStart.getTime()).length;

      this.setData({
        devices,
        alerts,
        unhandledAlerts,
        todayAlerts
      });
    } catch (err) {
      console.error('加载设备数据失败:', err);
    }
  },

  onAddDevice() {
    this.setData({ showPairModal: true });
  },

  onPairModalClose() {
    this.setData({ showPairModal: false });
  },

  noop() {},

  async onStartPair() {
    this.setData({ pairing: true });
    try {
      await startPairing();
      wx.showToast({ title: '配网成功！', icon: 'success' });
      this.setData({ showPairModal: false });
      this.loadData();
    } catch (err) {
      wx.showToast({ title: '配网失败，请重试', icon: 'none' });
    } finally {
      this.setData({ pairing: false });
    }
  },

  onDeviceDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/product-detail/product-detail?id=${id}` });
  },

  onDeviceSettings(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '设置功能开发中', icon: 'none' });
  },

  onViewAllAlerts() {
    wx.showToast({ title: '查看全部告警', icon: 'none' });
  }
});
