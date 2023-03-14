const searchBtn = document.getElementById("search-btn");
const searchDiv = document.querySelector(".search");
const navigationDiv = document.querySelector(".navigation");
searchBtn.addEventListener("click", function() {
    searchDiv.classList.toggle("hidden");
    navigationDiv.classList.toggle("hidden");
});