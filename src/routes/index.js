'use strict';

const nodeRouters = require('./node_route');

module.exports = (app, db) => {
  nodeRouters(app, db);
};
