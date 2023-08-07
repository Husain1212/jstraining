// Question 01-Array bnao numbers ka. Array me se vo sare numbers filter kro jo 2000 se bde hain and 2024 se chote hain. Ab un sare numbers me 50 add krdo. Finally jo b numbers hai unme se kitne number even hai unka count btao.?Is question me map, filter and reduce ka use Krna hai
// Ans
let numberArray = [1,2000,2020,2111,2010]
let numberFilter = numberArray.filter(testfilter)
let numberAdd = numberFilter.map(numAdd)
let numberEven = numberAdd.reduce(numEven)
let count = 0
function testfilter(num){
  return num > 2000 && num < 2024
}
console.log(numberFilter)

function numAdd(value){
  return value + 50
}
console.log(numberAdd)

function numEven(total,value){
 return total + (value % 2 === 0) 
}
console.log(numberEven)
// Question 2 Ek Array me kaunsa number kitni bar repeat hua hai vo btana hai. Isme Map ka use Krna hai


let arr = [1, 2, 2, 1, 3, 4, 4, 5, 6, 7, 8, 2, 1, 3, 3, 2, 1, 2]

let duplicateValue = new Map()
for(let key of arr){
  if(duplicateValue.has(key)){
    // console.log(duplicateValue.has(key))
    let value = duplicateValue.get(key)
    duplicateValue.set(key,value + 1)
  } else{
    duplicateValue.set(key,1)
  }
}
console.log(duplicateValue)

//Question- 3 Write a function that takes an array of objects as input, where each object represents a student with a name and a grade. The function should return an array of strings that contains the names of all students who received an A.

let studentsGrade = [
  {name:"Taiyab",
   grade:"A"
},
  {name:"Aadil",
   grade:"B"
},
  {name:"Farman",
   grade:"C"
},
  {name:"Soyab",
   grade:"A"
}
]
let ans = studentsGrade.filter((studentData) =>  studentData.grade === "A").map((topper)=> topper.name)
console.log(ans)

// Question -04 Class me kaunsa student topper hai uska name, mobile, aur father name print krvana hai. Agar 1 se jyada student topper hain to Jo sbse bda hai age me vo topper hoga. Isko kaise kroge dimag lgao aur kro

let studentsMarks = [
  {name:"Taiyab",
  Age : 28,
  marks:70,
  mobile:98989897667,
},
  {name:"Aadil",
   Age : 28,
  marks:90,
  mobile:9886797667,
},
  {name:"Farman",
  Age : 25,
  marks:90,
  mobile:98945647667,
},
  {name:"Soyab",
   Age : 22,
  marks:65,
  mobile:98989097667,
},
{name:"Harsit",
   Age : 24,
  marks:80,
  mobile:98989095667,
}
]

let classToppers = studentsMarks.sort((a,b)=>a.Age-b.Age).reduce((topper,num2nd)=>(topper.marks > num2nd.marks)?topper:num2nd)
console.log(classToppers)
