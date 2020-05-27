var contractABI = [];
var contractAddress = '0x6F2B0ddACee2986B76440550987be40B5a93b0A4';
var web3 = new Web3('http://localhost:7545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);
