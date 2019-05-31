//1

function timer(obj) {
	let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let result;
    if(h < 10 || m < 10 || s < 10) {
    	result = "0" + h + ":" + "0" + m + ":" + "0" + s;
    } else {
    	result = h + ":" + m + ":" + s;
    }
    //obj.res.value = result;
}

setInterval(timer, 1000);

//2 

let arr = [{},]

//3

function trafficLight(){
	let i = 2, 
	arrColor = ["red", "yellow", "green"];

	function TLcall(){
		let div = document.getElementsByClassName("traffic-light");
		div[i].style.backgroundColor = "";
		if (++i > 2) i = 0;
   		div[i].style.backgroundColor = arrColor[i];
	}
    return TLcall;
}

let tl = trafficLight();
setInterval(tl, 2000);