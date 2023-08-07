// ==========switch===========================
let num = 2
switch(num){
case 1 :
    console.log(1);
    break;
    case 2 :
    console.log(2);
    break;
    case 3 :
    console.log(3);
    break;
    case 4 :
    console.log(4);
    break;
    case 5 :
    console.log(5);
}

// ==============================

let num = 20;
switch(num){
case 1 :
    console.log("Monday");
    break;
    case 2 :
    console.log("Tuesday");
    break;
    case  3:
    console.log("wednesday");
    break;
    case  4:
    console.log("Thursday");
    break;
    case 5 :
    console.log("Friday");
    break;
    case 6 :
    console.log("Saturday");
    break;
    case 7 :
    console.log("Sunday");
    break;
    default:
        console.log("default syntax")
}

// ====================================

let data = "Poem";

switch(data){
case "Apti" :
case "reasoning" :
case "Quant" :
case "Trigno" :
    console.log("Mathematics")
break;
case "Kavita" :
    console.log("Hindi")
break;
case "Poem" :
console.log("English")
break;
case 1957 :
    console.log("HIstory")
break;
default :
console.log("science")
}


// ======================================

let month = "May";

switch(month){
    case "January" :
    case "March" :    
    case "May" :
    case "July" :
    case "August" :
    case "Octmber" : 
    case "December":
    console.log(31)  ;
    break;
        
    case "Febuary" :
    console.log(28);
    break;
    case "April" :
    case "June" :
    case "September" :
    case "November":
    console.log(30);
    break;
    default:
    console.log(-1);
}


//===========Break And Continue========================

for(i = 1; i<=100; i++){
    if(i>=20 && i<=70){ // result 1 to 19 
        continue;
    } else if( i> 85){ // result 71 to 85
        break;
    }  console.log(i);
}