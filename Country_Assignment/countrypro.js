const prom = new Promise(function(success,failure){
    let num1 = 20;
    let num2 = 30;
if(num1<num2){
    return success()
}else{
    return failure()
}
}).then(function(res){
    return fetch("https://restcountries.com/v3.1/name/india")
}).then(function(response){
    return response.json()
}).then(function(response){
    console.log(response[0].capital[0])
}).catch(function(){
    console.log("Error")
})