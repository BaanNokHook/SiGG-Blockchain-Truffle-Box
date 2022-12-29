const Token = artifacts.require("LRC721");

contract('LRC721', accounts => {
    let token;
    
    beforeEach(async () => {
        token = await Token.new(
            process.env.LRC721_TOKEN_NAME,
            process.env.LRC721_TOKEN_SYMBOL,
            process.env.LRC721_TOKEN_URI,
            { from: accounts[0] }
        );
    });

    it("get token symbol", async () => {
        const result = await token.symbol.call();
        assert.equal(result, process.env.LRC721_TOKEN_SYMBOL, 'token symbol is wrong');
    });

    it("get token name", async () => {
        const result = await token.name.call();
        assert.equal(result, process.env.LRC721_TOKEN_NAME, 'token name is wrong');
    });
});