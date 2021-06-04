import dayjs from 'dayjs';

export default {
  install(app, options) {
    // 时间格式化
    app.config.globalProperties.timeFormatter = function (row, column, cellValue, index) {
      if (cellValue) {
        return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss');
      }
    };
  }
}