/* // How To Declear Array
function stringReverese(str) {
    let splitString = str.split('');
    let reverseArray = splitString.reverse();
    let jointArray = reverseArray.join("");
    return jointArray;
    
 }
 const reveReus = stringReverese('sala reverse kor taratari');
 console.log(reveReus); */

/*  var plorp = ['sameLength', 'someoth', 'asfzc', 'sameLLngth'];
    ln = plorp.reduce((r,s) => r > s.length ? r : s.length, 0);


const result = plorp.filter(pl => pl.length == ln);

console.log(result); */


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
  console.log(word);

  function friendName(names){
      let longestWord ="";
      array.forEach(function(word){
          if (word.length == 5) {
              
              
          }
      })

  }