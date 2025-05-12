// Mario Problem //


let Luigi = +prompt("How much P");
let Mario = +prompt("How Much G");

function Minus(Mario){
    for (let i = Mario; i > 0; i--){
        Mario = Mario - 1;
    }
}

function World(){
    let row = "  ";
    for (let j = 0; j < Luigi ; j++){
        // row = row.padStart(2, Minus(Mario), " ");
        row = row + "#";
    }
    for (let i = 0; i < Luigi ; i++){
    let row2 = "";

        for(let j = 0; j < Luigi - 1 - i; j++){
            row2 = row2 + " "

        }
            
        for (let k = 0; k < Luigi - 3 + i; k++){    
            row2 = row2 + "#"
         }
    let row3 = row2 + row
        console.log(row3);
    }
}
World();

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