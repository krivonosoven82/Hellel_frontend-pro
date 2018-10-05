const MIN = 6;
const MAX = 20;
const SYMBOL = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
let password = prompt(`Введите пароль: `, ``);
let index;
let success;
let uniPass;
let res;
let arrPass = [];
let arrBoolNum = [];
let arrBoolSymb = [];
let chNum = [];
let chSymb = [];
let x, i, j;

for(i = 0; i < SYMBOL.length; i++){
    x = SYMBOL.charCodeAt(i);
    (x < 58) ? (chNum.push(x)) : (chSymb.push(x));
}
//функция сравнения на совпадение елементов массивов
const comparison = (arr1, arr2, arr3, res) => {
    for(i = 0; i < arr1.length; i++){
        res = arr1[i];
        for(j = 0; j < arr2.length; j++){
            if(res == arr2[j]){
                arr3.push(res[i]);
            }
        }
    }
};

//функция проверки пароля
const passValid = (pass) => {
    if(!pass){
        console.log(`Пароль не введен!`);
    }else{
        if(pass.length < MIN || pass.length > MAX){
            console.log(`Пароль ${pass} не допустимой длинны.
Введенное значенин должно содержать от ${MIN} до ${MAX} символов.`);
        }else{
            for(i = 0; i < pass.length; i++){
                SYMBOL.indexOf(pass[i]);
                index = SYMBOL.indexOf(pass[i]);
                if(index == -1){
                    success = false;
                    break;
                }else {
                    uniPass = pass.charCodeAt(i);
                    arrPass.push(uniPass);
                }
            }
            comparison(chNum, arrPass, arrBoolNum, res);
            comparison(chSymb, arrPass, arrBoolSymb, res);

            (arrBoolNum.length == arrPass.length || arrBoolSymb.length == arrPass.length) ? (success = false) : (success = true);
            success ? (console.log(`Пароль: "${pass}" валидный`)) : (console.log(`Пароль "${pass}" не валидный`));
        }
    }
};

passValid(password);