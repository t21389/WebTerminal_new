  CREATE  TABLE IF NOT EXISTS cm_reference_table (
  rack TINYINT(3) NOT NULL ,
  subrack TINYINT(3) NOT NULL ,
  card_id TINYINT(3) NOT NULL ,
  card_type TINYINT(3) NOT NULL,
  interface_type TINYINT(3) NOT NULL ,
  interface_id TINYINT(3) NOT NULL ,
  parameter_type TINYINT(3) NOT NULL ,
  ref_key VARCHAR(30) NOT NULL ,
  PRIMARY KEY (ref_key) );
  
  CREATE TABLE IF NOT EXISTS tpn_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rx_pwr_max FLOAT NOT NULL ,
  rx_pwr_min FLOAT NOT NULL ,
  rx_pwr_last FLOAT NOT NULL ,
  rx_pwr_avg FLOAT NOT NULL ,
  tx_pwr_max FLOAT NOT NULL ,
  tx_pwr_min FLOAT NOT NULL ,
  tx_pwr_last FLOAT NOT NULL ,
  tx_pwr_avg FLOAT NOT NULL ,
  volt_max FLOAT NOT NULL ,
  volt_min FLOAT NOT NULL ,
  volt_last FLOAT NOT NULL ,
  volt_avg FLOAT NOT NULL ,
  curr_max FLOAT NOT NULL ,
  curr_min FLOAT NOT NULL ,
  curr_last FLOAT NOT NULL ,
  curr_avg FLOAT NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_last FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  itla_rx_temp_max FLOAT NOT NULL default -1000,
  itla_rx_temp_min FLOAT NOT NULL default -1000,
  itla_rx_temp_last FLOAT NOT NULL default -1000,
  itla_rx_temp_avg FLOAT NOT NULL default -1000,
  itla_tx_temp_max FLOAT NOT NULL default -1000,
  itla_tx_temp_min FLOAT NOT NULL default -1000,
  itla_tx_temp_last FLOAT NOT NULL default -1000,
  itla_tx_temp_avg FLOAT NOT NULL default -1000,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_tpn_opt FOREIGN KEY (ref_key ) REFERENCES cm_reference_table (ref_key)
  ON DELETE CASCADE ON UPDATE CASCADE);

  CREATE TABLE IF NOT EXISTS mcs_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  
  rx_pwr1_max FLOAT NOT NULL ,
  rx_pwr1_min FLOAT NOT NULL ,
  rx_pwr1_avg FLOAT NOT NULL ,
  
  rx_pwr2_max FLOAT NOT NULL ,
  rx_pwr2_min FLOAT NOT NULL ,
  rx_pwr2_avg FLOAT NOT NULL ,
  
  rx_pwr3_max FLOAT NOT NULL ,
  rx_pwr3_min FLOAT NOT NULL ,
  rx_pwr3_avg FLOAT NOT NULL ,
  
  rx_pwr4_max FLOAT NOT NULL ,
  rx_pwr4_min FLOAT NOT NULL ,
  rx_pwr4_avg FLOAT NOT NULL ,
  
  rx_pwr5_max FLOAT NOT NULL ,
  rx_pwr5_min FLOAT NOT NULL ,
  rx_pwr5_avg FLOAT NOT NULL ,
  
  rx_pwr6_max FLOAT NOT NULL ,
  rx_pwr6_min FLOAT NOT NULL ,
  rx_pwr6_avg FLOAT NOT NULL ,
  
  rx_pwr7_max FLOAT NOT NULL ,
  rx_pwr7_min FLOAT NOT NULL ,
  rx_pwr7_avg FLOAT NOT NULL ,
  
  rx_pwr8_max FLOAT NOT NULL ,
  rx_pwr8_min FLOAT NOT NULL ,
  rx_pwr8_avg FLOAT NOT NULL ,
  
  rx_pwr9_max FLOAT NOT NULL ,
  rx_pwr9_min FLOAT NOT NULL ,
  rx_pwr9_avg FLOAT NOT NULL ,
  
  rx_pwr10_max FLOAT NOT NULL ,
  rx_pwr10_min FLOAT NOT NULL ,
  rx_pwr10_avg FLOAT NOT NULL ,
  
  rx_pwr11_max FLOAT NOT NULL ,
  rx_pwr11_min FLOAT NOT NULL ,
  rx_pwr11_avg FLOAT NOT NULL ,
  
  rx_pwr12_max FLOAT NOT NULL ,
  rx_pwr12_min FLOAT NOT NULL ,
  rx_pwr12_avg FLOAT NOT NULL ,
  
  rx_pwr13_max FLOAT NOT NULL ,
  rx_pwr13_min FLOAT NOT NULL ,
  rx_pwr13_avg FLOAT NOT NULL ,
  
  rx_pwr14_max FLOAT NOT NULL ,
  rx_pwr14_min FLOAT NOT NULL ,
  rx_pwr14_avg FLOAT NOT NULL ,
  
  rx_pwr15_max FLOAT NOT NULL ,
  rx_pwr15_min FLOAT NOT NULL ,
  rx_pwr15_avg FLOAT NOT NULL ,
  
  rx_pwr16_max FLOAT NOT NULL ,
  rx_pwr16_min FLOAT NOT NULL ,
  rx_pwr16_avg FLOAT NOT NULL , 
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_mcs_opt
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS voa_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rxPwr1_max FLOAT NOT NULL ,
  rxPwr1_min FLOAT NOT NULL ,
  rxPwr1_avg FLOAT NOT NULL ,
  rxPwr2_max FLOAT NOT NULL ,
  rxPwr2_min FLOAT NOT NULL ,
  rxPwr2_avg FLOAT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_voa_opt
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS wss_wss_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  mid VARCHAR(100) NOT NULL ,
  channelSpacingOfWss INT NOT NULL ,
  CaseTemperatureOfWSS FLOAT NOT NULL ,
  TempOfLcosOfWSS FLOAT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_wss_wss_opt
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
   
  CREATE TABLE IF NOT EXISTS wss_ocm_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  device_temp INT NOT NULL ,
  device_status INT NOT NULL ,
  peaks INT NOT NULL ,
  error_code INT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_wss_ocm_opt
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS wss_ocm_wavelength_info (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  power FLOAT NOT NULL ,
  OSNR FLOAT NOT NULL ,
  channel_power FLOAT NOT NULL ,
  noise_power FLOAT NOT NULL ,
  frequency FLOAT NOT NULL,
  wavelength FLOAT NOT NULL,
  wavelength_no FLOAT NOT NULL,
  PRIMARY KEY (ref_key, rcv_date, rcv_time, wavelength_no) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_wss_ocm_wave_info
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS ocm_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  device_temp INT NOT NULL ,
  device_status INT NOT NULL ,
  peaks INT NOT NULL ,
  error_code INT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_ocm_opt
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS ocm_wavelength_info (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  power FLOAT NOT NULL ,
  OSNR FLOAT NOT NULL ,
  channel_power FLOAT NOT NULL ,
  noise_power FLOAT NOT NULL ,
  frequency FLOAT NOT NULL,
  wavelength FLOAT NOT NULL,
  wavelength_no FLOAT NOT NULL,
  PRIMARY KEY (ref_key, rcv_date, rcv_time, wavelength_no) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_ocm_wave_info
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS fc_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rx_pwr_max FLOAT NOT NULL ,
  rx_pwr_min FLOAT NOT NULL ,
  rx_pwr_last FLOAT NOT NULL ,
  rx_pwr_avg FLOAT NOT NULL ,
  tx_pwr_max FLOAT NOT NULL ,
  tx_pwr_min FLOAT NOT NULL ,
  tx_pwr_last FLOAT NOT NULL ,
  tx_pwr_avg FLOAT NOT NULL ,
  volt_max FLOAT NOT NULL ,
  volt_min FLOAT NOT NULL ,
  volt_last FLOAT NOT NULL ,
  volt_avg FLOAT NOT NULL ,
  curr_max FLOAT NOT NULL ,
  curr_min FLOAT NOT NULL ,
  curr_last FLOAT NOT NULL ,
  curr_avg FLOAT NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_last FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_fc_opt
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS fc_fibre_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rx_high_err_cnt BIGINT NOT NULL ,
  rx_blk_type_err_cnt BIGINT NOT NULL ,
  rx_invld_blk_cnt BIGINT NOT NULL ,
  rx_data_byte_cnt BIGINT NOT NULL ,
  rx_os_cnt BIGINT NOT NULL ,
  rx_valid_frm_cnt BIGINT NOT NULL ,
  rx_invalid_frm_cnt BIGINT NOT NULL ,
  rx_valid_frm_byte_cnt BIGINT NOT NULL ,
  rx_gfp_frm_cnt BIGINT NOT NULL ,
  rx_gfp_err_frm_cnt BIGINT NOT NULL ,
  tx_byte_cnt BIGINT NOT NULL ,
  tx_os_cnt BIGINT NOT NULL ,
  tx_err_ctrl_blk_cnt BIGINT NOT NULL ,
  tx_lf_os_cnt BIGINT NOT NULL ,
  tx_valid_frm_cnt BIGINT NOT NULL ,
  tx_invalid_frm_cnt BIGINT NOT NULL ,
  tx_valid_frm_byte_cnt BIGINT NOT NULL ,
  tx_crc_err BIGINT NOT NULL ,
  tx_invalid_blk_hdr_cnt BIGINT NOT NULL ,
  rx_total_pckt_count BIGINT NOT NULL ,
  rx_crc_err BIGINT NOT NULL ,
  tx_total_pckt_count BIGINT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_fc_fibre
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS ber_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  ber_time_elapsed INT NOT NULL ,
  ber DOUBLE NOT NULL ,
  window_size INT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,  
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_ber_param
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS amp_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  board_temp_max FLOAT NOT NULL default '0',
  board_temp_min FLOAT NOT NULL default '0',
  board_temp_avg FLOAT NOT NULL default '0',
  pump_current_max FLOAT NOT NULL default '0',
  pump_current_min FLOAT NOT NULL default '0',
  pump_current_avg FLOAT NOT NULL default '0',
  pump_temp_max FLOAT NOT NULL default '0',
  pump_temp_min FLOAT NOT NULL default '0',
  pump_temp_avg FLOAT NOT NULL default '0',
  in_pwr_max FLOAT NOT NULL default '0',
  in_pwr_min FLOAT NOT NULL default '0',
  in_pwr_avg FLOAT NOT NULL default '0',
  out_pwr_max FLOAT NOT NULL default '0',
  out_pwr_min FLOAT NOT NULL default '0',
  out_pwr_avg FLOAT NOT NULL default '0',
  signal_gain_max FLOAT NOT NULL default '0',
  signal_gain_min FLOAT NOT NULL default '0',
  signal_gain_avg FLOAT NOT NULL default '0',
  total_in_power_max FLOAT NOT NULL default '0',
  total_in_power_min FLOAT NOT NULL default '0',
  total_in_power_avg FLOAT NOT NULL default '0',
  total_out_power_max FLOAT NOT NULL default '0',
  total_out_power_min FLOAT NOT NULL default '0',
  total_out_power_avg FLOAT NOT NULL default '0',
  span_loss_max FLOAT NOT NULL default '0',
  span_loss_min FLOAT NOT NULL default '0',
  span_loss_avg FLOAT NOT NULL default '0',
  signal_out_power_max FLOAT NOT NULL default '0',
  signal_out_power_min FLOAT NOT NULL default '0',
  signal_out_power_avg FLOAT NOT NULL default '0',
  raman_input_power_max FLOAT NOT NULL default '0',     
  raman_input_power_min FLOAT NOT NULL default '0',     
  raman_input_power_avg FLOAT NOT NULL default '0',     
  pumps_power_into_line_max FLOAT NOT NULL default '0', 
  pumps_power_into_line_min FLOAT NOT NULL default '0', 
  pumps_power_into_line_avg FLOAT NOT NULL default '0', 
  edfa_input_power_max FLOAT NOT NULL default '0',    
  edfa_input_power_min FLOAT NOT NULL default '0',    
  edfa_input_power_avg FLOAT NOT NULL default '0',    
  edfa_output_power_max FLOAT NOT NULL default '0',  
  edfa_output_power_min FLOAT NOT NULL default '0',  
  edfa_output_power_avg FLOAT NOT NULL default '0',  
  total_signal_gain_max FLOAT NOT NULL default '0',  
  total_signal_gain_min FLOAT NOT NULL default '0',  
  total_signal_gain_avg FLOAT NOT NULL default '0',  
  net_raman_gain_max FLOAT NOT NULL default '0', 
  net_raman_gain_min FLOAT NOT NULL default '0', 
  net_raman_gain_avg FLOAT NOT NULL default '0',
  osc_add_power_max FLOAT NOT NULL default '0',
  osc_add_power_min FLOAT NOT NULL default '0',
  osc_add_power_avg FLOAT NOT NULL default '0',
  bypass_power_max FLOAT NOT NULL default '0',   
  bypass_power_min FLOAT NOT NULL default '0',   
  bypass_power_avg FLOAT NOT NULL default '0',  
  osc_corrected_power_calculation_max FLOAT NOT NULL default '0', 
  osc_corrected_power_calculation_min FLOAT NOT NULL default '0', 
  osc_corrected_power_calculation_avg FLOAT NOT NULL default '0',
  cband_power_at_raman_output_max FLOAT NOT NULL default '0', 
  cband_power_at_raman_output_min FLOAT NOT NULL default '0', 
  cband_power_at_raman_output_avg FLOAT NOT NULL default '0',
  pump_1455nm_power_max FLOAT NOT NULL default '0', 
  pump_1455nm_power_min FLOAT NOT NULL default '0', 
  pump_1455nm_power_avg FLOAT NOT NULL default '0',
  pump_1425nm_power_max FLOAT NOT NULL default '0', 
  pump_1425nm_power_min FLOAT NOT NULL default '0', 
  pump_1425nm_power_avg FLOAT NOT NULL default '0',
  edfa_satge_signal_gain_max FLOAT NOT NULL default '0', 
  edfa_satge_signal_gain_min FLOAT NOT NULL default '0', 
  edfa_satge_signal_gain_avg FLOAT NOT NULL default '0',
  on_off_raman_gain_max FLOAT NOT NULL default '0', 
  on_off_raman_gain_min FLOAT NOT NULL default '0', 
  on_off_raman_gain_avg FLOAT NOT NULL default '0',
  osc_power_max FLOAT NOT NULL default '0', 
  osc_power_min FLOAT NOT NULL default '0', 
  osc_power_avg FLOAT NOT NULL default '0',
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_amp_opt
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS 100G_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rx_pwr_max FLOAT NOT NULL ,
  rx_pwr_min FLOAT NOT NULL ,
  rx_pwr_last FLOAT NOT NULL ,
  rx_pwr_avg FLOAT NOT NULL ,
  tx_pwr_max FLOAT NOT NULL ,
  tx_pwr_min FLOAT NOT NULL ,
  tx_pwr_last FLOAT NOT NULL ,
  tx_pwr_avg FLOAT NOT NULL ,
  volt_max FLOAT NOT NULL ,
  volt_min FLOAT NOT NULL ,
  volt_last FLOAT NOT NULL ,
  volt_avg FLOAT NOT NULL ,
  curr_max FLOAT NOT NULL ,
  curr_min FLOAT NOT NULL ,
  curr_last FLOAT NOT NULL ,
  curr_avg FLOAT NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_last FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  itla_rx_temp_max FLOAT NOT NULL default -1000,
  itla_rx_temp_min FLOAT NOT NULL default -1000,
  itla_rx_temp_last FLOAT NOT NULL default -1000,
  itla_rx_temp_avg FLOAT NOT NULL default -1000,
  itla_tx_temp_max FLOAT NOT NULL default -1000,
  itla_tx_temp_min FLOAT NOT NULL default -1000,
  itla_tx_temp_last FLOAT NOT NULL default -1000,
  itla_tx_temp_avg FLOAT NOT NULL default -1000,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key),
  CONSTRAINT cm_ref_100g_opt
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS tpn_ethernet_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  a_frames_rx_ok BIGINT NOT NULL ,
  a_frame_check_sequence_errors BIGINT NOT NULL ,
  a_alignment_errors BIGINT NOT NULL ,
  a_pause_mac_ctrl_frames_rx BIGINT NOT NULL ,
  a_frame_too_long_errors BIGINT NOT NULL ,
  if_out_octs BIGINT NOT NULL ,
  if_in_octs BIGINT NOT NULL ,
  if_in_ucast_pkts BIGINT NOT NULL ,
  if_in_multicast_pkts BIGINT NOT NULL ,
  if_in_broadcast_pkts BIGINT NOT NULL ,
  ether_stats_drop_events BIGINT NOT NULL ,
  ether_stats_octs BIGINT NOT NULL ,
  ether_stats_pkts BIGINT NOT NULL ,
  ether_stats_undersize_pkts BIGINT NOT NULL ,
  ether_stats_pkts_64_octs BIGINT NOT NULL ,
  ether_stats_pkts_65_to_127_octs BIGINT NOT NULL ,
  ether_stats_pkts_128_to_255_octs BIGINT NOT NULL ,
  ether_stats_pkts_256_to_511_octs BIGINT NOT NULL ,
  ether_stats_pkts_512_to_1023_octs BIGINT NOT NULL ,
  ether_stats_pkts_1024_to_1518_octs BIGINT NOT NULL ,
  ether_stats_pkts_1519_to_max_octs BIGINT NOT NULL ,
  ether_stats_oversize_pkts BIGINT NOT NULL ,
  ether_stats_jabber BIGINT NOT NULL ,
  ether_stats_fragments BIGINT NOT NULL ,
  if_in_errors BIGINT NOT NULL ,
  a_mac_control_frames_rx BIGINT NOT NULL, 
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_tpn_eth
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS 100G_fec_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  fec_total_corr_errs BIGINT NOT NULL ,
  fec_otuk_swz_lpa_stats_fp BIGINT NOT NULL ,
  fec_otuk_swz_lpa_stats_uncorr_cwds BIGINT NOT NULL ,
  fec_otuk_swz_lpa_stats_corr_1s BIGINT NOT NULL ,
  fec_otuk_swz_lpa_stats_corr_0s BIGINT NOT NULL ,
  fec_otuk_swz_llsa_stats_uncorr_cwds BIGINT NOT NULL ,
  fec_otuk_swz_llsa_stats_lane_corr_1s BIGINT NOT NULL ,
  fec_otuk_swz_llsa_stats_lane_corr_0s BIGINT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key),
  CONSTRAINT cm_ref_100g_fec
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS fec_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  fec_total_corr_errs BIGINT NOT NULL ,
  fec_otuk_gfec_lpa_stats_fp BIGINT NOT NULL ,
  fec_otuk_gfec_lpa_stats_uncorr_cwds BIGINT NOT NULL ,
  fec_otuk_gfec_lpa_stats_corr_1s BIGINT NOT NULL ,
  fec_otuk_gfec_lpa_stats_corr_0s BIGINT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key),
  CONSTRAINT cm_ref_fec
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS sdh_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,  
  rs_neesr INT NOT NULL ,
  rs_nesesr INT NOT NULL , 
  rs_nebber INT NOT NULL , 
  rs_neuasr INT NOT NULL , 
  rs_nesepi INT NOT NULL , 

  ms_neesr INT NOT NULL , 
  ms_nesesr INT NOT NULL , 
  ms_nebber INT NOT NULL , 
  ms_neuasr INT NOT NULL , 
  ms_nesepi INT NOT NULL , 

  ms_feesr INT NOT NULL , 
  ms_fesesr INT NOT NULL , 
  ms_febber INT NOT NULL , 
  ms_feuasr INT NOT NULL , 
  ms_fesepi INT NOT NULL , 
    
  path_neesr INT NOT NULL , 
  path_nesesr INT NOT NULL , 
  path_nebber INT NOT NULL ,
  path_neuasr INT NOT NULL ,
  path_nesepi INT NOT NULL ,
  
  b1_error_count BIGINT NOT NULL,
  b2_error_count BIGINT NOT NULL,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key),
  CONSTRAINT cm_ref_sdh
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS otn_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  otu_bber INT NOT NULL ,
  otu_esr INT NOT NULL ,
  otu_sesr INT NOT NULL ,
  otu_uasr INT NOT NULL ,
  odu_febber INT NOT NULL ,
  odu_feesr INT NOT NULL ,
  odu_fesesr INT NOT NULL ,
  otu_feuasr INT NOT NULL ,
  otu_biaesr INT NOT NULL ,
  odu_iaesr INT NOT NULL ,
  odu_biaesr INT NOT NULL ,
  odu_pm_bber INT NOT NULL ,
  odu_pm_esr INT NOT NULL ,
  odu_pm_sesr INT NOT NULL ,
  odu_pm_uasr INT NOT NULL ,
  odu_pm_febber INT NOT NULL ,
  odu_pm_feesr INT NOT NULL ,
  odu_pm_fesesr INT NOT NULL ,
  odu_pm_feuasr INT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_otn
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS 100G_otn_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  otu_bber INT NOT NULL ,
  otu_esr INT NOT NULL ,
  otu_sesr INT NOT NULL ,
  otu_uasr INT NOT NULL ,
  odu_febber INT NOT NULL ,
  odu_feesr INT NOT NULL ,
  odu_fesesr INT NOT NULL ,
  otu_feuasr INT NOT NULL ,
  otu_biaesr INT NOT NULL ,
  odu_iaesr INT NOT NULL ,
  odu_biaesr INT NOT NULL ,
  odu_pm_bber INT NOT NULL ,
  odu_pm_esr INT NOT NULL ,
  odu_pm_sesr INT NOT NULL ,
  odu_pm_uasr INT NOT NULL ,
  odu_pm_febber INT NOT NULL ,
  odu_pm_feesr INT NOT NULL ,
  odu_pm_fesesr INT NOT NULL ,
  odu_pm_feuasr INT NOT NULL ,
  PRIMARY KEY (ref_key, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_100G_otn
    FOREIGN KEY (ref_key )
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

  CREATE  TABLE IF NOT EXISTS sch_reference_table (
  rack TINYINT(3) NOT NULL ,
  subrack TINYINT(3) NOT NULL ,
  card_id TINYINT(3) NOT NULL ,
  card_type TINYINT(3) NOT NULL,
  interface_type TINYINT(3) NOT NULL ,
  interface_id TINYINT(3) NOT NULL ,
  parameter_type TINYINT(3) NOT NULL ,
  sch_id TINYINT(3) NOT NULL ,
  sch_type TINYINT(3) NOT NULL ,
  sch_status TINYINT(3) NOT NULL ,
  frm_date DATE NOT NULL,
  to_date DATE NOT NULL,
  frm_time varchar(10) NOT NULL,
  to_time varchar(10) NOT NULL,
  ref_key VARCHAR(50) NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, frm_date, to_date, frm_time, to_time) );
  
  CREATE TABLE IF NOT EXISTS sch_tpn_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rx_pwr_max FLOAT NOT NULL ,
  rx_pwr_min FLOAT NOT NULL ,
  rx_pwr_last FLOAT NOT NULL ,
  rx_pwr_avg FLOAT NOT NULL ,
  tx_pwr_max FLOAT NOT NULL ,
  tx_pwr_min FLOAT NOT NULL ,
  tx_pwr_last FLOAT NOT NULL ,
  tx_pwr_avg FLOAT NOT NULL ,
  volt_max FLOAT NOT NULL ,
  volt_min FLOAT NOT NULL ,
  volt_last FLOAT NOT NULL ,
  volt_avg FLOAT NOT NULL ,
  curr_max FLOAT NOT NULL ,
  curr_min FLOAT NOT NULL ,
  curr_last FLOAT NOT NULL ,
  curr_avg FLOAT NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_last FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  itla_rx_temp_max FLOAT NOT NULL default -1000,
  itla_rx_temp_min FLOAT NOT NULL default -1000,
  itla_rx_temp_last FLOAT NOT NULL default -1000,
  itla_rx_temp_avg FLOAT NOT NULL default -1000,
  itla_tx_temp_max FLOAT NOT NULL default -1000,
  itla_tx_temp_min FLOAT NOT NULL default -1000,
  itla_tx_temp_last FLOAT NOT NULL default -1000,
  itla_tx_temp_avg FLOAT NOT NULL default -1000,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_tpn_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS sch_fc_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rx_pwr_max FLOAT NOT NULL ,
  rx_pwr_min FLOAT NOT NULL ,
  rx_pwr_last FLOAT NOT NULL ,
  rx_pwr_avg FLOAT NOT NULL ,
  tx_pwr_max FLOAT NOT NULL ,
  tx_pwr_min FLOAT NOT NULL ,
  tx_pwr_last FLOAT NOT NULL ,
  tx_pwr_avg FLOAT NOT NULL ,
  volt_max FLOAT NOT NULL ,
  volt_min FLOAT NOT NULL ,
  volt_last FLOAT NOT NULL ,
  volt_avg FLOAT NOT NULL ,
  curr_max FLOAT NOT NULL ,
  curr_min FLOAT NOT NULL ,
  curr_last FLOAT NOT NULL ,
  curr_avg FLOAT NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_last FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_fc_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS sch_fc_fibre_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rx_high_err_cnt BIGINT NOT NULL ,
  rx_blk_type_err_cnt BIGINT NOT NULL ,
  rx_invld_blk_cnt BIGINT NOT NULL ,
  rx_data_byte_cnt BIGINT NOT NULL ,
  rx_os_cnt BIGINT NOT NULL ,
  rx_valid_frm_cnt BIGINT NOT NULL ,
  rx_invalid_frm_cnt BIGINT NOT NULL ,
  rx_valid_frm_byte_cnt BIGINT NOT NULL ,
  rx_gfp_frm_cnt BIGINT NOT NULL ,
  rx_gfp_err_frm_cnt BIGINT NOT NULL ,
  tx_byte_cnt BIGINT NOT NULL ,
  tx_os_cnt BIGINT NOT NULL ,
  tx_err_ctrl_blk_cnt BIGINT NOT NULL ,
  tx_lf_os_cnt BIGINT NOT NULL ,
  tx_valid_frm_cnt BIGINT NOT NULL ,
  tx_invalid_frm_cnt BIGINT NOT NULL ,
  tx_valid_frm_byte_cnt BIGINT NOT NULL ,
  tx_crc_err BIGINT NOT NULL ,
  tx_invalid_blk_hdr_cnt BIGINT NOT NULL ,
  rx_total_pckt_count BIGINT NOT NULL ,
  rx_crc_err BIGINT NOT NULL ,
  tx_total_pckt_count BIGINT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_fc_fibre
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
    
  CREATE TABLE IF NOT EXISTS sch_ber_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  ber_time_elapsed INT NOT NULL ,
  ber DOUBLE NOT NULL ,
  window_size INT NOT NULL ,  
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_ber_param
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
    
    
CREATE TABLE IF NOT EXISTS sch_amp_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  board_temp_max FLOAT NOT NULL default '0' ,
  board_temp_min FLOAT NOT NULL default '0',
  board_temp_avg FLOAT NOT NULL default '0',
  pump_current_max FLOAT NOT NULL default '0',
  pump_current_min FLOAT NOT NULL default '0',
  pump_current_avg FLOAT NOT NULL default '0',
  pump_temp_max FLOAT NOT NULL default '0',
  pump_temp_min FLOAT NOT NULL default '0',
  pump_temp_avg FLOAT NOT NULL default '0',
  in_pwr_max FLOAT NOT NULL default '0',
  in_pwr_min FLOAT NOT NULL default '0',
  in_pwr_avg FLOAT NOT NULL default '0',
  out_pwr_max FLOAT NOT NULL default '0',
  out_pwr_min FLOAT NOT NULL default '0',
  out_pwr_avg FLOAT NOT NULL default '0',
  signal_gain_max FLOAT NOT NULL default '0',
  signal_gain_min FLOAT NOT NULL default '0',
  signal_gain_avg FLOAT NOT NULL default '0',
  total_in_power_max FLOAT NOT NULL default '0',
  total_in_power_min FLOAT NOT NULL default '0',
  total_in_power_avg FLOAT NOT NULL default '0',
  total_out_power_max FLOAT NOT NULL default '0',
  total_out_power_min FLOAT NOT NULL default '0',
  total_out_power_avg FLOAT NOT NULL default '0',
  span_loss_max FLOAT NOT NULL default '0',
  span_loss_min FLOAT NOT NULL default '0',
  span_loss_avg FLOAT NOT NULL default '0',
  signal_out_power_max FLOAT NOT NULL default '0',
  signal_out_power_min FLOAT NOT NULL default '0',
  signal_out_power_avg FLOAT NOT NULL default '0',
  raman_input_power_max FLOAT NOT NULL default '0',     
  raman_input_power_min FLOAT NOT NULL default '0',     
  raman_input_power_avg FLOAT NOT NULL default '0',     
  pumps_power_into_line_max FLOAT NOT NULL default '0', 
  pumps_power_into_line_min FLOAT NOT NULL default '0', 
  pumps_power_into_line_avg FLOAT NOT NULL default '0', 
  edfa_input_power_max FLOAT NOT NULL default '0',    
  edfa_input_power_min FLOAT NOT NULL default '0',    
  edfa_input_power_avg FLOAT NOT NULL default '0',    
  edfa_output_power_max FLOAT NOT NULL default '0',  
  edfa_output_power_min FLOAT NOT NULL default '0',  
  edfa_output_power_avg FLOAT NOT NULL default '0',  
  total_signal_gain_max FLOAT NOT NULL default '0',  
  total_signal_gain_min FLOAT NOT NULL default '0',  
  total_signal_gain_avg FLOAT NOT NULL default '0',  
  net_raman_gain_max FLOAT NOT NULL default '0', 
  net_raman_gain_min FLOAT NOT NULL default '0', 
  net_raman_gain_avg FLOAT NOT NULL default '0',
  osc_add_power_max FLOAT NOT NULL default '0',
  osc_add_power_min FLOAT NOT NULL default '0',
  osc_add_power_avg FLOAT NOT NULL default '0',
  bypass_power_max FLOAT NOT NULL default '0',   
  bypass_power_min FLOAT NOT NULL default '0',   
  bypass_power_avg FLOAT NOT NULL default '0',  
  osc_corrected_power_calculation_max FLOAT NOT NULL default '0', 
  osc_corrected_power_calculation_min FLOAT NOT NULL default '0', 
  osc_corrected_power_calculation_avg FLOAT NOT NULL default '0',
  cband_power_at_raman_output_max FLOAT NOT NULL default '0', 
  cband_power_at_raman_output_min FLOAT NOT NULL default '0', 
  cband_power_at_raman_output_avg FLOAT NOT NULL default '0',
  pump_1455nm_power_max FLOAT NOT NULL default '0', 
  pump_1455nm_power_min FLOAT NOT NULL default '0', 
  pump_1455nm_power_avg FLOAT NOT NULL default '0',
  pump_1425nm_power_max FLOAT NOT NULL default '0', 
  pump_1425nm_power_min FLOAT NOT NULL default '0', 
  pump_1425nm_power_avg FLOAT NOT NULL default '0',
  edfa_satge_signal_gain_max FLOAT NOT NULL default '0', 
  edfa_satge_signal_gain_min FLOAT NOT NULL default '0', 
  edfa_satge_signal_gain_avg FLOAT NOT NULL default '0',
  on_off_raman_gain_max FLOAT NOT NULL default '0', 
  on_off_raman_gain_min FLOAT NOT NULL default '0', 
  on_off_raman_gain_avg FLOAT NOT NULL default '0',
  osc_power_max FLOAT NOT NULL default '0', 
  osc_power_min FLOAT NOT NULL default '0', 
  osc_power_avg FLOAT NOT NULL default '0',
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_amp_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
 CREATE TABLE IF NOT EXISTS sch_100G_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rx_pwr_max FLOAT NOT NULL ,
  rx_pwr_min FLOAT NOT NULL ,
  rx_pwr_last FLOAT NOT NULL ,
  rx_pwr_avg FLOAT NOT NULL ,
  tx_pwr_max FLOAT NOT NULL ,
  tx_pwr_min FLOAT NOT NULL ,
  tx_pwr_last FLOAT NOT NULL ,
  tx_pwr_avg FLOAT NOT NULL ,
  volt_max FLOAT NOT NULL ,
  volt_min FLOAT NOT NULL ,
  volt_last FLOAT NOT NULL ,
  volt_avg FLOAT NOT NULL ,
  curr_max FLOAT NOT NULL ,
  curr_min FLOAT NOT NULL ,
  curr_last FLOAT NOT NULL ,
  curr_avg FLOAT NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_last FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  itla_rx_temp_max FLOAT NOT NULL default -1000,
  itla_rx_temp_min FLOAT NOT NULL default -1000,
  itla_rx_temp_last FLOAT NOT NULL default -1000,
  itla_rx_temp_avg FLOAT NOT NULL default -1000,
  itla_tx_temp_max FLOAT NOT NULL default -1000,
  itla_tx_temp_min FLOAT NOT NULL default -1000,
  itla_tx_temp_last FLOAT NOT NULL default -1000,
  itla_tx_temp_avg FLOAT NOT NULL default -1000,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status),
  CONSTRAINT sch_ref_100g_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
 CREATE TABLE IF NOT EXISTS sch_tpn_ethernet_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  a_frames_rx_ok BIGINT NOT NULL ,
  a_frame_check_sequence_errors BIGINT NOT NULL ,
  a_alignment_errors BIGINT NOT NULL ,
  a_pause_mac_ctrl_frames_rx BIGINT NOT NULL ,
  a_frame_too_long_errors BIGINT NOT NULL ,
  if_out_octs BIGINT NOT NULL ,
  if_in_octs BIGINT NOT NULL ,
  if_in_ucast_pkts BIGINT NOT NULL ,
  if_in_multicast_pkts BIGINT NOT NULL ,
  if_in_broadcast_pkts BIGINT NOT NULL ,
  ether_stats_drop_events BIGINT NOT NULL ,
  ether_stats_octs BIGINT NOT NULL ,
  ether_stats_pkts BIGINT NOT NULL ,
  ether_stats_undersize_pkts BIGINT NOT NULL ,
  ether_stats_pkts_64_octs BIGINT NOT NULL ,
  ether_stats_pkts_65_to_127_octs BIGINT NOT NULL ,
  ether_stats_pkts_128_to_255_octs BIGINT NOT NULL ,
  ether_stats_pkts_256_to_511_octs BIGINT NOT NULL ,
  ether_stats_pkts_512_to_1023_octs BIGINT NOT NULL ,
  ether_stats_pkts_1024_to_1518_octs BIGINT NOT NULL ,
  ether_stats_pkts_1519_to_max_octs BIGINT NOT NULL ,
  ether_stats_oversize_pkts BIGINT NOT NULL ,
  ether_stats_jabber BIGINT NOT NULL ,
  ether_stats_fragments BIGINT NOT NULL ,
  if_in_errors BIGINT NOT NULL ,
  a_mac_control_frames_rx BIGINT NOT NULL, 
  
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_tpn_eth
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE IF NOT EXISTS sch_100G_fec_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  fec_total_corr_errs BIGINT NOT NULL ,
  fec_otuk_swz_lpa_stats_fp BIGINT NOT NULL ,
  fec_otuk_swz_lpa_stats_uncorr_cwds BIGINT NOT NULL ,
  fec_otuk_swz_lpa_stats_corr_1s BIGINT NOT NULL ,
  fec_otuk_swz_lpa_stats_corr_0s BIGINT NOT NULL ,
  fec_otuk_swz_llsa_stats_uncorr_cwds BIGINT NOT NULL ,
  fec_otuk_swz_llsa_stats_lane_corr_1s BIGINT NOT NULL ,
  fec_otuk_swz_llsa_stats_lane_corr_0s BIGINT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status),
  CONSTRAINT sch_ref_100g_fec
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS sch_fec_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  fec_total_corr_errs BIGINT NOT NULL ,
  fec_otuk_gfec_lpa_stats_fp BIGINT NOT NULL ,
  fec_otuk_gfec_lpa_stats_uncorr_cwds BIGINT NOT NULL ,
  fec_otuk_gfec_lpa_stats_corr_1s BIGINT NOT NULL ,
  fec_otuk_gfec_lpa_stats_corr_0s BIGINT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status),
  CONSTRAINT sch_ref_fec
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS sch_sdh_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rs_neesr INT NOT NULL ,
  rs_nesesr INT NOT NULL , 
  rs_nebber INT NOT NULL , 
  rs_neuasr INT NOT NULL , 
  rs_nesepi INT NOT NULL , 

  ms_neesr INT NOT NULL , 
  ms_nesesr INT NOT NULL , 
  ms_nebber INT NOT NULL , 
  ms_neuasr INT NOT NULL , 
  ms_nesepi INT NOT NULL , 

  ms_feesr INT NOT NULL , 
  ms_fesesr INT NOT NULL , 
  ms_febber INT NOT NULL , 
  ms_feuasr INT NOT NULL , 
  ms_fesepi INT NOT NULL , 
    
  path_neesr INT NOT NULL , 
  path_nesesr INT NOT NULL , 
  path_nebber	INT NOT NULL ,
  path_neuasr	INT NOT NULL ,
  path_nesepi	INT NOT NULL ,
  
  b1_error_count BIGINT NOT NULL,
  b2_error_count BIGINT NOT NULL,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status),
  CONSTRAINT sch_ref_sdh
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS sch_otn_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  otu_bber INT NOT NULL ,
  otu_esr INT NOT NULL ,
  otu_sesr INT NOT NULL ,
  otu_uasr INT NOT NULL ,
  odu_febber INT NOT NULL ,
  odu_feesr INT NOT NULL ,
  odu_fesesr INT NOT NULL ,
  otu_feuasr INT NOT NULL ,
  otu_biaesr INT NOT NULL ,
  odu_iaesr INT NOT NULL ,
  odu_biaesr INT NOT NULL ,
  odu_pm_bber INT NOT NULL ,
  odu_pm_esr INT NOT NULL ,
  odu_pm_sesr INT NOT NULL ,
  odu_pm_uasr INT NOT NULL ,
  odu_pm_febber INT NOT NULL ,
  odu_pm_feesr INT NOT NULL ,
  odu_pm_fesesr INT NOT NULL ,
  odu_pm_feuasr INT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_otn
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
  CREATE TABLE IF NOT EXISTS sch_100G_otn_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  otu_bber INT NOT NULL ,
  otu_esr INT NOT NULL ,
  otu_sesr INT NOT NULL ,
  otu_uasr INT NOT NULL ,
  odu_febber INT NOT NULL ,
  odu_feesr INT NOT NULL ,
  odu_fesesr INT NOT NULL ,
  otu_feuasr INT NOT NULL ,
  otu_biaesr INT NOT NULL ,
  odu_iaesr INT NOT NULL ,
  odu_biaesr INT NOT NULL ,
  odu_pm_bber INT NOT NULL ,
  odu_pm_esr INT NOT NULL ,
  odu_pm_sesr INT NOT NULL ,
  odu_pm_uasr INT NOT NULL ,
  odu_pm_febber INT NOT NULL ,
  odu_pm_feesr INT NOT NULL ,
  odu_pm_fesesr INT NOT NULL ,
  odu_pm_feuasr INT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_100G_otn
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE IF NOT EXISTS sch_voa_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  rxPwr1_max FLOAT NOT NULL ,
  rxPwr1_min FLOAT NOT NULL ,
  rxPwr1_avg FLOAT NOT NULL ,
  rxPwr2_max FLOAT NOT NULL ,
  rxPwr2_min FLOAT NOT NULL ,
  rxPwr2_avg FLOAT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT sch_ref_voa_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS sch_wss_wss_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  mid VARCHAR(100) NOT NULL ,
  ChannelSpacingOfWSS INT NOT NULL ,
  CaseTemperatureOfWSS FLOAT NOT NULL ,
  TempOfLcosOfWSS FLOAT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT sch_ref_wss_wss_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE IF NOT EXISTS sch_wss_ocm_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  device_temp INT NOT NULL ,
  device_status INT NOT NULL ,
  peaks INT NOT NULL ,
  error_code INT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT sch_ref_wss_ocm_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE IF NOT EXISTS sch_wss_ocm_wavelength_info (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  power FLOAT NOT NULL ,
  OSNR FLOAT NOT NULL ,
  channel_power FLOAT NOT NULL ,
  noise_power FLOAT NOT NULL ,
  frequency FLOAT NOT NULL,
  wavelength FLOAT NOT NULL,
  wavelength_no FLOAT NOT NULL,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time, wavelength_no) ,
  INDEX (ref_key) ,
  CONSTRAINT sch_ref_wss_ocm_wave_info
    FOREIGN KEY (ref_key, sch_status )
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE IF NOT EXISTS sch_ocm_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  device_temp INT NOT NULL ,
  device_status INT NOT NULL ,
  peaks INT NOT NULL ,
  error_code INT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key) ,
  CONSTRAINT sch_ref_ocm_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE IF NOT EXISTS sch_ocm_wavelength_info (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  power FLOAT NOT NULL ,
  OSNR FLOAT NOT NULL ,
  channel_power FLOAT NOT NULL ,
  noise_power FLOAT NOT NULL ,
  frequency FLOAT NOT NULL,
  wavelength FLOAT NOT NULL,
  wavelength_no FLOAT NOT NULL,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time, wavelength_no) ,
  INDEX (ref_key) ,
  CONSTRAINT sch_ref_ocm_wave_info
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    

  CREATE  TABLE IF NOT EXISTS pm_link_data (
  station VARCHAR(30) NOT NULL ,
  site VARCHAR(30) NOT NULL ,
  ip VARCHAR(20) NOT NULL,
  device TINYINT(3) NOT NULL ,
  direction TINYINT(3) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  InPower1 float NOT NULL ,
  OutPower1 float NOT NULL,
  InPower2 float NOT NULL ,
  OutPower2 float NOT NULL,  
  Gain float NOT NULL ,
  SpanLoss float NOT NULL,
  PRIMARY KEY (station,site,device,direction,rcv_date,rcv_time) );


