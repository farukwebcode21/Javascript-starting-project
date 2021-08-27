// const food =['Banana', 'Apple', 'Orange', 'Pineaple', 'orlace'];
// console.log(food);
// console.log(...food);
// const tolbox = ['Hamer', 'Screwdriver', 'Ruler', 'Threestar'];
// for (const item of tolbox){
//     console.log(item);
// }

// const garage = ['BMW1', 'BMW2','BMW3'];
// const findModal = garage.includes('BMW4');
// console.log(findModal);
  
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const result =  numbers.map((num) =>{
//     return 2* num;
// });

// console.log(numbers);
// console.log(result);

// Searching===================

// let text = 'Faruk Ahmad Sadind Rahan';
// // search workd
// let name = text.search('Sadind');
// document.getElementById('demo').innerHTML = name;
// let result = text.replace('Ahmad', 'Khan');
// document.getElementById('demo').innerHTML = result;

// Arrow Function
// Before
// hello = function(){
//     return 'Hello wordl';
// }

// hello=()=>{
//      return 'Hello Word';

// }
// document.getElementById('demo').innerHTML = hello();

// higher order function

// hello =() =>{
//     console.log('Hello world');
// }
// hello();
// console.dir(hello);

// let time = '10.15pm';
// let bookprice = 115;
// let isWhiteColor = false;

// array 

// Button Disable

// let demo = document.getElementById('voel');
// let inputdata = prompt('Ente any leteer :');


// switch (inputdata){
//     case 'a':
//         demo.innerHTML=('Vowel');
//         break;
//     case 'e':
//         demo.innerHTML=('Vowel');
//         break;
//     case 'i':
//         demo.innerHTML=('Vowel');
//         break;
//     case '0':
//         demo.innerHTML=('Vowel');
//         break;
//     case 'u':
//         demo.innerHTML=('Vowel');
//         break;
//    default:
//     demo.innerHTML=('Constant');
        
// }

let addToButton = document.getElementById('btnclick'); 
let todoname = document.getElementById('box');
let inputField = document.getElementById('name');
addToButton.addEventListener('click', function(){
    let list = document.createElement('li')
    list.style.listStyle="none";
    list.innerText =inputField.value;
    todoname.appendChild(list);
    inputField.value ='';
    list.addEventListener('click', function(){
        list.style.textDecoration ='line-through';
    })
    list.addEventListener('dblclick', function(){
        todoname.removeChild(list)
    })
})