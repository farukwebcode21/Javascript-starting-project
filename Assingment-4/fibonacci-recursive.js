/* const fibo =[0, 1];
for(let i = 2; i<=6; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */

function fibo(n){
    if (n === 0) {
        return 0;
    }if (n=== 1) {
        return 1;
    }else{
        return fibo(n-1) + fibo(n-2);
    }
    
}

console.log(fibo(6));