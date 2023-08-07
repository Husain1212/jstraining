//1. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

let fruits = ["apple", "banana", "orange"]
let findFruits = fruits.includes("orange")
console.log(findFruits) 

// 2. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.
let numbers_Array = [1,2,3,4,5,6,7]
let newArray = numbers_Array.filter(evenNumbers)
 let answer = newArray.reduce(sumNumber)
function evenNumbers(numbers){  
   return numbers % 2 === 0
 } 
 function sumNumber(total,pervalue){  
   return total + pervalue
 }
 console.log(answer)

 //3. Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.using by set 

 let array_1 = [1,2,4,5,6,7]
 let array_2 = [1,2,5,6,11,21]
 let uniqueArray = new Set([...array_1,...array_2])
 
 console.log([...uniqueArray])



 
let order = {
  title : "Muttun",
  serving : 5,
  ingrientes : ["1kg Muttun","vegitables","masala","oil"]
}
console.log(`${order.title}
serve : ${order.serving}
ingrientes : ${order.ingrientes}`)

//===============================

let obj = {
  title: "Shahi Paneer",
  servings: 3,
  ingredients: ["Paneer", "Shahi Paneer Masala", "Tomato", "Jeera"],
};

console.log(`${obj.title} 
Serves : ${obj.servings}
ingredients : ${obj.ingredients.toString()}`);

//===================================

let arr = ["wecode", "academy", "helloMyName", "is", "are you fine"];
function maxString(arr){
  let ans = arr[0]
  for(let value of arr){
    if(value.length > ans.length){
      ans = value
    }
  } return ans
}
console.log(maxString(arr))
//=================================