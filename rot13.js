//Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
//this function does not work for all

function rot13(str) {
  var alphabets = ['A','B','C','D','E','F','G,','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var arr = str.split('')
  var changed = []

  for (let i=0; i<arr.length;i++){
    if (alphabets.includes(arr[i])){
      if (alphabets.indexOf(arr[i])-13 < 0) {
        changed.push(alphabets[26+(alphabets.indexOf(arr[i])-13)])
      } else {
        changed.push(alphabets[alphabets.indexOf(arr[i])-13])
      }
    } else {
      changed.push(arr[i])
    }
    }
    return changed.join('')
  }

//solution two (optimized)
function rot13(str) {
  var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
  var arr = str.split('')
  var changed = []
  for (var i=0; i<arr.length; i++){
    if (alphabets.includes(arr[i])) {
      changed.push(cipher[alphabets.indexOf(arr[i])])
    } else {
      changed.push(arr[i])
    }
  }
  return changed.join('')
  }


rot13("SERR PBQR PNZC");
