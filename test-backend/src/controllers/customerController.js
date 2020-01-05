'use strict';

const Customer = require('../models/Customer');

exports.list_all_customers = function(req, res) {
  Customer.getAllCustomer(function(err, customer) {
    console.log('controller - getAllCustomer')
    if (err){
      res.send(err);
      console.log('res', customer);
    }
    res.send(customer);
  });
};

exports.read_a_customer = function(req, res) {
  Customer.getACustomer(req.params.id, function(err, customer) {
    console.log('controller - getACustomer')
    if (err){
      res.send(err);
      console.log('res a customer', customer);
    }
    res.send(customer);
  });
};

exports.read_a_customer_by_name = function(req, res) {
  Customer.getACustomerbyName(req.params.name, function(err, customer) {
    console.log('controller - getACustomerbyName')
    if (err){
      res.send(err);
      console.log('search a customer', customer);
    }
    res.send(customer);
  });
};

exports.create_a_customer = function(req, res) {
  // newTask에 대한 검증이 필요함! -> 예외 상황엔 no insert  / newTask 노출 X -> 정규표현식 or / 모든 곳에 해당
  // -> 내부기능이 있을 수 있다 -> 시큐어 코딩 정보 확인하기!
  let new_customer = new Customer(req.body);

  //handles null error 
  if(!new_customer.name) {
    res.status(400).send({ error:true, message: 'Please provide name' });
  }
  else if(!new_customer.phonenum) {
    res.status(400).send({ error:true, message: 'Please provide phonenum' });
  }
  else {
    Customer.createCustomer(new_customer, function(err, customer) {
      if (err)
        res.send(err);

      res.json(customer);
    });
  }
};  
  
// exports.update_a_customer_end = function(req, res) {
//   Customer.updateByNum(req.params.id, new Customer(req.body), function(err, customer) {
//     if (err)
//       res.send(err);

//     res.json(customer);
//   });
// };
  
  
exports.delete_a_customer = function(req, res) {
  Customer.remove(req.params.id, function(err, customer) {
    if (err)
      res.send(err);

    res.json({ message: 'Task successfully deleted' });
  });
};