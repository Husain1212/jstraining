const prom = fetch("https://restcountries.com/v3.1/name/india");

prom.then(function(resposnse){
return resposnse.json()
}).then(function(res){
document.getElementById("country").textContent = `Country Capital : ${res[0].capital[0]}`
return fetch("https://restcountries.com/v3.1/name/japan");
}).then(function(resposnse){
return resposnse.json();
}).then(function(resposnse){
    let value = document.getElementById("country").textContent;
    const paregraphChild = document.createTextNode(`Country ;Capital : ${resposnse[0].capital[0]}`)
    const element = document.getElementById("country")
    element.appendChild(paregraphChild);
})