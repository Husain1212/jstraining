const title= document.getElementById("tittle");
const namefield= document.getElementById("namefield");
const signinbtn= document.getElementById("signinbtn");
const signupbtn= document.getElementById("signupbtn");

signinbtn.onclick = function(){
    title.innerHTML = "Sign up"
    namefield.style.display = "block";

}

signunbtn.onclick = function(){
    title.innerHTML = "Login"
    namefield.style.display = "block";
    
}