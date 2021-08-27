/* function fibonacciSeries (num){
    const fibo = [0, 1];
    for(let i = 2; i <=num; i++){
        fibo[i] = fibo[i-1] + fibo[i -2];
    }
    return fibo;
}
const fiboSeris =fibonacciSeries(10);
console.log(fiboSeris); */

function fibonacciSeries (num){
    if (typeof num!= 'number') {

        return 'Please give a number'
    }
    if(num < 2){
        const message = alert('Please give a positive number geter thand 1');
         return message;
    }
    const fibo = [0, 1];
    for(let i = 2; i <=num; i++){
        fibo[i] = fibo[i-1] + fibo[i -2];
    }
    return fibo;
}
const fiboSeris =fibonacciSeries(-23);
console.log(fiboSeris);