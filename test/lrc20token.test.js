const Token = artifacts.require("LRC20");

contract('LRC20', accounts => {
    let token;
    
    beforeEach(async () => {
        token = await Token.new(
            process.env.TOKEN_NAME,
            process.env.TOKEN_SYMBOL,
            process.env.TOKEN_TOTALSUPPLY,
            process.env.TOKEN_DECIMAL,
            { from: accounts[0] }
        );
    });

    it("checks total supply", async () => {
        const totalSupply = await token.totalSupply.call();
        assert.equal(totalSupply, process.env.TOKEN_TOTALSUPPLY, 'total supply is wrong');
    });

    it("should return the balance of token owner", async () => {
        const balance = await token.balanceOf.call(accounts[0]);
        assert.equal(balance.toString(), process.env.TOKEN_TOTALSUPPLY*Math.pow(10,process.env.TOKEN_DECIMAL), 'balance is wrong');
    });

    it("should transfer token", async () => {
        const amount = "1000000000000000000";
        await token.transfer(accounts[1], amount, { from: accounts[0] });
        balance1 = await token.balanceOf.call(accounts[1]);
        assert.equal(balance1, amount, 'accounts[1] balance is wrong');
    });

    it("should give accounts[1] authority to spend accounts[0]'s token", async () => {
        const amountAllow = "10000000000000000000";
        const amountTransfer = "1000000000000000000";

        await token.approve(accounts[1], amountAllow, { from: accounts[0] });
        const allowance = await token.allowance.call(accounts[0], accounts[1]);
        assert.equal(allowance, amountAllow, 'allowance is wrong');
        
        await token.transferFrom(accounts[0], accounts[2], amountTransfer, { from: accounts[1] });
        const balance1 = await token.balanceOf.call(accounts[1]);
        assert.equal(balance1, 0, 'accounts[1] balance is wrong');
        const balance2 = await token.balanceOf.call(accounts[2]);
        assert.equal(balance2, amountTransfer, 'accounts[2] balance is wrong');
    })
});