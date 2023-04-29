function fun() {
  let ac = document.getElementById("First").value;
  document.getElementById("First").value = ac.toUpperCase();
}

function fn1() {
  let name = document.getElementById("First").value;
  let Dob = document.getElementById("Dob").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  if (!name) {
    alert("please enter name");
  }
  if (!Dob) {
    alert("please enter Dob");
  }

  if (!email) {
    alert("please enter Email");
  }
  if (!mobile) {
    alert("please enter mobile number");
  }
}