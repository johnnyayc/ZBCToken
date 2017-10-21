var token = artifacts.require("./ZBCToken.sol");

module.exports = function(deployer) {

  deployer.deploy(token);
};

