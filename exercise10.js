// //Ans-1

// const order1 = Number(prompt("How many french fries (60rs per piece) do you want to order ?"));
// const order2 = Number(prompt("How many burgers (50rs per piece) do you want to order ?"));
// const order3 = Number(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));
// const order4 = Number(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));
// const oredr5 = Number(prompt("How many Cokes (50 per piece) do you want to order ?"));

// const frenchFries = order1*60;
// const burgers = order2*50;
// const chowmin = order3*100;
// const manchurian = order4*80;
// const cokes  = oredr5*50;

// const totalBill = frenchFries+burgers+chowmin+manchurian+cokes;
// console.log(totalBill);




// //Ans -5

// const dateOfBirth = Number(prompt("What is your birth year?"));
// const myAge = 2023 - dateOfBirth;
//  if(myAge >= 18){
//     const document = confirm("Do you have valid license number?");
    
//         if(document === true){
//             const doc = Number(prompt("please enter licence no.?"))
//             alert(`"Your license number ${doc} is ready to drive."`)

//         } 
//     } else if(myAge<18){
//     const newMember = confirm("Do you have gaurdians ?");{
//         if(newMember === true){
//             const gaurdians = prompt("please enter your gaurdians name");
//             alert(`You are ready to drive with ${gaurdians}.`)
//         } else { alert("Sorry visit again please.")}
//     }

//  }



// //Ans - 10

// const data = "taiyabhusain";
// const newData = data.length;
// for(i = 1; i <= newData; i++){
//     console.log(i);
// }


// //Ans - 8 

// const num1 = Number(prompt("plz enter number first?"));
// const num2 = Number(prompt("plz enter number second?"));
// const num3 = Number(prompt("plz enter number third?"));
// const num4 = Number(prompt("plz enter number fourth?"));

// if(num1 === num2 || num1 === num3 || num1 === num4){
//     console.log(`Yes ${num1} is same`)
// } else if(num2 === num3|| num2 === num4 ){
//     console.log(`Yes ${num2} is same`)
// } else if(num3===num4){
//     console.log(`Yes ${num3} and ${num4} is same`);
// } else {
//     console.log("No")
// }



// //Ans 7

// const number1 = 10;
// const number2 = 4;

// if (number1 >= 0 && number2 <= -1 ){
//     console.log(number1 + number2);
// } else {
//     console.log(number1 * number2);
// }


// // Ans 6 

// const aNumber = 30;
// const newNumber = aNumber - 19;

// if(newNumber < 19){
//     console.log(aNumber*3);

// } else {
//     console.log(aNumber * 2);


// }


//==========================================
// Ans -2

// for(i = 5; i>=1; i--){
//     for(j = 1 ; j <= i ; j++ ){

//     if(j % 2 === 0){
//         document.write("##");
//     } else {
//         document.write("$")
//     }
//     }  document.write("<br/>")
// }

//Ans -3

// const series = Number(prompt("How many times do you want to print Series?"));
// for(i = 1; i <= series ; i++){
//     multiple =(i**i + i);
//         document.write(multiple);
//      document.write("<br/>") 
// } 


// Ans 01==================================================

// const fries = 60;
// const burger = 50;
// const chowmin = 100;
// const manchurian = 80;
// const cokes = 50;

// let frenchFriesCount = Number(prompt("How many french fries (60rs per piece) do you want to order ?"));
// let burgerCount = Number(prompt("How many burger (50rs per piece) do you want to order ?"));
// let chowminCount = Number(prompt("How many chowmin (100rs per piece) do you want to order ?"));
// let manchurianCount = Number(prompt("How many manchurian (80rs per piece) do you want to order ?"));
// let cokesCount = Number(prompt("How many cokes (50rs per piece) do you want to order ?"));
 
// let totalCount = 0;

// if(frenchFriesCount>0){
//     totalCount = totalCount + (fries*frenchFriesCount)
// }if(burgerCount>0){
//     totalCount = totalCount + (burger*burgerCount);
// }if(chowminCount>0){
//     totalCount = totalCount + (chowmin*chowminCount);
// }if(manchurianCount>0){
//     totalCount = totalCount + (manchurian*manchurianCount);
// }if(cokesCount>0){
//     totalCount = totalCount + (cokes*cokesCount);
// }
//     console.log(`Total payble Bill : ${totalCount}`);


// Ans 02 ========================================

// for(i = 1 ; i<= 5 ; i++){
//     let str = "";
//     for(j = 1 ; j<= i ; j++){
//         if(j % 2 === 0){
//             str = str + "##";
//         } else {
//             str = str + "$";
//         }
//     } 
//     console.log(str);
// }
