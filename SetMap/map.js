console.log("map is a data structure")
let studentparty = new Map();
console.log(studentparty)
//set function add value
studentparty.set("class_1", 500)
studentparty.set("class_2", 1500)
studentparty.set("class_3", 2500)
studentparty.set("class_4", 4500)
studentparty.set("class_5", 3500)
console.log(studentparty)
//agr set function ko bhi key dubara likhenge to wo override ho jayegi matl pehle wali value ko delet kar k new value se update kar dega 
studentparty.set("class_2",300)
//get function to get values based on keys
console.log(studentparty.get("class_1"))
console.log(studentparty.get("class_2"))
console.log(studentparty.get("class_3"))
console.log(studentparty.get("class_4"))
console.log(studentparty.get("class_5"))
// studentparty.clear()
// console.log(studentparty) 

//has function= kisi bhi keys ko find karne k liy kiya jata h

console.log(studentparty.has("class_1"))

//size
console.log(studentparty.size)

//for of loop

for(let value of studentparty){
    console.log(value[0],value[1])
    // console.log(value.toString())
}
//object to map
let obj = {
    student :"taiyab husain",
    class:12,
    rollNo:12345
}
let mapobj = new Map(Object.entries(obj))

console.log(mapobj)

// array to map m convert

let array = [
    ["student","taiyab husain"],
    ["class",12],
    ["RollNo",12345]
]
let mapNew = new Map(array)
console.log([...mapNew])

let set = new Set()
set.add(10)
set.add(12)
console.log(set)

console.log(set.size)
console.log(set.has(10))
console.log([...set])
// set.clear()
console.log(set)
