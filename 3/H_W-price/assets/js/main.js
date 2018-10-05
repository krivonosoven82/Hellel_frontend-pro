const name = [`Яблоки`, `Апельсины`];
const price = [12.50, 12.50];
const name1 = document.getElementById('name1');
const price1 = document.getElementById('price1');
const name2 = document.getElementById('name2');
const price2 = document.getElementById('price2');
name1.innerHTML = name[0];
price1.innerHTML = price[0].toFixed(2);
name2.innerHTML = name[1];
price2.innerHTML = price[1].toFixed(2);
//----------name[0]
const toChangePrice1 = (e) => {
    let val = document.getElementById(`change1`).value;
    let newPrice = +val;
    if (isNaN(newPrice)) {
        document.getElementById(`change1`).value = 'Введите число';
    } else {
        if (newPrice <= 0) {
            document.getElementById(`change1`).value = 'Число слишком мало';
        } else {
            price[0] = newPrice;
            price1.innerHTML = price[0].toFixed(2);
            document.getElementById(`change1`).value = '';
        }
    }
};
const toDiscountPrice1 = (e) => {
    let val = document.getElementById(`discount1`).value;
    let newDiscount = +val;
    let discount;
    if (isNaN(newDiscount)) {
        document.getElementById(`discount1`).value = 'Введите число';
    } else {
        if (newDiscount < 1 || newDiscount > 100 ) {
            document.getElementById(`discount1`).value = 'Введите от 1 до 100';
        } else {
           newDiscount = Math.round(newDiscount);
            document.getElementById(`discount1`).value = newDiscount;
            discount = (newDiscount / 100);
            price[0] -= (price[0] * discount);
            price1.innerHTML = price[0].toFixed(2);
        }
    }
};
const toExtraChargePrice1 = (e) => {
    let val = document.getElementById(`extraCharge1`).value;
    let newExtraCharge = +val;
    let extraCharge;
    if (isNaN(newExtraCharge)) {
        document.getElementById(`extraCharge1`).value = 'Введите число';
    } else {
        if (newExtraCharge < 1 || newExtraCharge > 100) {
            document.getElementById(`extraCharge1`).value = 'Введите от 1 до 100';
        } else {
            newExtraCharge = Math.round(newExtraCharge);
            document.getElementById(`extraCharge1`).value = newExtraCharge;
            extraCharge = (newExtraCharge / 100);
            price[0] += (price[0] * extraCharge);
            price1.innerHTML = price[0].toFixed(2);
        }
    }
};
//----------name[1]
const toChangePrice2 = (e) => {
    let val = document.getElementById(`change2`).value;
    let newPrice = +val;
    if (isNaN(newPrice)) {
        document.getElementById(`change2`).value = 'Введите число';
    } else {
        if (newPrice <= 0) {
            document.getElementById(`change2`).value = 'Число слишком мало';
        } else {
            price[1] = newPrice;
            price2.innerHTML = price[1].toFixed(2);
            document.getElementById(`change2`).value = '';
        }
    }
};
const toDiscountPrice2 = (e) => {
    let val = document.getElementById(`discount2`).value;
    let newDiscount = +val;
    let discount;
    if (isNaN(newDiscount)) {
        document.getElementById(`discount2`).value = 'Введите число';
    } else {
        if (newDiscount < 1 || newDiscount > 100) {
            document.getElementById(`discount2`).value = 'Введите от 1 до 100';
        } else {
            newDiscount = Math.round(newDiscount);
            document.getElementById(`discount2`).value = newDiscount;
            discount = (newDiscount / 100);
            price[1] -= (price[1] * discount);
            price2.innerHTML = price[1].toFixed(2);
        }
    }
};
const toExtraChargePrice2 = (e) => {
    let val = document.getElementById(`extraCharge2`).value;
    let newExtraCharge = +val;
    let extraCharge;
    if (isNaN(newExtraCharge)) {
        document.getElementById(`extraCharge2`).value = 'Введите число';
    } else {
        if (newExtraCharge < 1 || newExtraCharge > 100) {
            document.getElementById(`extraCharge2`).value = 'Введите от 1 до 100';
        } else {
            newExtraCharge = Math.round(newExtraCharge);
            document.getElementById(`extraCharge2`).value = newExtraCharge;
            extraCharge = (newExtraCharge / 100);
            price[1] += (price[1] * extraCharge);
            price2.innerHTML = price[1].toFixed(2);
        }
    }
};
//----------END