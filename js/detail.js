function myFunction(imgs) {
    var expandImg = document.getElementById("bigImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}