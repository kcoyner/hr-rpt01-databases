DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


DROP TABLE IF EXISTS users;

CREATE TABLE users (
  uid INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (uid)
);



DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
  rid INTEGER NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (rid)
);



DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  mid INTEGER NOT NULL AUTO_INCREMENT,
  body MEDIUMTEXT NULL DEFAULT NULL,
  createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  uid_users INTEGER NULL DEFAULT NULL,
  rid_rooms INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (mid)
);

/*
  createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  */
DROP TABLE IF EXISTS `users_rooms`;

CREATE TABLE `users_rooms` (
  `urid` INTEGER NOT NULL AUTO_INCREMENT,
  `uid_users` INTEGER NULL DEFAULT NULL,
  `rid_rooms` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`urid`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (uid_users) REFERENCES `users` (`uid`);
ALTER TABLE `messages` ADD FOREIGN KEY (rid_rooms) REFERENCES `rooms` (`rid`);
ALTER TABLE `users_rooms` ADD FOREIGN KEY (uid_users) REFERENCES `users` (`uid`);
ALTER TABLE `users_rooms` ADD FOREIGN KEY (rid_rooms) REFERENCES `rooms` (`rid`);

