let userName = localStorage.getItem("sessionUserName");


function welcome(){

    document.getElementById("massage").innerHTML = "welcome " + userName;
}


function logOut(){

    localStorage.removeItem("sessionUserName");
}

$("#logOut").click(()=>{

    logOut();
})

