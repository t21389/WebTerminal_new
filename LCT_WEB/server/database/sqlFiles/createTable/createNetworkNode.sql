CREATE TABLE IF NOT EXISTS Interface_details(
    InterfaceId INT PRIMARY KEY,
    InterfaceName VARCHAR(30) NOT NULL,
    WsIp VARCHAR(20) NOT NULL,
    WsNetMask VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS Order_details(
    OrderId VARCHAR(36) PRIMARY KEY,
    ConnType TINYINT(1) NOT NULL,
    OrderType TINYINT(1) NOT NULL,
    InterfaceId INT NULL,
    UserId VARCHAR(30) NOT NULL,
    RemoteIp VARCHAR(20) NULL,
    State VARCHAR(10) NOT NULL,
    SDNReady TINYINT NOT NULL default '0',
    CONSTRAINT fk_Order_ConnType
        FOREIGN KEY (ConnType)
        REFERENCES ConnType(ConnTypeId)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_Order_OrderType
        FOREIGN KEY (OrderType)
        REFERENCES OrderType(OrderTypeId)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_Order_Interface
        FOREIGN KEY (InterfaceId)
        REFERENCES Interface_details(InterfaceId)
        ON DELETE CASCADE
        ON UPDATE CASCADE,    
    CONSTRAINT fk_Order_SDNReady
        FOREIGN KEY (SDNReady)
        REFERENCES Flag(FlagId)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS Network_details (
    NetworkId VARCHAR(36) PRIMARY KEY,
    NetworkName VARCHAR(20) NOT NULL,
    OrderId VARCHAR(36) NOT NULL,
    CONSTRAINT fk_Network_OrderId
        FOREIGN KEY (OrderId)
        REFERENCES Order_details(OrderId)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS Node_details (
  NetworkId VARCHAR(36) NOT NULL,
  NodeId INT NOT NULL,
  NeType SMALLINT NULL,
  Direction SMALLINT NULL,
  StationName VARCHAR(45) NULL,
  SiteName VARCHAR(45) NULL,
  CtrlVersion FLOAT(1),
  DataVersion FLOAT(1),
  Degree TINYINT NULL,
  GneAddrType INT(3) unsigned,
  GneFlag TINYINT NULL,
  Gateway VARCHAR(20),
  GneGateway VARCHAR(45) NULL,
  GneIp VARCHAR(45) NULL,
  GneIpPrefixLen INT(1),
  GneIpV6 VARCHAR(100) NULL,
  GuiId TINYINT(1) NOT NULL,
  TimeStamp VARCHAR(20) NOT NULL,
  IlaType TINYINT(1),
  LctIp VARCHAR(20) NOT NULL,
  McpIp VARCHAR(20) NOT NULL,
  OpticalReach TINYINT(1) NULL,
  PotpType TINYINT(1),
  RouterAddrType INT(3) unsigned,
  RouterId VARCHAR(20),
  RouterIpPrefixLen INT(1),
  SAPI VARCHAR(16),
  SystemCapacity SMALLINT(1),
  OrderOfOtm SMALLINT(1),
  Date int(4) unsigned,
  Month int(2) unsigned,
  Year int(4) unsigned,
  Hour int(2) unsigned default '00',
  Minute int(2) unsigned default '00',
  Second int(2) unsigned default '00' ,
  Topology TINYINT(1),
  Vlan INT unsigned,
  MacAddress VARCHAR(20),
  PRIMARY KEY (NetworkId, NodeId),
  CONSTRAINT fk_Node_NetworkId
    FOREIGN KEY (NetworkId)
    REFERENCES Network_details(NetworkId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Node_Direction
    FOREIGN KEY (Direction)
    REFERENCES Direction(DirectionId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Node_GneAddrType
    FOREIGN KEY (GneAddrType)
    REFERENCES AddressType(AddressId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Node_RouterAddrType
    FOREIGN KEY (RouterAddrType)
    REFERENCES AddressType(AddressId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Node_GneFlag
    FOREIGN KEY (GneFlag)
    REFERENCES Flag(FlagId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Node_GuiId
    FOREIGN KEY (GuiId)
    REFERENCES GuiType(GuiId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Node_NeType
    FOREIGN KEY (neType)
    REFERENCES NeType(NeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Node_OpticalReach
    FOREIGN KEY (OpticalReach)
    REFERENCES OpticalReach(OpticalReachId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_Node_SystemCapacity
    FOREIGN KEY (SystemCapacity)
    REFERENCES SystemCapacity(SystemCapacityId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_Node_Topology
    FOREIGN KEY (Topology)
    REFERENCES TopologyType(TopologyTypeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE 
);


CREATE TABLE IF NOT EXISTS Topology (
  NetworkId VARCHAR(36) NOT NULL,
  NodeId INT NOT NULL,
  Dir1 INT NULL,
  Dir1IsConnected tinyint(1),
  Dir2 INT NULL,
  Dir2IsConnected tinyint(1),
  Dir3 INT NULL,
  Dir3IsConnected tinyint(1),
  Dir4 INT NULL,
  Dir4IsConnected tinyint(1),
  Dir5 INT NULL,
  Dir5IsConnected tinyint(1),
  Dir6 INT NULL,
  Dir6IsConnected tinyint(1),
  Dir7 INT NULL,
  Dir7IsConnected tinyint(1),
  Dir8 INT NULL,
  Dir8IsConnected tinyint(1),
  IsEmsConnected tinyint(1),
  GuiId TINYINT(1) NOT NULL,
  TimeStamp VARCHAR(20) NOT NULL,
  PRIMARY KEY (NetworkId, NodeId),
  CONSTRAINT fk_Topology_NetworkId
    FOREIGN KEY (NetworkId)
    REFERENCES Network_details(NetworkId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
  );


CREATE TABLE IF NOT EXISTS ChassisType (
  ChassisTypeId INT unsigned PRIMARY KEY,
  NoOfSlot INT unsigned default '1',
  SystemType VARCHAR(20) NOT NULL,
  SwitchSlot_1 INT unsigned default '0',
  SwitchSlot_2 INT unsigned default '0'
);


CREATE TABLE IF NOT EXISTS SubrackChassisDetails(
  RackId INT unsigned,
  SubRackId INT unsigned,
  ChassisType INT unsigned,
  PRIMARY KEY (RackId,SubRackId),
  CONSTRAINT fk_SubrackChassisDetails_ChassisType
    FOREIGN KEY (ChassisType)
    REFERENCES ChassisType(ChassisTypeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CardPhysicalDetails (
  CardType INT unsigned,
  CardSubType INT unsigned,
  NoOfSlotsOccupied INT unsigned,
  PRIMARY KEY (CardType, CardSubType)
);

CREATE TABLE IF NOT EXISTS CmCurrentCardStatus (
  RackId TINYINT(1),
  SubrackId TINYINT(1),
  CardId TINYINT(1),
  CardState TINYINT(1),
  CardSubType TINYINT(1),
  CardType TINYINT(1),
  GuiId TINYINT,
  TimeStamp datetime,
  PRIMARY KEY(RackId,SubRackId,CardId,CardState)
);


CREATE TABLE IF NOT EXISTS CmClientIntfAdaptInfo (
  CardSubType TINYINT(1),
  CardType TINYINT(1),
  ClientIntfId TINYINT(1),
  ClientName json ,
  ClientType TINYINT(1),
  GuiId TINYINT(1),
  IntfStatus TINYINT(1),
  LinePortNum TINYINT(1),
  RackId TINYINT(1),
  SubrackId TINYINT(1),
  TimeStamp datetime,
  TpnId TINYINT(1),
  TributarySetId TINYINT(1),
  PRIMARY Key (RackId, SubrackId, TpnId, CardType, CardSubType,ClientIntfId)
);