//### Question 1
//Write a function that uses the call method to print the name of an object.

let obj ={
    name : "Taiyab husain",
    add : "Jaipur west",
}
function printDeatils(){
        console.log(`My name is ${this.name}`)
    }
printDeatils.call(obj)

//### Question 2

//Write a function that uses the apply method to find the minimum value in an array of numbers.

let array_Number = [11,12,13,1,10,17]
function minimum_value(){
    let minimum = array_Number[0]
      for(let value of array_Number){
        if(value < minimum){
            minimum = value
            console.log(minimum)
        }
    } 
}
minimum_value.apply(array_Number)

//### Question 3

// Write a function that uses the bind method to create a new function that always has a specific "this" value.

//### Question 4

//Write a function that uses the call method to add two numbers together.

let obj1 ={
    name : "Taiyab husain",
    add : "Jaipur west",
}

function sum_Numbers(a,b){
    // console.log(a+b);
    console.log(`${this.name}, ${this.add} and total of value ${a+b}`)
}
sum_Numbers.call(obj1,10,20)

//### Question 5
//Write a function that uses the apply method to concatenate two arrays.

let array_1 = [1,2,3,4]
let array_2 = [11,12,13,14]
function concatenate(){
    console.log([...array_1,...array_2])
}
concatenate.apply()

//### Question 6

//Write a function that uses the bind method to create a new function that multiplies a number by a specified value.
let obj3;
function multiply(a){
    console.log(a*5)
}
let multiplies = multiply.bind(obj3,10)
multiplies()

//### Question 7

//Write a function that uses the call method to find the length of a string.

let obj4;

function string_Length(str){
    console.log(str.length)
}
string_Length.call(obj4,"HelloWorld!")


//### Question 8

//Write a function that uses the apply method to find the sum of all numbers in an array.

let obj5;
function sum(array) {
    let ans = 0;
  for (let value of array) {
    ans = ans + value;
  }
  console.log(ans);
}
sum.apply(obj5,[[1,2,3,4]]);



//### Question 10

//Write a function that uses the call method to convert a string to uppercase.

let obj6;
function str_upperCase(str_upper){
    console.log(str_upper.toUpperCase())
}
str_upperCase.call(obj6,"My name is Taiyab Husain")



