//1

let str = "569", sum = 0;

for(let i = 0; i < str.length; i++) {
    sum = sum + Number(str[i]); // sum += +str[i]
}

console.log(sum);

//2

let strR = "5%dv%haak6%9", sumbol = "%";

strR = strR.split(sumbol); //делаем массив без символа
strR = strR.join(sumbol + sumbol); // возвращаем массив в строку с 2символом
    
console.log(strR);

//3

let Str = prompt("Введите пароль:");
//let reg = /[a-zA-Z0-9{2}!#$%{1}]{10}/g; ????????????

let reg1 = /[!$#%\w]{10}/g;
let reg2 = /[a-z]/g;
let reg3 = /[A-Z]/g;
let reg4 = /(.*\d){2}/g;
let reg5 = /[!$#%]{1}/g;

if(!reg1.test(Str)) {
    alert("в пароле менее 10 символов");
} else if(!reg2.test(Str) && !reg3.test(Str)) {
    alert("в пароле нет латинских букв нижнего или верхнего региста");
} else if(!reg4.test(Str)) {
    alert("в пароле отсутствуют цифры или их менее двух");
} else if(!reg5.test(Str)) {
    alert("в пароле должен присутствовать один символ из: !,$,#,%");
} else (alert("пароль подходит"));

/* if(/*reg.test(Str)   reg1.test(Str) && reg2.test(Str) && reg3.test(Str) && reg4.test(Str)) {
    alert("пароль подходит");
} else (alert("пароль не подходит"));*/






