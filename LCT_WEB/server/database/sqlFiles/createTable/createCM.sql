CREATE TABLE IF NOT EXISTS CmCurrentCardStatus (
  UniqueCardKey VARCHAR(10) PRIMARY KEY,
  RackId tinyint(1) unsigned  NOT NULL,
  SubrackId tinyint(1) unsigned  NOT NULL,
  SlotId tinyint(1) unsigned  NOT NULL,
  CardType tinyint(1) unsigned  NOT NULL,
  CardSubType tinyint(1) unsigned  NOT NULL,
  CardState TINYINT(1) unsigned  NOT NULL,
  GuiId TINYINT(1) unsigned  NOT NULL,
  TimeStamp varchar(30),
  UNIQUE KEY (RackId, SubrackId,SlotId,CardSubType,CardType,CardState),
  CONSTRAINT fk_CmCurrentCardStatus_CardType
    FOREIGN KEY (CardType)
    REFERENCES CardType(CardTypeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_CmCurrentCardStatus_CardSubType
    FOREIGN KEY (CardSubType)
    REFERENCES CardSubType(CardSubTypeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
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
  PRIMARY KEY (CardType, CardSubType),
  CONSTRAINT fk_CardPhysicalDetails_CardType
    FOREIGN KEY (CardType)
    REFERENCES CardType(CardTypeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_CardPhysicalDetails_CardSubType
    FOREIGN KEY (CardSubType)
    REFERENCES CardSubType(CardSubTypeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS CmClientIntfAdaptInfo (
  -- RackId tinyint(1) unsigned,
  -- SubrackId tinyint(1) unsigned,
  -- SlotId tinyint(1) unsigned,
  -- CardSubType tinyint(1) unsigned,
  -- CardType tinyint(1) unsigned,
  UniqueCardKey VARCHAR(10),
  ClientIntfId TINYINT(1) unsigned,
  ClientName varchar(20) default 'NONE',
  ClientType TINYINT(1) unsigned,
  GuiId TINYINT(1) unsigned,
  IntfStatus TINYINT(1) unsigned,
  LinePortNum TINYINT(1) unsigned,
  TimeStamp varchar(30),
  TributarySetId TINYINT(1) unsigned,
  PRIMARY Key (UniqueCardKey,ClientIntfId),
  CONSTRAINT fk_CmClientIntfAdaptInfo_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS CmWavelengthDetail (
  WavelengthNum TINYINT unsigned PRIMARY KEY,
  Frequency FLOAT,
  WavelengthVal FLOAT
);

CREATE TABLE IF NOT EXISTS CmExpectedConfig (
NeType SMALLINT unsigned,
CardType TINYINT(1) unsigned,
ExpectedFlag tinyint(1) unsigned,
PRIMARY KEY(NeType,CardType),
CONSTRAINT fk_CmExpectedConfig_NeType
    FOREIGN KEY (NeType)
    REFERENCES NeType(NeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
CONSTRAINT fk_CmExpectedConfig_CardType
    FOREIGN KEY (CardType)
    REFERENCES CardType(CardTypeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
CONSTRAINT fk_CmExpectedConfig_ExpectedFlag
    FOREIGN KEY (ExpectedFlag)
    REFERENCES Flag(FlagId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmDirString (
DirVal TINYINT unsigned PRIMARY KEY,
DirStr varchar(32),
GuiId TINYINT(1) unsigned,
TimeStamp varchar(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS CmLogConfiguration (
  -- RackId tinyint(1) unsigned,
  -- SubrackId tinyint(1) unsigned,
  -- SlotId tinyint(1) unsigned,
  -- CardSubType tinyint(1) unsigned,
  -- CardType tinyint(1) unsigned,
  UniqueCardKey VARCHAR(10),
  GuiId tinyint(1) unsigned,
  LogLevel tinyint(1) unsigned,
  LogType tinyint(1) unsigned,
  ModuleType tinyint(1) unsigned,
  TimeStamp varchar(30),
  PRIMARY KEY(UniqueCardKey, ModuleType,LogType),
  CONSTRAINT fk_CmLogConfiguration_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmTrailTerminationInfo(
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
	IntfId tinyint(1) unsigned,
	Direction tinyint(1) unsigned,
	Position tinyint(1) unsigned,
	Segment tinyint(1) unsigned,
	OperatorSpecific varchar(32),
	SAPI varchar(16),
	DAPI varchar(16),
	GuiId tinyint(1) unsigned,
	TimeStamp varchar(30),	
  PRIMARY KEY(UniqueCardKey,IntfId,Direction,Position,Segment),
  CONSTRAINT fk_CmTrailTerminationInfo_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

 CREATE TABLE IF NOT EXISTS CmFecConfig (
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
   IntfId tinyint(1) unsigned,
   FecType tinyint(1) unsigned,
   FecStatus tinyint(1) unsigned,
   GuiId tinyint(1) unsigned,
   TimeStamp varchar(30),
   PRIMARY KEY(UniqueCardKey, IntfId),
   CONSTRAINT fk_CmFecConfig_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
 );

CREATE TABLE IF NOT EXISTS CmTcmActInfo(
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
  IntfId Tinyint(1) unsigned,        
  TcmActStatus Tinyint(1) unsigned,
	TcmActValue Tinyint(1) unsigned,     
	GuiId Tinyint(1) unsigned,
	TimeStamp varchar(30),
  PRIMARY KEY(UniqueCardKey, IntfId ),
  CONSTRAINT fk_CmTcmActInfo_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmTcmMode (
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
  IntfId tinyint(1) unsigned,
  Segment tinyint(1) unsigned,
  Position tinyint(1) unsigned,
  TcmMode tinyint(1) unsigned,
  GuiId tinyint(1) unsigned,
  TimeStamp varchar(30),
  PRIMARY KEY ( UniqueCardKey, IntfId, Position, Segment ),
  CONSTRAINT fk_CmTcmMode_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmTcmPriority(
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
  IntfId Tinyint(1) unsigned,      
	Position Tinyint(1) unsigned,	   
	TcmPriority varchar(8),    
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
  PRIMARY KEY(UniqueCardKey, IntfId,Position ),
   CONSTRAINT fk_CmTcmPriority_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmGccConfig(
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
  IntfId tinyint(1) unsigned,
  GccType tinyint(1) unsigned,
  GccStatus tinyint(1) unsigned,
  GuiId tinyint(1) unsigned,
  TimeStamp varchar(30),
  PRIMARY KEY (UniqueCardKey, IntfId ),
   CONSTRAINT fk_CmGccConfig_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

 CREATE TABLE IF NOT EXISTS CmPayloadDetail(
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
  IntfId Tinyint(1) unsigned,
  PayLoadType Tinyint(1) unsigned,
  TributarySlots Tinyint(1) unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
  PRIMARY KEY(UniqueCardKey, IntfId ),
  CONSTRAINT fk_CmPayloadDetail_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmTpnConfig(
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
  TpnState tinyint(1) unsigned,
  Direction tinyint(1) unsigned,
  TxWavelengthNum tinyint(1) unsigned NOT NULL default '0',
  RxWavelengthNum tinyint(1) unsigned NOT NULL default '0',
  LinePortNum tinyint(1) unsigned NOT NULL default '0',
  PortNum tinyint(1) unsigned NOT NULL default '0',
  GuiId tinyint(1) unsigned,
  TimeStamp varchar(30),  
  PRIMARY KEY  ( UniqueCardKey,LinePortNum),
  UNIQUE KEY by_Unique_WTxWRxPn (Direction,TxWavelengthNum,RxWavelengthNum,PortNum),  
  CONSTRAINT fk_CmTpnConfig_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS CmF2FLoopBack(
	-- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
  IntfId Tinyint(1) unsigned,
  LoopbackStatus Tinyint(1) unsigned,
	LoopbackType Tinyint(1) unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30);
	PRIMARY KEY(UniqueCardKey, IntfId),
   CONSTRAINT fk_CmF2FLoopBack_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE	
);

CREATE TABLE IF NOT EXISTS CmFecErrorDetail(
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
  IntfId tinyint(1) unsigned,
  ErrorRate tinyint(3) unsigned NOT NULL default '0',
  ErrorMode tinyint(3) unsigned NOT NULL default '0',
  ErrorStatus tinyint(3) unsigned NOT NULL default '0',
  GuiId tinyint(1) unsigned,
  TimeStamp varchar(30),
  PRIMARY KEY (UniqueCardKey, IntfId ),
   CONSTRAINT fk_CmFecErrorDetail_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmTimModeDetail(
  -- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
	IntfId Tinyint(1) unsigned,
	Segment Tinyint(1) unsigned,
	TimDetMode Tinyint(1) unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
  PRIMARY KEY(UniqueCardKey, IntfId, Segment),
  CONSTRAINT fk_CmTimModeDetail_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS CmWssChannelConfig (
  WssDirection int(3) unsigned NOT NULL default '0',
  ChannelWidth int(3) unsigned NOT NULL default '0',
  WavelengthNum tinyint(1) unsigned NOT NULL,
  Action tinyint(3)  unsigned NOT NULL default '0',
  AttenuationConfigMode tinyint(3) unsigned NOT NULL default '0',
  ChannelWidthConfigMode tinyint(3) unsigned NOT NULL default '0',
  Attenuation float(3) unsigned NOT NULL default '0',
  GuiId tinyint(1) unsigned,
  TimeStamp varchar(30),
  PRIMARY KEY(WssDirection,WavelengthNum),
  CONSTRAINT fk_CmWssChannelConfig_ChannelWidthConfigMode
    FOREIGN KEY (ChannelWidthConfigMode)
    REFERENCES ChannelWidthConfigMode(ChannelWidthConfigModeId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
  );

CREATE TABLE IF NOT EXISTS WavelengthChannel (
	UniqueCardKey VARCHAR(10),
	WssDirectionType Tinyint(1) unsigned,
  WavelengthNum tinyint(1) unsigned NOT NULL,
  Attenuation float unsigned,
  TxChannelMode tinyint unsigned,
  PRIMARY KEY (UniqueCardKey,WssDirectionType,WavelengthNum)
);


CREATE TABLE IF NOT EXISTS CmWssDirectionConfig(
	-- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
	AttenuationConfigMode Tinyint(1) unsigned,
  PreEmphasisTriggerPowerDiff float unsigned,
	PreEmphasisTerminationPowerDiff float unsigned,
	PowerEqualizationTerminationPowerDiff float unsigned,
  WssDirection Tinyint(1) unsigned,	
	WssDirectionType Tinyint(1) unsigned,
  WavelengthNum tinyint(1) unsigned NOT NULL,
	IsGainTiltDone Tinyint(1) unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
	PRIMARY KEY(UniqueCardKey,WssDirectionType),
  UNIQUE key by_Unique_WssDirDirType(WssDirection,WssDirectionType)
  CONSTRAINT fk_CmWssDirectionConfig_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_CmWssDirectionConfig_WavelengthNum
    FOREIGN KEY (WavelengthNum)
    REFERENCES WavelengthChannel(WavelengthNum)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_CmWssDirectionConfig_WssDirectionType
    FOREIGN KEY (WssDirectionType)
    REFERENCES WavelengthChannel(WssDirectionType)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmAmplifierConfig(
  RackId tinyint(1) unsigned,
  SubrackId tinyint(1) unsigned,
  SlotId tinyint(1) unsigned,
  Direction tinyint(1) unsigned NOT NULL default '0',
  AmpType tinyint(1) unsigned default '0',
  AmpStatus tinyint(1) unsigned default '0',
  GainLimit float unsigned,
  ConfigurationMode tinyint(1) unsigned,
  VoaAttenuation float unsigned,
  GuiId tinyint(1) unsigned,
  GainTilt float unsigned,
  TimeStamp varchar(30),
  PRIMARY KEY( RackId, SubrackId,SlotId,AmpType )
);
 

CREATE TABLE IF NOT EXISTS CmVoaConfig(
  RackId Tinyint(1) unsigned,
	SubrackId Tinyint(1) unsigned,
	SlotId Tinyint(1) unsigned,	
	Direction Tinyint(1) unsigned,
	ChannelType Tinyint(1) unsigned,
	AttenuationConfigMode Tinyint(1) unsigned,
	Attenuation float unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
  PRIMARY KEY(RackId, SubrackId, SlotId, ChannelType)
);


CREATE TABLE IF NOT EXISTS CmMcsPortMapping (
	-- RackId tinyint(1) unsigned,
	-- SubrackId tinyint(1) unsigned,
	-- SlotId tinyint(1) unsigned,
	-- CardType tinyint(1) unsigned, 
 	-- CardSubType tinyint(1) unsigned,	
  UniqueCardKey VARCHAR(10),
	McsId tinyint(1) unsigned, 
	McsAddPortInfo varchar(30),,
	McsDropPortInfo varchar(30),	
	-- AddTpnRackId varchar(30), 
	-- AddTpnSubRackId varchar(30), 
	-- AddTpnSlotId varchar(30), 
	-- AddTpnCardType varchar(30), 
	-- AddTpnCardSubType varchar(30), 
  AddUniqueCardKey VARCHAR(10),
	AddTpnLinePortNum varchar(30), 
	AddAttenuation varchar(30),
	-- DropTpnRackId varchar(30), 
	-- DropTpnSubRackId varchar(30), 
	-- DropTpnSlotId varchar(30),
	-- DropTpnCardType varchar(30), 
	-- DropTpnCardSubType varchar(30),
  DropUniqueCardKey VARCHAR(10),
	DropTpnLinePortNum varchar(30), 
	DropAttenuation varchar(30),
	GuiId tinyint(1) unsigned,
	TimeStamp varchar(30),
  PRIMARY KEY(UniqueCardKey,McsId),
  CONSTRAINT fk_CmMcsPortMapping_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_CmMcsPortMapping_UniqueCardKey
    FOREIGN KEY (AddUniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_CmMcsPortMapping_UniqueCardKey
    FOREIGN KEY (DropUniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmPrbsConfig(
  -- RackId Tinyint(1) unsigned,
	-- SubrackId Tinyint(1) unsigned,
	-- SlotId Tinyint(1) unsigned,
	-- CardType Tinyint(1) unsigned,
	-- CardSubType Tinyint(1) unsigned,
  UniqueCardKey VARCHAR(10),
	IntfId Tinyint(1) unsigned,
	Direction Tinyint(1) unsigned,
	Type Tinyint(1) unsigned,
	Inversion Tinyint(1) unsigned,
	Action Tinyint(1) unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
  PRIMARY KEY(UniqueCardKey, IntfId, Direction),
  CONSTRAINT fk_CmPrbsConfig_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmVoipUserProfile(
  -- RackId Tinyint(1) unsigned,
	-- SubrackId Tinyint(1) unsigned,
	-- SlotId Tinyint(1) unsigned,
	-- CardType Tinyint(1) unsigned,
	-- CardSubType Tinyint(1) unsigned,
  UniqueCardKey VARCHAR(10),
	Proxy_Addr varchar(30),
	Registrar_Addr varchar(30),
	Outbound_Proxy_Address varchar(30),
	Subnet_Mask varchar(30),
	PhoneNo Varchar(20),
	Password Varchar(20),
	Flag Tinyint(1) unsigned,
	No_Ports Tinyint(1) unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
  PRIMARY KEY(UniqueCardKey),
  CONSTRAINT fk_CmVoipUserProfile_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmOntIpConfig(
  -- RackId Tinyint(1) unsigned,
	-- SubrackId Tinyint(1) unsigned,
	-- SlotId Tinyint(1) unsigned,
	-- CardType Tinyint(1) unsigned,
	-- CardSubType Tinyint(1) unsigned,
  UniqueCardKey VARCHAR(10),
	IP_Address varchar(30),
	Subnet_Mask varchar(30),
	Gateway varchar(30),
	BitMask varchar(30),
	DHCPOption Tinyint(1) unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
  PRIMARY KEY(UniqueCardKey),
  CONSTRAINT fk_CmOntIpConfig_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS CmOcmConfig(
  -- RackId Tinyint(1) unsigned,
	-- SubrackId Tinyint(1) unsigned,
	-- SlotId Tinyint(1) unsigned,
	-- CardType Tinyint(1) unsigned,
	-- CardSubType Tinyint(1) unsigned,
  UniqueCardKey VARCHAR(10),
	OcmId Tinyint(1) unsigned,
	GuiId Tinyint(1) unsigned,
	TimeStamp Varchar(30),
  PRIMARY KEY(UniqueCardKey),
	unique key by_Unique_OcmId (OcmId),
   CONSTRAINT fk_CmOcmConfig_UniqueCardKey
    FOREIGN KEY (UniqueCardKey)
    REFERENCES CmCurrentCardStatus(UniqueCardKey)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

--   CREATE TABLE IF NOT EXISTS OtnIntfInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   Functionality tinyint(3) unsigned default '0',
--   BitRate tinyint(3) unsigned default '0',
--   InterfaceType tinyint(3) unsigned default '0',
--   PRIMARY KEY  (ukey,SlotId)
--   );

--   CREATE TABLE IF NOT EXISTS SfpInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0', 
--   SwitchId tinyint(3) unsigned NOT NULL default '0', 
--   SfpNo tinyint(3) unsigned default '0',
--   SfpStatus tinyint(3) unsigned default '0',
--   Name varchar(20) default 'NONE',
--   VendorName varchar(20) default 'NONE',
--   VendorId varchar(20) default 'NONE',
--   SerialNo varchar(30) default 'NONE',
--   TxRxstatus tinyint(3) unsigned default '0',
--   AlsStatus tinyint(3) unsigned default '0',
--   OpticalReach tinyint(3) unsigned default '0',
--   PRIMARY KEY  (ukey,SlotId,SwitchId,SfpNo)
--   );
  
--   CREATE TABLE IF NOT EXISTS ClientInterfaceInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',  
--   ClientIntfId tinyint(3) unsigned default '0',
--   ClientType tinyint(3) unsigned default '0',  
--   ClientName varchar(20)default 'NONE',
--   TribSetId tinyint(3) unsigned default '0', 
--   Status tinyint(3) unsigned default '0', 
--   LinePortNo tinyint(3) unsigned NOT NULL default '0',  
--   PRIMARY KEY  (ukey,SlotId,ClientIntfId)
--   );

--   CREATE TABLE IF NOT EXISTS TrailTerminationInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   Position tinyint(3) unsigned NOT NULL default '0',
--   Segment tinyint(3) unsigned default '0',
--   Sapi varchar(40) default '',
--   SIcc varchar(10) default '0',
--   Dapi varchar(40) default '',
--   DIcc varchar(10) default '0',
--   OpSpecific varchar(100) default 'NONE',
--   TimDetMode tinyint(3) unsigned default '0',
--   PRIMARY KEY  (ukey,SlotId,IntfId,Position,Segment)
--   );

--  CREATE TABLE IF NOT EXISTS GCCInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   GccType tinyint(3) unsigned NOT NULL default '0',
--   GccStatus tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId,IntfId)
--   );

--   CREATE TABLE IF NOT EXISTS PayLoadInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   PayloadType tinyint(3) unsigned NOT NULL default '0',
--   TribSlot tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId,IntfId)
--   );
  
--   CREATE TABLE IF NOT EXISTS FecInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   FecType tinyint(3) unsigned NOT NULL default '0',
--   FecStatus tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId,IntfId)
--   );
  
--   CREATE TABLE IF NOT EXISTS FecErrorInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   ErrRate tinyint(3) unsigned NOT NULL default '0',
--   errMode tinyint(3) unsigned NOT NULL default '0',
--   errStatus tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId,IntfId)
--   );

--   CREATE TABLE IF NOT EXISTS TcmPriorInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   Position tinyint(3) unsigned NOT NULL default '0',
--   Priority1 tinyint(3) unsigned NOT NULL default '0',
--   Priority2 tinyint(3) unsigned NOT NULL default '0',
--   Priority3 tinyint(3) unsigned NOT NULL default '0',
--   Priority4 tinyint(3) unsigned NOT NULL default '0',
--   Priority5 tinyint(3) unsigned NOT NULL default '0',
--   Priority6 tinyint(3) unsigned NOT NULL default '0',
--   Priority7 tinyint(3) unsigned NOT NULL default '0',
--   Priority8 tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId,IntfId,Position)
--   );

--   CREATE TABLE IF NOT EXISTS TcmInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   ActStatus tinyint(3) unsigned NOT NULL default '0',
--   ActValue tinyint(3) unsigned NOT NULL default '0',
--   Segment tinyint(3) unsigned NOT NULL default '0',
--   Position tinyint(3) unsigned NOT NULL default '0',
--   TcmMode tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId,IntfId,Position,Segment)
--   );

--   CREATE TABLE IF NOT EXISTS CardConfigInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   State tinyint(3) unsigned default '0',
--   CardType tinyint(3) unsigned default '0',  
--   CardSubType tinyint(3) unsigned default '0',
--   TxWavelengthNum tinyint(3) unsigned NOT NULL default '0',
--   RxWavelengthNum tinyint(3) unsigned NOT NULL default '0',
--   Direction int(5) unsigned NOT NULL default '0',  
--   LinePortNo tinyint(3) unsigned NOT NULL default '0',
--   PortNum tinyint(3) unsigned NOT NULL default '0',  
--   PRIMARY KEY  (ukey,SlotId, LinePortNo)
--   );

-- 	CREATE TABLE IF NOT EXISTS WavelengthStatus ( 
--   WavelengthNo tinyint(3) unsigned NOT NULL default '0',
--   EastStatus tinyint(3) unsigned NOT NULL default '0',
--   WestStatus tinyint(3) unsigned NOT NULL default '0',  
--   NorthStatus tinyint(3) unsigned NOT NULL default '0',
--   SouthStatus tinyint(3) unsigned NOT NULL default '0',
--   NorthEastStatus tinyint(3) unsigned NOT NULL default '0',
--   NorthWestStatus tinyint(3) unsigned NOT NULL default '0',
--   SouthEastStatus tinyint(3) unsigned NOT NULL default '0',
--   SouthWestStatus tinyint(3) unsigned NOT NULL default '0',  
--   PRIMARY KEY  (WavelengthNo)
--   );
  
--   CREATE TABLE IF NOT EXISTS WavelengthValues ( 
--   WavelengthNo tinyint(3) unsigned NOT NULL default '0',
--   Value float NOT NULL ,
--   Frequency float NOT NULL ,
--   PRIMARY KEY  (WavelengthNo)
--   );

--   CREATE TABLE IF NOT EXISTS neInfo (
--   stationName VARCHAR(20) NOT NULL,
--   siteName VARCHAR(20) NOT NULL,
--   ipv4 VARCHAR(20) NOT NULL,
--   subnet VARCHAR(20) NOT NULL,
--   gateway VARCHAR(20) NOT NULL,
--   mac VARCHAR(20) NOT NULL,
--   ipv6 VARCHAR(50) NOT NULL,
--   neType tinyint(3) NOT NULL default '0',
--   gneFlag tinyint(3) NOT NULL default '0',
--   opticalReach tinyint(3) NOT NULL default '0',
--   degree tinyint(3) NOT NULL default '0',
--   orderOfOtm tinyint(3) NOT NULL default '0',
--   snmpAgentVid tinyint(3) NOT NULL default '0',
--   systemCapacity tinyint(3) NOT NULL default '0',
--   topology tinyint(3) NOT NULL default '0',
--   direction tinyint(3) NOT NULL default '0',
--   rcvDate DATE NOT NULL,
--   rcvTime VARCHAR(20) NOT NULL,
--   PotpType tinyint(3) NOT NULL default '0',
--   IlaType tinyint(3) NOT NULL default '0',
--   PRIMARY KEY(stationName)
--   );

--   CREATE TABLE IF NOT EXISTS SystemErrors (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   Opcode int(5) unsigned NOT NULL default '0',
--   ErrorCode tinyint(3) unsigned NOT NULL default '0',
--   ErrorString varchar(150)  default '-',  
--   date1 DATE NOT NULL,
--   time TIME NOT NULL,
--   PRIMARY KEY(date1,time)
--   );

--   CREATE TABLE IF NOT EXISTS logInfo (
--   log_date DATETIME ,
--   command varchar(400) NOT NULL default 'NONE',
--   userLct varchar(20)
--   );

--   CREATE TABLE IF NOT EXISTS ChannelConfig (
--   Direction int(3) unsigned NOT NULL default '0',
--   Wavelength int(5) unsigned NOT NULL default '0',
--   Attenuation float(3) unsigned NOT NULL default '0',
--   Action tinyint(3)  unsigned NOT NULL default '0',
--   ChannelWidth int(3) unsigned NOT NULL default '0',
--   ACM tinyint(3) unsigned NOT NULL default '0',
--   CCM tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY(Wavelength)
--   );

--   CREATE TABLE IF NOT EXISTS AmpfConfigInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   Gain float(5) unsigned default '0',  
--   AmpfType tinyint(3) unsigned default '0',  
--   Status tinyint(3) unsigned default '0',
--   Direction int(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId,AmpfType)
--   );

--   CREATE TABLE IF NOT EXISTS ProtectionConfigInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   ActiveLine tinyint(3) unsigned default '0',  
--   ProtectionType tinyint(3) unsigned default '0',
--   Command tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId)
--   );

--   CREATE TABLE IF NOT EXISTS MinimumConfigInfo (
--   CardType tinyint(3) NOT NULL default '0',
--   ExpectedFlag int(4) unsigned NOT NULL default '0' ,
--   AlarmFlag  tinyint(3)  NOT NULL default '0',
--   PRIMARY KEY  (CardType)
--   );

--   CREATE TABLE IF NOT EXISTS ProtectionDetailsInfo (
--   nUkey varchar(2)  default '00',  
--   nSlotId tinyint(3) unsigned NOT NULL default '0',
--   nPortId tinyint(3) unsigned NOT NULL default '0',
--   pUkey varchar(2)  default '00',  
--   pSlotId tinyint(3) unsigned NOT NULL default '0',
--   pPortId tinyint(3) unsigned NOT NULL default '0',
--   pDetailUkey varchar(2)  default '00',  
--   pDetailSlotId tinyint(3) unsigned NOT NULL default '0',
--   protectionStatus tinyint(3) unsigned NOT NULL default '0',
--   protTopology tinyint(3)  unsigned NOT NULL default '0',
--   PRIMARY KEY  (nUkey,nSlotId,nPortId)
--   );  

--   CREATE TABLE IF NOT EXISTS LineChannelProtectionDetailsInfo (
--   mpnUkey varchar(2) default '00',
--   mpnSlotId tinyint(3) unsigned NOT NULL default '0',
--   mpnCardType tinyint unsigned NOT NULL default '0',
--   mpnCardSubType tinyint unsigned NOT NULL default '0',
--   olpUkey varchar(2) default '00',
--   olpSlotId tinyint(3) unsigned NOT NULL default '0',
--   olpCardType tinyint(3) unsigned NOT NULL default '0',
--   olpCardSubType tinyint(3) unsigned NOT NULL default '0',
--   protectionMechanism tinyint(3) unsigned NOT NULL default '0',
--   protectionStatus tinyint(3) unsigned NOT NULL default '0',
--   activeLine tinyint(3) unsigned NOT NULL default '0',
--   protectiontype tinyint(3) unsigned NOT NULL default '0',
--   currentProtectionStatus tinyint(3) unsigned NOT NULL default '0',
--   protectionTopology tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (olpUkey,olpSlotId,olpCardType,olpCardSubType)
--   ); 

--   CREATE TABLE IF NOT EXISTS loopbackInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   IntfId tinyint(3) unsigned NOT NULL default '0',
--   loopbackType tinyint(3) unsigned NOT NULL default '0',
--   loopbackStatus tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId,IntfId)
--   );
  
--   CREATE TABLE IF NOT EXISTS ocmConfigInfo (
--   ukey varchar(2)  default '00',  
--   SlotId tinyint(3) unsigned NOT NULL default '0',
--   OcmId tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (ukey,SlotId)
--   );
  
--   CREATE TABLE IF NOT EXISTS DirectionNames (  
--   Direction tinyint(3) unsigned NOT NULL default '0',
--   Name varchar(32)  default '00',
--   PRIMARY KEY  (Direction,Name)
--   );
  
--   CREATE TABLE IF NOT EXISTS AggregatorInfo (
--   aUkey varchar(2)  default '00',  
--   aSlotId tinyint(3) unsigned NOT NULL default '0',
--   aLinePortNo tinyint(3) unsigned NOT NULL default '0',
--   mpnUkey varchar(2)  default '00',  
--   mpnSlotId tinyint(3) unsigned NOT NULL default '0',
--   mpnClientPortNo tinyint(3) unsigned NOT NULL default '0',
--   PRIMARY KEY  (aUkey,aSlotId,aLinePortNo)
--   );  
  
--   CREATE TABLE IF NOT EXISTS SubrackDetails (
--   RackId tinyint(3) unsigned NOT NULL default '0',
--   SubrackId tinyint(3) unsigned NOT NULL default '0',
--   ukey varchar(2)  default '00',     
--   Make varchar(44)  default 'C-DOT',
--   SerialNo varchar(44)  default 'NT285',
--   Model varchar(44)  default 'CTERA-800',
--   ManfYear int(4)  default '2018', 
--   PRIMARY KEY (ukey)
--   );