//1. Create an empty set called mySet.

let mySet = new Set()
console.log(mySet)


//2. Add the values 1, 2, and 3 to mySet.

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)

console.log(mySet)

//3. Check if mySet contains the value 2.

console.log(mySet.has(2))

//4. Remove the value 3 from mySet.

mySet.delete(3)
console.log(mySet)

//5. Find the size of mySet.

console.log(mySet.size)

//6. Create a new set called otherSet containing the values 2, 3, and 4.
let otherSet = new Set()
otherSet.add(2)
otherSet.add(3)
otherSet.add(4)
console.log(otherSet)
console.log(mySet)

//7. Find the intersection of mySet and otherSet.

console.log(mySet)
console.log(otherSet)

// for(let value of mySet){
//     for(let value2 of otherSet){
//         if(value === value2){
//             console.log('This element is intersection of mySet and otherSet : ' + value)
//         } 
//     }
// }

// let intersectionSet = [...mySet].filter(test)
// function test(num){
//     return otherSet.has(num)
// }
// console.log(intersectionSet)


//8. Find the union of mySet and otherSet.


let unionSet =new Set ([...mySet,...otherSet])
console.log(unionSet)

//9. Find the difference of mySet and otherSet.

console.log(otherSet.size)
console.log(mySet.size)

let difference = new Set([otherSet.size-mySet.size])
console.log(difference)

//10. Find the symmetric difference of mySet and otherSet.


//11. Create an array called myArray containing the values 1, 2, 2, and 3.

let myArray = [1,2,2,3]
console.log(myArray)

//12. Convert myAray to a set called mySet2.
let mySet2 = new Set(myArray)
console.log(mySet2)

//13. Check if mySet2 contains the value 2.
console.log(mySet2.has(2))

//14. Remove all duplicate values from myArray and store the result in a new array called uniqueArray.
let uniqueArray = new Set([...myArray])
console.log(uniqueArray)

//15
let myArray = [1, 2, 2, 3];

 let mySet2 = new Set(myArray);
 console.log(mySet2)

 mySet2.delete(3)
 console.log(mySet2)
 let uniqueArray = [...mySet2];
 let uniqueSet = new Set(uniqueArray);
 console.log([...uniqueSet]);



set.add(11)
set.add(12)
console.log(set)
set.delete(5)
console.log(set)

set.forEach(test) 
function test (num){
    return num
}
console.log(set)
for(let value of set){
    console.log(value)
}
