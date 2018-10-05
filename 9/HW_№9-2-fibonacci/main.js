const fibonacci = (n) => {
    let a = 1;
    let b = 1;
    let c;
    let i;

    for (i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(8));

