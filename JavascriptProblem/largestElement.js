largestElemetn =(numbers)=>{
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 82];
const oldest = largestElemetn(ages)
// const oldest2 = largestElemetn([-2, -4, -27, -6])
// console.log(oldest2);

//Task: Find the lowest eleme of an arry

