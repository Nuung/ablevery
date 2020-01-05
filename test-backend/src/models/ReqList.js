'user strict';
// db setting
const mysql_dbc = require('../database/db_con')();

// connect to DB -> and connection Test
const connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

// ReqList object constructor
const ReqList = function(reqlist) { // codi page List
  this.customer_id = reqlist.customer_id; // customer id
  this.service_day = reqlist.service_day; // datetime
  this.req_day = new Date(); // 신청요청된 날짜
  this.codi_id = reqlist.codi_id; // 매칭된 codi_id -> 처음엔 무조건 null
};

ReqList.createReqList = function (newReqList, result) {    
  connection.query("INSERT INTO req_list set ?", newReqList, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, newReqList);
    }
  });
};

ReqList.getAllReqList = function (result) {
  connection.query("Select * from req_list", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('ReqList : ', res);  
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