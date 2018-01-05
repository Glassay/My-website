/**
 * 2017-12-20 kidder && Glassay
 */
'use strict';
// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: '127.0.0.1',
//     port: '3306',
//     user: 'root',
//     password: '111111',
//     database: 'community',
//   },
// });

module.exports = app => {
  class Sql extends app.Service {
    * getUserId(a, b) {
      let res;
      try {
        res = yield app.mysql.get('User', { user: a, password: b });
        // res = knex.select().from('User');
        console.log('res: ', res);
        if (res) {
          return res;
        }
        return false;
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
    }

    * register(a, b) {
      let res;
      try {
        res = yield app.mysql.get('User', { user: a });
        if (!res) {
          app.mysql.insert('User', { user: a, password: b });
          return true;
        }
        return false;
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
    }

    * editup(a, b, c) {
      try {
        app.mysql.insert('Articles', { topic: a, articles: b, user: c });
        // app.mysql.query('');
        return true;
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
    }

    * getuserheader(a) {
      let res;
      try {
        res = app.mysql.query(`SELECT header FROM User WHERE user=${a};`);
        return res;
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
    }
  }
  return Sql;
};
// knex.select('title', 'author', 'year').from('books')
// knex.select('user', 'password').from('User');
