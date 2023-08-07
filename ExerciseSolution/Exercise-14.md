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
## 11. Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function
```
  let bigNumber = [2,3,145,66,7]
  function testGreater(arra){
    return arra > 5

  }
  let bigArray = bigNumber.filter(testGreater)
  console.log(bigArray)
```

## 12. Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function
```
  let plusArray = [1,2,3,4,5]
  let addArray = plusArray.map(newNum)
  function newNum(num){
    return num + 1
  } console.log(addArray)
```

## 13. Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

## 14. Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.
```
  let arrayOfStr = ["Hello","Wecode","Academy"]
  let newStr = arrayOfStr.reduce(addnum,0)

  function addnum(oldValue,newValue){
    return oldValue + newValue.length
  }
  console.log(newStr)
```
## 15. Write a function that takes an array of strings and sorts them by their length in ascending order.
```
   let arrOfStr = ["Hello","My","Name","Wecode","Academy"]

  function sorting(val1,val2){
    return val1.length - val2.length
  }
  console.log(arrOfStr.sort(sorting))
```

## 18. Write a function that takes an array of strings and returns a new array with only the strings that contain the letter "a".
```
  let string = ['taiyab','khan','boy','husain','brother']
  function findStr(string){
    let newAns = []
    for(i = 0; i < string.length; i++ ){
      if(string[i].includes("a"))
      newAns.push(string[i])
      // console.log(newAns)
    }
    return newAns
  } console.log(findStr(string))
```
## 19. Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
```
  let arrOfNum = [1,22,34,12,2,65,5,44]

  function sorted(val1,val2){
    return val1 - val2 
  }
  console.log(arrOfNum.sort(sorted))
```
## 20. Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.

 Example usage
let arr = ['hello', 'world'];
console.log(flattenStrings(arr)); // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'] */
```
let arr = ['hello', 'world']
function chk(arr){
  let ans1 = '' 
  for(i = 0 ; i < arr.length ; i++){
    ans1 = ans1 + arr[i]
  }
  return ans1.split('')
}
console.log(chk(arr))
```
