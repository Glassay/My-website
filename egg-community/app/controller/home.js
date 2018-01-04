'use strict';

// const Controller = require('egg').Controller;

module.exports = app => {
  class HomeController extends app.Controller {
    * getUserId() {
      const { user, password } = this.ctx.request.body;
      const res = yield this.service.text.getUserId(user, password);
      this.ctx.body = res;
    }
    * register() {
      const { user, password } = this.ctx.request.body;
      this.ctx.body = yield this.service.text.register(user, password);
    }
    * editup() {
      const { article_title, article_content, user } = this.ctx.request.body;
      this.ctx.body = yield this.service.text.editup(article_title, article_content, user);
    }
  }

  return HomeController;
};
