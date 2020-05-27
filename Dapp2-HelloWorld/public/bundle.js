var helloWorldABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
];
var helloWorldAddress = '0xb0DDBDD3aA1Adb02674aA2DF272cEa0630c71DDB';
var web3 = new Web3('http://localhost:7545');
var helloWorld = new web3.eth.Contract(helloWorldABI, helloWorldAddress);

document.addEventListener('DOMContentLoaded', () => {
  helloWorld.methods.hello().call()
  .then(result => {
    document.getElementById('hello').innerHTML = result;
  });
});
