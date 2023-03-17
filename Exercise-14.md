## 1. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
let fruits = ["apple", "banana", "orange"]
let fruitsFind = fruits.includes("orange")
console.log(fruitsFind)
```

## 2. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```
let numbersArray = [1,2,3,4,5,6]

function sumNumbers(numberArray){
    let sum = 0;
    for(i = 0 ; i< numberArray.length ; i++ ){
        if(numberArray[i] % 2 === 0){
            sum = sum + numberArray[i]
        }
    }
    return sum;

}
console.log(sumNumbers(numbersArray))
```

## 3. Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

## 4. Given an array of strings, write a function that returns the longest string in the array.

```
let str = ["taiyab","parihar","hussain"]
function longeststr(str){
    let max = str[0].length
    let ans = str[0]
    for(i = 0 ; i < str.length ; i++){
        let maximum = str[i].length
          if(maximum>max){
            max = maximum
            ans = str[i]
        }
    }
    return ans
}
console.log(longeststr(str))
```

## 5. Write a function that takes an array of numbers and returns the largest number in the array.

```
let numLarge = [1,2,12,22,32,786,111,222]
function large(numLarge){
    let largestNumbers = numLarge[0]
    for(i = 0 ; i < numLarge.length ; i++){
          if(numLarge[i]>largestNumbers){
            largestNumbers = numLarge[i]
        }
    }
    return largestNumbers
}
console.log(large(numLarge))
```

## 6. Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

```
let arrayNew = [1, 2, 3, 4, 5, 6]
let check = arrayNew.filter(testEven)
function testEven(val){
   return  val % 2 == 0
}

console.log(check);
```

## 7. Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

```
let strWord = ['hello','brother','do', 'you','want','something']

function checking(num){
    let maxx = []
    for(let i = 0 ; i< strWord.length; i++ ){
        if(strWord[i].length>5){
            maxx.push(strWord[i])
        }
    }
    return maxx
 }
  console.log(checking(strWord))

```

## 8. Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

```
  let oneArr = [1,2,3,4,5]
  let secondArr = [11,2,13,4,15]
  function inter(value) {
    let intersection = []
  for(let value of oneArr){
  if(secondArr.includes(value)){
    intersection.push(value)
  }
}
return intersection
   } console.log(inter(oneArr,secondArr))
```

## 9. Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

```
  let array1 = [1,2,3,4,5]
  function val(numm){
    return numm ** 2;
  }
  let newS = array1.map(val)
  console.log(newS)

```

## 10. Write a function that takes an array of numbers and returns the average of all the numbers in the array.

```
  let array2 = [2,4,6,8,10]
  let average = array2.reduce(testAverage)

  function testAverage(total,firstValue){
    return total + firstValue
  } console.log(average/array2.length)
```
