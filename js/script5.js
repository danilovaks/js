//1

let arr1 = [1, 5, 8, 6];
let arr2 = [1, 5, 8];

function comparison(array1, arrya2) { 
	if (array1.length !== arrya2.length) {
		return false; //Инструкция return указывает, что именно должна вернуть функция. После того, как отработает return функция завершается.
	}
	for (let i = 0; i < array1.length; i++) { 
		if (array1[i] !== arrya2[i]){ 
			return false;
		} 
	} 
	return true;
}

console.log(comparison(arr1, arr2));

//2

let a = 2, b = 15, c = 3; //решить если b будет меньше a

function range(start, finish, step) {
	let arr = [];
	if(step === undefined) {
        step = 1;
	}
	for(let j = start; j < finish; j = j + step) {
		arr.push(j);
	} 
	return arr;
}   

console.log(range(a, b, c));

//3

let student = {
	name: "Василий",
	surname: "Брусничный",
	age: "20",
	interests: ["Литература ", "Баскетбол ", "Еда "],
	place: "СПбГУ"
};

function contentOutput({name, surname, age, interests, place}) {
	alert("Имя: " + name + "\n" + "Фамилия: " + surname + "\n" + 
	"Возраст: " + age + "\n" + "Интересы: " + interests + "\n" + 
	"Место учебы: " + place); //объект будет разбит на переменные
}

contentOutput(student);


function printObject(obj) {
  let out = "";
  for (let p in obj) {//ключ "p"существует
    out = out + p /*ключ*/ + ": " + obj[p]/*значение ключа*/ + "\n";
  }
  alert(out);
}

printObject(student);