const str1 = '999';
const str2 = '111';
let balans = 0;
let arr1;
let arr2;
let length;
let answer = [];
let answerStr;

arr1 = str1.split('');
arr2 = str2.split('');

length = arr1.length > arr2.length
    ? arr1.length + 1
    : arr2.length + 1;

for (let i = 1; i < length + 1; i++) {
    let el1 = +arr1[arr1.length - i] || 0;
    let el2 = +arr2[arr2.length - i] || 0;
    let result = el1 + el2 + balans;

    if (result >= 10) {
        answer[length - i] = result - 10;
        balans = 1;
    } else {
        answer[length - i] = result;
        balans = 0;
    }
}

answerStr = answer.join('');
console.log(answerStr);