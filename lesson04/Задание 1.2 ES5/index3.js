
"use strict"

/*1.2(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6(по 
аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
    а) конструктор Post, который принимает параметры author, text, date и сохраняет
их как свойства объекта.Объекты типа Post должны иметь метод edit, который будет 
принимать текст и записывать его в свойство text объекта.
    б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не 
дублировать код.Также в конструкторе AttachedPost должно создаваться свойство
highlighted со значением false.Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
    который будет назначать свойству highlighted значение true.*/


/* Вначале сделал вот так:
function Post(author, text, date) {
this.author = author;
this.text = text;
this.date = date;
}

Post.prototype.edit = function (text) {
this.text = text;
}

const Post1 = new Post('Вячeслав', 'делает ДЗ с опозданием', new Date());
Post1.edit(', он исправится');
console.log(Post1);

function AttachedPost(author, text, date, highlighted) {
Post.call(this, author, text, date);
this.highlighted = highlighted;
highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
highlighted = true;
}

const AttachedPost1 = new AttachedPost('Вячeслав', 'делает ДЗ с опозданием', new Date(), 'правда')
AttachedPost1.makeTextHighlighted();
console.log(AttachedPost1);

в результате мне выдало ошибку, пришлось подсмотреть решение, в результате:
*/


function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

const Post1 = new Post('Vyacheslav', 'does HW', new Date());
console.log(Post1);
Post1.edit('its good');
console.log(Post1);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const AttachedPost1 = new AttachedPost('author Vaycheslav', 'does HW', new Date());
console.log(AttachedPost1);
AttachedPost1.makeTextHighlighted();
AttachedPost1.edit('he can handle it');
console.log(AttachedPost1);

//много раз исправлял свой синтаксис, но вроде бы понял

















