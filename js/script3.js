//1

let A = [ 12, 4, 3, 10, 1, 20 ], B = [-3, -7, -100, -33], C = [];

C = A.concat(B);
console.log(C);

C = B.concat(A);
console.log(C);


//2

let area = [1, null, 0, null, 1, null, null, null, null];
let tab = "<table><tbody>"; //как здесь прописать стиль?

for (let j = 0; j < area.length; j++) {

    if (j != 0 && j % 3 === 0) {
        tab = tab + "<tr>";//появляется строка 
    } 

    if (area[j] === 1) {
        tab = tab + "<td>" + "x" + "</td>"; //появляется ячейка
    } else if (area[j] === 0) {
        tab = tab + "<td>" + "0" + "</td>";
    } else {
        tab = tab + "<td>" + " " + "</td>";
    }

}

tab = tab + "</tr>";
tab = tab + "</tbody></table>";
document.write(tab);

//3

let arr = [12,4,5,10,1,2], min, max;

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

min = arr.indexOf(min); //важен порядок....!!!
arr.splice(min, 1);

max = arr.indexOf(max);
arr.splice(max, 1);

console.log(arr);
