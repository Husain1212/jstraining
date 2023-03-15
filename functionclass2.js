
//1. function oddEven(num) yadi number odd hai to Odd word return kro otherwise Even word return kro 

function oddEven(num){
    if(num % 2 === 1){
        return "odd word";
    } else {
        return "even word";
    }
} 
console.log(oddEven(11))



function sum(a, b) {
  return a + b;
  console.log(10); //ye code ni chlega kuki humne phle hi return kr dia hai
} sum(1,4)

let ans = sum(3,6);
console.log(ans);



//2. function max(arr) max number find krke return krna hai 

function max1(arr1){
  let max1 = arr1[0];
  for(i = 0; i < arr1.length ; i++){
    if(max1 < arr1[i]){
      max1 = arr1[i]
    }

  } return max1
} console.log(max1([1,43,87,98,56,90]))

/*
3. function min(arr) min number find krke return krna hai 
4. function minAndMax(arr) min and max number find krke dono ko plus krke return krna hai 
5. function minAndMaxArr(arr) ek new array bnana hai usme 0 index pr to min number store krna hai and 1 index pr maximum number ko store krvake array ko return krna hai 
6. function reverseString(str) function ko ek string pass krni hai. is string ko reverse krke return krna hai 
for example: My name is Wecode 
output: Wecode is name My 
7. function maskMobile(mobileNumber, start, end, char, total)
maskMobile(9581894461, yes, false, '*', 5)
output: ***94461
maskMobile(9581894461, false, yes, '*', 5)
output: 95818***
maskMobile(9581894461, false, false, '*', 5)
output: 9581894461
8. Replace all words in a string 

function replaceString(str, word, newWord) 

replaceString("Hello my name is Wecode and is hello test", "is", "are")
output: Hello my name are Wecode and are hello test
*/

