// let array = [1,2,3,4]
// array.push(10)
// console.log(array)

//  let array = [1,2,3,4,5,6]
// array.pop()
// console.log(array)

// array.unshift(11,12)
// console.log(array)

// array.shift()
// console.log(array)

// console.log(array.toString())
// console.log(array.join("*"))

// let array2 = [21,22,23]
// console.log(array.concat(array2))

// let array = [1,2,3,4,5,6]
// array.splice(1,3)//(startindex, how many element remove)
// console.log(array)//[1,5,6]

// let newArray = array.slice(2,5)//(start,endindex)new array cerate
// console.log(newArray)

// array.reverse()
// console.log(array)

//  let arr = [1,2,3,4,5,6]

// let ans = arr.filter(testOdd);
// function testOdd(num) {
//   return num % 2 === 1;
// }
// console.log(ans);

// let changeArr = arr.map(test)
// function test(num){
//   return num * 2 
// }
// console.log(changeArr)

 
// let arr = [11,12,[1,2,3],13]
// // console.log(arr.flat())
// let ans = arr.flatMap(test)
// function test(num){
//   return [num * 2, num * 3]
// }
// console.log(ans)

//flat()
// let arr = [11,12,[1,2,3],13]

// console.log(arr.flat())

// sort()==================

// let arr = [1, 113, 111, 2, 11, 22, 3, 21, 33, 1111111];
// function test(val1, val2) {
//   return val2 - val1; //Descening order
// }
// function test2(val1, val2) {
//   return val1 - val2; //Ascending order
// }
// console.log(arr.sort(test));
// console.log(arr.sort(test2));


//======================

// let num = [1, 2, 3, 4, 5, 10];
// let num1 = [2, 3, 5, 6, 10, 12];
// let arr = [];
// for (let i = 0; i < num.length; i++) {
  // if (!num1.includes(num[i])) {
  //   arr.push(num[i]);
  // }
//   if (!num.includes(num1[i])) {
//     arr.push(num1[i]);
//   }
// }
// console.log(num);
// console.log(num1);
// console.log(arr);

//==========================
do array ki value ko diffrence nikalna h.
let arr1 = [2,4,3,5,6];//2,6
let arr2 = [7,4,3,5,8,9,0];//7,8,9,0
let arr3 = [];
for(let value of arr1){
  if(!arr2.includes(value)){
    arr3.push(value)
  }
}
  for(let value of arr2){
  if(!arr1.includes(value)){
    arr3.push(value)
  }
}
console.log(arr3);

//=====================================
//reduce

// let arr1 = [2,4,3,5,6];

// function test(total,firstValue){
//   return total + firstValue
// }let a = arr1.reduce(test)
// console.log(a)


