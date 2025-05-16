// Prime Factor:

// let Num = +prompt ("Random Number NOW"); // 600851475143
let Num2 = 600851475143
console.log (1);
for ( let i = 2; i <= (Num2); i++){
    if (Num2 % i == 0) { // Finds Factors of the Number
        if ( i % Primes2() !== 0 ){ // Suppose to Elmininate Numbers if they are divisible by anything expect itself
        console.log(i);
        continue;
        }
    continue;
    
    }
}
function Primes2(){ // Generates Numbers to help find Primes
    
    let j = 2;

    while (j <= Num2 - 1){
        j++;
        if (j = i){
            j++
        }
        console.log(j);
    }
}
// let Primes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// for ( let i = 2; i <= Num2; i++){
//     if (Num2 % i == 0) { // Finds Factors of the Number
//         if ( i % Primes2() !== 0 ){ // Suppose to Elmininate Numbers if they are divisible by anything expect itself
//         console.log(i);
//         continue;
//         }
//     continue;
    
//     }
// }


// let sum = 0;
// while (Primes.length > 0) {
//     sum += Primes.pop();
//     console.log(Primes, sum);
// }