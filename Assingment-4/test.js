// How Add Total Sum :

// let sum = 0;
// for(let i = 0; i <= 6; i++){
//     sum = sum + i;
// }
// console.log(sum);

// How Decrease number
// let sum = 0;
// for ( let  i= 6; i>=1; i--){
//     sum = sum + i;
//     console.log(sum);
// }
// console.log(sum);

// let sum = 0;
// for(let i =6; i<=10; i++){
//     sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
/* let sum = 0;
for(let i =10; i>=6; i--){
    sum = sum + i;
}
console.log(sum); */

function sum(i){
    if (i == 1) {
        return 1;
    }
    return i + sum(i-1);
}
console.log(sum(6));

