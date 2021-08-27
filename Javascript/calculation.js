// 3! = 3 x 2 x 1
// 4! = 4 x 3 x 2 x 1
// 7! = 7 x 6 x 5 x 4 x 3 x 2 x 

// for(var i = 1; i <= 7; i++){
//     console.log(i)
//     let factorial = 1;
//     factorial = factorial * i;

// }

// let factorial = 1;
// for(let  i = 1; i <=5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

// Factorial

factorial =(number)=>{
    let fact = 1;
    for (let i = 1;  i<= number; i++){
        fact = fact * i;
    }
    return fact;
}

let firstFactorial= factorial(7);
console.log('factorial of 7 is ', firstFactorial);
let secondFactorial = factorial(9);
console.log('Factorial of 9 is ', secondFactorial);