"use strict"

/*1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как
свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
(как объект transport в уроке).*/


function Product(name, price) {                 //Создал конструктор Product и обосзначил 2 параметра
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {                     // присвоил метод (функцию) для product, который уменьшает цену на 25%
    this.price = this.price - (this.price * 0.25);
};

const Object = new Product('barbecue', 100);
Object.make25PercentDiscount();

console.log(Object);


