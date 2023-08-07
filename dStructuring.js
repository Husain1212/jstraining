// let a = 10;
// let b = 20;
// let c = 30;
// [a, b, c] = [b, a, a];
// console.log(a, b, c);

// let arr=[1,2,3[4,5],6,7[8,9],10,11]
// let[, a ,,[,b],c,[,d],,]=arr
// console.log(a,b,c,d);


let arr=[1,2,3,[4,5],6,7]
let [,a,c,[,b],h,j] = arr
console.log(a,c,b,h,j)


let ab = [1,1,2,2,4]
let bcc = [...ab]

console.log(bcc)


// let arr_1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr]; //Shallow Copy
// arr2.push(100);
// arr.push(999);
// console.log(arr, arr2);


// The Spread Operator

//Shallow copy
let arr_2 = [1,2,3,4]
let arr_3 = [...arr_2]//shallow copy
arr_2.push(100)//[1,2,3,4,100]
arr_3.push(76)
console.log(arr_2,arr_3)

//join 2 array
let arr_4 =[5,6,7,8,9]
console.log([...arr_2,...arr_4])//[1,2,3,4,100,5,6,7,8,9]

//String to array using spread

let bank = "StateBankofIndia"
console.log([...bank])//['S', 't', 'a', 't', 'e', 'B', 'a', 'n', 'k', 'o', 'f', 'I', 'n', 'd', 'i', 'a']

//Passing arguments in function
let newArr = [1,2,3,4,5,6]
function test([a, ,b, ,c,d]){
    console.log(a,b,c,d)
}
test(newArr)//1 3 5 6

//one more example

function test2(q,w,e,r){
    console.log(q,w,e,r)
}
test2(...newArr)//1 2 3 4



function test3(...val) {
    let sum = 0
  for(i = 0 ; i<val.length ; i++){
    sum = sum + val[i]
    
  }console.log(sum)
}
test3(1, 2, 3, 4, 5);


//using The Spread Operator merge all array

let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [7,8,9]

let array4 = [...array2,...array1,...array3]
array4.unshift(100)
console.log(array4)

//using The Spread Operator merge all obj

let obj1={
    name:"taiyab",
    address: "jaipur",
    pincode : 342001
}
let obj2={
    name:"husain",
    address: "jaipur west",
    pincode : 342002
}
let obj3={
    name:"khan",
    address: "jaipur east",
    pincode : 342005
}
let obj4 ={...obj1,...obj2,...obj3}

console.log(obj4)

function printAge(age){
   age && console.log("My age is " + age)
}
printAge(20)


//  function check(firstName,lastName){

//  return firstName || lastName || unkown
//  }
//  console.log(check(firstName))


 function testing(n1,n2){
   if(n1 && n2){
   console.log(fn2(10,20))
   } else{
    console.log("No")
   }
   function fn2(a,b){
    return a+b
   }
 }
 testing(1,null)