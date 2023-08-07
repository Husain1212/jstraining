/*Question : 1

3 functions bnane hai 

-> myMap function : ye function jo b array ise denge use 10 se multiply kr dega each value ko
-> myFilter function : ye function jo b array ise denge usme se even number ko filter kr dega 
-> mySum function : ye function jo b array ise denge uske sare numbers ko add kr dega 

Fir ek Array bnana hai aur us Array pr method chaining ke madad se myMap().myFilter().mySum() functions call krne hai isi order me
*/
 
function myMap(array){
    for(let index = 0; index < array.length; index++){
        let value = array[index]
        value = value * 7
        array[index] = value
    }
    console.log(array)
    return array
}

function myFilter(array){
    let newArray = []
for(let index = 0; index < array.length; index++){
    if(array[index] % 2 === 0){
        newArray.push(array[index])
    }
}
console.log(newArray)
return newArray
}

function mySum(newArray){
    let sum = 0;
    for(let index = 0; index < newArray.length; index++){
        sum += newArray[index]
    }
    console.log(sum)
}
mySum(myFilter(myMap([1,21,3,4,6])))

