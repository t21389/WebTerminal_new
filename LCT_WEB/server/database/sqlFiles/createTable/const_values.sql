CREATE TABLE IF NOT EXISTS Direction (
  DirectionId SMALLINT PRIMARY KEY,
  DirectionValues varchar(20) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS AddressType (
  AddressId INT(3) unsigned PRIMARY KEY ,
  AddressValues varchar(5) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Flag (
  FlagId tinyint(1) PRIMARY KEY  ,
  FlagValues varchar(5) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS GuiType (
  GuiId tinyint(1) PRIMARY KEY ,
  GuiValues varchar(15) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS NeType (
  NeId SMALLINT PRIMARY KEY ,
  NeValues varchar(15) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS OpticalReach (
  OpticalReachId TINYINT(1) PRIMARY KEY ,
  OpticalReachValues varchar(20) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS SystemCapacity (
  SystemCapacityId SMALLINT PRIMARY KEY  ,
  SystemCapacityValues varchar(10) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Topology (
  TopologyId TINYINT(1) PRIMARY KEY ,
  TopologyValues varchar(25) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS ConnType (
  ConnTypeId TINYINT(1) PRIMARY KEY ,
  ConnTypeValues varchar(10) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS OrderType (
  OrderTypeId TINYINT(1) PRIMARY KEY ,
  OrderTypeValues varchar(10) NOT NULL
  );

INSERT INTO Direction(DirectionId,DirectionValues) VALUES (
  
)
  