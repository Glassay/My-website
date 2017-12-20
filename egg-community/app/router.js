'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/getUserId', controller.home.getUserId);
  // router.post('/a', controller.home.a);
};
