//1

function Product2(name, price) {
	this.name = name;
	this.price = price;
}

Product2.prototype.toString = function() {
		return "Покупка: " + this.name + " " + this.price;
}

let product2 = new Product2("Книга_1", "200руб");
console.log(product2.toString());

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