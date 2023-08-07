// oddNumber(15)
// function oddNumber(a){
//     if(a % 2 === 1){
//         console.log("It is odd number")
//     } if(a % 2 === 0){
//         console.log("even number")
//     }
    
// }

// let oddNum = function (a){
//     if(a % 2 === 1){
//         console.log("It is odd number")
//     } if(a % 2 === 0){
//         console.log("even number")
//     }
// }
// oddNum(24)


// let oddEven = (a) => {
// if(a % 2 === 1){
//         console.log("It is odd number")
//     } if(a % 2 === 0){
//         console.log("even number")
//     } 
// }
// oddEven(11)

// //========================

// const add = function(a){
//     return a * 5
// }
// console.log(add(5))


// const multiply = (a) =>{
//     return a * 5
// }
// console.log(multiply(7))

// const mult = (a) => a*5;
// console.log(mult(9))

//==============


// let arr = [1,2,3,4]
// let newArr = (number) => number * 2;
// console.log(arr.map(newArr))

//=====================filter map

// let arr1 = [1,2,3,4,5]
// let oddArr = (number) => number % 2 === 1;
// console.log(arr1.filter(oddArr).map(num=> num+1));


//===============
// let arr2 = [1,2,3,4,5]
// console.log(arr2.filter((number) => number % 2 === 1).map(num=> num+1).reduce((total,currant) =>  total + currant));

//==========================

// let numArray = [1,5,9,17,11]
// let length = 0
// let ans = numArray.every(num=> num % 2 === 1);
// if(ans){
//  length = numArray.filter((num) => num > 5).length
// }
// console.log(length)

//============================


// function oddEven(num=10){
//     num % 2=== 0
// } 
// oddEven(1)


// function one(a,b,c) {
//   if (a > b && a > c) {
//     console.log("a big number");
//   } if (b > a && b > c) {
//     console.log("b big number");
//   } else if (c > a && c > b) {
//     console.log("c big number");
//   }
// }

// one(15,66,170);

//=================

// function printArray() {
//   for (let value  of arguments) {
//     console.log(value);
//   }
// }
// printArray(1, 2);
// printArray(6,7)

// //===========
// setTimeout(test,3000)
// function test(){
//     console.log("hello world")
// }
// setInterval(test2,5000)

// function test2(){
//     console.log("wait for second")
// }

//============

// function sum(a, b) {
//   console.log(a + b);
// }
// console.log(sum(1, 2)); 
// let a = function (a ,b) {
//     //Anonymous function
//     console.log(a+b);
// }

	// var calSub = function(x, y){
	// 	let z = x - y;
	// 	return z;
	// }

	// console.log("Subtraction : " + calSub(7, 4));


	// function test(a,fn1,fn2){
	// 	if(a % 2 === 1){
	// 		fn1(a)
	// 	} if(a % 2 === 0){
	// 		fn2(a)
	// 	}
	// }
	// test(10,
	// 	function(a){
	// 		console.log("odd number")
	// 	},function(a){
	// 		console.log("even number")
	// 	})



	// function test(num1,num2,fn1,fn2,fn3,fn4){
	// 	if(num1 >100 && num2>100 ){
	// 		fn1()
	// 	} else if(num1 >num2){
	// 		fn2()
	// 	}else if(num2 >num1){
	// 		fn3()
	// 	}else if(num1 === num2){
	// 		fn4()
	// 	}
	// }
	// test(101,201,
	// 	()=> console.log("both number greater then 100"),
	// 	()=> console.log("num1 is greater then num2"),
	// 	()=> console.log("num2 is greater then num1"),
	// 	()=> console.log("both numbers are equal"))

	// function test(){
	// 	 function inner() {
	// 		console.log("Hello World")	
	// 	} return inner();
	// }
	// test()

	// function test1(){
	// 	return function () {
	// 		console.log("Hello World")	
	// 	} 
	// }
	// test1()()

// 	let b = 0;
// function outer(){
//    	let b = 5
//     function inner(){
//         let b = 3;
// 		b++;
        
//         console.log(b)
//     }
//     inner();
// }
// outer();



// for (let i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

//=========aargument

// function printArray() {
//   for (let value of arguments) {
//     console.log(value);
//   }
// }
// let fn1 = () => console.log("hello bhai")
// printArray(0);
// printArray(1, 2);
// printArray(fn1());
// printArray(1, 2, 3);

//===================
//reverse number==32243==//34223

// let number = 32243
// function reverseNumber(n){
// 	n = n + "";
// 	return n.split("").reverse().join("")
// }
// console.log(reverseNumber(number))


// function reverseString(string){
// 	string = string + ""
// 	return string.split("").reverse().join(" ")
// }
// console.log(reverseString("Hello"))



function palindrome(str){

	let len = str.length
	let loopstop = Math.floor(len/2)
	for(i = 0; i<loopstop;i++){
		if(str[i] !== str[len-1-i]){
			return false
		}
	} return true
}
console.log(palindrome("madam"))
console.log(palindrome(1221))
console.log(palindrome("nursesrun"))
console.log(palindrome("taiyab"))

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function alphabetical(word){
	return word.split("").sort().join("")
}
console.log(alphabetical('webmaster'))

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function string_in_uppercase(str){
	let newStr = str.split(" ")
	console.log(newStr)
	let stringUpper = []
	for(let i = 0; i < newStr.length;i++){
		stringUpper.push(newStr[i].charAt(0).toUpperCase()+newStr[i].substring(1))
	}
	
	return stringUpper.join(" ")
}
console.log(string_in_uppercase('the quick brown fox'))

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
let str2 = 'Web Development Tutorial'
function longest_Word(str2){
	let strSplit = str2.split(" ")
	let maxStr = strSplit[0]
	// console.log(maxStr)
	for(i =0;i<strSplit.length;i++){
		console.log(strSplit[i])
		if(maxStr.length<strSplit[i].length){
			maxStr=strSplit[i]
		}
	} return maxStr

 } console.log(longest_Word(str2))


 //==========================

