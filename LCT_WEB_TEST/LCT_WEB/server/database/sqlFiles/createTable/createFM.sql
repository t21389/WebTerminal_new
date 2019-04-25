	CREATE TABLE IF NOT EXISTS cscc_och_current_alarms(
    cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	direction tinyint(3) NOT NULL,
	wavelength tinyint(3) NOT NULL,	
	severity tinyint(3) NOT NULL,
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	maskbit tinyint(3) NOT NULL DEFAULT '0',
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, direction, wavelength, cardKey));

	CREATE TABLE IF NOT EXISTS cscc_ots_oms_current_alarms(
    cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	maskbit tinyint(3) NOT NULL DEFAULT '0',
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, interface, cardKey));

	CREATE TABLE IF NOT EXISTS cscc_device_current_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	direction tinyint(3) NOT NULL DEFAULT '0',
	wavelength tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	maskbit tinyint(3) NOT NULL DEFAULT '0',
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, direction, wavelength, cardKey));

	CREATE TABLE IF NOT EXISTS tpn_client_current_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	direction tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	maskbit tinyint(3) NOT NULL DEFAULT '0',
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, interface, cardkey));

	CREATE TABLE IF NOT EXISTS tpn_otu_odu_current_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	maskbit tinyint(3) NOT NULL DEFAULT '0',
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, cardkey));

C	REATE TABLE IF NOT EXISTS tpn_device_current_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	direction tinyint(3) NOT NULL DEFAULT '0',	
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	maskbit tinyint(3) NOT NULL DEFAULT '0',
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, interface, direction, cardkey));

	CREATE TABLE IF NOT EXISTS amplifier_current_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	maskbit tinyint(3) NOT NULL DEFAULT '0',
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, interface, cardkey));

	CREATE TABLE IF NOT EXISTS lineCard_current_alarms(
	cardType tinyint(3) NOT NULL DEFAULT '0',
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	maskbit tinyint(3) NOT NULL DEFAULT '0',
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardType, cardId, alarmId, category, interface, cardkey));


CREATE TABLE IF NOT EXISTS cscc_och_history_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	direction tinyint(3) NOT NULL,
	wavelength tinyint(3) NOT NULL,
	severity tinyint(3) NOT NULL,
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	clrDate date NOT NULL,
	clrTime varchar(15) NOT NULL,
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, direction, wavelength, cardKey, clrDate, clrTime)
);


CREATE TABLE IF NOT EXISTS cscc_ots_oms_history_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	clrDate date NOT NULL,
	clrTime varchar(15) NOT NULL,
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, interface, cardKey, clrDate, clrTime)
);


CREATE TABLE IF NOT EXISTS cscc_device_history_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	direction tinyint(3) NOT NULL DEFAULT '0',
	wavelength tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	clrDate date NOT NULL,
	clrTime varchar(15) NOT NULL,
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, direction, wavelength, cardKey, clrDate, clrTime)	
);


CREATE TABLE IF NOT EXISTS tpn_client_history_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	direction tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	clrDate date NOT NULL,
	clrTime varchar(15) NOT NULL,
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, interface, cardkey, clrDate, clrTime)
);


CREATE TABLE IF NOT EXISTS tpn_otu_odu_history_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	clrDate date NOT NULL,
	clrTime varchar(15) NOT NULL,
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, cardkey, clrDate, clrTime)
);


CREATE TABLE IF NOT EXISTS tpn_device_history_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	direction tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	clrDate date NOT NULL,
	clrTime varchar(15) NOT NULL,
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, interface, direction, cardkey, clrDate, clrTime)
);


CREATE TABLE IF NOT EXISTS amplifier_history_alarms(
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	clrDate date NOT NULL,
	clrTime varchar(15) NOT NULL,
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardId, alarmId, category, interface, cardkey, clrDate, clrTime)
);


CREATE TABLE IF NOT EXISTS lineCard_history_alarms(
	cardType tinyint(3) NOT NULL DEFAULT '0',
	cardId tinyint(3) NOT NULL DEFAULT '0',
	alarmId tinyint(3) NOT NULL DEFAULT '0',
	category tinyint(3) NOT NULL DEFAULT '0',
	interface tinyint(3) NOT NULL DEFAULT '0',
	severity tinyint(3) NOT NULL DEFAULT '1',
	occDate date NOT NULL,
	occTime varchar(15) NOT NULL,
	clrDate date NOT NULL,
	clrTime varchar(15) NOT NULL,
	cardKey tinyint(3) NOT NULL,
	PRIMARY KEY (cardType, cardId, alarmId, category, interface, cardkey, clrDate, clrTime)
);


CREATE TABLE IF NOT EXISTS LOGS
   (USER_ID VARCHAR(20) NOT NULL,
    DATED   VARCHAR(200) NOT NULL,
    LOGGER  VARCHAR(50) NOT NULL,
    LEVEL   VARCHAR(10) NOT NULL,
    MESSAGE VARCHAR(1000) NOT NULL
   );
