//1. If marks are greater than 60 then print Pass else print Fail

let marks = 50;

marks>60 ? console.log("Pass") : console.log("Fail")
    

// 2. Take two numbers and check if both numbers are odd or not. If yes then print Odd otherwise print Even ?


let number1 = 7;
let number2 = 11;

number1 % 2 ===1 && number2 % 2===1 ? console.log("odd") : console.log("even")


//7. Take a number and check if number is divisible by 10 && 5. If yes then print Yes else print no ???

let num1 = 100;
num1 % 10 ===0 && num1 % 5===0 ? console.log("Yes") : console.log("No")

//8. Take a number and check if number * 20 makes it 100 or not. If yes the print Yes else print No???


let number7 = 9;

number7*20 === 100 ? console.log("Yes") : console.log("No")

//9. Calculate your 10ths percentage and print Pass or Fail if marks are more than 70 then print Pass else print Fail ??

let maths = 80;
let english = 80;
let hindi = 80;
let socialScience = 80;
let science = 0;

let mark = (maths + english + hindi + socialScience + science ) / 500 *100;

mark > 70 ? console.log("pass") : console.log("Fail") 

//10. Take your year age and check if your age is greater than 21 then print Adult else print Minor??
const birthYear = 1994;
let year = 2023;
let age = year - birthYear;
age > 21 ? console.log("Adult") : console.log("Minor") 


/* 2. Marksheet Logic
percentage >= 80 Distinction
percentage greater than or equal to 60 and less than 80 first division
percentage greater than or equal to 33 and less than 60 second division
percentage less than 33 fail
*/

let subjectMarks = 500;
let totalMarks = 1000;
let per = subjectMarks/totalMarks * 100 ;
if (per >= 80){
    console.log("Distinction")
} else if (per >= 60 && per<80){
    console.log("first division")
}else if (per >=33 && per<60){
    console.log("second division")
}else if(per < 33 ){
    console.log("Fail")
}

// find max of 2 numbers 

let num = 2;
let num2 = 9;

if (num > num2){
    console.log("Number is Greater - " + num )
} else if (num<num2){
    console.log("Number is Greater - " + num2 )
}else {
    console.log("both number is equal")
}

// find max of 3 numbers 

let a = 1222;
let b = 20;
let c = 200;

if (a > b){
    console.log("Number is Greater - " + a )
} else if (b > c){
    console.log("Number is Greater - " + b )

}else if (c > a){
    console.log("Number is Greater - " + c )

}else {
    console.log("all number is equal")
}

// one more answer

let max;
if(a > b && a > c){
    console.log(a) ;
} else if (b >c ){
    console.log(b) ;
}else {
    console.log(c) ;
}


//find maximum age??

let taiyab = 1994;
let kurshid = 1986;
let sajid = 1991;
let yearAge = 2023;

let a1 = (yearAge-taiyab);
let b1 = (yearAge - kurshid);
let c1 = (yearAge-sajid);

if (a1 > b1 && a1 > c1){
    console.log(a1 , taiyab);
} else if (b1>c1){
    console.log(b1 , kurshid);
}else {
    console.log(c1 , sajid);
}

// one more find max age ???
let year1 = 2023;
let person1 = 1990;
let person2 = 1992;
let person3 = 1984;
let p1Age = (year1-person1);
let p2Age = (year1-person2);
let p3Age = (year1-person3);
let Big = p1Age;
if(p2Age>Big){
Big = p2Age;
}
if(p3Age>Big){
Big = p3Age;
}
console.log(Big);


// ! use this oprator in condition??

let a2 = 10;
let b2= 20;
let c2 = 30;
if (!(!b2 < !c2)) {
  console.log("Yes");
} else {
  console.log("No");
}


//truthy and falsy(bolean m true ki value 1 hoti h or false ki value humesh 0 hoti h.)


if (!9) {      /* yaha 9 true value h to ! y sign hone ki wajh se result ko ulta kar deta h 
ab agr true value h to uska eska result false m dega or false m falsy hoga.*/
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// falsy m 6 result hote h
//1. undefined
//2. null
//3. false
//4. 0
// 5. NaN
// 6. ''


let a3 = 0;
let b3 = 20;
if (b3 = a3) { /* isme b3 ki value a3 de rh h.tu a3 ki value 0 h or 0 ki value false hoti h 
     isliy iska result No print hoga.
     agr a3 ki value 10 kar dete h tab result true aayega or yes print hoga
     
     */
  console.log("Yes");
} else {
  console.log("No");
}