function test(a,b,fn11,fn12,fn13){
	if(a<b){
		fn11()
	} else if(a>b){
		fn12()
	} else if(a===b){
		fn13()
	}
} test(100,100,
	function(){console.log("b is greater")},
	function(){console.log("a is greater")},
	function(){console.log("a and b is equal")})

	//=========================================

// 	setTimeout(() => {
//   console.log("Test......");
// }, 5000);
// setInterval(() => {
//   console.log("Let's Go....");
// }, 1000);

//===================

// function odd_Even(num){
// 	if(num % 2 === 0) {
// 	console.log("even")
// 	} else{
// 		console.log("odd")
// 	}
	
// }
// odd_Even(10)
//========================function
// function odd_Even() {
// 	return function(num){
// 		if(num % 2 === 0) {
// 	console.log("even")
// 	} else{
// 		console.log("odd")
// 	}	
// }
// }

// let ans = odd_Even()
// ans(10)


function odd_Even() {
	return function(num){
		if(num % 2 === 0) {
	return "even"
	} else{
		return "odd"  
	}	
}
}

let ans = odd_Even()
console.log(ans(11))


//================

function testing(num){
	if(num % 2 === 1){
		return function odd(){
			console.log("Odd number")
		}
	} else if(num % 2 === 0){
		return function even() {
			console.log("Even number")
		}
	}
}
testing(11)()

//==============================

// let helloWord = setInterval(() => {
//   console.log("Hello World");
// }, 1000);
// let weCode = setInterval(() => {
//   console.log("WeCode Academy");
// }, 2000);
// setTimeout(() => {
//   clearInterval(helloWord);
// }, 20000);
// setTimeout(() => {
//   clearInterval(weCode);
// }, 30000);


//===================


// let seconds = 00;
// let minutes = 00;
// let hours = 00;
// let watch = setInterval(() => {
// 	++seconds;
// 	if(seconds === 10){
// 		minutes= minutes+01;
// 		seconds=00;
// 	} 
// 	if(minutes === 03){
// 		hours = hours + 01
// 		minutes = 00;
// 	}
// 	document.write(hours + ":" + minutes + ":" + seconds )
// 	document.write("</br>")
// }, 1000);

// let stoptimer = setTimeout(()=>{clearInterval(watch)},5000)


//=================object this method

// const personalDetails ={
// 	myName : "Taiyab Husain",
// 	address : "Jaipur West",
// 	mobileno : 8290063838,
// 	printDetails : function(){
// 		console.log(`${this.myName} ${this.address}${this.mobileno}`)
// 	}
// }
// personalDetails.printDetails()


//=================call apply bind method

// const student_details_1 ={
// 	studentName : "Taiyab Husain",
// 	course : "nodeJs",
// 	fees : 8290063838,
// 	}
// const student_details_2 ={
// 	studentName : "Jakir Husain",
// 	course : "javaScript",
// 	fees : 7014434632,
// 	}
//   function printStudent_Details(date,month,year){
// 		date , month , year;
// 		console.log(`Hii , Wecode Academy your name is ${this.studentName} and your course is ${this.course} and course fees is ${this.fees}` )
// 	}
// printStudent_Details.call(student_details_1, 27,12,1994)
// printStudent_Details.call(student_details_2, 24,12,1992)


// printStudent_Details.apply(student_details_1,[27,12,1994] )
// printStudent_Details.apply(student_details_2, [24,12,1992])

// printStudent_Details.bind(student_details_1,27,12,1994 )
// printStudent_Details.bind(student_details_2, 24,12,1992)

const student_details_1 ={
	studentName : "Taiyab Husain",
	course : "nodeJs",
	fees : 8290063838,
	}
const student_details_2 ={
	studentName : "Jakir Husain",
	course : "javaScript",
	fees : 7014434632,
	}
  function printStudent_Details(date,month,year){
		date , month , year;
		console.log(`Hii , Wecode Academy your name is ${this.studentName} and your course is ${this.course} and course fees is ${this.fees}` )
	}
printStudent_Details.call(student_details_1, 27,12,1994)
printStudent_Details.call(student_details_2, 24,12,1992)


printStudent_Details.apply(student_details_1,[27,12,1994] )
printStudent_Details.apply(student_details_2, [24,12,1992])

const details_Student1_Nodejs = printStudent_Details.bind(student_details_1,27,12,1994 )
const details_Student2_Js = printStudent_Details.bind(student_details_2, 24,12,1992)


details_Student1_Nodejs()
details_Student2_Js()


const bank_Details = {
	account_Name : "Anaya Fatima",
	account_number : 1500078654423,
	bank_Branch : "State Bank Of India",
	bank_Address : "Merta city",
	bank_Branch_Code : 3421221
}

function print_bank(year){
	let currant_Year = 2023
	let age = currant_Year-year
	if(age >= 18){
		console.log(`you are eligeble for open bank account in this branch because your age is  ${age}+. your name is ${this.account_Name} your account number  is ${this.account_number} your bank name is ${this.bank_Branch},${this.bank_Address} and branch code ${this.bank_Branch_Code}`)
	} else{
		alert (`your age ${age} year is less then 18+. so you are not eligble to open bank account in this branch. Thank your vsite agaim`)
	}
}
print_bank.call(bank_Details, 2005)
print_bank.apply(bank_Details, [2005])
