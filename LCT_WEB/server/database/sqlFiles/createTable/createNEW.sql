  CREATE TABLE IF NOT EXISTS Header (
  ukey  varchar(2)  default '00',    
  OpCode  int(4)  default '0000',
  Subfield tinyint(1) default '0',
  DescProcNum int(2) default '0',
  SendProcNum int(2) default '0',
  Length int(4) default '0000',
  RackNo int(2) default '0',
  SubrackNo int(2) default '0',
  CardId int(2) default '0',
  GuidId int(2) default '0',
  MessageType int(2) default '0',
  Version int(2) default '1',
  CardType int(2) default '0',
  CardSubType int(2) default '0',
  NeId int(2) default '0',
  Rsrvd1 tinyint(1) default '0',
  Rsrvd2 tinyint(1) default '0',
  Rsrvd3 tinyint(1) default '0',
  Rsrvd4 tinyint(1) default '0',
  Rsrvd5 tinyint(1) default '0',
  Date int(4) unsigned,
  Month int(2) unsigned,
  Year int(4) unsigned,
  Hour int(2) unsigned default '00',
  Minute int(2) unsigned default '00',
  Second int(2) unsigned default '00' ,
  PRIMARY KEY  (ukey,OpCode));


   CREATE TABLE IF NOT EXISTS CsccInfo(
   ukey  varchar(2)  default '00',
   StationName varchar(10) default 'None',
   SiteName varchar(20) default 'None' ,
   Ip varchar(20) default '0.0.0.0',
   SubnetMask varchar(20) default '0.0.0.0',
   Gateway varchar(20) default '0.0.0.0',
   SnmpAgentVId int(2) unsigned default '0',
   MacAddressvarchar(20) default 'FF:FF:FF:FF:FF:FF',
   OpticalReach varchar(2) default '0',
   NeType varchar(2) default '0',
   GneFlag tinyint(1) default '0',
   Degree  int(2) unsigned default '0',
   OrderOfOtm int(2) unsigned default '0',
   Systemcapacity int(2) unsigned default '0',
   Topology int(2) unsigned default '0',
   Direction int(2) unsigned default '0',
   PotpType int(2) unsigned default '0',
   IlaType int(2) unsigned default '0',
   NumOfSlots4 int(2) unsigned default '0',
   Dummy int(2) unsigned default '0',
   PRIMARY KEY (ukey,StationName,SiteName));

