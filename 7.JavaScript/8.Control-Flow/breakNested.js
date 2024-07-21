// When break is used inside two nested loops, it terminates the inner loop. For example,
// Ex1:-
// for(let i=1; i<=5; i++){
//     for(let j=1;j<=5;j++){
//         if(i==3){
//             break;
//         }
//         console.log(`i : ${i} , j : ${j}`)
    
//     }
// }

// Ex2:-
for(let i=1; i<=5; i++){
    for(let j=1;j<=5;j++){
        if(j==3){
            break;
        }
        console.log(`i : ${i} , j : ${j}`)
    }
}
