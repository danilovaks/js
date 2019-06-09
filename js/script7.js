//1

let span1 = document.getElementById("sp1");
span1.style.background = "blue";
let span2 = document.querySelector(".time span:nth-child(2)");
span2.style.background = "green";
let span3 = document.querySelector(".time span:nth-child(3)");
span3.style.background = "yellow";


function timer() {
	let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if(h < 10) {
    	h = "0" + h;
    } 
    if(m < 10) {
    	m = "0" + m;
    }
    if(s < 10) {
    	s = "0" + s;
    } 
    span1.innerHTML = h + ":";
    span2.innerHTML = m + ":";
    span3.innerHTML = s;
}

setInterval(timer, 1000);

//2 

let arr = [{
	img: "img/grenland.jpg",
	name: "tulen1",
	description: "Гренландский тюлень 1"
	}, {
	img: "img/grenland2.jpg",
	name: "tulen2",
	description: "Гренландский тюлень 2"
	}, {
	img: "img/grenland3.jpg",
	name: "tulen3",
	description: "Гренландский тюлень 3"
	}];

function arrOutput(arr) {
	for (let i = 0; i < arr.length; i++) {
		let container = document.createElement("div");
		document.body.appendChild(container);
		let name = document.createElement("h3");
		container.appendChild(name);
		name.innerText = arr[i].name;
	    let img = document.createElement("img");  
	    container.appendChild(img);
	    img.style.width = "100px";
	    img.src = arr[i].img;
	    let description = document.createElement("p");
	    container.appendChild(description);
	    description.innerText = arr[i].description;
	}
}

arrOutput(arr);

//3

function trafficLight(){
	let arrColor = ["red", "yellow", "green"], i = 2;

	function TLcall(){
		let div = document.getElementsByClassName("traffic-light");
		div[i].style.backgroundColor = "";
		
		if (++i > 2) {
			i = 0;
		} 
   		div[i].style.backgroundColor = arrColor[i];
	}
    return TLcall;
}

let tl = trafficLight();
setInterval(tl, 2000);