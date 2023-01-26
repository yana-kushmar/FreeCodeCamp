let quoteSample = "3 blind mice.";
let myRegex = /[^. 3]/gi;
let result = quoteSample.match(myRegex);
console.log(result)