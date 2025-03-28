function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
  
//palindrome helps read backwards and forward and its either a phrase or a word.

  console.log(isPalindrome("myname")); 
  console.log(isPalindrome("shakirah")); 
  