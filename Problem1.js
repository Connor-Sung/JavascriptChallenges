// Mario Problem //


let Mario = +prompt("How Much P") + 1 
let Luigi = +prompt("How much G")

function Minus(Mario){
    for (let i = Mario; i > 0; i--){
        Mario = Mario - 1;
        console.log(Mario);
    }
}
Minus(Mario);

// function build(Mario) {
//     for (let i = 0; i < Mario ; i++){
//         let row = "";
//         row = row + " ";
//          
//     }
// }
// function builder(Mario) {
//     build(Mario);
//     let row2 = row
//     row2 = row2 + "#";
//     // row2.slice(i, Mario);
//     console.log (row2);
// }

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