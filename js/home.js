if(document.getElementById("test3")!=null){
    let test1 = document.getElementById("test3").getElementsByClassName("test1");
    for (let i = 0; i < test1.length; i++) {
        test1[i].addEventListener("click", function() {
            let test2 = document.getElementsByClassName("test2");
            test2[0].className = test2[0].className.replace(" test2", " ");
            this.className += " test2";
        });
    }
}

function showHideRegLog(){
    let tr= document.getElementById("testRegister");
    let tl=document.getElementById("testLogin");
if(tr.style.display==="none"){
    tr.style.display="flex";
    tl.style.display="none";
} else {
    tr.style.display="none";
    tl.style.display="flex";
}
}