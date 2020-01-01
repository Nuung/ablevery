CREATE DATABASE testdb default CHARACTER SET UTF8;

CREATE TABLE tasks (
  id INT(11) unsigned NOT NULL AUTO_INCREMENT,
  task VARCHAR(32) NOT NULL,
  status INT(11) unsigned NOT NULL,
  created_at DATETIME,
  PRIMARY KEY (id)
);

