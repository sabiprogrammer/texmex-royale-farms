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
    // navBar.style.height = `${navListHeight}px`;

    // if(navList.classList.contains("show-links") && navListHeight > 0){
    //     navBar.style.height = `${navListHeight}px`;
    // }else{
    //     navBar.style.height = `${navListHeight}px`;
    // }
});

// SCROLLING IMAGE FUNCTIONALITY - GALLERY SECTION
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
};
