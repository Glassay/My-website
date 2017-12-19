'use strict';

module.exports = app => {
  class Sql extends app.Service {
    // 在kidder表格中添加一条
    * getUserId(a) {
      let res;
      try {
        res = yield app.mysql.get('User', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Sql;
};
