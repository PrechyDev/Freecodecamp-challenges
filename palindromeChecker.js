/*
Return true if the given string is a palindrome. Otherwise, return false.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

function palindrome(str) {
  let delRegex = /[\W+_]/g //this targets all non-alphanumeric characters including white spaces and underscores
  str = str.replace(delRegex,'').toLowerCase();
  let reverse = str.split('').reverse().join('')

  if(str == reverse) {
    return true
  }
  return false
}

