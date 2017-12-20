/**
 * 2017-12-20 kidder && Glassay
 */
'use strict';
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '111111',
    database: 'community',
  },
});

module.exports = app => {
  class Sql extends app.Service {
    * getUserId(a, b) {
      let res;
      try {
        res = knex('User').where({
          user: a,
          password: b,
        }).select('id');
        // res = knex.select().from('User');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * register(a, b) {
      // let res;
      try {
        app.mysql.insert('User', { user: a, password: b });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Sql;
};
// knex.select('title', 'author', 'year').from('books')
// knex.select('user', 'password').from('User');
