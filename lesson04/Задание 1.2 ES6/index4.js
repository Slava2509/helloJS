
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

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const Post1 = new Post('Vyacheslav', 'does HW', new Date());
console.log(Post1);
Post1.edit('its good');
console.log(Post1);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const AttachedPost1 = new AttachedPost('author Vaycheslav', 'does HW', new Date());
console.log(AttachedPost1);
AttachedPost1.makeTextHighlighted();
AttachedPost1.edit('he can handle it');
console.log(AttachedPost1);

// здесь справился значительно быстрее, ES6 на много удобнее)