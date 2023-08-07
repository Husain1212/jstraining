//Constructor Function 
const sbiAccount = function(name,aadhar,pancard,mobile){
    this.AccountHolderName = name;
    this.CustomerAadhar =  aadhar;
    this.CustomerPancard = pancard;
    this.CustomerMobileNumber = mobile 
    this.money = 0
    this.statment=[]
    
}

const account = new sbiAccount("Taiyab husain",858657657650,"ABBS65651S",9877676768)

console.log(account)
console.log(sbiAccount)
console.log(account.AccountHolderName)
// account.deposit(500)
//kya hum isko funtion experssion  bol skte h.kyuki is function ka koi name nhi h isko apn n ek veriables m store kiya h.

// function expression
const Book = function (name, author, year) {
this.name = name;
this.author = author;
this.year = year;
}
function displayBook(book){
console.log(book.name + ' authored by ' + book.author + ' in the year ' + book.year + '.');
}
var book1 = new Book('Java - The Complete Reference', 'Herbert Schildt', 2006);
var book2 = new Book('Let Us C', 'Yashavant Kanetkar', 2002);
var book3 = new Book('Data Structures', 'Seymour Lipschutz', 2005);
displayBook(book1);
displayBook(book2);
displayBook(book3);


function person(first,last,age,height){
    this.firstname = first
    this.lastname = last
    this.myage = age
    this.height = height
}

function man(person){
    console.log(`My first name is `  +  person.firstname + ` and last is ` + person.lastname)
}
const customer1 = new person("taiyab","husain",25,6.1)
const customer2 = new person("taheer","khan",21,6)
const customer3 = new person("sohel","sajid",23,5.9)
man(customer1)
console.log(customer1)
console.log(customer2)
console.log(customer3)


/*	name
	aadhar
	mobile
	address
	accountNo
	accountType
	pancard
	bank
	balance
Account - Prototype
	withdraw
	deposit
	changePin
	printStatement
	calculateInterest
calculateInterest object me b add krna hai. HDFC 8% SBI 7%  Parent 6%
*/


// const enteredPassword = prompt("Please enter your password ?")
var myPassword = "123abc";

function passwordMatched(){
    if(enteredPassword === myPassword){
               return true ;
    } else{
        alert("password is wrong")   
    }
}
passwordMatched(enteredPassword)




const Account = function(name,aadhar,mobile,address,accountNo,accountType,pancard,bank,balance){
    this.customerName = name
    this.customerAadharNo = aadhar
    this.custumerMobile = mobile
    this.customerAddress = address
    this.customerAccountNo = accountNo
    this.cutomerAccountType = accountType
    this.customerPancard = pancard
    this.customerBankName = bank
    this.customerbalance = balance || 0
    this.interestRate = 6 
    this.printStatment=balance ? [balance]:[];    
}
 
Account.prototype.withdrwal = function(amount){
    this.customerbalance -= amount
    this.printStatment.push(-amount)      
    }
Account.prototype.deposit = function(amount){
    this.customerbalance += amount
    this.printStatment.push(amount)      
    } 
Account.prototype.calculateInterest   = function(){
    this.customerbalance= this.customerbalance + (this.customerbalance * (this.interestRate)/100)
}
Account.prototype.statment = function(){
    for(let value of this.printStatment){
        if(value < 0){
            console.log(`Amount withdrwal : ${-value}`)
        } else{
            console.log(`Amount Deposit : ${value}`)
        }
               
    }
    console.log(`Amount : ${this.customerbalance}`)
}
const hdfcAccount = new Account("Taiyab Husain",8655765765765,9898977769,"Plot 208,Sanjay nagar B Jhotwara Jaipur",123434444555,"Saving","AASD76756D","HDFC BANK", 5000,8)
    console.log(hdfcAccount)
    hdfcAccount.deposit(1000)
    hdfcAccount.withdrwal(699)
    hdfcAccount.calculateInterest()
    hdfcAccount.statment()


// //=======================================================

class Animal{
    constructor(name,color,type,legs){
        this.name = name
        this.type = type
        this.color = color
        this.legs = legs
    }
    Eat(){
           console.log("ghar ka khana khata h ")
           }
    sona(){
            console.log("pura din sota h")
    }

    // get getName(){
    //     return this.name
    // } 

    set setValue(val){
        this.name = val.toUpperCase()
    }
}
const dog = new Animal("tommy","black","paltu","four")
console.log(dog)
dog.Eat()
dog.sona()
dog.setValue= "doggi"

// console.log(dog.getName)


