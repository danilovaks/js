//1

function Product(name, price) {
	this.name = name;
	this.price = price;

	//return {pro: name + " " + price};
}

let product1 = new Product("Книга1", 200);
let product2 = new Product("Книга1", 300);
let product3 = new Product("Книга3", 400);
//console.log(product1.pro);

function ShoppingBasket() {
    let goods = [];
	let numberOfGoods = 0;
	let amountOfGoods = 0;

  	this.add = function(Product){
    	goods.push(Product);
        return goods;
  	};

	this.numberOfGoods = function() {
	    numberOfGoods = goods.length;
        return numberOfGoods;
	};

	this.amountOfGoods = function() {
		for(let i = 0; i < goods.length; i++) {
			amountOfGoods = amountOfGoods + goods[i].price;
		}
	    return amountOfGoods;
	};
}

let basket = new ShoppingBasket();
basket.add(product1);
basket.add(product2);
basket.add(product3);

console.log("Количество товаров: " + basket.numberOfGoods());
console.log("Сумма товаров: " + basket.amountOfGoods());

//2

function Person(name, age, sex, hobby) {
	this.name = name;
	this.age = age;
	this.sex =sex;
	this.hobby = hobby;

	this.toString = function() {
		return "Человек: " + this.name + ". Возраст: " + this.age + " лет. Пол: " + this.sex + ". Интересы: " + this.hobby + ".";
	}
}

let men = new Person("Иван", 20, "м", "музыка, спорт");
alert(men);


function Student(name, age, sex, hobby, institute) {
	Person.call(this, name, age, sex, hobby);
	this.institute = institute;
	this.toString = function() {
		return "Студент: " + name + ". Возраст: " + age + " лет. Пол: " + sex + ". Интересы: " + hobby + ". Обучается в " + this.institute + ".";
	}
}

let student = new Student("Иван", 20, "м", "музыка, спорт", "СПбГУ");
alert(student);

//3

function User(name) {
	this.name = name;
	this.toString = function() {
		return "Пользователь: " + this.name;
	}
}

User.anonymous = function() {
	let anonymous = new User("Аноним");
	return anonymous;
}

User.dateUser = function(name, age) {
	let dateUser = new User(name);
	dateUser.age = age;
	dateUser.toString = function() {
        return "Пользователь: " + this.name + ". Возраст: " + this.age + " лет.";
        }
    return dateUser;
}

let user1 = new User("Иван");
alert(user1);

let user2 = User.anonymous();
alert(user2);

let user3 = User.dateUser("Ваня", 20);
alert(user3);

//4 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference

/*
1
Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.
new Map([iterable])
iterable - Массив или любой другой итерируемый объект чьими элементами являются пары ключ-значение 
(массивы из двух элементов, например [[ 1, 'one' ],[ 2, 'two' ]]). 
Все пары ключ-значение будут добавлены в новый экземпляр Map; null расценивается как undefined.

2
Конструктор RegExp создаёт объект регулярного выражения для сопоставления текста с шаблоном.
new RegExp(pattern[, flags])
pattern - текст регулярного выражения. flags - если определён, может принимать любую комбинацию нижеследующих значений:
g-глобальное сопоставление, i-игнорирование регистра при сопоставлении, m-сопоставление по нескольким строкам, y-«липкий» поиск.

3
Символ (анг. Symbol) — это уникальный и неизменяемый тип данных, который может быть использован как идентификатор для свойств объектов. 
Символьный объект (анг. symbol object) — это объект-обёртка (англ. wrapper) для примитивного символьного типа.
Symbol([описание])
описание-необязательный, строка. Описание символа, которое может быть использовано во время отладки, но не для доступа к самому символу.

4
Объект Number является объектом-обёрткой, позволяющей вам работать с числовыми значениями. Объект Number создаётся через конструктор Number().
new Number(value); 
var a = new Number('123'); // a === 123 is false
var b = Number('123'); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
value - числовое значение, которое примет объект после создания.

5
Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
new Set([iterable]);
iterable - при передаче итерируемого объекта, все его элементы будут добавлены в новый Set. Иначе (или при null) новый Set будет пуст.
Возвращает новый Set объект.

6
Объект Promise (обещание) используется для отложенных и асинхронных вычислений. Promise может находиться в трёх состояниях:
-ожидание (pending): начальное состояние, не выполнено и не отклонено.
-выполнено (fulfilled): операция завершена успешно.
-отклонено (rejected): операция завершена с ошибкой.
Другой термин, описывающий состояние заданный (settled): обещание выполнено или отклонено, но не находится в состоянии ожидания.

new Promise(executor);
new Promise(function(resolve, reject) { ... });

executor - объект функции с двумя аргументами resolve и reject. Первый аргумент вызывает успешное выполнение обещания, второй отклоняет его. 
Мы можем вызывать эти функции по завершении нашей операции.

7
Объект JSON содержит методы для разбора объектной нотации JavaScript (JavaScript Object Notation — сокращённо JSON) и преобразования значений в JSON. 
Его нельзя вызвать как функцию или сконструировать как объект, и кроме своих двух методов он не содержит никакой интересной функциональности.

8
Объект ReferenceError представляет ошибку, возникающую при обращении к несуществующей переменной.
new ReferenceError([message[, fileName[, lineNumber]]])
message - необязательный параметр. Человеко-читаемое описание ошибки
fileName - необязательный параметр. Имя файла, содержащего код, вызвавший исключение
lineNumber - необязательный параметр. Номер строки кода, вызвавшей исключение

9
Объект SyntaxError представляет ошибку, возникающую при попытке интерпретировать синтаксически неправильный код.
new SyntaxError([message[, fileName[, lineNumber]]])
message - необязательный параметр. Человеко-читаемое описание ошибки.
fileName - Необязательный параметр. Имя файла, содержащего код, вызвавший исключение.
lineNumber - Необязательный параметр. Номер строки кода, вызвавшей исключение.

10
Типизированный массив Uint8ClampedArray —  это массив,  служащий для хранения 8-битных безнаковых чисел, обрезаемых до диапазона от 0 до 255. 
Если значение меньше 0, то оно будет приведено к 0 , и к 255, если оно больше 255. 
Числа с плавающей точкой округляются с помощью математического округления. Массив инициализуруется нулями. 
После того как значение установлено, Вы можете ссылаться на него с помощью методов объекта или через стандартный синтаксис массивов 
(то есть, брать значения с помощью квадратных скобок). 

new Uint8ClampedArray(length);
new Uint8ClampedArray(typedArray);
new Uint8ClampedArray(object);
new Uint8ClampedArray(buffer [, byteOffset [, length]]);
*/