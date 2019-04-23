var sql = require("../DBConnection");

async function insert_cm_reference_table(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO cm_reference_table(rack, subrack, card_id, card_type, interface_type, interface_id, parameter_type, ref_key) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_tpn_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_optical_parameters( ref_key, rcv_date, rcv_time, rx_pwr_max, rx_pwr_min, rx_pwr_last, rx_pwr_avg, x_pwr_max, tx_pwr_min, tx_pwr_last, tx_pwr_avg, olt_max, volt_min, volt_last, volt_avg, urr_max, curr_min, curr_last, curr_avg, emp_max, temp_min, temp_last, temp_avg, tla_rx_temp_max, itla_rx_temp_min, itla_rx_temp_last, itla_rx_temp_avg, tla_tx_temp_max, itla_tx_temp_min, itla_tx_temp_last, itla_tx_temp_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_mcs_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO mcs_optical_parameters(ref_key, rcv_date, rcv_time, temp_max, temp_min, temp_avg, x_pwr1_max, rx_pwr1_min, rx_pwr1_avg, x_pwr2_max, rx_pwr2_min, rx_pwr2_avg, x_pwr3_max, rx_pwr3_min, rx_pwr3_avg, x_pwr4_max, rx_pwr4_min, rx_pwr4_avg, x_pwr5_max, rx_pwr5_min, rx_pwr5_avg, x_pwr6_max, rx_pwr6_min, rx_pwr6_avg, x_pwr7_max, rx_pwr7_min, rx_pwr7_avg, x_pwr8_max, rx_pwr8_min, rx_pwr8_avg, x_pwr9_max, rx_pwr9_min, rx_pwr9_avg, x_pwr10_max, rx_pwr10_min, rx_pwr10_avg, x_pwr11_max, rx_pwr11_min, rx_pwr11_avg, x_pwr12_max, rx_pwr12_min, rx_pwr12_avg, x_pwr13_max, rx_pwr13_min, rx_pwr13_avg, x_pwr14_max, rx_pwr14_min, rx_pwr14_avg, x_pwr15_max, rx_pwr15_min, rx_pwr15_avg, x_pwr16_max, rx_pwr16_min, rx_pwr16_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_voa_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO voa_optical_parameters(ref_key, rcv_date, rcv_time, rxPwr1_max, rxPwr1_min, rxPwr1_avg, xPwr2_max, rxPwr2_min, rxPwr2_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_wss_wss_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO wss_wss_optical_parameters(ref_key, rcv_date, rcv_time, mid, channelSpacingOfWss, CaseTemperatureOfWSS, TempOfLcosOfWSS) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_wss_ocm_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO wss_ocm_optical_parameters(ref_key, rcv_date, rcv_time, device_temp, device_status, peaks, error_code) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_wss_ocm_wavelength_info(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO wss_ocm_wavelength_info(ref_key, rcv_date, rcv_time, power, OSNR, channel_power, noise_power, frequency, wavelength, wavelength_no) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_ocm_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO ocm_optical_parameters(ref_key, rcv_date, rcv_time, device_temp, device_status, peaks, error_code) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_ocm_wavelength_info(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO ocm_wavelength_info(ref_key, rcv_date, rcv_time, power, OSNR, channel_power, noise_power, frequency, wavelength, wavelength_no) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_fc_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO fc_optical_parameters(ref_key, rcv_date, rcv_time, rx_pwr_max, rx_pwr_min, rx_pwr_last, rx_pwr_avg, x_pwr_max, tx_pwr_min, tx_pwr_last, tx_pwr_avg, olt_max, volt_min, volt_last, volt_avg, urr_max, curr_min, curr_last, curr_avg, emp_max, temp_min, temp_last, temp_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_fc_fibre_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO fc_fibre_parameters(ref_key, rcv_date, rcv_time, rx_high_err_cnt, rx_blk_type_err_cnt, rx_invld_blk_cnt, rx_data_byte_cnt, rx_os_cnt, rx_valid_frm_cnt, rx_invalid_frm_cnt, rx_valid_frm_byte_cnt, rx_gfp_frm_cnt, rx_gfp_err_frm_cnt, tx_byte_cnt, tx_os_cnt, tx_err_ctrl_blk_cnt, tx_lf_os_cnt, tx_valid_frm_cnt, tx_invalid_frm_cnt, tx_valid_frm_byte_cnt, tx_crc_err, tx_invalid_blk_hdr_cnt, rx_total_pckt_count, rx_crc_err, tx_total_pckt_count) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_ber_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO ber_parameters(ref_key, rcv_date, rcv_time, ber_time_elapsed, ber, window_size) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_amp_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO amp_optical_parameters(ref_key, rcv_date, rcv_time, board_temp_max, board_temp_min, board_temp_avg, ump_current_max, pump_current_min, pump_current_avg, ump_temp_max, pump_temp_min, pump_temp_avg, n_pwr_max, in_pwr_min, in_pwr_avg, ut_pwr_max, out_pwr_min, out_pwr_avg, ignal_gain_max, signal_gain_min, signal_gain_avg, otal_in_power_max, total_in_power_min, total_in_power_avg, otal_out_power_max, total_out_power_min, total_out_power_avg, pan_loss_max, span_loss_min, span_loss_avg, ignal_out_power_max, signal_out_power_min, signal_out_power_avg, aman_input_power_max, raman_input_power_min, raman_input_power_avg, umps_power_into_line_max, pumps_power_into_line_min, pumps_power_into_line_avg, dfa_input_power_max, edfa_input_power_min, edfa_input_power_avg, dfa_output_power_max, edfa_output_power_min, edfa_output_power_avg, otal_signal_gain_max, total_signal_gain_min, total_signal_gain_avg, et_raman_gain_max, net_raman_gain_min, net_raman_gain_avg, sc_add_power_max, osc_add_power_min, osc_add_power_avg, ypass_power_max, bypass_power_min, bypass_power_avg, sc_corrected_power_calculation_max, osc_corrected_power_calculation_min, osc_corrected_power_calculation_avg, band_power_at_raman_output_max, cband_power_at_raman_output_min, cband_power_at_raman_output_avg, ump_1455nm_power_max, pump_1455nm_power_min, pump_1455nm_power_avg, ump_1425nm_power_max, pump_1425nm_power_min, pump_1425nm_power_avg, dfa_satge_signal_gain_max, edfa_satge_signal_gain_min, edfa_satge_signal_gain_avg, n_off_raman_gain_max, on_off_raman_gain_min, on_off_raman_gain_avg, sc_power_max, osc_power_min, osc_power_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_100G_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO 100G_optical_parameters(ref_key, rcv_date, rcv_time, rx_pwr_max, rx_pwr_min, rx_pwr_last, rx_pwr_avg, x_pwr_max, tx_pwr_min, tx_pwr_last, tx_pwr_avg, olt_max, volt_min, volt_last, volt_avg, urr_max, curr_min, curr_last, curr_avg, emp_max, temp_min, temp_last, temp_avg, tla_rx_temp_max, itla_rx_temp_min, itla_rx_temp_last, itla_rx_temp_avg, tla_tx_temp_max, itla_tx_temp_min, itla_tx_temp_last, itla_tx_temp_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_tpn_ethernet_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_ethernet_parameters(ref_key, rcv_date, rcv_time, a_frames_rx_ok, a_frame_check_sequence_errors, a_alignment_errors, a_pause_mac_ctrl_frames_rx, a_frame_too_long_errors, if_out_octs, if_in_octs, if_in_ucast_pkts, if_in_multicast_pkts, if_in_broadcast_pkts, ether_stats_drop_events, ether_stats_octs, ether_stats_pkts, ether_stats_undersize_pkts, ether_stats_pkts_64_octs, ether_stats_pkts_65_to_127_octs, ether_stats_pkts_128_to_255_octs, ether_stats_pkts_256_to_511_octs, ether_stats_pkts_512_to_1023_octs, ether_stats_pkts_1024_to_1518_octs, ether_stats_pkts_1519_to_max_octs, ether_stats_oversize_pkts, ether_stats_jabber, ether_stats_fragments, if_in_errors, a_mac_control_frames_rx) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_100G_fec_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO 100G_fec_parameters(ref_key, rcv_date, rcv_time, fec_total_corr_errs, fec_otuk_swz_lpa_stats_fp, fec_otuk_swz_lpa_stats_uncorr_cwds, fec_otuk_swz_lpa_stats_corr_1s, fec_otuk_swz_lpa_stats_corr_0s, fec_otuk_swz_llsa_stats_uncorr_cwds, fec_otuk_swz_llsa_stats_lane_corr_1s, fec_otuk_swz_llsa_stats_lane_corr_0s) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_fec_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO fec_parameters(ref_key, rcv_date, rcv_time, fec_total_corr_errs, fec_otuk_gfec_lpa_stats_fp, fec_otuk_gfec_lpa_stats_uncorr_cwds, fec_otuk_gfec_lpa_stats_corr_1s, fec_otuk_gfec_lpa_stats_corr_0s) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sdh_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sdh_parameters(ref_key, rcv_date, rcv_time, rs_neesr, rs_nesesr, rs_nebber, rs_neuasr, rs_nesepi, ms_neesr, ms_nesesr, ms_nebber, ms_neuasr, ms_nesepi, ms_feesr, ms_fesesr, ms_febber, ms_feuasr, ms_fesepi, path_neesr, path_nesesr, path_nebber, path_neuasr, path_nesepi, b1_error_count, b2_error_count) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_otn_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO otn_parameters(ref_key, rcv_date, rcv_time, otu_bber, otu_esr, otu_sesr, otu_uasr, odu_febber, odu_feesr, odu_fesesr, otu_feuasr, otu_biaesr, odu_iaesr, odu_biaesr, odu_pm_bber, odu_pm_esr, odu_pm_sesr, odu_pm_uasr, odu_pm_febber, odu_pm_feesr, odu_pm_fesesr, odu_pm_feuasr) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_100G_otn_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO 100G_otn_parameters(ref_key, rcv_date, rcv_time, otu_bber, otu_esr, otu_sesr, otu_uasr, odu_febber, odu_feesr, odu_fesesr, otu_feuasr, otu_biaesr, odu_iaesr, odu_biaesr, odu_pm_bber, odu_pm_esr, odu_pm_sesr, odu_pm_uasr, odu_pm_febber, odu_pm_feesr, odu_pm_fesesr, odu_pm_feuasr) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_reference_table(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_reference_table(rack, subrack, card_id, card_type, interface_type, interface_id, parameter_type, sch_id, sch_type, sch_status, frm_date, to_date, frm_time, to_time, ref_key) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_tpn_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_tpn_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, rx_pwr_max, rx_pwr_min, rx_pwr_last, rx_pwr_avg, x_pwr_max, tx_pwr_min, tx_pwr_last, tx_pwr_avg, olt_max, volt_min, volt_last, volt_avg, urr_max, curr_min, curr_last, curr_avg, emp_max, temp_min, temp_last, temp_avg, tla_rx_temp_max, itla_rx_temp_min, itla_rx_temp_last, itla_rx_temp_avg, tla_tx_temp_max, itla_tx_temp_min, itla_tx_temp_last, itla_tx_temp_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_fc_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_fc_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, rx_pwr_max, rx_pwr_min, rx_pwr_last, rx_pwr_avg, x_pwr_max, tx_pwr_min, tx_pwr_last, tx_pwr_avg, olt_max, volt_min, volt_last, volt_avg, urr_max, curr_min, curr_last, curr_avg, emp_max, temp_min, temp_last, temp_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_fc_fibre_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_fc_fibre_parameters(ref_key, sch_status, rcv_date, rcv_time, rx_high_err_cnt, rx_blk_type_err_cnt, rx_invld_blk_cnt, rx_data_byte_cnt, rx_os_cnt, rx_valid_frm_cnt, rx_invalid_frm_cnt, rx_valid_frm_byte_cnt, rx_gfp_frm_cnt, rx_gfp_err_frm_cnt, tx_byte_cnt, tx_os_cnt, tx_err_ctrl_blk_cnt, tx_lf_os_cnt, tx_valid_frm_cnt, tx_invalid_frm_cnt, tx_valid_frm_byte_cnt, tx_crc_err, tx_invalid_blk_hdr_cnt, rx_total_pckt_count, rx_crc_err, tx_total_pckt_count) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_ber_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_ber_parameters(ref_key, sch_status, rcv_date, rcv_time, ber_time_elapsed, ber, window_size) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_amp_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_amp_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, board_temp_max, board_temp_min, board_temp_avg, ump_current_max, pump_current_min, pump_current_avg, ump_temp_max, pump_temp_min, pump_temp_avg, n_pwr_max, in_pwr_min, in_pwr_avg, ut_pwr_max, out_pwr_min, out_pwr_avg, ignal_gain_max, signal_gain_min, signal_gain_avg, otal_in_power_max, total_in_power_min, total_in_power_avg, otal_out_power_max, total_out_power_min, total_out_power_avg, pan_loss_max, span_loss_min, span_loss_avg, ignal_out_power_max, signal_out_power_min, signal_out_power_avg, aman_input_power_max, raman_input_power_min, raman_input_power_avg, umps_power_into_line_max, pumps_power_into_line_min, pumps_power_into_line_avg, dfa_input_power_max, edfa_input_power_min, edfa_input_power_avg, dfa_output_power_max, edfa_output_power_min, edfa_output_power_avg, otal_signal_gain_max, total_signal_gain_min, total_signal_gain_avg, et_raman_gain_max, net_raman_gain_min, net_raman_gain_avg, sc_add_power_max, osc_add_power_min, osc_add_power_avg, ypass_power_max, bypass_power_min, bypass_power_avg, sc_corrected_power_calculation_max, osc_corrected_power_calculation_min, osc_corrected_power_calculation_avg, band_power_at_raman_output_max, cband_power_at_raman_output_min, cband_power_at_raman_output_avg, ump_1455nm_power_max, pump_1455nm_power_min, pump_1455nm_power_avg, ump_1425nm_power_max, pump_1425nm_power_min, pump_1425nm_power_avg, dfa_satge_signal_gain_max, edfa_satge_signal_gain_min, edfa_satge_signal_gain_avg, n_off_raman_gain_max, on_off_raman_gain_min, on_off_raman_gain_avg, sc_power_max, osc_power_min, osc_power_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_100G_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_100G_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, rx_pwr_max, rx_pwr_min, rx_pwr_last, rx_pwr_avg, x_pwr_max, tx_pwr_min, tx_pwr_last, tx_pwr_avg, olt_max, volt_min, volt_last, volt_avg, urr_max, curr_min, curr_last, curr_avg, emp_max, temp_min, temp_last, temp_avg, tla_rx_temp_max, itla_rx_temp_min, itla_rx_temp_last, itla_rx_temp_avg, tla_tx_temp_max, itla_tx_temp_min, itla_tx_temp_last, itla_tx_temp_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_tpn_ethernet_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_tpn_ethernet_parameters(ref_key, sch_status, rcv_date, rcv_time, a_frames_rx_ok, a_frame_check_sequence_errors, a_alignment_errors, a_pause_mac_ctrl_frames_rx, a_frame_too_long_errors, if_out_octs, if_in_octs, if_in_ucast_pkts, if_in_multicast_pkts, if_in_broadcast_pkts, ether_stats_drop_events, ether_stats_octs, ether_stats_pkts, ether_stats_undersize_pkts, ether_stats_pkts_64_octs, ether_stats_pkts_65_to_127_octs, ether_stats_pkts_128_to_255_octs, ether_stats_pkts_256_to_511_octs, ether_stats_pkts_512_to_1023_octs, ether_stats_pkts_1024_to_1518_octs, ether_stats_pkts_1519_to_max_octs, ether_stats_oversize_pkts, ether_stats_jabber, ether_stats_fragments, if_in_errors, a_mac_control_frames_rx) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_100G_fec_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_100G_fec_parameters(ref_key, sch_status, rcv_date, rcv_time, fec_total_corr_errs, fec_otuk_swz_lpa_stats_fp, fec_otuk_swz_lpa_stats_uncorr_cwds, fec_otuk_swz_lpa_stats_corr_1s, fec_otuk_swz_lpa_stats_corr_0s, fec_otuk_swz_llsa_stats_uncorr_cwds, fec_otuk_swz_llsa_stats_lane_corr_1s, fec_otuk_swz_llsa_stats_lane_corr_0s) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_fec_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_fec_parameters(ref_key, sch_status, rcv_date, rcv_time, fec_total_corr_errs, fec_otuk_gfec_lpa_stats_fp, fec_otuk_gfec_lpa_stats_uncorr_cwds, fec_otuk_gfec_lpa_stats_corr_1s, fec_otuk_gfec_lpa_stats_corr_0s) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_sdh_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_sdh_parameters(ref_key, sch_status, rcv_date, rcv_time, rs_neesr, rs_nesesr, rs_nebber, rs_neuasr, rs_nesepi, ms_neesr, ms_nesesr, ms_nebber, ms_neuasr, ms_nesepi, ms_feesr, ms_fesesr, ms_febber, ms_feuasr, ms_fesepi, path_neesr, path_nesesr, path_nebber, path_neuasr, path_nesepi, b1_error_count, b2_error_count) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_otn_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_otn_parameters(ref_key, sch_status, rcv_date, rcv_time, otu_bber, otu_esr, otu_sesr, otu_uasr, odu_febber, odu_feesr, odu_fesesr, otu_feuasr, otu_biaesr, odu_iaesr, odu_biaesr, odu_pm_bber, odu_pm_esr, odu_pm_sesr, odu_pm_uasr, odu_pm_febber, odu_pm_feesr, odu_pm_fesesr, odu_pm_feuasr) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_100G_otn_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_100G_otn_parameters( ref_key, sch_status, rcv_date, rcv_time, otu_bber, otu_esr, otu_sesr, otu_uasr, odu_febber, odu_feesr, odu_fesesr, otu_feuasr, otu_biaesr, odu_iaesr, odu_biaesr, odu_pm_bber, odu_pm_esr, odu_pm_sesr, odu_pm_uasr, odu_pm_febber, odu_pm_feesr, odu_pm_fesesr, odu_pm_feuasr) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_voa_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_voa_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, rxPwr1_max, rxPwr1_min, rxPwr1_avg, xPwr2_max, rxPwr2_min, rxPwr2_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_wss_wss_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_wss_wss_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, mid, ChannelSpacingOfWSS, CaseTemperatureOfWSS, TempOfLcosOfWSS) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


async function insert_sch_wss_ocm_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_wss_ocm_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, device_temp, device_status, peaks, error_code) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_wss_ocm_wavelength_info(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_wss_ocm_wavelength_info(ref_key, sch_status, rcv_date, rcv_time, power, OSNR, channel_power, noise_power, frequency, wavelength, wavelength_no) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_ocm_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_ocm_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, device_temp, device_status, peaks, error_code) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_ocm_wavelength_info(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_ocm_wavelength_info( ref_key, sch_status, rcv_date, rcv_time, power, OSNR, channel_power, noise_power, frequency, wavelength, wavelength_no) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_pm_link_data(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO pm_link_data (station, site, ip, device, direction, rcv_date, rcv_time, InPower1, OutPower1, InPower2, OutPower2, Gain, SpanLoss) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_tpn_cfp_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_cfp_optical_parameters(ref_key, rcv_date, rcv_time, lane_id, rx_pwr_max, rx_pwr_min, rx_pwr_last, rx_pwr_avg, x_pwr_max, tx_pwr_min, tx_pwr_last, tx_pwr_avg, olt_max, volt_min, volt_last, volt_avg, urr_max, curr_min, curr_last, curr_avg, emp_max, temp_min, temp_last, temp_avg, tla_rx_temp_max, itla_rx_temp_min, itla_rx_temp_last, itla_rx_temp_avg, tla_tx_temp_max, itla_tx_temp_min, itla_tx_temp_last, itla_tx_temp_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_tpn_cfp_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_tpn_cfp_optical_parameters( ref_key, sch_status, rcv_date, rcv_time, lane_id, rx_pwr_max, rx_pwr_min, rx_pwr_last, rx_pwr_avg, x_pwr_max, tx_pwr_min, tx_pwr_last, tx_pwr_avg, olt_max, volt_min, volt_last, volt_avg, urr_max, curr_min, curr_last, curr_avg, emp_max, temp_min, temp_last, temp_avg, tla_rx_temp_max, itla_rx_temp_min, itla_rx_temp_last, itla_rx_temp_avg, tla_tx_temp_max, itla_tx_temp_min, itla_tx_temp_last, itla_tx_temp_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}

async function insert_sch_mcs_optical_parameters(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO sch_mcs_optical_parameters(ref_key, sch_status, rcv_date, rcv_time, temp_max, temp_min, temp_avg, x_pwr1_max, rx_pwr1_min, rx_pwr1_avg, rx_pwr2_max, rx_pwr2_min, rx_pwr2_avg, rx_pwr3_max, rx_pwr3_min, rx_pwr3_avg, rx_pwr4_max, rx_pwr4_min, rx_pwr4_avg, rx_pwr5_max, rx_pwr5_min, rx_pwr5_avg, rx_pwr6_max, rx_pwr6_min, rx_pwr6_avg, rx_pwr7_max, rx_pwr7_min, rx_pwr7_avg, rx_pwr8_max, rx_pwr8_min, rx_pwr8_avg, rx_pwr9_max, rx_pwr9_min, rx_pwr9_avg, rx_pwr10_max, rx_pwr10_min, rx_pwr10_avg, rx_pwr11_max, rx_pwr11_min, rx_pwr11_avg, rx_pwr12_max, rx_pwr12_min, rx_pwr12_avg, rx_pwr13_max, rx_pwr13_min, rx_pwr13_avg, rx_pwr14_max, rx_pwr14_min, rx_pwr14_avg, rx_pwr15_max, rx_pwr15_min, rx_pwr15_avg, rx_pwr16_max, rx_pwr16_min, rx_pwr16_avg) VALUES ?`;
        sql.con.query(insertquery, [values], async function (err, results) {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            else {
                console.log("result", results.affectedRows);
                resolve(results.affectedRows);
            }
        });
    })
}


module.exports = {
    insert_cm_reference_table,
    insert_tpn_optical_parameters,
    insert_mcs_optical_parameters,
    insert_voa_optical_parameters,
    insert_wss_wss_optical_parameters,
    insert_wss_ocm_optical_parameters,
    insert_wss_ocm_wavelength_info,
    insert_ocm_optical_parameters,
    insert_ocm_wavelength_info,
    insert_fc_optical_parameters,
    insert_fc_fibre_parameters,
    insert_ber_parameters,
    insert_amp_optical_parameters,
    insert_100G_optical_parameters,
    insert_tpn_ethernet_parameters,
    insert_100G_fec_parameters,
    insert_fec_parameters,
    insert_sdh_parameters,
    insert_otn_parameters,
    insert_100G_otn_parameters,
    insert_sch_reference_table,
    insert_sch_tpn_optical_parameters,
    insert_sch_fc_optical_parameters,
    insert_sch_fc_fibre_parameters,
    insert_sch_ber_parameters,
    insert_sch_amp_optical_parameters,
    insert_sch_100G_otn_parameters,
    insert_sch_100G_optical_parameters,
    insert_sch_tpn_ethernet_parameters,
    insert_sch_100G_fec_parameters,
    insert_sch_fec_parameters,
    insert_sch_sdh_parameters,
    insert_sch_otn_parameters,
    insert_sch_voa_optical_parameters,
    insert_sch_wss_wss_optical_parameters,
    insert_sch_wss_ocm_optical_parameters,
    insert_sch_wss_ocm_wavelength_info,
    insert_sch_ocm_optical_parameters,
    insert_sch_ocm_wavelength_info,
    insert_pm_link_data,
    insert_tpn_cfp_optical_parameters,
    insert_sch_tpn_cfp_optical_parameters,
    insert_sch_mcs_optical_parameters
}