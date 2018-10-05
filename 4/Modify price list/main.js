let price = 12.50;
let str = `Яблоки украинские.
цена грн`;
let discount;
let newPrice;
let result = `${str.slice(0, 23)} ${price.toFixed(2)}${str.slice(-3)}`;
console.log(`Ценник на товар: \n${result}`);
let question = confirm(`Ввести на этот товар скидку?`);
if(question){
    discount = prompt(`Введите скидку от 1 до 100`, ``);
    discount = +discount;
    if(isNaN(discount)){
        console.log(`Введенное значение не число`);
    }else{
        if(discount < 1 || discount > 100){
            console.log(`Введенное число за пределами допуска`);
        }else{
            discount = Math.round(discount);
            console.log(`Дисконт состовляет ${discount}%`);
            discount /= 100;
            newPrice = price - (price * discount);
            console.log(`Ценник на товар: \n${str.slice(0, 23)} ${newPrice.toFixed(2)}${str.slice(-3)}`);

        }
    }
}else{
    console.log(`Ценник на товар: \n${result}`);
}

