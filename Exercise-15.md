# Object Questions 

## 1 . What is an object in JavaScript?
```

An object is a collection of properties, and a property is an association between a key and a value. 
A property's value can be a function, array in which case the property is known as a method. 
```
 ## 2 . What is the difference between dot notation and bracket notation for accessing object properties?
```
 - Dot Notation only allows static keys 
 - while Bracket Notation accepts dynamic keys. 
 - Static key here means that the key is typed directly, 
 - while Dynamic key here means that the key is evaluated from an expression.
```
## 3 . How do you loop through the properties of an object in JavaScript?
```
let  myDetails ={
  name:"Taiyab Husain",
  mobileNo : 8290063838, 
  address : "Jhotwara , Jaipur"
  }

console.log(myDetails)
```
Result
```
Output : {name: 'Taiyab Husain', mobileNo: 8290063838, address: 'Jhotwara , Jaipur'}
```

## 4 . What is the difference between an object and an array in JavaScript?
```
arrays and object both are dataStructure
both are using for data store
array data store in index type but object data store in key and value types
Arrays are mostly faster than objects.
```

## 5 . Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
```
const person ={
  firstName:"Taiyab",
  lastName : "Husain",
  mobileNo : 8290063838, 
  address : "Jhotwara , Jaipur"
  }

function data(value){
let newEnteries= Object.entries(person)
return newEnteries
}
console.log(data(person))
```

## 6 . Write a function that takes an object representing a person and returns their full name.
```
let str = { 
        fullName : "Mohammad ismail",
        age : 28,
        city : "Dungarpur"    
}
function object(str){
    return str.fullName
}
console.log(object(str))
```
## 7 . Create an Object with your personal details. Now print all the keys of the object in ascending order.
```
let personalDetails = { 
        fullName : "Mohammad ismail",
        age : 28,
        city : "Dungarpur"    
}
let sortDetails = Object.keys(personalDetails)
console.log(sortDetails.sort())
```

## 8 . Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.
```
let myDetail = { 
        fullName : "Mohammad ismail",
        age : 28,
        city : "Dungarpur"    
}
let sortMyDetails = Object.entries(myDetail)
console.log(sortMyDetails.sort())

for(i = 0 ; i < sortMyDetails.length; i++){
 console.log(sortMyDetails[i][0] , sortMyDetails[i][1])
}
```
## 9 . Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa


## 10 . Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.
```
function maxobject(){

    let numberObject = {
        number1 : 12,
        number2 : 24,
        number3 : 127,
        number4 : 77,
        number5 : 9,
        number6 : 88,
    } 
    let maxNumber = Object.entries(numberObject)
    let maximum = maxNumber[0][1]
    for(i = 0 ; i < maxNumber.length; i++){
        if(maxNumber[i][1] > maximum ){
            maximum = maxNumber[i][1];
        }   
    }
     console.log(maximum)
} maxobject()
```
