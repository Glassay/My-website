'use strict';
// npm install knex --save    安装knex库
const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('User').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('User', function(table) {
        table.increments();
        table.string('user').notNullable().defaultTo('');
        table.string('password').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

    const hasArticles = yield app.mysql.query(knex.schema.hasTable('Articles').toString());
    if (hasArticles.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('Articles', function(table) {
        table.increments();
        table.string('topic').notNullable().defaultTo('');
        table.string('user').notNullable().defaultTo('');
        table.string('articles').notNullable().defaultTo('');
        table.integer('start').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

    const hasCommentaries = yield app.mysql.query(knex.schema.hasTable('Commentaries').toString());
    if (hasCommentaries.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('Commentaries', function(table) {
        table.increments();
        table.string('user').notNullable().defaultTo('');
        table.string('commentaries').notNullable().defaultTo('');
        table.string('articlesId').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
  });
};
