//----------1
let  str = "It's beautiful day. I like \"free day\".";
console.log(str);
console.log("It's beautiful day. I like \"free day\".");
console.log('It\'s beautiful day. I like "free day".');
console.log('It\'s beautiful day. ' +
            'I like "free day".');
console.log(`It's beautiful day. I like "free day".`);


//----------2
console.log((5.45*8.3).toFixed(2) === (5.45*8.3).toFixed(2));

//----------3
console.log(+"string" + 2);
console.log(Number("string") + 2);