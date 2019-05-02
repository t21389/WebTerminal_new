CREATE TABLE IF NOT EXISTS Interface(
    InterfaceId INT PRIMARY KEY,
    InterfaceName VARCHAR(30) NOT NULL,
    WsIp VARCHAR(20) NOT NULL,
    WsSubnetMask VARCHAR(30) NOT NULL
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
        REFERENCES Interface(InterfaceId)
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
  CtrlVersion FLOAT,
  DataVersion FLOAT,
  Degree TINYINT NULL,
  GneAddrType INT(3) unsigned,
  GneFlag TINYINT NULL,
  VlanTag INT NULL,
  EmsSubnet VARCHAR(45) NULL,
  Gateway VARCHAR(6),
  GneGateway VARCHAR(45) NULL,
  GneIp VARCHAR(45) NULL,
  GneIpPrefixLen INT,
  GneIpV6 VARCHAR(100) NULL,
  GuiId TINYINT(1) NOT NULL,
  IlaType TINYINT(1),
  LctIp VARCHAR(6) NOT NULL,
  McpIp VARCHAR(6) NOT NULL,
  OpticalReach TINYINT(1) NULL,
  PotpType TINYINT,
  RouterAddrType INT(3) unsigned,
  RouterId VARCHAR(6),
  RouterIpPrefixLen INT,
  SAPI VARCHAR(16),
  SubNetworkId VARCHAR(36),
  SystemCapacity SMALLINT,
  TimeStamp BIGINT,
  Topology TINYINT(1),
  Vlan INT unsigned,
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
    REFERENCES Topology(TopologyId)
    ON DELETE CASCADE
    ON UPDATE CASCADE );