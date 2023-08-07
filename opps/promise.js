// function test() {
//     const countryName = prompt("Enter country name")
//     const prom1 = fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     prom1
//       .then(function (res) {
//         console.log("Hello....");
//         return res.json();
//       })
//       .then(function (response) {
//         console.log(response[0])
//         document.getElementById("Result").innerText = `Country Name : ${response[0].altSpellings[1]} \n Country Capital : ${response[0].capital[0]}`
//        })
//       .catch(function () {
//         console.log("error.............");
//       });
//   }


async function getdata(){
  await fetch ("https://restcountries.com/v3.1/name/india")
  document.write("i love my india")
  await fetch("https://restcountries.com/v3.1/name/japan")
  document.write("japan is heigh population country")
}

getdata()