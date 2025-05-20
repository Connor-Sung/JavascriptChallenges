// Guess the Number
let y;
let x = [];  
function randomlessthan(num){
 y = (Math.floor(Math.random() * num))};
for (let j = 0; j < 5; j++ ){
randomlessthan(100);
// console.log(y);
for (i = 0; true; i++){ //loops until you get number
let Guess = +prompt("Guess the Number");

if (Guess < y){ // Less than the number
    console.log("That is pretty low");
    
}
if (Guess > y){ // Greater than the number
    console.log("That is pretty high");
}
if (Guess == y){
    console.log("Lucky");
    console.log(`Win(s) ${j + 1}`) // Counts wins
    break;
}
if (Guess == 0){
    alert("You stupid F*** choose a number");
    alert("You have ZERO purpose in life except guessing the number");
}
}
console.log(`${i} Rounds`)
x [x.length] = i;
}
let sum = 0;
while (x.length > 0) {
    sum += x.pop();
    console.log(x, sum);
}
sum = sum / 2;
console.log(`${sum} Rounds per win`);