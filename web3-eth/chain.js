const { Web3 } = require('web3')
require("dotenv").config()

const PVT_KEY = process.env.PVT_KEY

const address = "0xfbAC7b9ff473B1E4e6e31Ab70fA20aB4d30D05e5"

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC))

async function main() {

    const gasPrice = await web3.eth.getGasPrice();
    console.log("🚀 ~ file: chain.js:11 ~ main ~ gasPrice:", gasPrice)

    const balance = await web3.eth.getBalance(address)
    console.log("balance:", balance)
    console.log("Balance in ETH: ", web3.utils.fromWei(balance, 'ether'))

    const block = await web3.eth.getBlock(5277480n)
    console.log("🚀 ~ file: chain.js:17 ~ main ~ block:", block)

    const blockNumber = await web3.eth.getBlockNumber()
    console.log("🚀 ~ file: chain.js:20 ~ main ~ blockNumber:", blockNumber)

    const nonce = await web3.eth.getTransactionCount(address)
    console.log("🚀 ~ file: chain.js:23 ~ main ~ nonce:", nonce)

    const code = await web3.eth.getCode("0x23F454C810F46b33160fd8B08d02e82E1f550454");
    console.log(code)

    const tx = await web3.eth.getTransaction("0x4c2930ff9bd2e48b7b50f31a7cdf006f9cbfb0d5437679c0744832daa1be339a")
    console.log("🚀 ~ file: chain.js:32 ~ main ~ tx:", tx)



}

main().catch()


// More detailed docs at :- https://docs.web3js.org/api/web3-eth/