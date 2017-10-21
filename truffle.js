module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    staging: {
      host: "localhost",
      port: 8546,
      network_id: 1337
    },
    ropsten: {
      host: "127.0.0.1",
      port: 8547,
      network_id: 3
    },
    live: {
      host: "127.0.0.1",
      port: 30303,
      network_id: 1
    }
  }
};