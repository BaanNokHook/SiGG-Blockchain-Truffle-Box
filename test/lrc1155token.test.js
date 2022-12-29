const Token = artifacts.require("LRC1155");

contract('LRC1155', accounts => {
    let token;
    
    beforeEach(async () => {
        token = await Token.new(
            process.env.LRC1155_TOKEN_URI,
            { from: accounts[0] }
        );
    });

    // TODO adding test
    it("get token uri", async () => {
        const result = await token.uri.call(0);
        assert.equal(result, process.env.LRC1155_TOKEN_URI, 'token symbol is wrong');
    });
});