/**
 * SafeGuard 智感 — 工具函数
 */

/**
 * 格式化相对时间
 * @param {number} timestamp 时间戳
 * @returns {string} 如 "3分钟前"、"2小时前"
 */
function formatRelativeTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return '刚刚';
  if (minutes < 60) return `${minutes}分钟前`;
  if (hours < 24) return `${hours}小时前`;
  if (days < 7) return `${days}天前`;
  
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

/**
 * 格式化日期时间
 * @param {number} timestamp 
 * @returns {string} 如 "6月30日 13:45"
 */
function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${month}月${day}日 ${hours}:${minutes}`;
}

/**
 * 告警类型映射
 */
const ALERT_TYPE_MAP = {
  fall_detected: { icon: '🆘', label: '跌倒检测', level: 'critical' },
  fall_warning: { icon: '⚠️', label: '异常动作', level: 'warning' },
  no_movement: { icon: '⏱', label: '久未活动', level: 'warning' },
  device_offline: { icon: '📡', label: '设备离线', level: 'warning' },
  low_battery: { icon: '🔋', label: '电量过低', level: 'warning' },
  test: { icon: '✅', label: '测试告警', level: 'info' }
};

/**
 * 设备模式映射
 */
const DEVICE_MODE_MAP = {
  fall_detect: '跌倒检测模式',
  presence: '人在感知模式',
  both: '全面守护模式'
};

module.exports = {
  formatRelativeTime,
  formatDateTime,
  ALERT_TYPE_MAP,
  DEVICE_MODE_MAP
};
