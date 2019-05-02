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

  CREATE TABLE IF NOT EXISTS TopologyType (
  TopologyTypeId TINYINT(1) PRIMARY KEY ,
  TopologyTypeValues varchar(25) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS ConnType (
  ConnTypeId TINYINT(1) PRIMARY KEY ,
  ConnTypeValues varchar(10) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS OrderType (
  OrderTypeId TINYINT(1) PRIMARY KEY ,
  OrderTypeValues varchar(10) NOT NULL
  );

INSERT INTO Direction(DirectionId,DirectionValues) VALUES 
(0, "CM_DIR_DEFAULT"),
(1, "CM_DIR_EAST"),
(2, "CM_DIR_WEST"),
(3, "CM_DIR_NORTH"),
(4, "CM_DIR_SOUTH"),
(5, "CM_DIR_NORTH_EAST"),
(6, "CM_DIR_NORTH_WEST"),
(7, "CM_DIR_SOUTH_EAST"),
(8, "CM_DIR_SOUTH_WEST");

INSERT INTO AddressType(AddressId,AddressValues) VALUES
(4,"Ipv4"),
(6,"Ipv6");

INSERT INTO Flag(FlagId,FlagValues) VALUES
(0,"False"),
(1,"True");

INSERT INTO GuiType(GuiId,GuiValues) VALUES
(0,"GUI_ID_EMS"),
(1,"GUI_ID_LCT"),
(2, "GUI_ID_LCT_EMS"),
(3, "GUI_ID_OCP"),
(4, "GUI_ID_NPT"),
(5, "GUI_ID_POTP_WS");

INSERT INTO NeType(NeId,NeValues) VALUES
(0, "DEFAULT"),
(1, "TE"),
(2, "ILA"),
(4, "SUTEEVRA"),
(5, "FOADM"),
(6, "2D-ROADM"),
(7, "HUB"),
(8, "CDC-ROADM"),
(9, "CD ROADM"),
(10, "D ROADM");

INSERT INTO OpticalReach(OpticalReachId,OpticalReachValues) VALUES
(1, "CM_INTRA_OFFICE"),
(2, "CM_SHORT_HAUL"),
(3, "CM_LONG_HAUL"),
(4, "CM_VERY_LONG_HAUL"),
(5, "CM_ULTRA_LONG_HAUL");

INSERT INTO SystemCapacity(SystemCapacityId,SystemCapacityValues) VALUES
(1, "FORTY_EVEN"),
(2, "FORTY_ODD"),
(3, "EIGHTY");

INSERT INTO TopologyType(TopologyTypeId,TopologyTypeValues) VALUES
(1, "TOPOLOGY_LINEAR"),
(2,"TOPOLOGY_HUBBED_RING"),
(3,"TOPOLOGY_CLOSED_RING"),
(4,"TOPOLOGY_MESH");

INSERT INTO ConnType(ConnTypeId,ConnTypeValues) VALUES
(1, "Local"),
(2, "Remote");

INSERT INTO OrderType(OrderTypeId,OrderTypeValues) VALUES
(1, "Add"),
(2, "Delete"),
(3, "Modify");