//1

let coloring = document.querySelectorAll(".coloring div");

for (let i = 0; i < coloring.length; i++){
    coloring[i].addEventListener("click", reshaping);//добавление обработчика
} 

function reshaping() {
    if (this.style.backgroundColor === "") {
    	this.style.backgroundColor = "green";
	} else { 
		this.style.backgroundColor = "";
	}
}

//2

let button = document.getElementsByClassName("button"), s = 0;

function counter(n) {
	s += n;
	button[0].innerHTML = s;//
	console.log(s);
}

//3

let comment = document.getElementById("comment");
let btn = document.getElementById("btn");

btn.addEventListener("click", commentF);

function commentF() {

	let	img = document.createElement("img");
	img.src = "img/images.jpg";
	img.style.width = "50px";
	document.body.appendChild(img);//добавить растр в блок!!!!!

	let div = document.createElement("div");
	document.body.appendChild(div);
	div.setAttribute("style", "width: 150px; display: inline-block; background-color: lightgray; text-align: center;");


	let autoR = document.createTextNode("Автор");
	div.appendChild(autoR);

	let date = new Date();

	div.innerHTML = comment.value + "</br>" + autoR.textContent + "</br>" + date.toDateString()/*new Date*/;
}

//4 TABLE

let books = [{
	aticle: "арт123",
	img: "img/book_1.jpeg",
	name: "book_1",
	description: "Будущее разума",
	autor: "Митио Каку"
	}, {
	aticle: "арт124",
	img: "img/book_2.jpg",
	name: "book_2",
	description: "Физика невозможного",
	autor: "Митио Каку"
	}, {
	aticle: "арт125",
	img: "img/book_3.jpg",
	name: "book_3",
	description: "Физика будущего",
	autor: "Митио Каку"
	}];

function booksOutput(books) {
	for (let i = 0; i < books.length; i++) {
		let container = document.createElement("table");
		document.body.appendChild(container);
		container.setAttribute("style", "border: 1px solid gray; color: gray; text-align: center;");//не желательно такое написание

		let trContainer = document.createElement("tr");//строка
		container.appendChild(trContainer);

		let tdName = document.createElement("td");//ячейка
		trContainer.appendChild(tdName);
		tdName.innerText = books[i].name;

		let tdAticle = document.createElement("td");
		trContainer.appendChild(tdAticle);
		tdAticle.innerText = books[i].aticle;

		let tdImg = document.createElement("td");
		trContainer.appendChild(tdImg);
		let img = document.createElement("img");  
		tdImg.appendChild(img);
	    img.style.width = "100px";
	    img.src = books[i].img;

		let tdDescription = document.createElement("td");
		trContainer.appendChild(tdDescription);
		tdDescription.innerText = books[i].description;

		let tdAutor = document.createElement("td");
		trContainer.appendChild(tdAutor);
		tdAutor.innerText = books[i].autor;
	}
}

booksOutput(books);
