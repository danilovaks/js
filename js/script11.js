//1

function Product2(name, price) {
	this.name = name;
	this.price = price;
}

function ShoppingBasket2() {
    this.goods = [];
	this.numberOfGoods = 0;
	this.amountOfGoods = 0;
}

ShoppingBasket2.prototype.add = function(Product2){
    	this.goods.push(Product2);
        return this.goods;
}

ShoppingBasket2.prototype.numberOfGoodS = function() {
	    this.numberOfGoods = this.goods.length;
        return this.numberOfGoods;
}

ShoppingBasket2.prototype.amountOfGoodS = function() {
		for(let i = 0; i < this.goods.length; i++) {
			this.amountOfGoods = this.amountOfGoods + this.goods[i].price;
		}
	    return this.amountOfGoods;
}

let product5 = new Product2("Книга_1", 20);
let product6 = new Product2("Книга_2", 40);
let product7 = new Product2("Книга_3", 60);

let basket2 = new ShoppingBasket2();
basket2.add(product5);
basket2.add(product6);
basket2.add(product7);

console.log("Количество товаров: " + basket2.numberOfGoodS());
console.log("Сумма товаров: " + basket2.amountOfGoodS());

//2

function Person2(name, age, sex, hobby) {
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.hobby = hobby;
}

Person2.prototype.toString = function() {
		return "Человек: " + this.name + ". Возраст: " + this.age + " лет. Пол: " + this.sex + ". Интересы: " + this.hobby + ".";
}

function Student2(name, age, sex, hobby, institute) {
	Person2.call(this, name, age, sex, hobby);
	this.institute = institute;
}

Student2.prototype.toString = function() {
		return "Студент: " + this.name + ". Возраст: " + this.age + " лет. Пол: " + this.sex 
		+ ". Интересы: " + this.hobby + ". Обучается в " + this.institute + ".";
}

Student2.prototype.__proto__ = Person2.prototype;

let men2 = new Person2("Иван", 20, "м", "музыка, спорт");
console.log(men2.toString());

let student2 = new Student2("Иван", 20, "м", "музыка, спорт", "СПбГУ");
console.log(student2.toString());

//3
/* Доработка сайта Im travelling */