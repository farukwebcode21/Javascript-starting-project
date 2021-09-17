// const far = new Map();
// far.set('Full Name :', 'Faruk Ahmad');
// const name = far.get('Full Name :');
// console.log(name);
// const fullname = far.has('Full Name :');
// console.log(fullname);
// const something = far.has('Something');
// console.log(something);
// far.set('firstname', 'Maruf');
// console.log(far.has('firstname'));
// console.log(far);
// console.log(far.size);

/* function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log('Welcome to 10 Days of Javascript !');
}
// greeting();

function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  
  var word = findLongestWord(["The","quick","brown", "foxxxxx", "jumped", "over", "the", "lazy", "dog"]);
  console.log(word); */

  /* function findLongWord(array){
      let longestWord ='';
      array.forEach(function(word){
          if (word.length <= 5) {
              longestWord = word;
          }
      });
      return longestWord;
  }
  let word = findLongWord(['Faruk', 'Shagor', 'Rakib', 'Rumnan', 'Moriam', 'Karmikal']);
  console.log(word); */

  let params =['kabul', 'sabul', 'babul', 'rabul', 'sabul', 'babul', 'rakib', 'sakib', 'rabil', 'sabil'];
  // let unique = [];
  // for (let i =0; i<names.length; i++){
  //   let element = names[i];
  //   if (unique.indexOf(element) == -1) {
  //     unique.push(element);
  //   }
  // }
  // console.log('Unique array is: ', unique);
  let unique = [];
  for(const element of params){
    console.log('Testing :',unique);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  console.log('Unique array is: ', unique);