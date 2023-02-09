
// 1. Print 1 to 10 using ++ operator?

let x = 0;
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);




//2. Print 10 to 1 using -- operator?

let y = 11;
console.log(--y);
console.log(--y);
console.log(--y);
console.log(--y);
console.log(--y);
console.log(--y);
console.log(--y);
console.log(--y);
console.log(--y);
console.log(--y);


// 3. Check output of following in console
//   1+1
//   1+200
//   200+"300"
//   "Wecode" + 400


console.log(1+1);
console.log(1+200);
console.log(1+"300");
console.log("Wecode"+400);



//4. Check result of following
//   2 === 2

console.log(2 === 2);

//   2 == "2"

console.log(2 == "2");

//   2 === +"2"

console.log(2 === + "2");

//   "wecode" == "wecode"
console.log("wecode" == "wecode");

//   "WeCode" == "wecode"

console.log("WeCode" == "wecode");

//   0.3 == 0.30

console.log(0.3 == 0.30);

//   1.0 == 1

console.log(1.0 == 1);

//   1.0 === 1

console.log(1.0 === 1);


//5. Create 5 variables for your bank account details. It would be better if you use let,const and var all 3

const accountName = "Taiyab Husain";
const accountNumber = 61165565640;
let bankName = "State bank of India";
let ifscCode = "SBIN00301115";
let address = "Mertacity";

// 6. Write any code and explain that code using multi line comment.

/*  
This is a student information. in this code .....
what is student name , id , school name,address,and pincode? 
this code created by @Taiyab Husain.
@Date 24th january 2023 
@time 11:00:00
*/

const studentName = "Taiyab husain";
const studentId = "WCA00001";
let schoolName = "WeCodeAcademy";
let schoolAddress = "JoshiMarg, Jhotwara , Jaipur";
let pincode = 302001;

console.log(studentName,studentId,schoolName,schoolAddress,pincode);

// 9. Give 1 example of each operator with expected output
//  **

let a = 10;
let b = 10;

console.log(a**b);

//  %

let c = 10;
let d = 3;

console.log(c % d);

//  !=

let e = 10;
let f = 8;

console.log(e!=f);
//  !==

let g = 10;
let h = 10;
console.log(g!==h);

//  <=

let amount1 = 500;
let amount2 = 1000;

console.log(amount1 <= amount2);

//  >=

let value1 = 500;
let value2 = 1000;

console.log(value1 >= value2);

// 8. Create a difference table and write differences between let, const and var?

document.write("Diffrence between var, let and const variables?</b><br>Ans : 1 var variable is functional scope but let and const is block scope.<br>2. var and let  varibles ko re declare kar skte h lekin const m value fix rehti h isly isko redeclare nhi kr skte h.<br>3.var k varibles ko initialization kar skte h lekin let or const m esa nhi hota h.<br>4.let and var both ko  update kar skte h but const ko update nhi kar skte h.<br>5.var varibles ko declaration se pehle bhi use kr skte jisme koi error nhi aayegi but let and const m esa nhi kar skte isme error aayegi")


// 10. Write in your own language. What is JavaScript? Explain in detail

document.write("javascript is a high level programming language hai.jisko aashani se likh or padha ja skta hai.javascript file ko js extension se pehchana ja skta h.javascript ko strating me mocha name diya gya  isko brended each ne 1995 m bnaya tha bad m ECMA(European computer manufacture Association) ek organiization h jo ki kisi bhi language ko standrd bntati h kyuki iske standrd rules and furmulas hote h jisko koi bhi language ho un rules ko follow karna hota h  jo langauge ko ek standred bnate h. or jab ecma n javascript ko update kiya tha tab us time java language bahut popular thi uski wjh se isko javascript name diya gya tha. javascript ek intractive and dynamic language h jisko web develop,web appliction or softwer develop karne k liy use kiya jata javascript ko web pages ko dyanamic bnane k liy k front-end m use kiya jata h jisme apn HTML, CSS inka use karte h or abhi present m isko back-end m bhi use karte h back-end m Node.js ka use karte h.");

// 7. Process and Thread me kya difference hai?
document.write("Process and Thread - softwer develop m behind the seen bahut sare process chlte h or in process m bahut multiple thread m kam hota h.isliy thread ka mtlb koi bhi task ko comlete karne k liy thread m kam hota h process m multiple work hote h or thread m multi or single thread se kam hota h. javascript ek single thread pr work karti h kyuki javascript ek time m ek hi kam karti h jab tak wo process ya task complete run nhi hota h tab tak aage dusra wala code nhi chlta h. isko apn aage call stack and function execution contex se samjenge jo ki isko achi trh se btati h. ");
