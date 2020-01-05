CREATE DATABASE ablevery_codi default CHARACTER SET UTF8;

CREATE TABLE codi (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL,
  email VARCHAR(320) NOT NULL,
  password VARCHAR(100) NOT NULL,
  group_name VARCHAR(32) NOT NULL,
  do_count INT(11) DEFAULT '0',
  isAdmin TINYINT(1),
  created_at DATETIME,
  PRIMARY KEY (id)
);

// 개인 Codi 가 /mypage 에서 보는 자기와 매칭된 리스트
CREATE TABLE res_list (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT,
  customer_id INT(11) unsigned NOT NULL,
  codi_id INT(11) unsigned NOT NULL,
  review VARCHAR(320),
  isEnd TINYINT(1),
  PRIMARY KEY (id)
);

// 모든 Codi 가 /codi 페이지에서 보는 리스트
CREATE TABLE req_list (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT,
  customer_id INT(11) unsigned NOT NULL,
  service_day DATETIME,
  req_day DATETIME,
  codi_id INT(11) unsigned,
  PRIMARY KEY (id)
);


CREATE TABLE customer (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL,
  ages INT(4) unsigned NOT NULL,
  gender TINYINT(1) NOT NULL,
  phonenum VARCHAR(32) NOT NULL,
  type VARCHAR(16),
  location VARCHAR(100) NOT NULL,
  follower TINYINT(1),
  get_count INT(4) unsigned NOT NULL,
  memo VARCHAR(320),
  created_at DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE cust_detail (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT,
  req_id INT(11) unsigned NOT NULL,
  tpo VARCHAR(320),
  important VARCHAR(320),
  complex VARCHAR(320),
  not_want VARCHAR(320),
  brand VARCHAR(320),
  price VARCHAR(320),
  have_color VARCHAR(320),
  memo VARCHAR(320),
  PRIMARY KEY (id)
);

