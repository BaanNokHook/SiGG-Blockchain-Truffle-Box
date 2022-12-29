const LRC20 = artifacts.require("LRC20");

module.exports = function(deployer) {
  deployer.deploy(
        LRC20,
        process.env.LRC20_TOKEN_NAME,
        process.env.LRC20_TOKEN_SYMBOL,
        process.env.LRC20_TOKEN_TOTALSUPPLY,
        process.env.LRC20_TOKEN_DECIMAL
    );
};
