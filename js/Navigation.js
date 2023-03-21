const nav = document.querySelector(".nav")
    searchIcon = document.querySelector("#searchIcon")

    searchIcon.addEventListener("click",() => {
        nav.classList.toggle("openSearch")
        if (nav.classList.contains("openSearch")){
            return searchIcon.classList.replace("fa-search", "fa-times");
        }
        searchIcon.classList.replace("fa-times", "fa-search");
    });