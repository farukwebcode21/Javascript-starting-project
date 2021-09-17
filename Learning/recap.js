 function largestElement(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > max) {
            max = element;
            // console.log(max);
        }
    }
    return max;
}

let numbers =largestElement([100, 2000, 5000, 7000, 100000]);
console.log(numbers); 

function smallNumber(numbers){
    let min = numbers[0];
    for(let i =0; i<numbers.length; i++){
        const element = numbers[i];
        console.log('Total Number : ',element);
        if (element < min) {
            min = element;
        }
    }
    return min;
}

let result = smallNumber([20, 10, 15, 2, 200, 50, 100])
console.log(result);