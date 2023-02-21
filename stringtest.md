

Ans - 1
let capitaize = "wecodeacademy";
let newWord = capitaize.charAt(0).toUpperCase() + capitaize.slice(1);;
console.log(newWord)




Ans -2

let str1 = "we are learning exercises ";
let str4 = str1.slice(0, 15);
let endstr = str1.slice(15, 24);

console.log(str4.concat(" JavaScript", endstr));




Ans -3

NaN

Ans - 4

NaN




Ans - 5

for (let i = 1; i <= 11; i++) {
    let value = "" + "$";
    if(i % 2 === 1){
        console.log(value.repeat(i))
    }
}



Ans - 6

const name = prompt("What is your name?");
const birthYear = Number(prompt("What is your birth year?"));
const age = 2023 - birthYear;
const countryCode = prompt("What is your country code?");
let mobileNumber = Number(prompt("What is your mobile number?"))
let address = prompt("What is your address ?");

console.log(`My name is ${name}. I was born in ${birthYear} and my current age is ${age} years. My address is ${address} and my mobile number is ${countryCode}${mobileNumber}.`)

Ans -7 

let str = "Wecode Academy";
let newStr = "Hello World";
let str2 = str.slice(0,7);
let str3 = str.slice(6,14)
console.log(str2 + newStr + str3);


Ans - 8

let str = "We code academy";
let check  = str.indexOf("a");

if (check === 7) {
  console.log("congratulation");
} else {
  console.log("Sorry");
}


Ans - 9
for (let i = 11; i >= 1 ; i--) {
    let value = "" + "*";
    if(i % 2 === 1){
        console.log(value.repeat(i))
    }
}

Ans -10

NaN


