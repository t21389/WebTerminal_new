CREATE TABLE IF NOT EXISTS Interface_details(
    InterfaceId INT unsigned PRIMARY KEY,
    InterfaceName VARCHAR(30) NOT NULL,
    WsIp VARCHAR(20) NOT NULL,
    WsNetMask VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS Order_details(
    OrderId VARCHAR(36) PRIMARY KEY,
    ConnType TINYINT(1) unsigned NOT NULL,
    OrderType TINYINT(1) unsigned NOT NULL,
    InterfaceId INT unsigned NULL,
    UserId VARCHAR(30) NOT NULL,
    RemoteIp VARCHAR(20) NULL,
    State VARCHAR(20) NOT NULL,
    SDNReady TINYINT unsigned NOT NULL default '0',
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
  NodeId INT unsigned NOT NULL,
  NeType SMALLINT unsigned NULL,
  Direction SMALLINT unsigned NULL,
  StationName VARCHAR(45) NULL,
  SiteName VARCHAR(45) NULL,
  CtrlVersion FLOAT unsigned,
  DataVersion FLOAT unsigned,
  Degree TINYINT unsigned NULL,
  GneAddrType INT unsigned unsigned,
  GneFlag TINYINT unsigned NULL,
  Gateway VARCHAR(20),
  GneGateway VARCHAR(45) NULL,
  GneIp VARCHAR(45) NULL,
  GneIpPrefixLen INT unsigned,
  GneIpV6 VARCHAR(100) NULL,
  GuiId TINYINT(1) unsigned NOT NULL,
  TimeStamp VARCHAR(20) NOT NULL,
  IlaType TINYINT(1) unsigned,
  LctIp VARCHAR(20) NOT NULL,
  McpIp VARCHAR(20) NOT NULL,
  OpticalReach TINYINT(1) unsigned NULL,
  PotpType TINYINT(1) unsigned,
  RouterAddrType INT unsigned,
  RouterId VARCHAR(20),
  RouterIpPrefixLen INT unsigned,
  SAPI VARCHAR(16),
  SystemCapacity SMALLINT(1) unsigned,
  OrderOfOtm SMALLINT(1) unsigned,
  Date int(4) unsigned,
  Month int(2) unsigned,
  Year int(4) unsigned,
  Hour int(2) unsigned default '00',
  Minute int(2) unsigned default '00',
  Second int(2) unsigned default '00' ,
  Topology TINYINT(1) unsigned,
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
  NodeId INT unsigned NOT NULL,
  Dir1 INT unsigned NULL,
  Dir1IsConnected tinyint(1) unsigned,
  Dir2 INT unsigned NULL,
  Dir2IsConnected tinyint(1) unsigned,
  Dir3 INT unsigned NULL,
  Dir3IsConnected tinyint(1) unsigned,
  Dir4 INT unsigned NULL,
  Dir4IsConnected tinyint(1) unsigned,
  Dir5 INT unsigned NULL,
  Dir5IsConnected tinyint(1) unsigned,
  Dir6 INT unsigned NULL,
  Dir6IsConnected tinyint(1) unsigned,
  Dir7 INT unsigned NULL,
  Dir7IsConnected tinyint(1) unsigned,
  Dir8 INT unsigned NULL,
  Dir8IsConnected tinyint(1) unsigned,
  IsEmsConnected tinyint(1) unsigned,
  GuiId TINYINT(1) unsigned NOT NULL,
  TimeStamp VARCHAR(20) NOT NULL,
  PRIMARY KEY (NetworkId, NodeId),
  CONSTRAINT fk_Topology_NetworkId
    FOREIGN KEY (NetworkId)
    REFERENCES Network_details(NetworkId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
  );