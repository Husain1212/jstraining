//### Question 1 : How can you convert a string to a number in JavaScript? write all the ways.

let number = "Taiyab"
console.log(Number(number))
console.log(Number("Ismail"))
console.log(parseInt("Husain"))
console.log(parseFloat("1.5"))
console.log(+("1.5"))
console.log(~~("1.5"))

//### Question 2 : How do you round a number to a certain number of decimal places in JavaScript?
console.log(100.98.toFixed())

//### Question 3 : How can you generate a random number between two values in JavaScript?
let value_1 = 40
let value_2 = 10
console.log(Math.trunc(Math.random()*(value_1-value_2)+value_2))

//### Question 4 : How do you convert a number to a binary, octal, or hexadecimal format in JavaScript?
let num = 10
console.log(num.toString(2))//binary 0-1
console.log(num.toString(8))//octa 0-7
console.log(num.toString(16))//hexadecimal 0-9 A B C D E F

//### Question 5 : How do you add or subtract a certain number of days from a date in JavaScript?

let x = new Date()
x.setDate(x.getDate()+5)
console.log(x)

let y = new Date()
y.setDate(y.getDate()-5)
console.log(y)


//### Question 6 : How do you compare two dates in JavaScript? Check if a date is small or large or equal to other date?

var date1 = new Date("2022-05-10");
var date2 = new Date("2022-04-10");
console.log(date1.getTime())// 1652140800000
console.log(date2.getTime())// 1649548800000

if (date1.getTime() > date2.getTime()) {
console.log("date1 is greater than date2");
} else if (date1.getTime() < date2.getTime()) {
console.log("date1 is less than date2");
} else {
console.log("date1 is equal to date2");
}

//### Question 7 : How can you format a date in JavaScript according to the user's locale?

let date = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = date.toLocaleDateString(undefined , options); // formattedDate will be a string representation of the date in the user's locale
console.log(formattedDate)

//### Question 8 : How do you calculate the difference between two dates in JavaScript?

let one = new Date()
let two = new Date(2023-4-11)
let diff = one - two
console.log(Math.floor(diff / (1000 * 60 * 60 * 24)))//19459


//### Question 9 : How do you check if a year is a leap year in JavaScript?


// function leapyear(year)
// {
//  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
// }

// console.log(leapyear(2016));
// console.log(leapyear(1800));
// console.log(leapyear(100));


let year = 1996
if(year % 100 === 0){
  if(year % 400 === 0){
    console.log("it leap year")
  } else{
  console.log("it not leap year")
  }
} else if(year % 4 === 0){
  console.log("it leap year")
} else{
  console.log("it not leap year")
}

//### Question 10 : How do you convert a string to a date in JavaScript? Write all ways.

console.log(new Date("2023/11/12"))
let mydate = new Date('2022-04-03');
console.log(mydate.toDateString())

//### Question 11 : How can you parse a date from a string in a specific format in JavaScript?

let dateString = '2023/2/10'
let dateParse = dateString.split("/")
//specific format YY/MM/DD

let parseDate = new Date(dateParse[0],dateParse[1]-1,dateParse[2])
console.log(parseDate)

//### Question 12 : How can you get the time in a specific timezone in JavaScript?

let today = new Date()
let newDate = today.toLocaleString("en-US",{ timeZone:"Asia/karachi", hour12: false})
console.log(newDate)

// console.log(
//   new Intl.DateTimeFormat("ja", {
//     timeStyle: "full",
//     timeZone: "PST",
//   }).format(new Date())
// );

//### Question 13 : Print date and time after every 1 second in the format 'MM/DD/YYYY HH:MM:SS'

// setInterval(function () {
//   let d = new Date();
//   console.log(`${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
// }, 1000);

// ### Question 14 : Write a JavaScript function to get the number of days in a month. Pass month and year as an arugment to the function. for example : getDays(2, 2023). Answer will be 28

function getDays(month, year) {
  return new Date(year, month, 0).getDate();
}// 0 yaha pr last date ko batayega month ki

const daysInFebruary2023 = getDays(2, 2023); // Returns 28

console.log(daysInFebruary2023)

//### Question 15 : Write a JavaScript function to get the week day name for the given date.

function getWeekdayName(dat) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekdayIndex = dat.getDay();//3 (index 3 is wednesday)
  return weekdays[weekdayIndex];
}

const dat = new Date("2023-04-12");
console.log(dat.getDay())
const weekdayName = getWeekdayName(dat); // Returns "Wednesday"

console.log(weekdayName)