let s, gr, x;

s = 1000;
gr = 15 * 25;

x = s - gr * parseInt(s / gr);
console.log(x); //250



let so, ov, y;

so = 15 * 100;
ov = 600;

y = so - ov;
console.log(y); //900



let a, b, c, res;

a = 10;
b = 15;
c = 1;

res = (a < b && a < c) ? a : (b < c && b < a) ? b : (c < a && c < b) ? c : "-";

console.log(res); //1



let d, v, ost1, ost2, result;

d = 9;
v = 10.5;
ost1 = ((ost1 = 10 - d) > 0)? ost1 : -ost1;
ost2 = ((ost2 = 10 - v) > 0)? ost2 : -ost2;
console.log(ost1,ost2);

result = (ost1<ost2) ? d : v;
console.log(result); 
