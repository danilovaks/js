//1

let A = [ 12, 4, 3, 10, 1, 20 ], B = [-3, -7, -100, -33], C = [];

C = A.concat(B);
console.log(C);

C = B.concat(A);
console.log(C);


//2

let area = [ 1, null, 0, null, 1, null, null, null, null ], field, table;
table = "<table><tbody>";

/*for(let j = 0; j < area.length; j++) {
        if(j != 0 && j % 3 == 0) {
            document.write("X");
        }
        if(j === 0 ) {
        	document.write("0");
        } else {
        	document.write(" ");
        }
    }*/
    

//3

let arr = [12,4,3,10,1,20], min, max;

min = arr [0];
max = arr [0];

for(let i = 1; i < arr.length; i++ ) {
	if( min > arr[i]) {
		min = arr[i];
	}
	if( max < arr[i]) {
		max = arr[i];
	}
}

console.log(min, max);

console.log(arr.indexOf(1));
console.log(arr.indexOf(20));

arr.splice(4);
arr.splice(5);

console.log(arr);
