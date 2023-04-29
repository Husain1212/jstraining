//Object Questuion

//Write a function that takes an object as an input and returns a new object with the same keys and values, but with all the string values capitalized.


// let obj = {
//     fullName : "Taiyab Husain",
//     fatherName : "Mohd Farid",
//     address : "Jaipur West"
// }
// function test(number){
//     let newObj = {}
// for(let value of Object.entries(obj)){
//     let ans = value[1].charAt(0).toUpperCase() + value[1].slice(1).toLowerCase()
//    newObj[value[0]]=ans
// } 
// console.log(newObj)
// }
// test(obj)

// let obj = {
//     fullName : "taiyab Husain",
//     fatherName : "mohd Farid",
//     address : "jaipur West"
// }

// let khan = (number) =>{
//     let newObj = {}
// for(let value of Object.entries(obj)){
//     let ans = value[1].charAt(0).toUpperCase() + value[1].slice(1).toLowerCase()
//    newObj[value[0]]= ans
// } 
// console.log(newObj)
// }
// khan(obj)


// Write a function that takes two objects as inputs and returns a new object that contains only the keys that are present in both objects, along with their corresponding values from the first object.
// let obj2 = {
//     fullName : "Taiyab Husain",
//     fatherName : "Mohd Farid",
//     address : "Jaipur West"
// }
// let obj3 ={
//     accountNumber : 61165565640,
//     bankName : "Sbi",
//     branch : "Merta city"
// } 
// let doubleObj = {...obj2,...obj3}
// doubleObj= Object.entries(doubleObj)
// for(let value of doubleObj){
//     let ans =  value[0]
//     console.log(ans);
// } 

// reverse

// let str = "hello brother"

// str.length
// console.log(str)
// for(i = str.length-1; i>0; i--){
//     console.log(str[i])
// }
//=====================

//2. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

// let numbersArray = [1,2,3,4,5,6]
// let  sumNumbers = (numberArray)=> {
//     let sum = 0;
//     for(i = 0 ; i< numberArray.length ; i++ ){
//         if(numberArray[i] % 2 === 0){
//             sum = sum + numberArray[i]
//         }
//     }
//     console.log(sum)
// }
// sumNumbers(numbersArray)

//Arrow function============

// let numbersArray = [1,2,3,4,5,6]
// console.log(numbersArray.filter((value) =>  value % 2 === 0).reduce((perval,currval)=> perval+currval))

//### Question 8

//Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.
"use strict"
// let arrayMy = [1,2,35,[10,20],4,[35],5]
// console.log(arrayMy.flat().filter((value)=> value > 30 && value < 50).map((value)=> value + 20).reduce((total,nextvalue)=> total+nextvalue))

//========object
// old version

// const obj = {
//     name : "taiyab husain",
//     address : "jhotwara jaipur",
//     mobileNo : 8290063838,
// }
// let newObj = Object.entries(obj)
// console.log(newObj)
// for(i = 0 ; i<newObj.length; i++){
//     console.log(newObj[i][0],newObj[i][1])
// }

// const obj = {
//     name : "taiyab husain",
//     address : "jhotwara jaipur",
//     mobileNo : 8290063838,
// }
 
// console.log(Object.entries(obj).keys((value)=> value))


//========================
// let number1 = () => {
//   console.log(1);
//   number2();
// };

// let number2 = () => {
//   console.log(2);
//   number3();
// };

// let number3 = () => {
//   console.log(3);
// };

// number1();


// let val1 = ((a,b)=>a+b)
// let val2 = ((a,b)=>a+b)
// let val3 = ((a,b)=>a+b)


// console.log(val1(5,5))
// console.log(val2(5,5))
// console.log(val3(5,5))

 
