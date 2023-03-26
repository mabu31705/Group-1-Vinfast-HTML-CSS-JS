let titleRegister12 = document.getElementById("titleRegister");
let titleRegister = titleRegister12.getElementsByClassName("title-register");
let titleLogin1 = document.getElementById("titleLogin");
let titleLogin = titleLogin1.getElementsByClassName("titleLogin");
titleLogin.addEventListener(
    "click", function (){
        let current = document.getElementsByClassName("activeButton");
        current.className = current[0].className.replace(" activeButton", "");
        titleRegister.className += " activeButton";
    });
