'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  * getUserId() {
    this.ctx.body = yield this.service.text.getUserId();
  }
}

module.exports = HomeController;
