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
