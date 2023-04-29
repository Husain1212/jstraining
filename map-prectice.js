//1. Create a new Map and add key-value pairs to it.

let details = new Map()
console.log(details)
//add by set function
details.set("fullName","Taiyab husain")
details.set("address","Jaipur west")
details.set("state","Rajasthan")
console.log(details)

//2. Get the value of a specific key in a Map.

console.log(details.get("fullName"))
console.log(details.get("address"))


//3. Check if a key exists in a Map.
console.log(details.has("address"))

//4. Iterate over the keys of a Map using a for...of loop.
for(let keys of details){
    console.log(keys[0])
}


for(let keys of details.keys()){
    console.log(keys)
}

//5. Iterate over the values of a Map using a for...of loop.

for(let value of details){
    console.log(value[1])
}

for(let value of details.values()){
    console.log(value)
}

//6. Iterate over the key-value pairs of a Map using a for...of loop.
for(let keyVal of details){
    console.log(keyVal[0],keyVal[1])
}

//7. Convert a Map to an array of key-value pairs.
console.log([...details])

//8. Convert an array of key-value pairs to a Map.
array_To_Map = new Map(details)
console.log(array_To_Map)

//9. Use the forEach() method to iterate over the key-value pairs of a Map.

let map =array_To_Map.forEach(test)
function test(value,key){
    console.log(key,value)
}

//10. Use the Map keys() method to get an iterator for the keys of a Map.
console.log(details.keys())

//11. Use the Map values() method to get an iterator for the values of a Map.
console.log(details.values())

//12. Use the Map entries() method to get an iterator for the key-value pairs of a Map.
console.log(details.entries())

//13. Use the Map has() method to check if a Map contains a key
console.log(details.has("address"))

//14. Use the Map get() method to get the value associated with a key in a Map.
console.log(details.get("state"))

//15. Use the Map set() method to add a new key-value pair to a Map.

details.set("fatherName","Mohd farid")
console.log(details)

//16. Use the Map delete() method to remove a key-value pair from a Map.

 details.delete("fatherName");
console.log(details)

//Ans17 down scroll mention below

//18. Use the Object.fromEntries() method to create a new object from a Map.
console.log(details)
let objectNew = Object.fromEntries(details)
console.log(objectNew)

// 19. Use the Map constructor to create a new Map from an array of key-value pairs

let newArray = [["One",1],["Two",2],["Three",3]]
console.log(newArray)
let createMap = new Map(newArray)
console.log(createMap)

// 17. Use the Map clear() method to remove all key-value pairs from a Map.
details.clear()
console.log(details)

