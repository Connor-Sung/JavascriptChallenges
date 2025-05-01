// Mario Problem //


let Mario = +prompt("How Much G")
let Luigi = +prompt("How much P")

function Minus(Mario){
    for (let i = Mario; i > 0; i--){
        Mario = Mario - 1;
    }
}
Minus(Mario);

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
build(Mario);
function build(Luigi) {
    let row = "";
    for (let i = 0; i < Mario ; i++){
            // loop that does row = row + " ", 
        row = row.padStart(2, Minus(Mario), " ");
        // loop that does row = row + "#"
        row = row + "#";
        console.log(row);
    }
}
build(Luigi);

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