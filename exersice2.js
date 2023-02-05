//1. If marks are greater than 60 then print Pass else print Fail

let marks = 80;

if(marks>60){
    console.log("Pass")
}else{
    console.log("Fail")
}

// 2. Take two numbers and check if both numbers are odd or not. If yes then print Odd otherwise print Even ?


let number1 = 7;
let number2 = 11;

if(number1%2 , number2%2) {
    console.log("odd");
}else{
    console.log("even");
}

//3. Take 4 variables a, b, c, d and assign their values in this way and check output 
// a = b 
// b = c 
// c =  d 
// d =  a 

let a = 101;
let b = 102;
let c = 103;
let d = 104;

a = b;
b = c;
c = d;
d = a;

console.log(a,b,c,d);

//4. print 2's table using ** operator?

let table = 2;
console.log(table**1);
console.log(table**2);
console.log(table**2+2);
console.log(table**3);
console.log(table**3+2);
console.log(table**3+4);
console.log(table**3+6);
console.log(table**4);
console.log(table**4+2);
console.log(table**4+4);

//5. Check output of following 
//2+5*10-20**2
let number3 = 2+5*10-20**2;
console.log(number3) ;


//20/5*10+10
let number4 = 20/5*10+10;
console.log(number4) ;

//10 && 20 + 10 * 10
let number5 = 10  + 10 * 10;
let number6 = 20  + 10 * 10;
console.log(number5) ;
console.log(number6);


//30 > 20 && 17 < 15
if(30 > 20 && 17 < 15){
    console.log("it is true")
}else{
    console.log("it is false")
}


//30 > 20 && 10 + 4 < 15 || 10

if(30 > 20 && 10 + 4 < 15 || 10){
    console.log("it is right")
}else{
    console.log("it is wrong")
}


//30 < 20 || 10 + 5 < 15 || 10
if(30 < 20 || 10 + 5 < 15 || 10){
    console.log("Answer is true")
}else{
    console.log("Answer is False")
}


//30 < 20 || 10 + 5 < 15 && 10
if(30 < 20 || 10 + 5 < 15 && 10){
    console.log("Value is true")
}else{
    console.log("Value is false")
}

//6. take a number and if number is odd or not. if number is Odd then print Yes else print No?

let num = 12;

if(num%2) {
    console.log("Yes");
}else{
    console.log("No");
}

//7. Take a number and check if number is divisible by 10 && 5. If yes then print Yes else print no ???

let num1 = 100;
if(num1 / 10 && num1 / 5) {
    console.log("Yes");
}else{
    console.log("No");
}

//8. Take a number and check if number * 20 makes it 100 or not. If yes the print Yes else print No???
let number7 = 5;

if(number7*20 == 100) {
    console.log("Yes");
}else{
    console.log("No");
}

//9. Calculate your 10ths percentage and print Pass or Fail if marks are more than 70 then print Pass else print Fail ??

let maths = 80;
let english = 80;
let hindi = 80;
let socialScience = 80;
let science = 80;

let mark = (maths + english + hindi + socialScience + science ) / 500 *100;

if(mark > 70) {
    console.log("pass");
}else{
    console.log("Fail");
}

//10. Take your age and check if your age is greater than 21 then print Adult else print Minor??
let age = 28;

if(age > 21) {
    console.log("Adult");
}else{
    console.log("Minor");
}

