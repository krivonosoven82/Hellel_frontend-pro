function sum(){
    return [].reduce.call(arguments, function(number1, number2){
        return number1 + number2;
    });
}

function mul() {
    return [].reduce.call(arguments, function(number1, number2){
        return number1 * number2;
    });
}

function applyAll(func){
    return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(sum, 1, 2, 3));
console.log(applyAll(mul, 1, 2, 3, 4));

//----------ES6---------------------------------------------------------------------------------------------------------

function sumES6(...res){
    return res.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function mulES6 (...res) {
    return res.reduce((accumulator, currentValue) => accumulator * currentValue);
}

function applyAllES6(func, ...res){
   return func.apply(this, res);
}

console.log(applyAllES6(sumES6, 1, 2, 3));
console.log(applyAllES6(mulES6, 1, 2, 3, 4));

