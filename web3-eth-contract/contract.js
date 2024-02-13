const { Web3 } = require('web3')
const abi = require("./abi.json")
require("dotenv").config()

const PVT_KEY = process.env.PVT_KEY
const address = "0xfbAC7b9ff473B1E4e6e31Ab70fA20aB4d30D05e5"

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC))

web3.eth.accounts.wallet.add(PVT_KEY)

const contractAddress = "0x569971E53c097Ab95C5967484D8a6e007214FE4e"

async function main() {
    const contractInstance = new web3.eth.Contract(abi, contractAddress)
    // console.log("🚀 ~ file: contract.js:15 ~ main ~ contractInstance:", contractInstance)

    const value = await contractInstance.methods.getValue().call();
    console.log("🚀 ~ file: contract.js:15 ~ main ~ value:", value)
    
    const addValueEstimateGas = await contractInstance.methods.add(100).estimateGas({
        from: address
    })
    console.log("🚀 ~ file: contract.js:29 ~ addValueEstimateGas ~ addValueEstimateGas:", addValueEstimateGas)
    
    const addValue = await contractInstance.methods.add(100).send({
        from: address
    });
    console.log("🚀 ~ file: contract.js:18 ~ main ~ addValue:", addValue)


    const valueAfterAddition = await contractInstance.methods.getValue().call();
    console.log("🚀 ~ file: contract.js:15 ~ main ~ valueAfterAddition:", valueAfterAddition)

    const subValue = await contractInstance.methods.sub(50).send({
        from: address
    });
    console.log("🚀 ~ file: contract.js:18 ~ main ~ subValue:", subValue)

    const valueAfterSubtraction = await contractInstance.methods.getValue().call();
    console.log("🚀 ~ file: contract.js:15 ~ main ~ valueAfterSubtraction:", valueAfterSubtraction)


    const data = web3.eth.abi.encodeFunctionCall({
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_val1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_val2",
				"type": "uint256"
			}
		],
		"name": "dualTx",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, [100n, 50n])
    console.log("🚀 ~ file: contract.js:54 ~ main ~ data:", data)


    const gasPrice = (await web3.eth.getGasPrice());
    console.log("🚀 ~ file: contract.js:51 ~ main ~ gasPrice:", gasPrice)

    
    const txObj = {
        from: address,
        to: contractAddress,
        value: '0x0',
        data,
        maxFeePerGas: web3.utils.toHex(100000000000n),
        maxPriorityFeePerGas: web3.utils.toHex(100000000000n)
        // gasPrice
    }

    const signedTx = await web3.eth.accounts.signTransaction(txObj, PVT_KEY)
    console.log("🚀 ~ file: contract.js:60 ~ main ~ signedTx:", signedTx)

    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('transactionHash', function(data){
            console.log("Tx Hash: ", data)
        })
        .on('sending', function(data){
            console.log("Sending: ", data)
        })
        .on('confirmation', function(data){
            console.log("Confirmation: ", data)
        })
        .on('error', function(data){
            console.log("Error: ", data)
        })
        .on('receipt', function(data){
            console.log("Receipt: ", data)
        })
        .on('sent', function(data){
            console.log("Sent: ", data)
        })
}

main().catch()


// More detailed docs at :- https://docs.web3js.org/libdocs/Accounts