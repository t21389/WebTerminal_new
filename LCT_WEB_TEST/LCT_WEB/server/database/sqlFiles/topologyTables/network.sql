CREATE TABLE IF NOT EXISTS network_table (
  network_ip varchar(20) NOT NULL,
  network_name varchar(20) default 'None'
  no_of_nodes int default '0',
  status tinyint(3) default '0',
  date_time datetime 
  PRIMARY KEY  (network_ip,date_time));

CREATE TABLE IF NOT EXISTS node_table(
  node_ip varchar(20) NOT NULL,
  node_name varchar(20) default 'None',
  no_of_adjacent_node int(2) default '0',
  network_ip varchar(20) NOT NULL,
  PRIMARY KEY (node_ip,network_ip),
  ONSTRAINT node_network_ip_ref_key FOREIGN KEY (network_ip) REFERENCES network_table (network_ip)
  ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS link_table(
  source_ip varchar(20) NOT NULL,
  destination_ip varchar(20) NOT NULL,
  conn_direction int(2) NOT NULL default '0',
  network_ip varchar(20) NOT NULL,
  PRIMARY KEY (source_ip,destination_ip,network_ip),
  CONSTRAINT link_source_ip_ref_key FOREIGN KEY (source_ip) REFERENCES node_table (node_ip)
  ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT link_destination_ip_ref_key FOREIGN KEY (destination_ip) REFERENCES node_table (node_ip)
  ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT link_network_ip_ref_key FOREIGN KEY (network_ip) REFERENCES network_table (network_ip)
  ON DELETE CASCADE ON UPDATE CASCADE);