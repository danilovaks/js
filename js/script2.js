//1

let month = prompt(
	"Выберите номер месяца:\n1-Январь\n2-Февраль\n3-Март\n4-Апрель\n5-Май\n6-Июнь\n7-Июль\n8-Август\n9-Сентябрь\n10-Октябрь\n11-Ноябрь\n12-Декабрь");

if (month === "12" || month === "1" || month === "2") {
	alert("Зима");
} else if (month === "3" || month === "4" || month === "5")  {
	alert("Весна");
} else if (month === "6" || month === "7" || month === "8")  {
	alert("Лето");
} else if (month === "9" || month === "10" || month === "11")  {
	alert("Осень");
} 

//2

let unit = prompt("Выберите единицу измерения:\n1-Миллиметр\n2-Сантиметр\n3-Дециметр\n4-Метр\n5-Километp");
let l = prompt("Выберите длину отрезка: ");

switch(unit){
	case "1":
		alert("Длина отрезка в метрах = " + l / 1000);
		break;
	case "2":
		alert("Длина отрезка в метрах = " + l / 100);
		break;
	case "3":
		alert("Длина отрезка в метрах = " + l / 10);
		break;
	case "4":
		alert("Длина отрезка в метрах = " + l / 1);
		break;
	case "5":
		alert("Длина отрезка в метрах = " + l * 1000);
		break;
	default:
		alert("Не выбрана единица измерения");
}

//3

let number = parseFloat(prompt("Укажите число от -999 до 999 включительно: "));

if(number <= 999 && number >= 100){
	alert("трехзначное положительное число");
} else if (number <= 99 && number >= 10) {
	alert("двухзначное положительное число");
} else if (number <= 9 && number >= 1) {
	alert("однозначное положительное число");
} else if (number < 1 && number > -1) {
	alert("нулевое число");
} else if (number <= -1 && number >= -9) {
	alert("однозначное отрицательное число");
} else if (number <= -10 && number >= -99) {
	alert("двухзначное отрицательное число");
} else {
	alert("трехзначное отрицательное число");
}

//4

let i;

for(i = 1; i <= 100; i++ ){
	if ( i % 3 === 0) {
		console.log("Three"); //document.write("Three" + "<br/>");
	} else if ( i % 5 === 0) {
		console.log("Five"); //document.write("Five" + "<br/>");
	} else if ( i % 3 === 0 && i % 5 === 0) {
		console.log("ThreeFive"); //document.write("ThreeFive" + "<br/>");
	} else {
		console.log(i);
	}	
}

	