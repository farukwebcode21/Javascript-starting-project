// const business = 450;
// const minister = 750;
// const army = 800;


// if(business > minister){
//     console.log('Business person er pola is bigger');
// }else{
//     console.log('Minister er pola is bigger')
// }

/* 
if (business > minister && business >army) {
    console.log('Business is bigger ')
}else if (minister > business && minister > army) {
    console.log('Minister is bigger thand business and army');
    
}else {
    console.log('Army is Bigger ')
    
} */  

/* findLarge =(first, second, third)=>{
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second >third){
        return second;
    }else{
        return third;
        
    }
}

const first =4150;
const second =500;
const third =2000;
console.log(findLarge(first, second, third)); */

findSmallNumber = (a, b, c) =>{
    if (a <= b && a <= c) {
        return a;
    }else if (b <= a && b <= c) {
        return b;        
    }else{
        return c;
    }
}
let a = 5, b= 3, c=7;
const result = findSmallNumber(a, b, c);
console.log('The small number is :', result);
