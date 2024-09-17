let userNameInput = document.getElementById("userNameSignUp");
let userEmailInput = document.getElementById("signUpEmail");
let userPasswordInput = document.getElementById("signUpPassword");
let checkExist = document.getElementById("checkExist");
var input = input = document.querySelectorAll("input")

// array to save users inputs values
let userInfo;

// check if user first time sing up or have info 3
if (localStorage.getItem("users") == null) {
  userInfo = [];
} else {
  userInfo = JSON.parse(localStorage.getItem("users"));
}

function displayData() {
  let user = {
    name: userNameInput.value,
    email: userEmailInput.value,
    password: userPasswordInput.value,
  };
  userInfo.push(user);
  localStorage.setItem("users", JSON.stringify(userInfo));
}

// sing up inputs value 1
function singUp() {
  // check user validation and if user exist 7

  if (
    userNameInput.value == "" ||
    userEmailInput.value == "" ||
    userPasswordInput.value == ""
  ) {
    inpuTempty();
  } else {
   
    successMassage();
    checkExistMassage();
    resetData();
  }
}

// sing up button click 4
$("#signUpButton").click(() => {
  singUp();
});

function successMassage() {
  success.classList.remove("d-none");
  checkInput.classList.add("d-none");
  checkExist.classList.add("d-none");
}

function inpuTempty() {
  checkInput.classList.remove("d-none");
  success.classList.add("d-none");
  checkExist.classList.add("d-none");
}

function checkExistMassage() {
  let cond = false;
  for (let i = 0; i < userInfo.length; i++) {
    if (userEmailInput.value.toLowerCase() == userInfo[i].email.toLowerCase()) {
      cond = true;
      break;
    }
  }
  if (cond == true) {
    success.classList.add("d-none");
    checkInput.classList.add("d-none");
    checkExist.classList.remove("d-none");
  } else {
    displayData();
  }
}

function resetData(){
  for(let i = 0 ; i< input.length; i++){
    input[i].value = "";
  }
}
// user validation 5

// user name validation

function userNameValidation() {
  let userNameAlert = document.getElementById("nameAlert");

  let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if (regex.test(userNameInput.value) == true && userNameInput.value != "") {
    $("#userNameSignUp").addClass("is-valid");
    $("#userNameSignUp").removeClass("is-invalid");

    userNameAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    $("#userNameSignUp").addClass("is-invalid");
    $("#userNameSignUp").removeClass("is-valid");

    userNameAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

// user password validation

function userPasswordValidtion() {
  let passAlert = document.getElementById("passAlert");

  let regex = /^.{5,15}$/;

  if (
    regex.test(userPasswordInput.value) == true &&
    userPasswordInput.value != ""
  ) {
    $("#signUpPassword").addClass("is-valid");
    $("#signUpPassword").removeClass("is-invalid");

    passAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    $("#signUpPassword").addClass("is-invalid");
    $("#signUpPassword").removeClass("is-valid");

    passAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

// user Email validation

function userEmailValidation() {
  let emailAlert = document.getElementById("emailAlert");

  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/;

  if (regex.test(userEmailInput.value) == true && userEmailInput.value != "") {
    $("#signUpEmail").addClass("is-valid");
    $("#signUpEmail").removeClass("is-invalid");

    emailAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    $("#signUpEmail").addClass("is-invalid");
    $("#signUpEmail").removeClass("is-valid");

    emailAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function userInputValidation() {
  userNameValidation();
  userPasswordValidtion();
  userEmailValidation();

  if (
    userNameValidation() == true &&
    userPasswordValidtion() == true &&
    userEmailValidation() == true
  ) {
    return true;
  } else {
    return false;
  }
}