CREATE TABLE IF NOT EXISTS tpn_cfp_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  lane_id INT NOT NULL,
  rx_pwr_max FLOAT NOT NULL ,
  rx_pwr_min FLOAT NOT NULL ,
  rx_pwr_last FLOAT NOT NULL ,
  rx_pwr_avg FLOAT NOT NULL ,
  tx_pwr_max FLOAT NOT NULL ,
  tx_pwr_min FLOAT NOT NULL ,
  tx_pwr_last FLOAT NOT NULL ,
  tx_pwr_avg FLOAT NOT NULL ,
  volt_max FLOAT NOT NULL ,
  volt_min FLOAT NOT NULL ,
  volt_last FLOAT NOT NULL ,
  volt_avg FLOAT NOT NULL ,
  curr_max FLOAT NOT NULL ,
  curr_min FLOAT NOT NULL ,
  curr_last FLOAT NOT NULL ,
  curr_avg FLOAT NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_last FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  itla_rx_temp_max FLOAT NOT NULL default -1000,
  itla_rx_temp_min FLOAT NOT NULL default -1000,
  itla_rx_temp_last FLOAT NOT NULL default -1000,
  itla_rx_temp_avg FLOAT NOT NULL default -1000,
  itla_tx_temp_max FLOAT NOT NULL default -1000,
  itla_tx_temp_min FLOAT NOT NULL default -1000,
  itla_tx_temp_last FLOAT NOT NULL default -1000,
  itla_tx_temp_avg FLOAT NOT NULL default -1000,
  PRIMARY KEY (ref_key, rcv_date, rcv_time,lane_id) ,
  INDEX (ref_key) ,
  CONSTRAINT cm_ref_tpn_cfp_opt
    FOREIGN KEY (ref_key)
    REFERENCES cm_reference_table (ref_key)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


  CREATE TABLE IF NOT EXISTS sch_tpn_cfp_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  lane_id INT NOT NULL,
  rx_pwr_max FLOAT NOT NULL ,
  rx_pwr_min FLOAT NOT NULL ,
  rx_pwr_last FLOAT NOT NULL ,
  rx_pwr_avg FLOAT NOT NULL ,
  tx_pwr_max FLOAT NOT NULL ,
  tx_pwr_min FLOAT NOT NULL ,
  tx_pwr_last FLOAT NOT NULL ,
  tx_pwr_avg FLOAT NOT NULL ,
  volt_max FLOAT NOT NULL ,
  volt_min FLOAT NOT NULL ,
  volt_last FLOAT NOT NULL ,
  volt_avg FLOAT NOT NULL ,
  curr_max FLOAT NOT NULL ,
  curr_min FLOAT NOT NULL ,
  curr_last FLOAT NOT NULL ,
  curr_avg FLOAT NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_last FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  itla_rx_temp_max FLOAT NOT NULL default -1000,
  itla_rx_temp_min FLOAT NOT NULL default -1000,
  itla_rx_temp_last FLOAT NOT NULL default -1000,
  itla_rx_temp_avg FLOAT NOT NULL default -1000,
  itla_tx_temp_max FLOAT NOT NULL default -1000,
  itla_tx_temp_min FLOAT NOT NULL default -1000,
  itla_tx_temp_last FLOAT NOT NULL default -1000,
  itla_tx_temp_avg FLOAT NOT NULL default -1000,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time,lane_id) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_tpn_cfp_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
 CREATE TABLE IF NOT EXISTS sch_mcs_optical_parameters (
  ref_key VARCHAR(30) NOT NULL ,
  sch_status TINYINT(3) NOT NULL,
  rcv_date DATE NOT NULL ,
  rcv_time TIME NOT NULL ,
  temp_max FLOAT NOT NULL ,
  temp_min FLOAT NOT NULL ,
  temp_avg FLOAT NOT NULL ,
  rx_pwr1_max FLOAT NOT NULL ,
  rx_pwr1_min FLOAT NOT NULL ,
  rx_pwr1_avg FLOAT NOT NULL ,
  
  rx_pwr2_max FLOAT NOT NULL ,
  rx_pwr2_min FLOAT NOT NULL ,
  rx_pwr2_avg FLOAT NOT NULL ,
  
  rx_pwr3_max FLOAT NOT NULL ,
  rx_pwr3_min FLOAT NOT NULL ,
  rx_pwr3_avg FLOAT NOT NULL ,
  
  rx_pwr4_max FLOAT NOT NULL ,
  rx_pwr4_min FLOAT NOT NULL ,
  rx_pwr4_avg FLOAT NOT NULL ,
  
  rx_pwr5_max FLOAT NOT NULL ,
  rx_pwr5_min FLOAT NOT NULL ,
  rx_pwr5_avg FLOAT NOT NULL ,
  
  rx_pwr6_max FLOAT NOT NULL ,
  rx_pwr6_min FLOAT NOT NULL ,
  rx_pwr6_avg FLOAT NOT NULL ,
  
  rx_pwr7_max FLOAT NOT NULL ,
  rx_pwr7_min FLOAT NOT NULL ,
  rx_pwr7_avg FLOAT NOT NULL ,
  
  rx_pwr8_max FLOAT NOT NULL ,
  rx_pwr8_min FLOAT NOT NULL ,
  rx_pwr8_avg FLOAT NOT NULL ,
  
  rx_pwr9_max FLOAT NOT NULL ,
  rx_pwr9_min FLOAT NOT NULL ,
  rx_pwr9_avg FLOAT NOT NULL ,
  
  rx_pwr10_max FLOAT NOT NULL ,
  rx_pwr10_min FLOAT NOT NULL ,
  rx_pwr10_avg FLOAT NOT NULL ,
  
  rx_pwr11_max FLOAT NOT NULL ,
  rx_pwr11_min FLOAT NOT NULL ,
  rx_pwr11_avg FLOAT NOT NULL ,
  
  rx_pwr12_max FLOAT NOT NULL ,
  rx_pwr12_min FLOAT NOT NULL ,
  rx_pwr12_avg FLOAT NOT NULL ,
  
  rx_pwr13_max FLOAT NOT NULL ,
  rx_pwr13_min FLOAT NOT NULL ,
  rx_pwr13_avg FLOAT NOT NULL ,
  
  rx_pwr14_max FLOAT NOT NULL ,
  rx_pwr14_min FLOAT NOT NULL ,
  rx_pwr14_avg FLOAT NOT NULL ,
  
  rx_pwr15_max FLOAT NOT NULL ,
  rx_pwr15_min FLOAT NOT NULL ,
  rx_pwr15_avg FLOAT NOT NULL ,
  
  rx_pwr16_max FLOAT NOT NULL ,
  rx_pwr16_min FLOAT NOT NULL ,
  rx_pwr16_avg FLOAT NOT NULL ,
  PRIMARY KEY (ref_key, sch_status, rcv_date, rcv_time) ,
  INDEX (ref_key, sch_status) ,
  CONSTRAINT sch_ref_mcs_opt
    FOREIGN KEY (ref_key, sch_status)
    REFERENCES sch_reference_table (ref_key, sch_status)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
