//Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case

function convertToRoman(num) {
 let roman = '';
 let values = {M:1000,CM:900,D:500,CD:400,C:100,
 XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}

//loop through the object values
 for (let i in values){
//while the number is >= the value of a key on the object, add the key to Roman and substract its value from the num
   while(num>=values[i]){
     roman+=i
     num-=values[i]
   }
 }
 return roman
}



convertToRoman(36);
