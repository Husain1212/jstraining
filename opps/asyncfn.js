async function getData() {
  let d = new Date();
  console.log(d.getSeconds(), d.getMilliseconds());
  let india = await fetch("https://restcountries.com/v3.1/name/india");
  let japan = await fetch("https://restcountries.com/v3.1/name/japan");
  let nepal = await fetch("https://restcountries.com/v3.1/name/nepal");
  india = await fetch("https://restcountries.com/v3.1/name/india");
  japan = await fetch("https://restcountries.com/v3.1/name/japan");
  nepal = await fetch("https://restcountries.com/v3.1/name/nepal");
  let ans = "";
  await india.json().then((res) => {
    ans +="India : " + res[0].capital[0] + " , ";
  });
  await japan.json().then((res) => {
    ans += "Japan : " + res[0].capital[0] + " , ";
  });
  await nepal.json().then((res) => {
    ans +="Nepal : " + res[0].capital[0];
  });
  d = new Date();
  console.log(d.getSeconds(), d.getMilliseconds());
  return ans;
}
let capital = getData();
capital.then((res) => {
  console.log(res);
});


async function getData() {
  const response = await Promise.all([
    fetch("https://restcountries.com/v3.1/name/india"),
    fetch("https://restcountries.com/v3.1/name/japan"),
    fetch("https://restcountries.com/v3.1/name/china"),
    fetch("https://restcountries.com/v3.1/name/nepal"),
  ]);
  let ans = await response[0].json()
 console.log("INDIA : " + ans[0].capital[0])
 
}

getData();

async function getData() {
  const response = await Promise.allSettled([
    fetch("https://restcountries.com/v3.1/name/india"),
    fetch("https://restcountries.com/v3.1/name/japan"),
    fetch("https://restcountries.com/v3.1/name/china"),
    fetch("https://restcountries.com/v3.1/name/nepal"),
  ]);
//  console.log(response)
}

getData();


async function getData() {
  const response = await Promise.race([
    fetch("https://restcountries.com/v3.1/name/india"),
    fetch("https://restcountries.com/v3.1/name/japan"),
    fetch("https://restcountries.com/v3.1/name/china"),
    fetch("https://restcountries.com/v3.1/name/nepal"),
  ]);
  response.json().then((value)=>{
    console.log(value[0])
  })
}

getData();

function sleep(time,value,state){
  return new Promise((resolve,reject)=> {
    setTimeout(()=>{
      if(state==="Fullfill"){
        return resolve(state)
      } else{
        return reject(new Error (state))
      }
    },time)
  })
}

const p1 = sleep(2100,"p1 fast"," p1 Fullfill")
const p2 = sleep(500,"p2 fast","p2 Reject")


Promise.race([p1,p2]).then((value)=>{
  console.log(value)
})


const p3 = sleep(700,"p3 fast","Fullfill")
const p4 = sleep(4100,"p4 fast","Reject")


Promise.race([p3,p4]).then((value)=>{
  console.log(value)
}),(error) => {
    console.error(error.message); // "p4 fast"
    // p4 is faster, so it rejects
  }


  
let prom = new Promise(function(success,reject){
  let num = Math.trunc(Math.random()*200 + 1);
  console.log(num)
  if(num<=10){
    success(1000)
  } else if(num > 10 && num <= 100){
    success(2000)
  } else{
    reject(5000)
  }
}).then((value)=>{
  console.log(value)
}).catch((value)=>{
  console.log(value)
})

