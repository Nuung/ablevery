'user strict';
// db setting
const mysql_dbc = require('../database/db_con')();

// connect to DB -> and connection Test
const connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

// Task object constructor
const Customer = function(customer) { // 대상자 (수혜자)
  this.name = customer.name; // 이름 varchar(32)
  this.ages = customer.ages; // 나이 int(4) unsigned
  this.gender = customer.gender; // 성별 tinyint(1)
  this.phonenum = customer.phonenum; // 전화번호 varchar(32) 
  this.type = customer.type; // 장애형태 varchar(16)
  this.location = customer.location; // 선호지역 varchar(100)
  this.follower = customer.follower; // 동행인 여부 tinyint(1)
  this.get_count = customer.get_count; // 수혜 횟수 int(11) unsigned
  this.memo = customer.memo; // 메모 varchar(320)
  this.created_at = new Date(); // 생성된 날짜
};

//////////////////////////////////////////////////// make Task's methods

Customer.createCustomer = function (newCustomer, result) {    
  connection.query("INSERT INTO customer set ?", newCustomer, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      // console.log("inputed Id:" + res.insertId);
      result(null, newCustomer);
    }
  });
};

Customer.getAllCustomer = function (result) {
  connection.query("Select * from customer", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('Customer : ', res);  
      result(null, res);
    }
  });   
};

Customer.getACustomerbyName = function (name, result) {  
  connection.query("Select * from customer WHERE name LIKE ?", ['%'+name+'%'], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('A Customer : ', res);  
      result(null, res);
    }
  });   
};

Customer.getACustomer = function (id, result) {  
  connection.query("Select * from customer WHERE id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('A Customer : ', res);  
      result(null, res);
    }
  });   
};

// Customer.updateByid = function(id, customer, result){
//   // isEnd 는 tinyint(1) => 0, 1 값 뿐
//   connection.query("UPDATE customer SET isEnd = ? WHERE id = ?", [customer.isEnd, id], function (err, res) {
//     if(err) {
//       console.log("error: ", err);
//       result(null, err);
//     }
//     else {
//       result(null, res);
//     }
//   }); 
// };

Customer.remove = function(id, result){
    connection.query("DELETE FROM customer WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    }); 
};

module.exports = Customer;