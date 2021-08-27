/* const numbers = [44, 23,20, 55, 60,40];
let sum = 0
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum); */

function bestFriend(names){
    let sum = 0 ;
    for(let i = 0; i< names.length; i++){
        const element =Math.max(names[i]);
        // sum = Math.max(element);
        return element;
    }
}

const total = bestFriend(['Faruk', 'Moktar', 'Parvez', 'Sohel']);
console.log(total);