/*Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result = userCheck.test(username);

/*
^[a-z][a-z]+\d*$ - starts with an alphabet, the next chars are alphabets, ends with 0 or more digits
(if its just 2 chars, they have to be alphabets).

^[a-z]\d\d+$ - starts with an alphabet, ends with two or more digits (username has to be 3 or more chars).
*/


//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
