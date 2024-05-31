/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  if(str1.length != str2.length){
    return false
  }
  var i;
  var anagram1 = str1.split('');
  var anagram2 = str2.split('');
  for (i=0; i<anagram1.length; i++){
    if(anagram2.includes(anagram1[i]) ){
      var indexVal = anagram2.indexOf(anagram1[i])
      anagram2.splice(indexVal,1)
    }
    else{
      return false
    }
  }
    


  return (anagram2.length === 0);


}

module.exports = isAnagram;
