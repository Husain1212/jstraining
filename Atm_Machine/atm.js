const enteredPassword = prompt("Please enter your password ?")
var myPassword = "123abc";
let myBalance = 0
let balanceStatment = []

function passwordMatched(){
    if(enteredPassword === myPassword){
               return true ;
    } else{
       alert("password is wrong")  
    }
}
function checkbalance(){
    if(passwordMatched()){
        document.getElementById("Result").innerText = `Balance : ${myBalance} INR`
    } else{
        error()   
    }
}
function depositRupay(){
    if(passwordMatched()){
        let depositAmount = Number(prompt("Please Enter your amount"))
        myBalance = myBalance + depositAmount
        checkbalance()
        balanceStatment.push(depositAmount)
        console.log(balanceStatment)
    } else{
        error()   
    }
}
function deductMoney(){
    if(passwordMatched()){
        let withdrawal = Number(prompt("Enter money"))
        if(withdrawal > myBalance ){
                alert("insufficent money in your account")
        } else if (withdrawal <= 0) {
             alert("Please enter amount greater than 0 rs.");
        } else {
            myBalance=myBalance-withdrawal
            balanceStatment.push(-withdrawal)
            console.log(balanceStatment)
            checkbalance()
        }
    }
}
function printStatment(){
    if(passwordMatched()){
        let str = ""
        for(let value of balanceStatment){
            str = str + `Amount${value<0 ? "withdrawal":"Deposit" } : ${value<0 ? value*-1 : value} \n`
        }
        document.getElementById("showStatment").innerText = str;
    }
}
function changepass(){
    if(passwordMatched()){
        let currantPassword = prompt("Enter your passwors")
        if(currantPassword === myPassword){
            let newPassword= prompt("Enter your new password")
            let confirmPassword = prompt("Enter again new password")
            if(newPassword === confirmPassword){
              myPassword = newPassword 
            } else{
                alert("newPassword and confirm password did not match")
            }
        } else{
            error()
           }
    }
}
function error(){
            alert("you entered wrong password.")   
}
