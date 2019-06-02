//1

let span1 = document.getElementById("sp1");
span1.style.background = "blue";
let span2 = document.querySelector(".time span:nth-child(2)");// не работает???
span1.style.background = "green";
let span3 = document.querySelector(".time span:nth-child(3)");
span1.style.background = "yellow";


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

let arr = [{},]

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