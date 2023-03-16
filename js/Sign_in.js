const form = document.querySelector("form");
eField = form.querySelector(".email");
eInput = eField.querySelector("input");
pField = form.querySelector(".password");
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault();
    if(eInput.value === ""){
        eField.classList.add("error")
    }
    if(pInput.value === ""){
        pField.classList.add("error")
    }
    eInput.onkeyup = ()=>{checkEmail();}
    pInput.onkeyup = ()=>{checkPass();}
    function checkEmail(){
        eInput.onkeyup = ()=>{
            let pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if(!eInput.value.match(pattern)) {
                eField.classList.add("error");
                let errorTxt = eField.querySelector(".error-txt");
                (eInput.value !== "") ? errorTxt.innerText = "*Enter a valid Email" : errorTxt.innerText = "*Email can't be blank"
            }else{
                eField.classList.remove("error")
            }
        }
    }
    function checkPass(){
        pInput.onkeyup = ()=>{
            if(pInput.value === "") {
                pField.classList.add("error");
            }else{
                pField.classList.remove("error")
            }
        }
    }
    if(!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}

