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


// Ans -2 =============================================

// for(i = 5; i>= 1 ; i--){
//     space = "";
//     for(j = 1; j<= i ; j++){
//         if(j % 2===1){
//             space = space + "$$";
//         } else {
//             space = space + "#";
//         }
// } console.log(space);
// }


// Ans -3 ====================================


// Ans-4=======================================

// let drink = prompt("Do you drink tea/coffee?");{
//     if(drink === "coffee"){
//         drink = true;
//     } else if( drink === "tea" ){
//         drink = false;
//     }else {
//         drink = drink;
//     }
// }

// switch(drink) {
//     case true:
//         console.log("coffee");
//         break;
//     case false:
//         console.log("Tea");
//         break;
//     default :
//         console.log("Water");         
// }

// Ans - 5======================================

// let customerAge = Number(prompt("What is your age?"));
// if(customerAge>=18 && customerAge<50){
//     let order = confirm("Would you like to have a coffee?");
//     if(order === true){
//         drink = prompt("What type of coffee you want to have?");
//         alert(`Hello Sir/Mam, here is your coffee ${drink}`)
//     }
// } else if(customerAge<18){
//     order = confirm("Would you like to have a Tea?");
//     if(order === true){
//         drink = prompt("What type of Tea you want to have?");
//         alert(`Hello Sir/Mam, here is your ${drink} tea.`)
//     } else{
//         alert("Sorry visit again please.")
//     }
// }

// Ans -6========================================

// let num1 = -90;
// let num2 = 39;
// let diff = num1 - num2;
// if(diff<0){
//   sub= (diff)*-1;
// } else{
//   sub = diff;
// }
// console.log(sub);
// if(sub>40 && num1>40){
//   console.log(sub*2);
// }else{
//   console.log(sub*3);
// }

// Ans -7=======================================


// let a = 20;
// let b = 19;

// if(a>18 && b<10){
//     console.log(a+b);
// } else {
//     console.log(a*b);
// }