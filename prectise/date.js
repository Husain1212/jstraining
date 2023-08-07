let d = new Date()
console.log(d)
console.log(new Date("1994"))
console.log(new Date("1994,12"))
console.log(new Date("1994,12,27"))

// setInterval(function(){
//     let ad = new Date()
//     document.write(`${ad.getHours()}: ${ad.getMinutes()} : ${ad.getUTCSeconds()}`)
//     document.write("<br/>")
// },1000)

// d.setFullYear(2022,11,21)
// d.setTime()
// d.setDate(17)
// d.setTime(365*24*60*60*1000)
// console.log(d.toString())
// console.log(d)
// console.log(d.getDate())
// console.log(d.getDay())

console.log(
  new Intl.DateTimeFormat("en-au", {
    dateStyle: "full",
    timeStyle: "full",
    timeZone: "Asia/Riyadh",
  }).format(new Date())
);

const number = 123456.789;
console.log(new Intl.NumberFormat("ar-EG").format(number));
