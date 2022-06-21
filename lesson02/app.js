'use strict';
/*1. Объясните почему код даёт именно такие результаты ?
//     Подсказка.Чтобы лучше разобраться возьмите этот код и запустите в отладчике в 
 браузере со включенными точками остановки.8*/
//пример 1

// Вначале оператором let назначены переменные. Далее (++)a является инкрементом префексной формы, который увеличивает переменную на 1, в данном случае (а), учитывая что переменная а изначальна равна 1, получается выражение 1+1, соответственно с=2. Т.к. Значение a = 2 далее присовено значению с

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

//пример 2
//  b++ является инкрементом постпрефексной формы, переменная b изначальна равна 1, но сначала осуществляется возврат результата (чтение и) и только потом число увеличивается на 1 
d = b++;
alert(d); //ответ: 1

//пример 3
// учитывая что переменной a в примере №1 было присвоено значение 2, в текущем выражении снова инкрементом префексной формы, таким образом 2 + 3 = 5
c = 2 + ++a;
alert(c); //ответ: 5

//пример 
// d = 4  т.к.b ранее(во втором примере) присвоено 2, и так как b++ является инкрементом постпрефексной формы, сначала осуществляется возврат результата(чтение b) и только потом число увеличивается на 1
d = 2 + b++;
alert(d); //ответ: 4

alert(a); //3
alert(b); //3
