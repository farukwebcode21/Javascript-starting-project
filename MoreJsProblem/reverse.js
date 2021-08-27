/* const greatting = " Hello World Bangladesh"
function reverseString(text){
    let reverse ='';
    for(const letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
}
const reversed = reverseString(greatting);
console.log(reversed); */
function reversString(str){
    // let splitString = str.split('');
    // let reverseArray = splitString.reverse();
    // let joinArray = reverseArray.join('');
    // return joinArray;
    return str.split('').reverse().join('');
}
const result = reversString('hello');
console.log(result);