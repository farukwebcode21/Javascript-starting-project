// 7: Odd Number Find Out ===============================


/* for(let i = 7;  i<=17; i++){
    if (i % 2 != 0) {
        console.log(i);
        
    }
} */


/* let number = 7;
while(number <= 19){
    if (number % 2 != 0) {
        console.log(number);
    }
    number++;
} */

/* let number = 7;
while(number <=19){
    console.log('Odd Number :', + number);
    number = number + 2;
} */


// 8: Array Declear
/* let name = ['Faruk', 'Ahmad', 'Shagor', 'Kamal', 'Rahim', 'Shorif', 'Uzzal', 'Shafin'];
name[4] ='Change';
console.log(name);
name.push('Raihan' , 'salman');
console.log(name);
name.pop();
console.log(name);
console.log(name.length); */

// 9: Array use for loop for showing all element in array

/* let newarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for(i = 1; i <= newarray.length; i++){
    console.log(i);
} */

// 10: How to find out Big number 

// 11: How to output return 3 multiple number

// 12:How to Declear Object and how to and three properties and how to change propery any properties value


/* let stuendt={
    name: 'Faruk',
    age: 30,
    student_id:10,
    school: 'primary school'
}

console.log(stuendt);
stuendt.age = 25;
console.log(stuendt.age);
 */

/* const person ={
    firstName: 'Faruk',
    lastName : 'Ahmad',
    age : 25,
    eyeColor: 'blue1',
    height: 5.6,
    village: 'Dangegram'

}


console.log('Her Full Name is ', person.firstName, person.lastName); */

/* 
for (var i = 1; i <= 100; i++) {
    var message = '';
    if (i%3 === 0) message += 'ping';
    if (i%5 === 0) message += 'pong';
    console.log(message || i);
  }
 */
 
  
//   increase Number

/* const number = [20, 30, 60, 100, 200, 288, 300];
let sum = 0;

for(let i = 0; i < number.length; i++){
    const element = number[i]
    sum = sum + element;
}
console.log(sum);

function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

console.log(arrayTotal(number));
 */

const business =500;
const minister = 300;
const army = 500;

function findLargestN(first, second){
    if (first > second) {
        return first;
    }else{
        return second;
    }
}

const largest  = findLargestN(0, 30);
console.log(largest);

