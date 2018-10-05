let price = 12.50;
let str = `Яблоки украинские.
цена ${price.toFixed(2)}грн`;
let str1 = `Яблоки украинские.
цена грн`;

console.log(str);
console.log(`${str1.slice(0, 23)} ${price.toFixed(2)}${str1.slice(-3)}`);