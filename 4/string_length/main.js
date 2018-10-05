const NUM = `10`;
let result = prompt(`Введите строку`, ``);
let val;
let i;
if(!result){
    console.log('Вы ничего не ввели!');
}else{
    val = (result.length < NUM);
    if(val){
        for(i = 0; i < result.length; i++) console.log(result[i]);
    }else {
        console.log(`${result.slice(0, 8)} \n${result.slice(10)}`);
    }
}

