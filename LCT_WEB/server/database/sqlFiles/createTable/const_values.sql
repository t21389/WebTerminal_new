CREATE TABLE IF NOT EXISTS Direction (
  DirectiondId tinyint(3) unsigned NOT NULL ,
  DirectionValues varchar(20) NOT NULL,
  PRIMARY KEY  (DirectionId)
  );

  CREATE TABLE IF NOT EXISTS AddressType (
  AddressUnit tinyint(3) unsigned NOT NULL ,
  AddressValues varchar(5) NOT NULL,
  PRIMARY KEY  (AddressUnit)
  );

  CREATE TABLE IF NOT EXISTS Flag (
  FlagUnit tinyint(3) unsigned NOT NULL ,
  FlagValues varchar(5) NOT NULL,
  PRIMARY KEY  (FlagUnit)
  );

  CREATE TABLE IF NOT EXISTS GuiType (
  GuiId tinyint(3) unsigned NOT NULL ,
  GuiValues varchar(15) NOT NULL,
  PRIMARY KEY  (GuiId)
  );

  CREATE TABLE IF NOT EXISTS NeType (
  NeUnit tinyint(3) unsigned NOT NULL ,
  NeValues varchar(15) NOT NULL,
  PRIMARY KEY  (NeUnit)
  );

  CREATE TABLE IF NOT EXISTS OpticalReach (
  OpticalReachUnit tinyint(3) unsigned NOT NULL ,
  OpticalReachValues varchar(20) NOT NULL,
  PRIMARY KEY  (OpticalReachUnit)
  );

  CREATE TABLE IF NOT EXISTS SystemCapacity (
  SystenCapacityUnit tinyint(3) unsigned NOT NULL ,
  SystemCapacityValues varchar(10) NOT NULL,
  PRIMARY KEY  (SystemCapacityUnit)
  );

  CREATE TABLE IF NOT EXISTS Topology (
  TopologyUnit tinyint(3) unsigned NOT NULL ,
  TopologyValues varchar(25) NOT NULL,
  PRIMARY KEY  (TopologyUnit)
  );

  