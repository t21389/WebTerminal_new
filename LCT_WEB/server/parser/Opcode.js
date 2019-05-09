class Opcode {

  constructor() {
    
    const OCM_INV_NODEINFO_READ = 1011;
    const CLINT_INFO=1012;
    const CURRENT_CARD_STATUS=1013;
    const DIR_STRING=1014;
    const EXPECTED_CONFIG=1015;
    const WAVELENGTH=1016;

    this.OCM_INV_NODEINFO_READ = OCM_INV_NODEINFO_READ;
    this.CLINT_INFO=CLINT_INFO;
    this.CURRENT_CARD_STATUS=CURRENT_CARD_STATUS;
    this.DIR_STRING=DIR_STRING;
    this.EXPECTED_CONFIG=EXPECTED_CONFIG;
    this.WAVELENGTH=WAVELENGTH;
  }

}

module.exports = {
  Opcode
};