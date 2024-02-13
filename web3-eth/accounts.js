const { Web3 } = require('web3')
require("dotenv").config()

const PVT_KEY = process.env.PVT_KEY
const address = "0xfbAC7b9ff473B1E4e6e31Ab70fA20aB4d30D05e5"

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC))

async function main() {
    const account = web3.eth.accounts.create();
    console.log("🚀 ~ file: accounts.js:6 ~ account:", account)

    const signedMessage = account.sign("Hello world")
    console.log("🚀 ~ file: accounts.js:9 ~ signedMessage:", signedMessage)

    const result = web3.eth.accounts.hashMessage("Test Message");
    console.log("🚀 ~ file: accounts.js:9 ~ result:", result)

    const privateKeyToAccount = web3.eth.accounts.privateKeyToAccount(PVT_KEY)
    console.log("🚀 ~ file: accounts.js:17 ~ main ~ privateKeyToAccount:", privateKeyToAccount)

    const tx = {
        from: "0x177aE65cE40D15DDE6F2D8632BFE71FA13356AE3",
        to: "0x177aE65cE40D15DDE6F2D8632BFE71FA13356AE3",
        value: "0x0",
        data: "0x",
        gasPrice: "0x0"
    }

    const signedTx = await web3.eth.accounts.signTransaction(tx, PVT_KEY)
    console.log("🚀 ~ file: accounts.js:28 ~ main ~ signedTx:", signedTx)

    const addressThatSignedTx = web3.eth.accounts.recoverTransaction(signedTx.rawTransaction)
    console.log("🚀 ~ file: accounts.js:32 ~ main ~ addressThatSignedTx:", addressThatSignedTx)


    // Adding wallet in web3

    const wallets = web3.eth.accounts.wallet.add(PVT_KEY)
    console.log("🚀 ~ file: accounts.js:37 ~ main ~ wallets:", wallets)
}

main().catch()


// More detailed docs at :- https://docs.web3js.org/libdocs/Accounts