let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/gi;
let result = ohRegex.test(ohStr);
console.log(result)