let number = "9899787676";
let padEndNumber = number.slice(0,5)
let padStartNumber = number.slice(6,10)
console.log(padEndNumber.padEnd(10,"*"))
console.log(padEndNumber.padStart(10,"*"))

let startNum = number.slice(0,3)
let endNum = number.slice(7,10)
let padmidNum = startNum.padEnd(7,"*")
console.log(padmidNum.concat(endNum))


let str = "hello "
console.log(str.repeat(5))

let strs = ""
for(i=0;i<5;i++){
    strs = strs + str;
}console.log(strs)

let text = "learnjavascript";

let newtext = text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase()
console.log(newtext)



let word = "WeCode Academy"
let newWord = word.split(" ")
console.log(newWord[0].slice(0,1).toUpperCase() + newWord[0].slice(1).toLowerCase()+" " + newWord[1].slice(0,1).toUpperCase() + newWord[1].slice(1).toLowerCase())



for(i=1;i<=5;i++){
   console.log("1".repeat(i))
}