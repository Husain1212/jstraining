# Exericse 16

### Question 1

Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.



### Question 2

Write a JavaScript program to capitalize the first letter of each word of a given string.

```
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox'
```

```
let str = 'the quick brown fox'
 str = str. split(" "); 
 for (i = 0 ; i < str. length; i++) { 
    console.log(str[i])
    str[i] = str[i][0]. toUpperCase() + str[i].substring(1)
 }
console.log(str)
let spacee = ""
for(j = 0; j<str.length; j++){
spacee += str[j] + " "
}
console.log(spacee)

```
### Question 3

Write a JavaScript program to check whether all the digits in a given number are the same or not.

### Question 4

Write a JavaScript function that reverse a number.
```
let newNumber = [1,3,2,4,66,4]
let nnn = []
function num(val){

    for(i = newNumber.length-1; i >= 0 ; i--){
        nnn.push(newNumber[i])
    }
    return nnn
}
console.log(num(newNumber))

```

### Question 5

Write a JavaScript function to extract unique characters from a string.

```
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
```

```
let strrr ='thequickbrownfoxjumpsoverthelazydog'

console.log(uniq(strrr));

function uniq(num){
    let array2 = [];
    let convertArr = num.split('');
    for(let i=0;i<convertArr.length;i++){
        if(!array2.includes(num[i])){
            array2.push(num[i]);
        }
    }
  return array2.join('');
}

```

### Question 6

Write a JavaScript function to chop a string into chunks of a given length.
Test Data :

```
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
```

### Question 7

Write a JavaScript function to find a word within a string.
Test Data :

```
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."
```
```
let checking2 = 'aa,bb,cc,dd,aa,aa'
let check = checking2.split(',')
console.log(check)
function testing()

{
    let count = 0;
    let search_word = "aa"
    for(i = 0; i<check.length; i++ ){
        if(check[i] === search_word){
           count++
        }
    }
    return count;
} 
console.log(`"aa" was found ${testing(check)} times.`)

```


### Question 8

Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.
```
let array = [1,23,40,35,67,78,22]
let filterArray = array.filter(test)
let newArray = filterArray.map(multiply)
let finalResult = newArray.reduce(sum)
function test(val){
    return val > 30 && val < 50
}
console.log(filterArray)

function multiply(num){
    return num + 20
}
console.log(newArray)
function sum(total,firstvalue){
    return total + firstvalue
}
console.log(finalResult)

```

### Question 9

Convert below array

```
[[1,2], [3,4], [5,6], [7,8], [9,10]]
to
[3,7,11,15,19]
```

```
let array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
]

let new_Array = [];
for (let i = 0; i < array1.length; i++) {
  let first = array1[i][0] + array1[i][1];
  new_Array.push(first);
}
console.log(new_Array);


```

### Question 10

Print below pattern

```
1 2 3 4 5
 2 3 4 5
  3 4 5
   4 5
    5
```

```
for(i = 1; i <=5; i++){
    let check = " ";
    for(k = 1 ; k <=i; k++){
        check += " "
    }
    for(j = i ; j <= 5; j++  ){
    check +=  j + " "
    }
    console.log(check)

}
```
