// 10.Take a String and check its length. If string length is greater than 15 then print 2's table till the length of the string else print No

let str = "taiyab taiyab husain";
let newstr = str.length
if(newstr>15){
    for(i=1; i<=20; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
} else {
    console.log("No")
}


// 09. Write a program to check if a number is divisible by 10 && 20 or not. If yes then multiply the number by 51 else multiply the number by 59 and print.

let divisible = 90;
if(divisible % 10 && divisible % 20){
    console.log(divisible * 51 )
} else {
    console.log(divisible * 59 )
} 

// 08 Write a JavaScript program to check if out of 5 numbers any two numbers are same or not. If yes then print Yes else print No.

let a = 2;
let b = 24;
let c = 2;
let d = 23;
let e = 21; 

if(a == b || a == c || a == d || 
   a == e || b == c || b == d ||
   b == e || c == d || c == e ||
   d == e ){
    console.log("two numbers are same")
} else {
    console.log("no any numbers are same")
}

// 07. Write a JavaScript program to check from two given integers, whether one is greater than 18 and another one is less than 10.
// If yes then print sum of both the numbers Else print multiplication of both numbers

let oneNumber = 20;
let secnumber = 8;
if(oneNumber>18 && secnumber<10){
    console.log(oneNumber + secnumber)
} else {
    console.log(oneNumber * secnumber)
}

// 06 Take any number and take other number as 39. Now check their difference by subtracting each other. If both numbers difference is greater than 40 then print double their absolute difference else print triple their absolute difference.

let num_1  = 120;
let num_2 = 39;
let subtracting = num_1 - num_2;
let newnum;
if(subtracting<0){
    newnum = subtracting * -1
}else {
    newnum = subtracting;
}
if(newnum>40 && num_1 > 40){
    console.log(newnum*2)
} else {
    console.log(newnum*3)
}
console.log(newnum)



// Ask user his/her age, "What is your age?"

// If user age is greater than 18 and less than 50 then ask user "Would you like to have a coffee?" If user click on Okay then ask for his/her choice with questions "What type of coffee you want to have?" and finally in the alert show message "Hello Sir/Mam, here is your coffee ###"

// If user age is less than 18 then ask him question in confirm box "Would you like to have tea?" If user says yes then ask "What type of tea do you want?" and then in alert show "Hello Sir/Mam, here is your ### tea." Else show "Sorry visit again please." in alert box

// let yourAge = Number(prompt("What is your age?"));
// if(yourAge>18 && yourAge<50){
//    let drink =  confirm("Would you like to have a coffee?");
//     if(drink === true){
//         let choice = prompt("What type of coffee you want to have?");
//         alert(`Hello Sir/Mam, here is your coffee ${choice}`)
//     } else{
//         alert(`Sorry sir`)
//     }    
//     } else if (yourAge<18 ){
//      let drink_2 =  confirm("Would you like to have a tea?");
//     if(drink_2 === true){
//         let choice_2 = prompt("What type of Tea you want to have?");
//         alert(`Hello Sir/Mam, here is your tea ${choice_2}`)
//     } else{
//         alert(`Sorry sir please visit again`)
//     }      
//     }


// Using a switch case to do this exercise

// Ask user a question "Do you drink tea/coffee" ?

// (a)If user says tea print tea
// (b)If user says coffee then print coffee
// (c)If users say anything else then print water

// let bevrage = prompt("Do you drink tea/coffee");

// switch(bevrage){
//     case "Tea":
//         console.log("Tea");
//         break;
//         case "coffee" :
//             console.log("coffee");
//             break;
//             default :
//             console.log("Water");
// }

// Ask the user question "How many times do you want to print Series". Then print below series. For example below series will print if user enteres 5

//  1 2 3 5 8 13 21 34 55 Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.

//let count_1 = Number(prompt("How many times do you want to print Series"));

// let x = 1;
// let y = 1;
// let z = 1;

// for(t = 1; t<= count_1; t++){
//     console.log(z);
//     x = y;
//     y = z;
//     z = x + y ;
// }


//Print below Pattern
/*
$$#$$#$$
$$#$$#
$$#$$
$$#
$$
*/
 
for(x=5; x>=1; x--){
    let ans2 = "";
    for(y=1 ; y<=x ; y++){
        if(y % 2 === 1){
        ans2 = ans2 + "$$";
        } else {
            ans2 = ans2 + "#"
        }
    }
    console.log(ans2)
}


// pattern
// $
// $$
// $$$
// $$$$
// $$$$$
for(i = 1; i <= 5; i++ ){
    let ace = "";
    for(y = 1; y <= i ; y++ ){
        ace += "$" ; 
    }
    console.log(ace)
}


//////////////////////////////////////

// *****
// *   *
// *   *
// *   *
// *****

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

let row = 5;
let str_space = "";

for(i = 1 ; i <= row; i++){
    for(j = 1; j <= row; j++ ){
        if(i === 1 || i === row - 1){
            
        }
    }
}