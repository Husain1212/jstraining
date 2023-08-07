// # Ans - 01 1. Find max number from array 
```
let arr1 = [1, 20, 3, 44, 5,0, 69, 7, 80, 9, 10];
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) {
    max = arr1[i];
  }
}
console.log(max);
```

//#  2. find min number from array
```
let arr = [1, 20, 3, 44, 5,0, 69, 7, 80, 9, 10];
let min = arr[0];
for (let i = arr.length; i >= 0; i--) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);

```

// # 5. find last element of the array
```
let arrr = [1,2,3,4,5,6,7,8,8,9,"last"]
console.log(arrr[arrr.length-1])
```
//# 6. find first element of the array
```
let firstarr = ["first", 1,2,3,4,5,6,7,8,8,9,"last"]
console.log(firstarr[0])

```

// #8. Find total count of odd numbers in array

```
let firstar = [1,2,3,4,11,21,5,6,7,8,8,9];
for(i=0; i<firstar.length; i++){
    if(firstar[i] % 2 === 1){
        console.log(firstar[i])
    }
}
```
// # 9. Find total count of even numbers in array 
```
let evenNum = [1,2,3,4,5,12,6,7,8,10,9];
for(i = 0; i <evenNum.length; i++){
    if(evenNum[i] % 2 === 0){
        console.log(evenNum[i])
    }
}
```
// # 10. Find average of the array
```
let count2 = 0;
let avr = [1,2,3,4,5,12,6,7,8,10,6,6];
for(i=0; i <avr.length; i++){
    count2 += avr[i] ;
} console.log(count2/avr.length)

```
