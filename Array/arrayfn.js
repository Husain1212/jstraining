// //max number

// let arr = [1,2,3,4,5,50,33,22,31,44]
// let max = arr[0];
// for(i = 0; i < arr.length ; i++){
//     if(max< arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max)

// //min number

// let arr1 = [1,2,3,4,5,50,33,-8,22,31,44]
// let min = arr[0];
// let count = 0;
// for (i = 0; i< arr1.length; i++){
//     if(min > arr1[i]){
//         min = arr1[i]
//     }
// } console.log(min)

// //last element

// console.log(arr1[arr1.length-1])

// // first element
// console.log(arr1[0])

// //count odd number new array creat

// let oddarr = []
// for(i = 0; i < arr1.length; i++){
//     if(arr1[i] % 2 === 1){
//         count++
//        oddarr.push(arr1[i])
//     }
// } console.log(count)
// console.log(oddarr)

// // count even number and new array create

// let evenarr = []
// let count1 = 0
// for(i = 0 ; i < arr1.length; i++){
//     if(arr1[i] % 2 === 0){
//         count1++
//         evenarr.push(arr1[i])
//     }
// } console.log(count1)
// console.log(evenarr)


// //==============

// let num_Array = [1,2,3,4,5,6,7,8]
// let newArr = []
// for(index = num_Array.length-1; index>=0 ; index--){
// newArr.push(num_Array[index])
// } console.log(newArr)

// //============8march2023

// function test(num) {
//   return num * 3;
// }

// let arr2 = [1, 2, 3, 4, 5];
// let ans = arr2.map(test);
// console.log(ans);


// //new arr
// function joint(nameArr){
//     return nameArr + " s/o Mohd farid"
// }
// let neww = ["taiyab","ismail"]
// let ans2 = neww.map(joint)
// console.log(ans2)


// //FLAT
// let flatarr = [1,2,3,[15,[16,18],11,22],4,5,[17,18],6]
// console.log(flatarr)
// console.log(flatarr.flat(3));

// //sort by albhabatic

// console.log(neww.sort())
// console.log(flatarr.sort())

// // numbring sorting

// let arr3 = [1, 113, 111, 2, 11, 22, 3, 21, 33, 1111111];
// function test(val1, val2) {
//   return val2 - val1; //Descening order
// }
// function test2(val1, val2) {
//   return val1 - val2; //Ascending order
// }
// console.log(arr3.sort(test));
// console.log(arr3.sort(test2));

// let numberingArr = [1,2,3,4,11,33,44,55,21,23,111]

// function testing(valu1,valu2){
//     return valu1 - valu2//Asecending order

// }
// function testing2(val1,val2){
//     return val2-val1 //desecending order
// }
// console.log(numberingArr.sort())
// console.log(numberingArr.sort(testing2))
// console.log(numberingArr.sort(testing))



// //=====================================

// /*
// sort
// push.
// pop.
// unshift.
// shift.
// toString.
// join.
// concat.
// splice.
// slice.
// reverse.
// forEach
// at
// map
// filter
// reduce
// find
// findIndex
// some
// every
// flat
// flatMap
// */

// //push..push method last m number jodne ka kam karta h.

// let arr4 = [1,2,43];
// //1st tarika. Direct index pr value dalni ho to
// //2nd way. push function
// arr4.push(77);
// arr4.push(88);
// console.log(arr4)

// //pop..y pop array method h jo ki last ka number hatane ka kam karta h

// arr4.pop()//88
// arr4.pop()//77
// arr4.pop()//43
// console.log(arr4)//[1,2]

// //unshift .. ye unshift array m start m number jodta h jo apn dete h.
// let arr5 = [1,2,3,4,5,6]
// arr5.unshift(77)
// console.log(arr5)//[77,1,2,3,4,5,6]


// //shift..ye shift array ka first number nikalta h

// arr5.shift()//[1,2,3,4,5,6]
// arr5.shift()//[2,3,4,5,6]
// console.log(arr5)

// //toString....y array ko string m change karta h 

// let a = [1,2,3,4]
// console.log(a.toString())//1,2,3,4

// //join..y array method array m koi bhi syntax jodne ka kam krta h or string m badlta h

// let b = ["khan","husain","ismail"]

// console.log(b.join("*"))//khan*husain*ismail

// //concat..y array method 2 array ko joint krne k liy kam m lete h or ek array bnata h

// let c = [1,2,3,4]
// let d = [5,6,78,8]

// let cd = c.concat(d)
// console.log(cd) //[1, 2, 3, 4, 5, 6, 78, 8]

// //splice...Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// let e = [1,2,3,4,5,6,76]
// let ee = e.splice()//[]
// ee.push(12)//[12]
// console.log(ee)

// //slice..Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// let ww = [1,22,33,44,55,7,8,9,3]
// let ws = ww.slice(1,-2)
// console.log(ws)

// //reverse..Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// console.log(ww.reverse())


// //forEach

// let arr = [1, 20, 3, 40, 5, 9, 8, 7, 10, 3, 4];
// let newArr = [];
// arr.forEach(test);
// function test(num) {
//   newArr.push(num * 2);
// }
// console.log(arr)
// console.log(newArr);

//at

// let arr = [1,2,3,4,5]
// console.log(arr.at(2))

// // every

// let b = [1, 3];
// function odd(num1) {
//   return num1 % 2 === 1;
// }
// let ans = b.every(odd);
// console.log(ans);

// let f = [10,30,50,652,72]
// // function even(numm2){
// //     return numm2 % 2 === 0
// // }
// let ans1 = f.every(even => even % 2 === 0)
// console.log(ans1)

// //reduce

// let abc = [1,2,3,4,5]
// let anss = abc.reduce(test1)
// function test1(total, valuee){
//   return total + valuee
// }
// console.log(anss)

// let str = "My naMe is weCoDe acadeMy";
// let arr = str.split(" ");
// console.log(arr)
// let finalAns = arr.reduce(test, "");
// function test(answer, value) {
  
//   let firstPart = value.slice(0,1).toUpperCase();
//   let secondPart = value.slice(1).toLowerCase();
//   answer = answer + firstPart + secondPart + " ";
//   console.log(answer)
//   return answer;
// }
// console.log(finalAns);

// //====================================
// lelet str = "My naMes are weCoDe acadeMy";
// let arr = str.split(" ");
// let finalAns = arr.reduce(test, 0);
// function test(total, value) {
//   if (value.length % 2 === 1) {
//     total = total + 1;
//   }
//   return total;
// }
// console.log(finalAns);

//=====================

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let newArr = arr.filter(test)


// function test(num){
//   if(num % 2 === 1){
//     return num
//   }
// } 
// let ans = newArr.map(mult)
// function mult(value){
//   return value * 2
// }
// console.log(ans)


//===================s===
// let arr1 = [1,20,3,40,5,60,7,80,9,100]
// let newArr = arr1.filter(test1)


// function test1(num){
//   if(num % 2 === 0){
//     return num
//   }
// } 
// let ans = newArr.every(mult)
// function mult(value){
//   return value >10
// }
// console.log(ans)

//==========================================
// let nums = [2, 4, 8, 16, 32]
// function test(nums){
// for (let i = 0; i < nums.length-1 ; i++) 
// {
//   if(nums[i+1] % nums[i] != 0){
//     return false
//   }
// }
// return true
// }
// console.log(test(nums));
 
  


//==============================

// let arr = [1,2,3,4,[1,2,3],3,2]
// let ans = arr.flat()
// let nwe = ans.map(test)

// function test(nummm){
//   return nummm * 2 
// }
// console.log(nwe)

//==============================
