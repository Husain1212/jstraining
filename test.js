// let str = "my name is wecode is academy and my friend name is Prkash.";
// let findstr = "is";
// let index = str.split(" ");
// let count = 0;
// for(let i = 0; i<=str.length; i++){
//     if(index[i] === findstr){
//         count += 1
//     }
// }
// console.log(count);
// console.log(index)


            // let str = "My name is wecode academy and my friend name is Arun Kumar."
            // let findNumber = "is"
            // let index = str.split(" ")
            // let count   = 0
            // for(let i = 0;i<=str.length;i++){
            //   if(index[i]===findNumber){
            //     count += 1
            //   }

            // }
            // console.log(count);



           
            
   //             let name1 = prompt(" What is your name?")
   // let mobileNum = prompt("What is your mobile number?")
   // let accountNum = prompt(" What is your account number?")
   // let atmNum = prompt("What is your atm card number?")
   // console.log(name1);
   // let mobilechange = mobileNum.slice(0,7)
   // let mastmobile = mobilechange.padEnd(10,"#")
   // console.log(mastmobile);
   // let accounchange1 = accountNum.slice(0,(accountNum.length)/2-3)
   // let accounchange2 = accountNum.slice(accountNum.length/2)
   // console.log(accounchange1 + accounchange2.padStart(accountNum.length,"_"));
   // let atmchange = atmNum.slice(0,4)
   // console.log(atmchange + atmNum.padEnd(15,"\*"));


   //string.padEnd example:

   let abc = "8290063838";
   let bcd = abc.slice(0,5);
   let str22 = bcd.padEnd(10,"*");
   console.log(str22)

   //string.padStart example:


   let aaa = abc.slice(5,10)
   let nwestr1 = aaa.padStart(10,"#")
   console.log(nwestr1)

//string.slice
//it is always works in inceriment form. 
//when we used to in  decriment form the gives to  empty string.

//string.slice increment form()
var str = "Hello World!";
console.log(str.slice(1, -4));//ello Wo
console.log(str.slice(-4, -1));//rld
console.log(str.slice(-3, -1));//ld
console.log(str.slice(1, 3));//el

//string.slice decrement form

console.log(str.slice(4, 1));//empty string
console.log(str.slice(-1, -4));//empty string


//string.substring

let word = "Hello world"
console.log(word.substring(1))
console.log(word.substring(3,1));//el
console.log(word.substring(1,3));//el
console.log(word.substring(3,-1));
// here are -1 is equal to 0.so substring works all minus value is equal to 0.



//string.replace

console.log(str.replace("Hello" , "taiyab" ))

console.log(str.replace("llo" , "y" ))

console.log(str.replace("llo" , "y" ))


//string.repeat

  console.log(str.repeat(4))
/*
    *
   * *
  * * *
 * * * *
* * * * *
*/


// let str4 = "wecode";
// let strlength = str4.length
// for(i = strlength-1 ; i>=0; i--){
// console.log(str4[i])
// }

// let nww = "wecode academy"
// console.log(nww.replace("academy" , "school"))

// let nww = "wecode academy"
// console.log(nww.replace(/a/g , "-"))



// let nnn = "hello wecode";

// console.log(nnn.charAt(10))
// let nsms = "Hello world"
// console.log(nsms.indexOf("l" , 4))
let sms = "my name is taiyab husain";
console.log(sms.indexOf("n"))//3
console.log(sms.lastIndexOf("n" , 20))//3




// //piramid loop by repeat function



// for (let a = 1; a <= 6; a++) {
//   let space = "";
//   let news = "";
//   for (let b = 1; b <= 6 - a; b++) {
//     space = " ".repeat(b);
//   }
//   for (let c = 1; c <= a * 2 - 1; c++) {
//     news = "$".repeat(c);
//   }

//   console.log(space + news);
// }


// //palondrone function 121,1234321,1221,1331


// let num = 1234321;
// let subs = 0;
// let val = num;
// while(num>0){
//     let modul = num % 10;
//     num = parseInt(num/10);
//     subs = subs*10 + modul;

// } if (val === subs){
//     console.log(val + " is palondrome")
// } else {
//     console.log(val + "it is not")
// }


// //print in revers ex: wecode // edocew

// let rev = "wecode";
// let nlength = ""
// for(i = rev.length-1 ; i>=0 ; i--){
//     nlength = nlength + rev[i]
// }
// console.log(nlength)