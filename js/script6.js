//1

let a = {
    name: "static",
    count: 0
}

function foo(obj, property, x) {
	let arr = [];
	for(let i = 0; i < x; i++) {
            let h = {};
            Object.assign(h, obj);//копированиу значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект.
            h[property] = i;
            arr.push(h);
        }
	return arr;
}

console.log(foo(a, "count", 10));

//2 

function generation(min, max) {
	let arr = [];

	function saveNum() {
		let num = Math.floor(Math.random() * max) + min;
		//return arr.includes(num) ? saveNum() : (arr.push(num), num);

		while(!arr.includes(num)){
			arr.push(num);
			return num;
		}
	}
	return saveNum;
}

let x = generation(1, 100);

console.log(x());
console.log(x());
console.log(x());
console.log(x());
console.log(x());

//3

let student = {
	name: "Василий",
	surname: "Брусничный",
	age: "20",
	interests: ["литература", " баскетбол", " еда"],
	place: "СПбГУ",
	helpStudent: function () {
	return this.name + " " + this.surname + ". " + this.age + "год(лет). Интересы: " + this.interests + ". Учится в " + this.place + ". ";}
};

console.log(student.helpStudent());

//4

function factor(n) {
	if( n != 1) {
		return n * factor(n - 1);
	} else {
		return 1;
	}
}

console.log(factor(6));

//5

let array = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
	{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4} ];

function sorting(o1, o2) {
	return o1.price - o2.price;
}

array.sort(sorting);
console.log(array);
