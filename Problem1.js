// Mario Problem //


let Luigi = +prompt("How much P");
let Mario = +prompt("How Much G");

function Minus(Mario){
    for (let i = Mario; i > 0; i--){
        Mario = Mario - 1;
    }
}

function Minus2(Luigi){
    for (let i = Luigi; i > 0; i--){
        Luigi = Luigi - 1;
    }
}

function build(Mario) {
    let row = "";
    for (let i = 0; i < Mario ; i++){
            // loop that does row = row + " ", 
        row = row.padStart(2, Minus(Mario), " ");
        // loop that does row = row + "#"
        row = row + "#";
        console.log(row);
    }
}
console.log(build(Mario));
function build2(Luigi) {
    let row2 = "";
    for (let i = 1; i < Luigi ; i++){
            // loop that does row = row + " ", 
        for(let j = 0; j < Luigi - i; j++){
            row2 = row2 + " "
        }
            
        // loop that does row = row + "#"
        for(let k = 0; k < i; k++){
            row2 = row2 + "#"
        }
        console.log(row2);
    }
}
console.log(build2(Luigi));

// let World = Luigi.concat(Mario);
// console.log(World);

// for(let i = 0; i < Mario; i++){
//     build(Mario);
//     console.log(build(Mario))
// }

// function buildest(Luigi) {
//     let  row3 = "  ";
//     for (let i = 0; i < Mario ; i++){
//         row3 = row3 + " "
//     }
//     row3 = row3 + "#";
//     console.log (row3);
// }

// buildest(Luigi);
// console.log(buildest(Luigi));

// function Repeat (Mario){
//     for (let i = 0; i < Mario; i++){
//     let row = "";
//     row.padStart () = row + " ";
//     console.log(row);
//     }
// };

// function Repeat2 (Mario){
//     for (let i = Mario; i <= 0; i--){
//     Repeat (Mario);
//     row = row + "#";
//     console.log(row);
//     }
// }

// // Repeat (Mario);
// Repeat2 (Mario);