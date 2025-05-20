// Sum of the Square
let num = 1;
let Array2 = [];
for (i = 1; i <= 100; i++){ // Finds Squared then Add
num = i**2;
Array2 [Array2.length] = num;
}
let sum = 0;
while (Array2.length > 0) {
    sum += Array2.pop();
    console.log(Array2, sum);
    
}
let num2 = 0;
let Array3 = [];
for (j = 1; j <= 100; j++){ // Find Add then Squared
    num2 = num2 + j
    Array3 [Array3.length] = num2;
    console.log(num2);
}
let sum2 = 0
while (Array3 > 0) {
    sum2 += Array3.pop();
    console.log(x, sum2);
}
num2 = num2**2;
console.log (num2);
num3 = num2 - sum;
console.log(num3);

// let sum = 0;
// while (x.length > 0) {
//     sum += x.pop();
//     console.log(x, sum);
// }