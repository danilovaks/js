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

res = (a < b && a < c) ? "10" : (b < c && b < a) ? "15" : (c < a && c < b) ? "1" : "-";

console.log(res); //1



let d, v, k, l, result;

d = 8;
v = 12.5;

k = (10 - d > 0)? "(10-d)" : "-(10-d)";
l = (10 - v > 0)? "(10 - v)" : "-(10 - v)";
result = (k<l) ? "8" : "12.5";
console.log(result); //

