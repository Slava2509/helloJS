
"use strict"

// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый 
// товар применить скидку 15 %, можете использовать метод forEach https://mzl.la/1AOMMWX : 

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (item) {
    item.price = item.price - item.price * 0.15;
});
console.log(products);


// for (let i = 0; i <= products.length; i++) {
//     if (products.price == products.price - products.price * 0.15) console.log(products);
// };

// или

// for (let i = 0; i <= products.length; i++) {
//     console.log(products.price == products.price - products.price * 0.15);
// };


// С методом forEach вроде разобрался, но теперь не могу понять что не так делаю если запукать процесс через цикл for, подскажите плз

