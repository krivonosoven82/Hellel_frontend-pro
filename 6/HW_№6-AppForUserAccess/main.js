let getObject = {};
let getBool = [];

let wrap = document.getElementsByClassName('wrap__modal')[0];
let wMessage = document.getElementsByClassName('wrap__message')[0];
let modalOne = document.getElementsByClassName('modal--one')[0];
let closeOne = document.getElementsByClassName('modal__close--one')[0];
let messageOne = document.getElementsByClassName('modal__message--one')[0];

let modalTwo= document.getElementsByClassName('modal--two')[0];
let closeTwo = document.getElementsByClassName('modal__close--two')[0];
let messageTwo = document.getElementsByClassName('modal__message--two')[0];

let modalThree= document.getElementsByClassName('modal--three')[0];
let closeThree = document.getElementsByClassName('modal__close--three')[0];
let messageThree = document.getElementsByClassName('modal__message--three')[0];

let enterOne = document.getElementsByClassName('modal__enter--one')[0];
let enterTwo = document.getElementsByClassName('modal__enter--two')[0];
let enterThree = document.getElementsByClassName('modal__enter--three')[0];
//======================================================================================================================
//function toGetPassword
const toGetPassword = () => {
    const MIN = 6;
    const MAX = 20;
    const SYMBOL = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
    let password = document.getElementById('pass').value;
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
    console.log(password);
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
                console.log(`Пароль ${pass} не допустимой длины.
Введенное значенин должно содержать от ${MIN} до ${MAX} символов.`);
                enterOne.onclick = function() {
                    messageOne.classList.add("notValid");
                    messageOne.innerHTML = 'Введите пароль допустимой длины!';
                    console.log(getBool);
                }
            }else{
                for(i = 0; i < pass.length; i++){
                    SYMBOL.indexOf(pass[i]);
                    index = SYMBOL.indexOf(pass[i]);
                    if(index == -1){
                        success = false;
                        getBool.push(false);
                        break;
                    }else {
                        uniPass = pass.charCodeAt(i);
                        arrPass.push(uniPass);
                    }
                }
                comparison(chNum, arrPass, arrBoolNum, res);
                comparison(chSymb, arrPass, arrBoolSymb, res);

                (arrBoolNum.length == arrPass.length || arrBoolSymb.length == arrPass.length) ? (success = false) : (success = true);
                if(success){
                    console.log(`Пароль: "${pass}" валидный`);
                    enterOne.onclick = function() {
                        modalOne.classList.add('close');
                        console.log(getBool);
                    }
                }else{
                    console.log(`Пароль "${pass}" не валидный`);
                    enterOne.onclick = function() {
                        messageOne.classList.add("notValid");
                        messageOne.innerHTML = 'Пароль не валидный';
                        console.log(getBool);
                    }
                }
            }
            if(success){
                (getBool.length == 1) ? (getBool.pop(), getBool.push(true)) : getBool.push(true);
            }else{
                (getBool.length == 1) ? (getBool.pop(), getBool.push(false)) : getBool.push(false);
            }
        }
    };
    passValid(password);
};
//======================================================================================================================
//function toGetSimpleNumber
const toGetSimpleNumber = () => {

    let num = document.getElementById('num').value;

    num = parseInt(num);


    const checkNumber = (n) => {
        let flag, k, i;
        let check1, check2, check3;
        if((n%2 == 0)&&(n != 2)){
            check1 = false;
        }else if(n == 2) {
            check1 = true;
        }else if(n < 2){
            check1 = false;
        } else{
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


        if(check1 == true || check2 == true || check3 == true){
            (getBool == 2) ?(getBool.pop(), getBool.push(true)) : getBool.push(true);
            enterTwo.onclick = function() {
                modalTwo.classList.add('close');
                console.log(getBool);
            }
        }else{
            (getBool.length == 2) ?(getBool.pop(), getBool.push(false)) : getBool.push(false);
            enterTwo.onclick = function() {
                messageTwo.classList.add('notValid');
                messageTwo.innerHTML = `Простое, Четное, Кратное 10-ти: [${check1}, ${check2}, ${check3}]`;
                console.log(getBool);
            }
        }
    }
     if (!num){
         console.log(`Введите число: `);
     }else{

         checkNumber(num);
     }
};
//======================================================================================================================
//function toGetSumNumber
const toGetSumNumber = () => {
    let num1 = document.getElementById('sum1').value;
    let num2 = document.getElementById('sum2').value;
    let long;
    let res = [];
    let num = [];
    let index = [];
    let i;
    let k = 0;

    const sum = (x, y, lon, num) => {
        x = num1.split('');
        y = num2.split('');
        x.reverse();
        y.reverse();
        for(i = 0; i < lon; i++){
            res.push(+x[i] + +y[i]);
            res[i] += k;
            if(res.length < 3 && (i + 1) == lon){
                num.push(res[i]);
            }else if((i + 1) == lon){
                res[i] -= 1;
                num.push(res[i]);
            }else if (res[i] < 10){
                num.push(res[i]);
            }
            else{
                res[i] -= 10;
                num.push(res[i]);
                k++;
            }
        }
        num.reverse();
        res.reverse();
        res = res.join('');
        console.log(`${num1} + ${num2} = ${res}`);
        (getBool.length == 3) ?(getBool.pop(), getBool.push(true)) : getBool.push(true);
        enterThree.onclick = function() {
            modalThree.classList.add('close');
            console.log(getBool);
            wrap.classList.add('close');
        }
        if(getBool.length == 3){
            for(i = 0; i < getBool.length; i++){
                if(getBool[i] == true){
                    index.push(getBool[i]);
                }
            }
            if(index.length < getBool.length){
                wMessage.classList.add('noAccess');
                wMessage.innerHTML = 'Доступ закрыт!!!'
            }else{
                wMessage.classList.add('access');
                wMessage.innerHTML = 'Доступ разрешен!';
            }
        }
    };
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(!num1 && !num2){
        console.log(`Введите число: `);
        (getBool.length == 3) ?(getBool.pop(), getBool.push(false)) : getBool.push(false);;
        enterThree.onclick = function() {
            messageThree.classList.add('notValid');
            messageThree.innerHTML = `Введите число:`;
            console.log(getBool);
        }
    }else{
        num1 = num1.toString();
        num2 = num2.toString();
        if(num1.length != num2.length){
            console.log(`Введите числа одинаковой длины`);
            (getBool.length == 3) ?(getBool.pop(), getBool.push(false)) : getBool.push(false);

            enterThree.onclick = function() {
                messageThree.classList.add('notValid');
                messageThree.innerHTML = `Введите числа одинаковой длины`;
                console.log(getBool);
            }
        }else if(num1.length > 3 && num2.length > 3){
            console.log(`Введите чисо до 3 символов!!!`);
            (getBool.length == 3) ?(getBool.pop(), getBool.push(false)) : getBool.push(false);
            enterThree.onclick = function() {
                messageThree.classList.add('notValid');
                messageThree.innerHTML = `Введите чисо до 3 символов!!!`;
                console.log(getBool);
            }
        }else{
            (num1.length >= num2.length) ? (long = num1.length) : (long = num2.length);
            sum(num1, num2, long, num);
        }
    }

};

//----------------------------------------------------------------------------------------------------------------------
closeOne.onclick = function() {
    modalOne.classList.add('close');
    (getBool.length == 1) ? (getBool.pop(), getBool.push(false)) : getBool.push(false);
    console.log(getBool);
};
closeTwo.onclick = function() {
    modalTwo.classList.add('close');
    (getBool.length == 2) ?(getBool.pop(), getBool.push(false)) : getBool.push(false);
    console.log(getBool);
};

closeThree.onclick = function() {
    modalThree.classList.add('close');
    (getBool.length == 3) ?(getBool.pop(), getBool.push(false)) : getBool.push(false);
    console.log(getBool);
    console.log(getBool.length);
    if(getBool.length == 3){
        wrap.classList.add('close');
        wMessage.classList.add('noAccess');
        wMessage.innerHTML = 'Доступ закрыт!!!'
    }

};
