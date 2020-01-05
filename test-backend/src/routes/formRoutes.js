'use strict';

module.exports = function(app) {
  var customerList = require('../controllers/customerController.js');
  
  // todoList Routes
  app.route('/customers')
    .get(customerList.list_all_customers)
    .post(customerList.create_a_customer);
  
  app.route('/customers/:id')
    .get(customerList.read_a_customer)
    .delete(customerList.delete_a_customer);
  
    // .put(customerList.update_a_customer_end)
};