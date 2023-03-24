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
function removeBorder(a){
    a.style.border = "none"
}
function openModel(imgs1){
    let model = document.getElementById("modelId");
    model.classList.add("openModel");
}
