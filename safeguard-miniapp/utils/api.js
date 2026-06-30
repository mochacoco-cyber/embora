/**
 * SafeGuard 智感 — API 接口封装
 * MVP 阶段使用模拟数据，后续替换为真实后端 API
 */

const MOCK_DELAY = 500; // 模拟网络延迟

/**
 * 模拟请求
 */
function request(options) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: options.mockData || {},
        message: 'success'
      });
    }, MOCK_DELAY);
  });
}

/**
 * 获取设备列表
 */
function getDevices() {
  return request({
    mockData: [
      {
        id: 'sg-001',
        name: '客厅 SafeGuard',
        room: '客厅',
        online: true,
        battery: 100,
        firmware: 'v1.0.0-beta',
        lastSeen: Date.now() - 60000,
        mode: 'fall_detect',
        alerts24h: 0
      }
    ]
  });
}

/**
 * 获取告警列表
 */
function getAlerts(page = 1, pageSize = 20) {
  const allAlerts = [
    {
      id: 'alt-001',
      deviceId: 'sg-001',
      deviceName: '客厅 SafeGuard',
      type: 'fall_warning',
      level: 'warning',
      title: '疑似异常动作',
      desc: '检测到快速姿态变化，系统未确认为跌倒。请确认家人状态。',
      time: Date.now() - 3600000,
      handled: false
    },
    {
      id: 'alt-002',
      deviceId: 'sg-001',
      deviceName: '客厅 SafeGuard',
      type: 'test',
      level: 'info',
      title: '设备自检完成',
      desc: 'SafeGuard 智感已完成开机自检，所有传感器工作正常。',
      time: Date.now() - 7200000,
      handled: true
    }
  ];

  return request({
    mockData: {
      list: allAlerts,
      total: allAlerts.length,
      page,
      pageSize
    }
  });
}

/**
 * 提交早鸟预约
 */
function submitReservation(data) {
  if (!data.name || !data.phone) {
    return Promise.reject(new Error('请填写姓名和手机号'));
  }
  if (!/^1[3-9]\d{9}$/.test(data.phone)) {
    return Promise.reject(new Error('请输入正确的手机号'));
  }
  return request({
    mockData: {
      reservationId: 'rsv_' + Date.now(),
      status: 'confirmed'
    }
  });
}

/**
 * 设备配网
 */
function startPairing() {
  return request({
    mockData: {
      pairingId: 'pair_' + Date.now(),
      status: 'ready'
    }
  });
}

/**
 * 处理告警（标记已处理）
 */
function handleAlert(alertId) {
  return request({
    mockData: {
      alertId,
      handled: true,
      handledAt: Date.now()
    }
  });
}

module.exports = {
  getDevices,
  getAlerts,
  submitReservation,
  startPairing,
  handleAlert
};
