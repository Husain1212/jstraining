//Ans-1

let order1 = Number(prompt("How many french fries (60rs per piece) do you want to order ?"));
let order2 = Number(prompt("How many burgers (50rs per piece) do you want to order ?"));
let order3 = Number(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));
let order4 = Number(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));
let oredr5 = Number(prompt("How many Cokes (50 per piece) do you want to order ?"));

let frenchFries = order1*60;
let burgers = order2*50;
let chowmin = order3*100;
let manchurian = order4*80;
let cokes  = oredr5*50;

let totalBill = frenchFries+burgers+chowmin+manchurian+cokes;
console.log(totalBill);




//Ans -5

let dateOfBirth = Number(prompt("What is your birth year?"));
let myAge = 2023 - dateOfBirth;
 if(myAge >= 18){
    let document = confirm("Do you have valid license number?");
    
        if(document === true){
            let doc = Number(prompt("please enter licence no.?"))
            alert(`"Your license number ${doc} is ready to drive."`)

        } 
    } else if(myAge<18){
    let newMember = confirm("Do you have gaurdians ?");{
        if(newMember === true){
            let gaurdians = prompt("please enter your gaurdians name");
            alert(`You are ready to drive with ${gaurdians}.`)
        } else { alert("Sorry visit again please.")}
    }

 }



//Ans - 10

let data = "taiyabhusain";
let newData = data.length;
for(i = 1; i <= newData; i++){
    console.log(i);
}


//Ans - 8 

let num1 = Number(prompt("plz enter number first?"));
let num2 = Number(prompt("plz enter number second?"));
let num3 = Number(prompt("plz enter number third?"));
let num4 = Number(prompt("plz enter number fourth?"));

if(num1 === num2 || num1 === num3 || num1 === num4){
    console.log(`Yes ${num1} is same`)
} else if(num2 === num3|| num2 === num4 ){
    console.log(`Yes ${num2} is same`)
} else if(num3===num4){
    console.log(`Yes ${num3} and ${num4} is same`);
} else {
    console.log("No")
}



//Ans 7

let number1 = 10;
let number2 = 4;

if (number1 >= 0 && number2 <= -1 ){
    console.log(number1 + number2);
} else {
    console.log(number1 * number2);
}


// Ans 6 

let aNumber = 30;
let newNumber = aNumber - 19;

if(newNumber < 19){
    console.log(aNumber);
    console.log(aNumber);
    console.log(aNumber);

} else {
    console.log(aNumber);
    console.log(aNumber);

}




