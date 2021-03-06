const validateForm = () => {
  let x = document.forms["myForm"]["firstName"].value;
  if (!isNaN(x)) {
    alert("Only Characters are allowed");
    return false;
  }

  let y = document.forms["myForm"]["lastName"].value;
  if (!isNaN(y)) {
    alert("Only Characters are allowed");
    return false;
  }

  let z = document.forms["myForm"]["department"].value;
  if (!isNaN(z)) {
    alert("Only Characters are allowed");
    return false;
  }

  let a = document.forms["myForm"]["event"].value;
  if (!isNaN(a)) {
    alert("Only Characters are allowed");
    return false;
  }

  let b = document.forms["myForm"]["prize"].value;
  if (!isNaN(b)) {
    alert("Only Characters are allowed");
    return false;
  }
};

const formValidationRegister = () => {
  let a = document.forms["myForm"]["firstName"].value;
  let n = document.forms["myForm"]["lastName"].value;
  let b = document.forms["myForm"]["collegeName"].value;
  let c = document.forms["myForm"]["department"].value;
  let d = document.forms["myForm"]["year"].value;
  let x = document.forms["myForm"]["mobileNumber"].value;
  let y = document.forms["myForm"]["password"].value;
  let z = document.forms["myForm"]["confirm_password"].value;

  if (!isNaN(a)) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Please Provide Prpoer First Name",
    });
    return false;
  }

  if (!isNaN(n)) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Please Provide Prpoer Last Name",
    });
    return false;
  }

  if (!isNaN(b)) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Please Provide Prpoer College Name",
    });
    return false;
  }

  if (!isNaN(c)) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Please Provide Prpoer Department Name",
    });
    return false;
  }

  if (!isNaN(d)) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Please Provide Prpoer Academic Year",
    });
    return false;
  }

  if (isNaN(x)) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Please Provide Prpoer Valid Mobile Number",
    });
    return false;
  }

  if (x.length !== 10) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Please Provide Prpoer Valid Mobile Number",
    });
    return false;
  }

  if (y.length <= 7 || y.length > 20) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Password length must be between 8 to 20",
    });
    return false;
  }

  if (y !== z) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Password & Confirm password field are not Same",
    });
    return false;
  }
};

const validateFormContact = () => {
  let name = document.getElementById("name").value;
  if (name == "") {
    alert("Name cannot be empty");
    return false;
  }
  let email = document.getElementById("email").value;
  if (email == "") {
    alert("Email cannot be empty");
    return false;
  } else {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      alert("Email format invalid");
      return false;
    }
  }

  let subject = document.getElementById("subject").value;
  if (subject == "") {
    alert("Subject cannot be empty");
    return false;
  }

  let message = document.getElementById("message").value;
  if (message == "") {
    alert("Message cannot be empty");
    return false;
  }
};
