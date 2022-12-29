require('dotenv').config();

module.exports = {
  networks: {
      development: {
          host: "127.0.0.1",
          port: 9545,
          network_id: "*",
      },
      janus: {
          host: "127.0.0.1",
          port: 23889,
          network_id: "*",
          gasPrice: "0x64", // 100 gwei
          gas: "6721975",
          confirmations: 1,
          disableConfirmationListener: true
      }
  },
  mocha: {
    before_timeout: 300000
  },
  compilers: {
    solc: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
  }
};