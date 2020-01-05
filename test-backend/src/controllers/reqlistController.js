'use strict';

const ReqList = require('../models/ReqList');

exports.list_all_reqList = function(req, res) {
  ReqList.getAllReqList(function(err, reqList) {
    console.log('controller - getAllReqList')
    if (err){
      res.send(err);
      console.log('res', reqList);
    }
    res.send(reqList);
  });
};

exports.read_a_reqList = function(req, res) {
  ReqList.getAReqList(req.params.id, function(err, reqList) {
    console.log('controller - getAReqList')
    if (err){
      res.send(err);
      console.log('res a reqList', reqList);
    }
    res.send(reqList);
  });
};

// exports.read_a_customer_by_name = function(req, res) {
//   Customer.getACustomerbyName(req.params.name, function(err, customer) {
//     console.log('controller - getACustomerbyName')
//     if (err){
//       res.send(err);
//       console.log('search a customer', customer);
//     }
//     res.send(customer);
//   });
// };

exports.create_a_reqList = function(req, res) {
  // newTask에 대한 검증이 필요함! -> 예외 상황엔 no insert  / newTask 노출 X -> 정규표현식 or / 모든 곳에 해당
  // -> 내부기능이 있을 수 있다 -> 시큐어 코딩 정보 확인하기!
  let new_reqList = new ReqList(req.body);

  //handles null error 
  if(!new_reqList.customer_id) {
    res.status(400).send({ error:true, message: 'Please provide customer_id' });
  }
  else if(!new_reqList.service_day) {
    res.status(400).send({ error:true, message: 'Please provide service_day' });
  }
  else {
    ReqList.createReqList(new_reqList, function(err, reqList) {
      if (err)
        res.send(err);

      res.json(reqList);
    });
  }
};  
  
exports.update_a_reqlist_codi = function(req, res) {
  ReqList.updateCodiByid(req.params.id, new ReqList(req.body), function(err, reqList) {
    if (err)
      res.send(err);

    res.json(reqList);
  });
};
  
  
// exports.delete_a_customer = function(req, res) {
//   Customer.remove(req.params.id, function(err, customer) {
//     if (err)
//       res.send(err);

//     res.json({ message: 'Task successfully deleted' });
//   });
// };