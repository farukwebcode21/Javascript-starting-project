isLeapYear =(year) =>{
    if(year % 4 == 0){
        return true
    }else{
        return false
    }
}

const myyear = 2100;
const isMyYear =isLeapYear(myyear);
console.log('is your year leapyear', isMyYear);

leapYear =(year) =>{
    if((year% 4 == 0) && (year % 100 != 0) || (year % 400 ==0)){
        return true;
    }else{
        return false;
    }
}
const leap = 2100;
const result = leapYear(leap);
console.log('Show This is ',result);