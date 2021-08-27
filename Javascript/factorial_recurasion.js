factorialsRecursive =(n) =>{
    if(n == 1){
        return 1;
    }
    return n * factorialsRecursive(n-1);

}
const myFactorials = factorialsRecursive(7);
console.log('Factorials recuration:', myFactorials);