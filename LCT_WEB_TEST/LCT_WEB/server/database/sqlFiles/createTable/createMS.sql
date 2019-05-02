  CREATE TABLE IF NOT EXISTS SubrackKeys (
  RackId tinyint(3) unsigned NOT NULL default '0',
  SubrackId tinyint(3) unsigned NOT NULL default '0',
  ukey varchar(2)  default '00',     
  SubrackAlarmStaus tinyint(3) unsigned default '0',   
  PRIMARY KEY (ukey));

  CREATE TABLE IF NOT EXISTS ContCardInfo (
  ukey  varchar(2)  default '00',
  CardId tinyint(3) unsigned NOT NULL default '0',  
  State tinyint(3) unsigned default '0',
  Status tinyint(3) unsigned default '0',  
  Mac varchar(44)  default 'NONE',
  Ip varchar(32)  default 'NONE',
  Uid varchar(32)  default 'NONE',
  CardType tinyint(3) unsigned default '0',  
  CardSubType tinyint(3) unsigned default '0',  
  SerialNo varchar(32)  default 'NONE',
  PRIMARY KEY  (ukey,CardId));

  CREATE TABLE IF NOT EXISTS CardInfo (
  ukey  varchar(2)  default '00',
  CardId tinyint(3) unsigned NOT NULL default '0',  
  State tinyint(3) unsigned default '0',
  CardType tinyint(3) unsigned default '0', 
  CardSubType tinyint(3) unsigned default '0',  
  SerialNo varchar(32)  default 'NONE',
  PRIMARY KEY  (ukey,CardId));

 CREATE TABLE IF NOT EXISTS DiscoveredTpc (
  RackId tinyint(3) unsigned NOT NULL default '0',
  CardId tinyint(3) unsigned NOT NULL default '0',
  Mac varchar(20)  default 'NONE',
  Ip varchar(32)  default 'NONE', 
  State tinyint(3) unsigned default '0', 
  Status tinyint(3) unsigned default '0',   
  CardType tinyint(3) unsigned NOT NULL default '0',
  CardSubType tinyint(3) unsigned NOT NULL default '0',
  SerialNo varchar(32)  default 'NONE', 
  PRIMARY KEY (Mac));

  CREATE TABLE IF NOT EXISTS ControllerAlarmStatus (
  ukey  varchar(2)  default '00',
  CardType  varchar(10)  default 'NONE',
  CardId tinyint(3) unsigned NOT NULL default '0',  
  InterfaceId tinyint(3) unsigned default '0',
  InterfaceAlarmStatus tinyint(3) unsigned default '0',
  CardAlarmStaus tinyint(3) unsigned default '0',  
  PRIMARY KEY  (ukey,CardId,CardType,InterfaceId));

  CREATE TABLE IF NOT EXISTS TpnAlarmStatus (
  ukey  varchar(2)  default '00',
  CardType  varchar(10)  default 'NONE',
  CardId tinyint(3) unsigned NOT NULL default '0',  
  InterfaceId tinyint(3) unsigned default '0',
  InterfaceAlarmStatus tinyint(3) unsigned default '0',
  CardAlarmStaus tinyint(3) unsigned default '0',  
  PRIMARY KEY  (ukey,CardId,InterfaceId));
   