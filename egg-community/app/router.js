'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  app.post('/getUserId', 'home.getUserId');
  app.post('/register', 'home.register');
};
