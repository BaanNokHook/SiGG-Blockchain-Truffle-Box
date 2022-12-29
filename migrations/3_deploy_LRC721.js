const LRC721 = artifacts.require("LRC721");

module.exports = function(deployer) {
  deployer.deploy(
        LRC721,
        process.env.LRC721_TOKEN_NAME,
        process.env.LRC721_TOKEN_SYMBOL,
        process.env.LRC721_TOKEN_URI
    );
};
