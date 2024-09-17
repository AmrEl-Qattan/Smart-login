let userInfo;

if (localStorage.getItem("users") == null) {
    userInfo = [];
  } else {
    userInfo = JSON.parse(localStorage.getItem("users"));
  }


let username = localStorage.getItem ("sessionUserName");

function login(){

    let logInEmail = document.getElementById("logInEmail");
    let logInpass = document.getElementById("logInpass");
    let logInButton = document.getElementById("logInButton");
    let checkInput = document.getElementById("checkInput")

    if(logInEmail.value == "" || logInpass.value == ""){
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none" , "d-block")
        return false;

    }
    for(let i =0 ; i< userInfo.length;i++){
        if(userInfo[i].email.toLowerCase() == logInEmail.value.toLowerCase()
        && userInfo[i].password.toLowerCase() == logInpass.value.toLowerCase()
        ){
            localStorage.setItem("sessionUserName" , userInfo[i].name);
            logInButton.setAttribute("href" , "home.html")
        }else{
            checkInput.classList.replace("d-none" , "d-block")
        }
    }
     

    
}



$("#logInButton").click(()=>{
    login();
});