function arrayConcat(arr) {
  var result = "";

  for(let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result;
}

let arr = [1,2,3,4,5]
console.log(arrayConcat(arr))//12345

// // ==================================


class InstituteBatch {
  constructor(address, batchName, fees, students) {
    this.address = address;
    this.batchName = batchName;
    this.fees = fees;
    this.students = students;
    this.feeRecordMap = new Map();
  }

  getFeeRecordMap() {
    return this.feeRecordMap;
  }

  depositFee(studentName, month) {
    const monthByFees = this.feeRecordMap.get(studentName);
    if (!monthByFees) {
      this.feeRecordMap.set(studentName, [month]);
    } else {
      monthByFees.push(month);
      this.feeRecordMap.set(studentName, monthByFees);
    }
  }
}
const javaScriptBatch = new InstituteBatch(
  "Jhotwara, Jaipur",
  "JavaScript",
  3000,
  ["Ashraf", "Farman", "Arman", "Sohil"],

);
console.log(javaScriptBatch);
javaScriptBatch.depositFee("Ashraf", "August");
javaScriptBatch.depositFee("Ashraf", "September");
javaScriptBatch.depositFee("Farman", "August");
javaScriptBatch.depositFee("Farman", "September");
javaScriptBatch.depositFee("Arman", "August");
console.log(javaScriptBatch.getFeeRecordMap());
// // ========================================================
class Institute {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.batches = new Map();
    this.fees = new Map();
  }
  
  admission(batchname, student) {
    if (this.batches.has(batchname)) {
      const students = this.batches.get(batchname);
      students.push(student);
      this.batches.set(batchname, students);
    } else {
      this.batches.set(batchname, [student]);
    }
    
    if (!this.fees.has(student.id)) {
      this.fees.set(student.id, []);
    }
  }
  
  feesDeposit(id, amount) {
    if (this.fees.has(id)) {
      const amounts = this.fees.get(id);
      amounts.push(amount);
      this.fees.set(id, amounts);
    } else {
      this.fees.set(id, [amount]);
    }
  }
}

class Student {
  constructor(id, name, course, fathername, mobile) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.fathername = fathername;
    this.mobile = mobile;
  }
}

const wecodeAcademy = new Institute('Wecode Academy', 'Jhotwara, Jaipur');
const student1 = new Student("WCA2023/0001", 'John', 'English Spoken', 'David', '9876543210');

wecodeAcademy.admission("Javascript", "Taiyab husain");
wecodeAcademy.feesDeposit("WCA2023/0001", 3000);
console.log(wecodeAcademy)

class Institute {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.batches = new Map();
    this.fees = new Map();
    this.feesArray = new Map()
  }

   getFees(batchName){
      this.batches.get(batchName)
  }

  admission(batchName, student) {
    if (this.batches.has(batchName)) {
      const arr = this.batches.get(batchName);
      this.batches.set(batchName, [...arr, student]);
    } else {
      this.batches.set(batchName, [student]);
    }
  }
  feeDeposit(name,amount){
    if(this.fees.has(name)){
      let ans=this.fees.get(name)
      this.fees.set(name,[...ans,amount])
        }else{
          this.fees.set(name,[amount])
      }
  }

   totalFees(name) {
    let total = 0;
    if (this.fees.has(name)) {
      const amounts = this.fees.get(name);
      total = amounts.reduce((sum, amount) => sum + amount, 0);
      this.feesArray.set(name,[total])
    }
    console.log(` Student ${name.name} is deposited  total fees ${total}`)
  }


 printNumberOfStudentsInBatch(batchName) {
  if (this.batches.has(batchName)) {
    const students = this.batches.get(batchName);
    console.log(`${batchName}: ${students.length} students`);
  } else {
    console.log(`Batch '${batchName}' not found.`);
  }
}
}

const wecodeAcademy = new Institute("Wecode Academy", "Jhotwara, Jaipur");
class Student {
  constructor(id, name, fathername, mobile) {
    this.studentId = id;
    this.name = name;
    this.fathername = fathername;
    this.mobile = mobile;
  }
}
const raheel = new Student(1, "Raheel", "Khalil", 9345454543);
const arun = new Student(2, "Arun", "Ramesh", 98834455345);
const aadi = new Student(3, "Aadi", "Aakash", 99934545435);
const khan = new Student(4, "Khan", "husain", 9898787878);
const bhai = new Student(5, "mohan", "naveen", 909099898);
wecodeAcademy.admission("nodejs", raheel);
wecodeAcademy.admission("nodejs", aadi);
wecodeAcademy.admission("nodejs", khan);
wecodeAcademy.admission("nodejs", khan);
wecodeAcademy.admission("designing", arun);
wecodeAcademy.admission("designing", aadi);
wecodeAcademy.feeDeposit(raheel,3000)
wecodeAcademy.feeDeposit(raheel,3000)
wecodeAcademy.feeDeposit(khan,6600)
wecodeAcademy.feeDeposit(bhai,9000)

wecodeAcademy.feeDeposit(aadi,3000)
wecodeAcademy.feeDeposit(aadi,3000)
wecodeAcademy.feeDeposit(aadi,3000)
console.log(wecodeAcademy);
wecodeAcademy.totalFees(aadi)
wecodeAcademy.totalFees(raheel)

wecodeAcademy.printNumberOfStudentsInBatch("nodejs");
wecodeAcademy.printNumberOfStudentsInBatch("designing");
