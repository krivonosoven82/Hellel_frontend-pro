const moneySeller = {
    25: 0,
    50: 0,
    100: 0
};
let MONEY = [25, 50, 100];  //Наминал
let moneyPeople = [25, 50, 100, 50, 25, 100, 25, 25, 100, 50];
let seller = [0, 0, 0];
let i;

console.log(`Наличность продавца: `);
for(let key in moneySeller){
    console.log(`Номинал ${key} = ${moneySeller[key]}шт.`);
}

console.log(`\nНоминал купюр у покупателей: \n${moneyPeople}\n\n`);

function toSellTicket(array){
    for(i = 0; i < array.length; i++){
        if(array[i] == MONEY[0]){
            seller[0] += 1;
            console.log(`Билет продан успешно.`);
        }else if(array[i] == MONEY[1]){
            if(seller[0] < 1){
                console.log(`Извините, здачи нет.`);
                break;
            }else{
                seller[1] += 1;
                seller[0] -= 1;
                console.log(`Билет продан успешно.`);
            }
        }else if(array[i] == MONEY[2]){
            if((seller[1] >= 1) && (seller[0] >= 1)){
                seller[2] += 1;
                seller[1] -= 1;
                seller[0] -= 1;
                console.log(`Билет продан успешно.`);
            }else if((seller[1] < 1) && (seller[0] >= 3)){
                seller[2] += 1;
                seller[0] -= 3;
                console.log(`Билет продан успешно.`);
            }else{
                console.log(`Извините, здачи нет.`);
                break;
            }
        }
    }
    moneySeller['25'] = seller[0];
    moneySeller['50'] = seller[1];
    moneySeller['100'] = seller[2];

    console.log(`\nНаличность продавца: `);
    for(let key in moneySeller){
        console.log(`Номинал ${key} = ${moneySeller[key]}шт.`);
    }
}

toSellTicket(moneyPeople);





