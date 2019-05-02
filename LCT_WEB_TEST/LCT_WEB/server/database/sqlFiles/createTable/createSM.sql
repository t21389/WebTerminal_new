  CREATE TABLE IF NOT EXISTS user_list (
  username varchar(20) NOT NULL,
  privilege int(11) unsigned NOT NULL,   
  PRIMARY KEY (username));
  
  CREATE TABLE IF NOT EXISTS user_log(
  username varchar(20) NOT NULL,
  login_date date NOT NULL,
  login_time varchar(15) NOT NULL,
  logout_date date NOT NULL,
  logout_time varchar(15) NOT NULL,
  PRIMARY KEY(username, login_date, login_time));
