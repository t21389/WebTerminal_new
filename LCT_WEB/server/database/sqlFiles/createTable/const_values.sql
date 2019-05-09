CREATE TABLE IF NOT EXISTS Direction (
  DirectionId SMALLINT unsigned PRIMARY KEY,
  DirectionValues varchar(20) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS AddressType (
  AddressId INT(3) unsigned PRIMARY KEY ,
  AddressValues varchar(5) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Flag (
  FlagId tinyint(1) unsigned PRIMARY KEY  ,
  FlagValues varchar(5) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS GuiType (
  GuiId tinyint(1) unsigned PRIMARY KEY ,
  GuiValues varchar(15) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS NeType (
  NeId SMALLINT unsigned PRIMARY KEY ,
  NeValues varchar(15) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS OpticalReach (
  OpticalReachId TINYINT(1) unsigned PRIMARY KEY ,
  OpticalReachValues varchar(20) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS SystemCapacity (
  SystemCapacityId SMALLINT unsigned PRIMARY KEY  ,
  SystemCapacityValues varchar(10) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS TopologyType (
  TopologyTypeId TINYINT(1) unsigned PRIMARY KEY ,
  TopologyTypeValues varchar(25) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS ConnType (
  ConnTypeId TINYINT(1) unsigned PRIMARY KEY ,
  ConnTypeValues varchar(10) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS OrderType (
  OrderTypeId TINYINT(1) unsigned PRIMARY KEY ,
  OrderTypeValues varchar(10) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS CardType(
    CardCategory varchar(30) NOT NULL,
    CardTypeId TINYINT(1) unsigned PRIMARY KEY,
    CardTypeValues varchar(30) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS CardSubType(
    CardSubTypeId TINYINT(1) unsigned,
    CardSubTypeValues varchar(30) NOT NULL,
    CardType TINYINT(1) unsigned,
    PRIMARY KEY(CardSubTypeId,CardType),
    CONSTRAINT fk_CardSubType_CardType
      FOREIGN KEY (CardType)
      REFERENCES CardType(CardTypeId)
      ON DELETE CASCADE
      ON UPDATE CASCADE
  );

CREATE TABLE IF NOT EXISTS CardDirection(
  CardCategory VARCHAR(10),
  DirectionId TINYINT(1) unsigned,
  DirectionValue VARCHAR(50),
  primary key (CardCategory,DirectionId)
  );


INSERT INTO Direction(DirectionId,DirectionValues) VALUES 
(0, "DEFAULT DIRECTION"),
(1, "EAST"),
(2, "WEST"),
(3, "NORTH"),
(4, "SOUTH"),
(5, "NORTH_EAST"),
(6, "NORTH_WEST"),
(7, "SOUTH_EAST"),
(8, "SOUTH_WEST");

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

INSERT INTO CardType(CardCategory, CardTypeId,CardTypeValues) VALUES
("MPN", 1,"MPN Card"),
("Controller", 2,"TPC Card"),
("Controller", 3,"CSCC Card"),
("Amplifier", 4,"Amplifier"),
("Amplifier", 5,"ILA Card"),
("Protection", 6,"Protection Card"),
("OCM", 7,"OCM Card"),
("WSS", 8,"WSS 1*2 Card"),
("WSS", 9,"WSS 2*1*9 Card"),
("Amplifier", 10,"EDFA Card"),
("MCS", 11,"MCS Card"),
("SUPY", 12,"SUPY Card"),
("WSS", 13,"WSS 2*1*20 Card"),
("TPN", 14,"TPN Card"),
("WSS", 15,"WSS2*8*12"),
("OTDR", 16,"OTDR");

INSERT INTO CardSubType(CardSubTypeId, CardSubTypeValues, CardType) VALUES
(0,"NA",1),
(1,"CGM",1),
(2,"TPN-40G MUXPONDER by AMCC",1),
(3,"40G MUXPONDER by CORTINA",1),
(4,"XGM",1),
(5,"CGX",1),
(6,"CGMOPX",1),
(7,"CGXOPX",1),
(8,"TPN_CCXK_PMCS",1),
(0,"DWDM_CONTROLLER",2),
(1,"DWDM_CONTROLLER_OSC",2),
(0,"DWDM_CONTROLLER",3),
(1,"DWDM_CONTROLLER_OSC",3),
(0,"OCM1x2",7),
(1,"OCM1x8",7),
(2,"OCM1x16",7),
(0,"Finisar Axsun",9),
(1,"Finisar JDSU",9),
(2,"JDSU/OPLINK Axsun",9),
(3,"JDSU/OPLINK JDSU",9),
(0,"DWDM_MCS_JDSU",11),
(1,"DWDM_MCS_OPLINK",11),
(1,"VOIP",12),
(2,"OCP",12),
(0,"Finisar Axsun",13),
(1,"Finisar JDSU",13),
(2,"JDSU/OPLINK Axsun",13),
(3,"JDSU/OPLINK JDSU",13),
(1,"CGM",14),
(4,"CGC",14),
(5,"CGX",14),
(7,"OTDR1x4",16);

INSERT INTO CardDirection(CardCategory,DirectionId,DirectionValue) VALUES
("WSS", 0, "DEFAULT DIRECTION"),
("WSS", 1, "EAST TX"),
("WSS", 2, "WEST TX"),
("WSS", 3, "NORTH TX"),
("WSS", 4, "SOUTH TX"),
("WSS", 5, "NORTH EAST TX"),
("WSS", 6, "NORTH WEST TX"),
("WSS", 7, "SOUTH EAST TX"),
("WSS", 8, "SOUTH WEST TX"),
("WSS", 11, "EAST RX"),
("WSS", 12, "WEST RX"),
("WSS", 13, "NORTH RX"),
("WSS", 14, "SOUTH RX"),
("WSS", 15, "NORTH EAST RX"),
("WSS", 16, "NORTH WEST RX"),
("WSS", 17, "SOUTH EAST RX"),
("WSS", 18, "SOUTH WEST RX"),
("WSS", 21, "EAST TX/RX"),
("WSS", 22, "WEST TX/RX"),
("WSS", 23, "NORTH TX/RX"),
("WSS", 24, "SOUTH TX/RX"),
("WSS", 25, "NORTH EAST TX/RX"),
("WSS", 26, "NORTH WEST TX/RX"),
("WSS", 27, "SOUTH EAST TX/RX"),
("WSS", 28, "SOUTH WEST TX/RX"),
("WSS", 101, "Level-1 Direction Set-1"),
("WSS", 201, "Level-2 Direction Set-1"),
("WSS", 102, "Level-1 Direction Set-2"),
("WSS", 202, "Level-2 Direction Set-2"),
("WSS", 103, "Level-1 Direction Set-3"),
("WSS", 203, "Level-2 Direction Set-3"),
("WSS", 104, "Level-1 Direction Set-4"),
("WSS", 204, "Level-2 Direction Set-4"),
("OCM", 1, "Direction Set-1"), 
("OCM", 2, "Direction Set-2"), 
("OCM", 3, "Direction Set-3"),
("OCM", 4, "Direction Set-4"),
("MCS", 1, "MCS Id-1"),
("MCS", 2, "MCS Id-2"),
("MCS", 3, "MCS Id-3"),
("MCS", 4, "MCS Id-4"),
("Amplifier", 11, "EDFA connected to MCS-1 & Direction Set-1"),
("Amplifier", 12, "EDFA connected to MCS-1 & Direction Set-2"),
("Amplifier", 21, "EDFA connected to MCS-2 & Direction Set-1"),
("Amplifier", 22, "EDFA connected to MCS-2 & Direction Set-2"),
("Amplifier", 31, "EDFA connected to MCS-3 & Direction Set-1"),
("Amplifier", 32, "EDFA connected to MCS-3 & Direction Set-2"),
("Amplifier", 41, "EDFA connected to MCS-4 & Direction Set-1"),
("Amplifier", 42, "EDFA connected to MCS-4 & Direction Set-2"),
("Amplifier", 51, "EDFA connected to MCS-5 & Direction Set-1"),
("Amplifier", 52, "EDFA connected to MCS-5 & Direction Set-2");


CREATE TABLE IF NOT EXISTS ClientType (
  ClientTypeId TINYINT(1) unsigned PRIMARY KEY,
  ClientTypeValue VARCHAR(30) NOT NULL
);

INSERT INTO ClientType(ClientTypeId,ClientTypeValue) VALUES
(0, "CLIENT NOT CONFIGURED"),
(1,"CLIENT OTU2"),
(2,"CLIENT OTU2F"),
(3,"CLIENT OTU2E"),
(4,"CLIENT OTU1F"),
(5,"CLIENT OTU1E"),
(6,"CLIENT ETH10_GE_7_3_GFP"),
(7,"CLIENT ETH10G3_7_1_BMP"),
(8,"CLIENT ETH10G3_7_2_BMP"),
(9,"CLIENT ENET10G"),
(10,"CLIENT STM64"),
(11,"CLIENT OC_192_CBR_AMP"),
(12,"CLIENT OC_192_CBR_BMP"),
(13,"CLIENT FC_800_GMP"),
(14,"CLIENT FC_800_BMP"),
(15,"CLIENT FC_1200_GFP");

CREATE TABLE IF NOT EXISTS LinePort (
  LinePortId TINYINT(1) unsigned PRIMARY KEY,
  LinePortValue VARCHAR(20)
);

INSERT INTO LinePort(LinePortId,LinePortValue) VALUES
(101, "LinePort-1"),
(102, "LinePort-2"),
(103, "LinePort-3"),
(104, "LinePort-4"),
(0, "Alien LinePort"),
(111, "200G LinePort-1");


CREATE TABLE IF NOT EXISTS AmplifierType (
  AmplifierTypeId TINYINT(1) unsigned PRIMARY KEY,
  AmplifierTypeValue VARCHAR(30)
);

INSERT INTO AmplifierType(AmplifierTypeId,AmplifierTypeValue) VALUES
(1, "BA : Booster Amplifier"),
(2, "PA : Pre-Amplifier"),
(3, "ILA : In Line Amplifier"),
(4, "EDFA Tx-1"),
(5, "EDFA Tx-2"),
(6, "EDFA Tx-3"),
(7, "EDFA Tx-4"),
(8, "EDFA Rx-1"),
(9, "EDFA Rx-2"),
(10, "EDFA Rx-3"),
(11, "EDFA Rx-4"),
(12, "Hybrid Raman PA"),
(13, "Hybrid Raman ILA"),
(14, "Simple Raman PA"),
(15, "Simple Raman ILA");


CREATE TABLE IF NOT EXISTS FecType (
  FecTypeId TINYINT(1) unsigned PRIMARY KEY,
  FecTypeValue VARCHAR(20)
);

INSERT INTO FecType(FecTypeId,FecTypeValue) VALUES
(1, "G709"),
(2, "SWIZZLE-40G"),
(3, "SWIZZLE-100G"),
(4, "I4"),
(5, "I7"),
(6, "NA"),
(7, "SD-FEC");


CREATE TABLE IF NOT EXISTS AdminState (
  AdminStateId TINYINT(1) unsigned PRIMARY KEY,
  AdminStateValue varchar(10)
);
INSERT INTO AdminState(AdminStateId,AdminStateValue) VALUES
(0, "DISABLED"),
(1, "ENABLED");

CREATE TABLE IF NOT EXISTS TcmPosition (
  TcmPositionId TINYINT(1) unsigned PRIMARY KEY,
  TcmPositionValue VARCHAR(15)
);
INSERT INTO TcmPosition(TcmPositionId,TcmPositionValue) VALUES
(1, "SOURCE"),
(2, "SINK"),
(3, "RECEIVED");


CREATE TABLE IF NOT EXISTS WssAction (
  ActionId INT unsigned PRIMARY KEY,
  ActionValue VARCHAR(30)
);
INSERT INTO WssAction(ActionId,ActionValue) VALUES
(0, "Free Channel"),
(1, "Passthrough in Direction-1"),
(2, "Passthrough in Direction-2"),
(3, "Passthrough in Direction-3"),
(4, "Passthrough in Direction-4"),
(5, "Passthrough in Direction-5"),
(6, "Passthrough in Direction-6"),
(7, "Passthrough in Direction-7"),
(8, "Passthrough in Direction-8"),
(9, "Add Drop-1"),
(10, "Add Drop-2"),
(11, "Add Drop-3"),
(12, "Add Drop-4"),
(13, "Add Drop-5"),
(14, "Add Drop-6"),
(15, "Add Drop-7"),
(16, "Add Drop-8"),
(17, "Add Drop-9"),
(18, "Add Drop-10"),
(19, "Add Drop-11"),
(20, "Add Drop-12"),
(21, "Add Drop-13"),
(101, "Level-1 WSS Port-1"),
(102, "Level-1 WSS Port-2"),
(103, "Level-1 WSS Port-3"),
(104, "Level-1 WSS Port-4"),
(105, "Level-1 WSS Port-5"),
(106, "Level-1 WSS Port-6"),
(107, "Level-1 WSS Port-7"),
(108, "Level-1 WSS Port-8"),
(109, "Level-1 WSS Port-9"),
(110, "Level-1 WSS Port-10"),
(111, "Level-1 WSS Port-11"),
(112, "Level-1 WSS Port-12"),
(113, "Level-1 WSS Port-13"),
(114, "Level-1 WSS Port-14"),
(115, "Level-1 WSS Port-15"),
(116, "Level-1 WSS Port-16"),
(117, "Level-1 WSS Port-17"),
(118, "Level-1 WSS Port-18"),
(119, "Level-1 WSS Port-19"),
(120, "Level-1 WSS Port-20"),
(201, "Level-2 WSS Port-1"),
(202, "Level-2 WSS Port-2"),
(203, "Level-2 WSS Port-3"),
(204, "Level-2 WSS Port-4"),
(205, "Level-2 WSS Port-5"),
(206, "Level-2 WSS Port-6"),
(207, "Level-2 WSS Port-7"),
(208, "Level-2 WSS Port-8"),
(209, "Level-2 WSS Port-9"),
(210, "Level-2 WSS Port-10"),
(211, "Level-2 WSS Port-11"),
(212, "Level-2 WSS Port-12"),
(213, "Level-2 WSS Port-13"),
(214, "Level-2 WSS Port-14"),
(215, "Level-2 WSS Port-15"),
(216, "Level-2 WSS Port-16"),
(217, "Level-2 WSS Port-17"),
(218, "Level-2 WSS Port-18"),
(219, "Level-2 WSS Port-19"),
(220, "Level-2 WSS Port-20");


CREATE TABLE IF NOT EXISTS ChannelMode(
  ChannelModeId TINYINT(1) unsigned PRIMARY KEY,
  ChannelModeValue VARCHAR(20)
);
INSERT INTO ChannelMode(ChannelModeId,ChannelModeValue) VALUES
(0, "Power Equalization"),
(1, "Manual Fix"),
(2, "Manual Variable"),
(3, "Pre-Emphasis");


CREATE TABLE IF NOT EXISTS ChannelWidthConfigMode(
  ChannelWidthConfigModeId TINYINT(1) unsigned PRIMARY KEY,
  ChannelWidthConfigModeValue VARCHAR(15)
);
INSERT INTO ChannelWidthConfigMode(ChannelWidthConfigModeId,ChannelWidthConfigModeValue) VALUES
(0, "Fix Grid"),
(1, "Flex Grid");

CREATE TABLE IF NOT EXISTS DirectionType(
  DirectionTypeId TINYINT(1) unsigned PRIMARY KEY,
  DirectionTypeValue VARCHAR(20)
);
INSERT INTO DirectionType(DirectionTypeId,DirectionTypeValue) VALUES
(1, "TX DIRECTION"),
(2, "RX DIRECTION"),
(3, "TX-RX DIRECTION");


CREATE TABLE IF NOT EXISTS ChassisType (
  ChassisTypeId INT unsigned PRIMARY KEY,
  ChassisTypeName VARCHAR(40) NOT Null,
  NoOfSlot INT unsigned default '1',
  SystemType VARCHAR(20) NOT NULL,
  SwitchSlot_1 INT unsigned default '0',
  SwitchSlot_2 INT unsigned default '0'
);
INSERT INTO ChassisType(ChassisTypeId,ChassisTypeName,NoOfSlot,SystemType,SwitchSlot_1,SwitchSlot_2) VALUES
(1, "CDOT EMERSON", ," ", , ),
(2, "CDOT COMTEL", ," ", , ),
(3, "CDOT ANYOTHER", ," ", , ),
(4,"CDOT_PANTAIR", ," ", , ),
(5,"CDOT_ASIS", ," ", , ),
(6,"CDOT_LENPAC", ," ", , ),
(7,"CDOT_REDISYS", ," ", , );


CREATE TABLE IF NOT EXISTS ApplicationState (
  ApplicationStateId TINYINT(1) unsigned PRIMARY KEY,
  ApplicationStateValue VARCHAR(25),
);
INSERT INTO ApplicationState(ApplicationStateId,ApplicationStateValue) VALUES
(10,"UNPROVISIONED NOT READY"),
(4,"CONFIG MISMATCH"),
(5,"UNPROVISIONED READY"),
(6,"PROVISIONED NOT READY"),
(7,"PROVISIONED READY"),
(8,"UNPROVISIONED UNEXPECTED"),
(9,"PROVISIONED UNEXPECTED");


CREATE TABLE IF NOT EXISTS PhysicalState (
  PhysicalStateId TINYINT(1) unsigned PRIMARY KEY,
  PhysicalStateValue VARCHAR(25),
);
INSERT INTO PhysicalState(PhysicalStateId,PhysicalStateValue) VALUES
(20,"ABSENT"),
(21,"PRESENT"),
(22,"READY"),
(23,"JACKOUT"),
(24,"NOT DETECTED"),
(25,"NOT REACHABLE"),
(26,"NOT RESPONDING");

CREATE TABLE IF NOT EXISTS ControllerState (
  ControllerStateId TINYINT(1) unsigned PRIMARY KEY,
  ControllerStateValue VARCHAR(25),
);
INSERT INTO ControllerState(ControllerStateId,ControllerStateValue) VALUES
(0,"JACKED OUT"),
(1,"UNPROVISIONED"),
(2,"SELECTED"),
(3,"PROVISIONED"),
(4,"CONFLICT"),
(5,"NOT DETECTED"),
(6,"DATABASE RESTORE")
(7,"NOT REACHABLE");


