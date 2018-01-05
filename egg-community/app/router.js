'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // app.router.resources('topics', '/api/v2/topics', app.controller.topics);
  app.post('/getuserid', 'home.getUserId');
  app.post('/register', 'home.register');
  app.post('/editup', 'home.editup');
  app.post('/getuserheader', 'home.getuserheader');
};
