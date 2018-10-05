let num = prompt("введите число");
num = parseInt(num);
console.log(num);

const checkNumber = (n) => {
    let flag, k, i;
    let check1, check2, check3;
    if((n%2==0)&&(n!=2)){
        check1 = false;
    }else if(n==2) {
        check1 = true;
    }else{
        k = Math.round(Math.sqrt(n));
        flag = false;
        for(i=2; i<k+1; i++)
            if(n%i==0){
                check1 = false;
                flag = true;
                break;
            }
        if (flag == false){
            check1 = true;
        }
    }
    check2 = ((n % 2) == 0) ? true : false;
    check3 = ((n % 10) == 0) ? true : false;
    console.log(`Простое, Четное, Кратное 10-ти:
[${check1}, ${check2}, ${check3}]`);
};

if(!num){
    console.log(`Введите число: `);
}else{
    checkNumber(num);
}

