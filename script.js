const navBar = document.querySelector("nav");
const navList = document.querySelector("nav ul");
const navToggleBtn = document.querySelector(".nav-toggle");

window.addEventListener("scroll", () => {
    navBar.classList.toggle("nav-sticky", window.scrollY > 350);
    if(window.scrollY < 150 && navList.classList.contains("show-links")){
        navList.classList.remove("show-links");
    }
});

// MOBILE TOGGLE FUNCTIONALITY
navToggleBtn.addEventListener("click", () =>{
    const navListHeight = navList.getBoundingClientRect().height;
    navList.classList.toggle("show-links");
});
