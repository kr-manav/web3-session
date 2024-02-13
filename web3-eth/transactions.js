const { Web3 } = require('web3')
require("dotenv").config()

const PVT_KEY = process.env.PVT_KEY
const address = "0xfbAC7b9ff473B1E4e6e31Ab70fA20aB4d30D05e5"

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC))

async function main() {

    const gasPrice = await web3.eth.getGasPrice();
    console.log("🚀 ~ file: transactions.js:11 ~ main ~ gasPrice:", gasPrice)

    console.log(web3.utils.fromWei("100000000000000", "ether"))

    const tx = {
        from: "0xfbAC7b9ff473B1E4e6e31Ab70fA20aB4d30D05e5",
        to: "0x177aE65cE40D15DDE6F2D8632BFE71FA13356AE3",
        value: '100000000000000',
        type: 2,
        maxFeePerGas: web3.utils.toHex(100000000000n),
        maxPriorityFeePerGas: web3.utils.toHex(100000000000n)
    }
    console.log("🚀 ~ file: transactions.js:20 ~ main ~ tx:", tx)

    // Signing tx
    const signedTx = await web3.eth.accounts.signTransaction(tx, PVT_KEY)
    console.log("🚀 ~ file: accounts.js:28 ~ main ~ signedTx:", signedTx)

    // Sending tx
    const sendTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('transactionHash', async(hash) => {
            console.log("Hash generated.....")
            console.log(hash)
        })
        .on('confirmation', async(data) => {
            console.log("Tx confirmed.....")
            console.log(data)
        })
        // .on('confirmation', console.log)
    console.log("🚀 ~ file: transactions.js:26 ~ main ~ sendTx:", sendTx)

}

main().catch()


// More detailed docs at :- https://docs.web3js.org/libdocs/Accounts