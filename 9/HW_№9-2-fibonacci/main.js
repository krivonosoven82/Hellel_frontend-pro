const fibonacci = (n) => {
    let numberStart = 1;
    let result = 1;
    let sum;
    let i;

    if(n <= 0){
        result = 0;
      return console.log(result);
    }else{
        for (i = 3; i <= n; i++) {
            sum = numberStart + result;
            numberStart = result;
            result = sum;
        }
    }
    return console.log(result);
};

fibonacci(0);
fibonacci(1);
fibonacci(3);
fibonacci(6);
