const {Web3} = require('web3')

const web3 = new Web3()

// 1 eth = 10 ** 18 wei
// 1 eth = 10 ** 9 gwei
// 1 gwei = 10 ** 9 wei

console.log("1 Ethers value in Wei: ", web3.utils.toWei('1', 'ether'), web3.utils.toWei('1', 'ether').length)
console.log("1 Ethers value in Gwei: ", web3.utils.toWei('1', 'gwei'), web3.utils.toWei('1', 'gwei').length)


console.log("1 Wei value in Ether : ", web3.utils.fromWei('1', 'ether'))
console.log("1 Gwei value in Ether : ", web3.utils.fromWei('1', 'gwei'))


console.log("Ascii to Hex value of Hello world : ", web3.utils.asciiToHex('Hello World'));


console.log("Difference between latest and pending block", web3.utils.compareBlockNumbers('latest', 'pending'));
console.log("Difference between front and last block", web3.utils.compareBlockNumbers(1100, 1000));
console.log("Difference between last and front block", web3.utils.compareBlockNumbers(1000, 1100));


console.log("Current address is : 0xc1912fee45d61c87cc5ea59dae31190fffff232d \nCheckSum address is : ", web3.utils.toChecksumAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'))


console.log("BigInt of 1 eth value is : ", web3.utils.toBigInt("1000000000000000000000"))

console.log(web3.utils.toHex("1"))


// More detailed docs at :- https://docs.web3js.org/libdocs/Utils