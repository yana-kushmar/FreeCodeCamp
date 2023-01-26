let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi;
let result = userCheck.test(username);

console.log(result)