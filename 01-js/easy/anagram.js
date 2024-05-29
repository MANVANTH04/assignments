/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length != str2.length){
    return false
  }
  var i;
  var anagram1 = str1.split('');
  var anagram2 = str2.split('');
  for (i=0; i<anagram1.length; i++){
    if(anagram1[i] in anagram2 ){
      var indexVal = anagram2.indexof(anagram1[i])
      anagram2.splice(indexVal,1)
    }
  }
 

  return (anagram2.length = 0);


}

module.exports = isAnagram;
