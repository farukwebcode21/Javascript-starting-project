function perfectFriend(names){
    let largestName = [];
    for( let i = 0; i < names.length; i++){
        const element = names [i];
        if(element > largestName){
            largestName = element;
        }

    }
    return largestName


}

const names = ['abul', 'babul', 'sabuaml', 'cakel', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'abul', 'habul']
const oldest = perfectFriend(names);
console.log(oldest);


// /* function removeDuplicate(names){
//     const unique = [];
//     /* for(let i = 0; i < names.length; i++){
//         const element = names[i]
//         // console.log(element);
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique; */
//     for(const element of names){
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
            
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames); */

/* function perfectFriend(names){
    let largestName = names[0];
    for(let i = 0; i < names.length; i++){
        const element = names[i];
        if (element >largestName) {
            largestName = element;
        }
    }
    return largestName;
}
const oldest = perfectFriend(names);
console.log(oldest);
 */