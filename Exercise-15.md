# Object Questions 

## 1 . What is an object in JavaScript?
```

An object is a collection of properties, and a property is an association between a key and a value. 
A property's value can be a function, array in which case the property is known as a method. 
```
 ## 2 . What is the difference between dot notation and bracket notation for accessing object properties?
```
 Dot Notation only allows static keys 
 while Bracket Notation accepts dynamic keys. 
 Static key here means that the key is typed directly, 
 while Dynamic key here means that the key is evaluated from an expression.
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
