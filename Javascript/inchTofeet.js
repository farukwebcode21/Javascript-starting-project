// Mile to Kilometer

// function mileToKilometer (miles){
//     var km = miles*1.60934;
//     return km;
// }
// var maraton = mileToKilometer(26.2);
// console.log('Maraton in km :', maraton);

// mileToKilometer = (miles) =>{
//     let km = miles * 1.60934;
//     return km;
// }
// let maraton = mileToKilometer(26.2);
// console.log('Marataon in km :', maraton);

inchesToFeet =(inches) =>{
    let feet = inches /12;
    return feet;
}


let  feet = inchesToFeet(132);
console.log('Feet ', feet);


let dadinInches = inchesToFeet(144);
console.log('Dadi see inch :', dadinInches);

let naniInches = inchesToFeet(156);
console.log('Nani see inch :', naniInches);
console.log(inchesToFeet(165));
