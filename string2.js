// // // 1. Take any String with some space before and after. Store string length. Now do below exercises:

// // //     a. remove space from both end and print new length of the returned string 
// // //     b. remove space from start and then print new string length 
// // //     c. remove space from end then print new string length 
// // // a
// // let string = "     Take any String with some space before and after  ";

// // console.log((string.trim()).length);
// // console.log((string.trimStart()).length);
// // console.log((string.trimEnd()).length);

// // // 2. Take any string in lowercase. Now using toUppercase function check if uppercase of the string is equal to uppercase of function or not 

// let string ="Wecode Academy";
// let str1 = string.toUpperCase();
// if (str1 === "WECODE ACADEMY") {
//      console.log("yes");
// }
// else{
//     console.log("no");
// }
// // // 3. Introduction about your self. Use concat function 


// console.log("My".concat(" name "," is"," taiyab"," husain"))


// // // 4. Take a big string and split it using below characters/string 
// // //     a. " "   console.log(ans.length);
// // //     b. ","
// // //     c. "is"
// // //     d. "a"

// let intro = "My name, is wecode, academy";
// console.log(intro.split(" "));
// console.log(intro.split(","));
// console.log(intro.split("is"));
// console.log(intro.split("a"));



// // for(i = 5; i>= 1; i--){
// //     console.log("$".repeat(i).concat ("#".repeat(i)));
// // }

// // let mobile1 = "82900";
// // let mobile2 = "63838";
// // console.log(mobile1.padEnd(10, "*"));
// // console.log(mobile2.padStart(10, "*"));
// let intr = "TaiYab HuSaiN"
// console.log(intr.length);

// console.log(intr.toUpperCase());

// console.log(intr.toLowerCase());

// console.log(intr.includes("HuSaiN"))


// let a  = "hello are brother how are you1212"
// let s = prompt("what are search")
// let sea = a.includes(s)
// console.log(sea);
// console.log(a.endsWith("1212"))
// console.log(a.search("are"));
// console.log(a.replace(/are/g,"is"));
// console.log(a.slice(6,9))

// Date=======19feb2023
// Ans = 01
// let str = "My name is taiyab husain";
// let newStr = str.split("");
// console.log(newStr.length);

// Ans 02

// 11111
// 2222
// 333
// 44
// 5


// for (let i = 5; i >= 1; i--) {
//     let value = i + "";
//   console.log(value.repeat(i));
//   }


// let data = "hello world".split("");

// for (let value of data){
// console.log(value);

// }



//"my NAME is TAIYAB husain";

// let str = "my name is taiyab husain".split();
// console.log(str);
// let nStr = "";
// let index = 0;
// for(let value of str){
//     if(index % 2 === 0){
//         nStr = nStr + " " + value.toLowerCase();
//     } else{
//         nStr = nStr + " " + value.toUpperCase();

//     }
//     index++;
// } 
// console.log(nStr);


// let str = "khan";
// let nstr = str.length;
// if(nstr>10){
//     console.log(`hello ${str}`);
// } else {
//     console.log(`${str} World`)
// }



// let str = "Taiyab";
// let str2 = "Parihar"
// if(str.length>str2.length){
//     console.logI(str+str2);
// } else {
//     console.log(str2+str)
// }



// let strr = "i am a student.my name is taiyab husain."

// let nStr = strr.includes("student");
// if(nStr=== true){
//     console.log(strr.replace("student", "Arman"))
// } else {
//     console.log(nStr)
// }




// let str = "wecode";
// console.log(str);
// let strlength = str.length
// let space = "";
// for(i=0; i<=strlength -1  ; i++ ){
//     space = space + str[i];
// } console.log(space)

// let str = "wecode";
// console.log(str);
// let strlength = str.length
// let space = "";
// for(i=strlength-1; i>=0  ; i-- ){
//     space = space + str[i];
// } console.log(space)



let nam = "Taiyab husain";
console.log(nam.slice(2,5))