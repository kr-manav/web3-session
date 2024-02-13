const { Web3 } = require('web3')
require("dotenv").config()

const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.WSS_RPC))

async function main() {
    // pendingTransactions, newHeads

    // const subscription = await web3.eth.subscribe('newHeads')
    // subscription.on('data', console.log)

    //logs
    
    // const subscription = (await web3.eth.subscribe('logs', {
    //     address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    //     fromBlock: 19216960,
    //     toBlock: 19216962,
    // }));
    // subscription.on('data', console.log)

}

main().catch()
