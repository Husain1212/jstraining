// let obj = {
//     studentName : "Taiyab husain",
//     class: "B.tech",
//     branch : "Computer Science",
//     age : 28,
//     address : "Jaipur",
//     accountNumber: 61165565640,
//     123: 8290063838,

// }
// console.log(obj)
// console.log(obj.studentName,obj.class)
// console.log(obj['studentName'],obj[123])

// const person = {}
// person.firstName = "Husain"
// person.myAge = 27
// person.myAddress = "Jhotwara jaipur"

// console.log(person)




// const obj = {
//     name : "taiyab husain",
//     address : "jhotwara jaipur",
//     mobileNo : 8290063838,
// }
// let enteries = Object.entries(obj)
// // console.log(enteries)
// for(i = 0 ; i<enteries.length; i++){
//     console.log(enteries[i][0],enteries[i][1])
// }


// const personalDetails = {
//         name : "taiyab husain",
//         fatherName: "Mohd. Fraid",
//         address : "jhotwara jaipur",
//         mobileNo : 8290063838,
//         bankAccount:{
//             accountName : "Taiyab husain",
//             accountNumber: 61165565640,
//             bankBranch : "Sbi",
//             bankAddress : {
//                 localAddress: "Near Joshi Marg",
//                 area : "jhotwara", 
//                 bankBranchCity : "Merta city",
//                 pincode : 341510,

//             }
//         }
// }


// console.log(personalDetails.name)
// console.log(personalDetails.bankAccount.accountNumber)
// console.log(personalDetails.bankAccount.bankAddress.bankBranchCity)
// console.log(personalDetails.bankAccount)




// const obj = {
//   name: "Wecode",
//   address: {
//     //Nested Object - Object inside Object
//     pincode: 302012,
//     area: "Jhotwara",
//     city: "Jaipur",
//     state: "Rajasthan",
//   },
//   mobile: 54656565,
//   ages: [1, 2, 3, 4, 5],
//   sum: function (a, b) {
//     return a + b;
//   },
// };
// console.log(obj)
// let convert = Object.entries(obj)
// for(i=0;i<convert.length;i++){
//   console.log(convert[i][i])
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.keys(obj.address));
// console.log(Object.values(obj.address));
// console.log(Object.entries(obj));


// 1) The dot notation (.)
// const person ={
//   firstName:"Taiyab",
//   lastName : "Husain",
//   'address' : 123
// }

// console.log(person.firstName)
//   console.log(person.lastName)
//   console.log(person['address'])

  //2) Array-like notation ( [])

  // console.log(person["firstName"],person["lastName"])
  // console.log(person["lastName"])

//Nested array
const person ={
  firstName:"Taiyab",
  lastName : "Husain",
  otherDetails : {
    mobileNo : 8290063838, 
    address : "Jhotwara , Jaipur"
  }
}


console.log(Object.entries(person))
const newDetails =Object.entries(person)
console.log(newDetails.toString())
const obje = newDetails.includes("Taiyab")
console.log(obje)



// console.log(person.otherDetails)
//Modify details in objects

// person.firstName = "Abbas"
// console.log(person)