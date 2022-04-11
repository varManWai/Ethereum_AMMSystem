require("@babel/register");
require("@babel/polyfill");

module.exports = {
  networks: {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*"
      }
    },
    compilers: {
      solc: {
        version: "0.8.12",
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
