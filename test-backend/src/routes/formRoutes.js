'use strict';

module.exports = function(app) {
  var customerList = require('../controllers/customerController.js');
  var reqList = require('../controllers/reqlistController.js');

  // todoList Routes
  app.route('/customers')
    .get(customerList.list_all_customers)
    .post(customerList.create_a_customer);
  
  app.route('/customers/:name')
    .get(customerList.read_a_customer_by_name);

  app.route('/customers/list/:id') // id is primary key
    .get(customerList.read_a_customer)
    .delete(customerList.delete_a_customer);

  app.route('/reqlist')
    .get(reqList.list_all_reqList)
    .post(reqList.create_a_reqList);
  
  app.route('/reqlist/:id')
    .get(reqList.read_a_reqList)
    .put(reqList.update_a_reqlist_codi);
};