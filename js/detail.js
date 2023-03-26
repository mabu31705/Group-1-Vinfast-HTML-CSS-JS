function myFunction(imgs) {
    let expandImg = document.getElementById("bigImg");
    expandImg.src = imgs.src;
    imgs.style.border = "2px solid orange"
}
function swapImg(x){
    let expandSmall = document.getElementById("mainImg");
    expandSmall.src = x.src
    x.style.border = "2px solid orange"
}
function textImg(n){
    let textImg0 = document.getElementById("clothe0");
    let textImg1 = document.getElementById("clothe1");
    let textImg2 = document.getElementById("clothe2");
    let textImg3 = document.getElementById("clothe3");
    let textImg4 = document.getElementById("clothe4");
    let textImg5 = document.getElementById("clothe5");
    let textImg6 = document.getElementById("clothe6");
    let textImg7 = document.getElementById("clothe7");
    switch (n){
        case 0:
            swapImg(textImg0);
            break;
        case 1:
            swapImg(textImg1);
            break;
        case 2:
            swapImg(textImg2)
            break;
        case 3:
            swapImg(textImg3)
            break;
        case 4:
            swapImg(textImg4)
            break;
        case 5:
            swapImg(textImg5)
            break;
        case 6:
            swapImg(textImg6)
            break;
        case 7:
            swapImg(textImg7)
            break;
    }


}
function removeBorder(a){
    a.style.border = "none"
}
function openModel(){
    let model = document.getElementById("modelId");
    model.classList.add("openModel");
}
function removeModel(e){
    let model = document.getElementById("modelId");
    model.classList.remove("openModel")
}
