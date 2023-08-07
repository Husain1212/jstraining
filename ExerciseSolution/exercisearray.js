//### Question 1

//Create an array with three elements and print out the second element.

let arr1 = [1,2,3]
console.log(arr1.at(1))

//### Question 2

//Create an array with five elements and print out the length of the array.
let arr2 = [1,2,3,4,5]
console.log(arr2.length)

//### Question 3

//Create an array with four elements and print out each element using a for loop.

let arr3 = [1,2,3,4]
for(i=0; i < arr3.length ; i++){
    console.log(arr3[i])
}

//### Question 4

//Create an array with six elements and print out each element using a forEach loop.

const numbers = [5, 4, 1, 3, 2];
numbers.forEach(myFunction);

function myFunction(item) {
  console.log(item)
}


//### Question 5

//Create an array with three elements and add a fourth element to the end of the array.

let arr5 = [1,2,3]
arr5.push(11)
console.log(arr5)

//### Question 6

//Create an array with four elements and remove the second element.

let arr6 = [1,2,3,4]
arr6.splice(1,1)
console.log(arr6)

//### Question 7

//Create an array with five elements and remove the last element.

let arr7 = [1,2,3,4,5]
arr7.pop()
console.log(arr7)

//### Question 8

//Create an array with three elements and check if the array includes a specific value.

let arr8 = [1,2,3]

function find(num){
    return num
} 
console.log(arr8.includes(find(7)))

//### Question 9

//Create an array with four elements and sort the array in ascending order.

let arr9 = [1,31,22,14]
function ascending(value1,value2){
    return value1 - value2
}
console.log(arr9.sort(ascending))


//### Question 10

//Create an array with five elements and sort the array in descending order.

let arr10 = [2,55,7,323,22]
function test(value1,value2){
    return value2-value1
}
console.log(arr10.sort(test))

//### Question 11

//Create two arrays, concatenate them and print out the resulting array.

let arr11 = [1,2,3,4]
let arr12 = [5,6,7,8]
let newArr = arr11.concat(arr12)
console.log(newArr)

//### Question 12

//Create an array with three elements and convert it to a string.

let arr13 = [1,2,3]
console.log(arr13.toString())

//### Question 13

//Create an array with four elements and reverse the order of the elements.

let arr14 = [1,2,3,4]
console.log(arr14.reverse())

//### Question 14

//Create an array with five elements and find the index of a specific value.

let arr15 = [11,22,3,34,55]
console.log(arr15.indexOf(3))

//### Question 15

//Create an array with six elements and slice the array to create a new array with the first three elements.

let arr17 = [1,2,3,4,5,6]
let arrdivide = arr17.slice(0,3)
console.log(arrdivide)

//### Question 16

//Create an array with six elements and use the map method to double each element.

let arr18 = [1,2,3,4,5,6]
function multi(numm){
    return numm * 2
}
console.log(arr18.map(multi))

//### Question 17

//Create an array with four elements and use the while loop to calculate the sum of all elements.
let arr19 = [11,22,33,44]

let index = 0
let sum = 0
while(index < arr19.length){
    sum = sum + arr19[index]
    index ++
}
console.log(sum)

//### Question 18

//Create an array with five elements and use the filter method to return only the even numbers.
let arr20 = [1,2,3,4,5]
let ans = arr20.filter(testEven);
function testEven(number, index) {
  console.log(number, index);
  return arr20[index] % 2 === 0;
}
console.log(ans);

//### Question 19

//Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

let arr21 = [ 1,2,3]
console.log(arr21.join("-"))

//### Question 20

//Create two arrays with three elements each and use the concat method to combine them into a new array.

let arr = [11,12,13]
let arrNew = [1,2,3] 
let combineArr = arr.concat(arrNew)
console.log(combineArr)