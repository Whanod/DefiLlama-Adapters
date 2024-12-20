const { Program } = require("@coral-xyz/anchor");
const { getProvider, sumTokens2, } = require("../helper/solana");

const idl = require('./idl');

async function tvl() {
    const provider = getProvider("eclipse")
    const program = new Program(idl, provider)
    const banks = await program.account.bank.all()
  
    return sumTokens2({ tokenAccounts: banks.map(i => i.account.liquidityVault.toString()) ,chain:"eclipse"} );

 
}

module.exports = {
  timetravel: false,
  solana: { tvl, },
}
