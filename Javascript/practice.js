// leapYear
// odd even
// factorial(while, for)

// Home work

//celciusToFarenhite
// farhenhit to celcius
// grade calculation
// simple interest

/*

//  Celsius To Fahrenheit 

celciousToFarenhit=(celsius)=>{
    let farhenhit = (celsius *9/5)+32;
    return farhenhit;
}

let todayCelcius = 40;
let result =celciousToFarenhit(todayCelcius);
console.log('Today', result,'Fareinhait');
*/

// Fahrenheit To celsius 
const farhrenheitTocelsius =(farhenhit)=>{
    let celcius = (farhenhit-32)*5/9;
    return celcius;
}

let todayFahren = 1;
let celciusToday = farhrenheitTocelsius(todayFahren);
console.log('Today Celcius',celciusToday.toFixed(4));

// Grade Calculation
// getGrade =(percent) =>{
//     if (percent >=80){
//         return 'A+';
//     }
//     if(percent >=70){
//         return 'A';
//     }
//     if(percent >=60){
//         return 'A-';
//     }
//     if(percent >=50){
//         return 'B';
//     }
//     if(percent >=40){
//         return 'B+';
//     }
//     if(percent >= 33){
//         return 'C';
//     }
//     return 'F';
// }
// console.log(getGrade(88));
// console.log(getGrade(89));
// console.log(getGrade(78));
// console.log(getGrade(65));
// console.log(getGrade(55));
