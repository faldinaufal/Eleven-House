CREATE USER IF NOT EXISTS `farhan`@`localhost` IDENTIFIED WITH mysql_native_password BY '123456';

GRANT ALL PRIVILEGES ON `farhan`.* TO `farhan`@`localhost` WITH GRANT OPTION;

CREATE DATABASE IF NOT EXISTS `rumahkosan`;