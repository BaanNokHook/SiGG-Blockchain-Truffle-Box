const LRC1155 = artifacts.require("LRC1155");

module.exports = function(deployer) {
  deployer.deploy(
        LRC1155,
        process.env.LRC1155_TOKEN_URI,
    );
};
