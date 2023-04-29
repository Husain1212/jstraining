 //3 . How do you loop through the properties of an object in JavaScript?
let  myDetails ={
  name:"Taiyab Husain",
  mobileNo : 8290063838, 
  address : "Jhotwara , Jaipur"
  }

console.log(myDetails)


// 5 . Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

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


//6 . Write a function that takes an object representing a person and returns their full name.
let str = { 
        fullName : "Mohammad ismail",
        age : 28,
        city : "Dungarpur"    
}
function object(str){
    return str.fullName
}
console.log(object(str))

//7 . Create an Object with your personal details. Now print all the keys of the object in ascending order.
let personalDetails = { 
        fullName : "Mohammad ismail",
        age : 28,
        city : "Dungarpur"    
}
let sortDetails = Object.keys(personalDetails)
console.log(sortDetails.sort())

// 8 . Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.
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

//10 . Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.

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

