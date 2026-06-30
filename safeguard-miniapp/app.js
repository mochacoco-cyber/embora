App({
  globalData: {
    userInfo: null,
    devices: [],
    alerts: [],
    // 模拟数据（MVP 阶段，后续对接真实 API）
    mockDevices: [
      {
        id: 'sg-001',
        name: '客厅 SafeGuard',
        room: '客厅',
        online: true,
        battery: 100,
        firmware: 'v1.0.0-beta',
        lastSeen: Date.now() - 60000,
        mode: 'fall_detect', // fall_detect | presence | both
        alerts24h: 0
      }
    ],
    mockAlerts: [
      {
        id: 'alt-001',
        deviceId: 'sg-001',
        deviceName: '客厅 SafeGuard',
        type: 'fall_warning',
        level: 'warning',
        title: '疑似异常动作',
        desc: '检测到快速姿态变化，未确认为跌倒',
        time: Date.now() - 3600000,
        handled: false
      }
    ]
  },

  onLaunch() {
    console.log('SafeGuard 智感 小程序启动');
    // 检查登录状态
    const token = wx.getStorageSync('token');
    if (!token) {
      // 静默登录
      this.silentLogin();
    }
  },

  silentLogin() {
    wx.login({
      success: (res) => {
        if (res.code) {
          // TODO: 将 code 发送到后端换取 openid 和 token
          console.log('wx.login success, code:', res.code);
          wx.setStorageSync('token', 'mock_token_' + Date.now());
        }
      }
    });
  },

  // 全局方法：获取设备列表
  getDevices() {
    return this.globalData.devices.length > 0
      ? this.globalData.devices
      : this.globalData.mockDevices;
  },

  // 全局方法：获取告警列表
  getAlerts() {
    return this.globalData.alerts.length > 0
      ? this.globalData.alerts
      : this.globalData.mockAlerts;
  }
});
