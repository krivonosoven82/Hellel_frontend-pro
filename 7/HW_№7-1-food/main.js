// продукты
let products = {
    tea: 100,
    milk: 40,
    coffee: 40,
    sugar: 30,
    water: 100,
    bread: 600,
    salt: 300,
    pepper: 500
};

// рецепт
let recipe = {
    milk: 10,
    coffee: 10,
    sugar: 5,
    water: 20
};



function toCalcPortion(products, recipe) {
    let proportions = [];
    let key;
    for (key in recipe) {
        if (products[key] && products[key] >= recipe[key]) {
            proportions.push(Math.floor(products[key] / recipe[key]));
        } else {
            return console.log('Не хватает ингридиентов');
        }
    }
    return console.log(`Продуктов хватит на проций: ${Math.min(...proportions)}`);
}

toCalcPortion(products, recipe);