'use strict';
function getSquare(num) {
    if (num === "") {
        alert("Вы ничего не ввели");
        return;
    }
    if (num === null) {
        alert("Вы нажали отмена");
        return;
    }
    num = Number(num);
    if (isNaN(num) {
        alert("Вы ввели некорректное значение");
        return;
    }
    return num * num;
}


let myNum = prompt('введите число');
let result = getSquare(myNum);
if (result !== undefined) {
    alert(result);
}






