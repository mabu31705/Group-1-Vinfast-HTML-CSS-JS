if (document.getElementById("test3") != null) {
    let test1 = document.getElementById("test3").getElementsByClassName("test1");
    for (let i = 0; i < test1.length; i++) {
        test1[i].addEventListener("click", function () {
            let test2 = document.getElementsByClassName("test2");
            test2[0].className = test2[0].className.replace(" test2", " ");
            this.className += " test2";
        });
    }
}

function showHideRegLog() {
    let tr = document.getElementById("testRegister");
    let tl = document.getElementById("testLogin");
    let con1 = document.getElementById("checkC1").classList;
    let con2 = document.getElementById("checkC2").classList;
    let check1 = con1.contains("test2");
    let check2 = con2.contains("test2");
    if ( check1===true) {
            tl.style.display = "none";
            tr.style.display = "flex";
    }
    if(check2===true){
            tr.style.display="none";
            tl.style.display="flex";
    }

}