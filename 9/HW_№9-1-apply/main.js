function sum(){
    return [].reduce.call(arguments, function(a, b){
        return a + b;
    });
}

function mul() {
    return [].reduce.call(arguments, function(a, b){
        return a * b;
    });
}
function applyAll(func){
    return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(sum, 1, 2, 3));
console.log(applyAll(mul, 1, 2, 3, 4));

