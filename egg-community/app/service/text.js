/**
 * 2017-12-20 kidder && Glassay
 */
'use strict';

module.exports = app => {
  class Sql extends app.Service {
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
