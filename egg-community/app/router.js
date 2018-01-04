'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  app.post('/getuserid', 'home.getUserId');
  app.post('/register', 'home.register');
  app.post('/editup', 'home.editup');
};
