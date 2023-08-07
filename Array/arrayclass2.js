// print even numberes

```
let evenNum = [1,2,3,4,5,12,6,7,8,,11,12,14,10,9];
for(i = 0; i <evenNum.length; i++){
    if(evenNum[i] % 2 === 0){
        console.log(evenNum[i])
    }
}

```

// print odd numberes

```
let oddNum = [1,2,3,4,5,12,6,7,8,,11,12,14,10,9];
for(i = 0; i <oddNum.length; i++){
    if(oddNum[i] % 2 === 1){
        console.log(oddNum[i])
    }
}

```

// 03 ek class m 10 students h . is class  k students ka average weight 45kg h. or jab class m teacher aata h to bad m sabka average weight 52kg ho jata h.to us teacher ka weight kitna h btao?

```

let studentAverageWeight = 45;
let totalStudent = 10
let allStudentWeight = studentAverageWeight*totalStudent;
let teacher = 1;
let newWeightAverage = 52;
let teacherWeight = newWeightAverage * (totalStudent + teacher) - allStudentWeight;
console.log(teacherWeight);

```

// 4 write a array and sum array numbers but please check below condition;
// a. number odd hona chahiye.
// b. number is greater then 50.
// c. number is less then 100.

```
let sum_1 = 0;
let arr_1 = [51,66,51,78,100,198,98,88,1,2,3,4,6];
for(i = 0 ; i<= arr_1.length; i++){
    if(arr_1[i] % 2 === 1 && arr_1[i]> 50 && arr_1[i ]<100){
        console.log(arr_1[i])
        sum_1+= arr_1[i];
        console.log(sum_1)
    } 
    
    } 
```

    // 5 write a array and find average of array?

```
    let numberArray = [20,10,15,5,5,10,5,5,20,5];
    let arraySum = 0;
    for (index = 0; index <numberArray.length ; index++){
        arraySum += numberArray[index]
        
    } console.log(arraySum)
    console.log(arraySum/numberArray.length)

```
    // ================================================

    /*01. Write a program to reverse the array
    02. Write a program to sort the given array
    03.Move all the negative elements to one side of the array
    04.Find the Union and Intersection of the two sorted arrays
    */

    // Ans 1
    
    ```
    let num_Array = [1,2,3,4,5,6,7,8]
    let newArr = []
    for(index = num_Array.length-1; index>=0 ; index--){
        console.log(num_Array[index_2])
    }
    
    ```
//reverse method
```
    num_Array.reverse();
    console.log(num_Array)

```    

    // Ans 2
```    

    let next_Array = [1,6,3,4,5,7,8]
    next_Array.sort();
    console.log(next_Array)
```    

    // Ans 3 

```    

    let new_Array = [1,-2,3,4,5,-6,7,8];

   new_Array.reverse();
   console.log(new_Array)

```

// ========================================== 27feb2023


//1. Array ka starting se 2nd element and back se 2nd element equal hai kya. 

```
let array_1 = [1,6,23,4,5,3,8,2,9,6,7];
let arraylength = array_1.length
if(array_1[1] === array_1[arraylength-2]){
    console.log(array_1[1])
} else{
    console.log("element is false")
};
```

// 2. Array me 3 new numbers push krne hai 
//    1 number unshift krna hai 
//    2 shift krne hai 
//    2 pop krne hai 
// Aur fir result check krna hai 


// A(2)push

```
let array_Add = [1,-2,3,4,5,-6,7,8];
array_Add.push(10)
array_Add.push(20)
array_Add.push(30)
 console.log(array_Add)

 ```

 // unshift

 ```
array_Add.unshift(100)
 console.log(array_Add)

 ```

 // shift

 ```

array_Add.shift()
 console.log(array_Add)

```


//pop

```
 array_Add.pop()
 array_Add.pop()
 console.log(array_Add)

```

//3. Array ko reverse krke use ** se join krna hai 

```
let array_rev = [1,2,3,4,5,6,7]
array_rev.reverse()
console.log(array_rev.join("**"))

```

//4. Write a program to reverse the array using for loop

```
let num = [64, 32, 84, 92, 73, 93, 74, 93, 03, 73, 52];
let array11 = [];
for (let a = num.length - 1; a >= 0; a--) {
  console.log(num[a]);
}

```



//5. Write a program to sort the given array using for loop

&&

//6. Move all the negative elements to one side of the array using for loop 


```
let array_sort = [1,2,3,-1,-5,-3,5,2]
let new_SortArray = []

for(i = 0; i < array_sort.length; i++){
    if(array_sort[i] > 0){
        new_SortArray.unshift(array_sort[i]);
        
    } else { 
        new_SortArray.push(array_sort[i])
    }
    
} console.log(new_SortArray)

```


//7. Find the Union and Intersection of the two sorted arrays

```
let arr1 = [10, 12, 13, 14]
let arr2 = [9, 12, 17, 14]
let cancat = arr1.concat(arr2)
// let x = [...new Set(cancat)]
let unique = []
let interSection = []
for (let index = 0; index < cancat.length; index++) {
    if(unique.includes(cancat[index])){
        interSection.push(cancat[index])
    } else {
        unique.push(cancat[index])
    }
}
console.log(unique)
console.log(interSection)
```


