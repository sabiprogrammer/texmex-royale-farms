/*
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
*/


// MULTI-STEP FORM LOGIC

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


// MAKING SURE TERMS IS CHECKED BEFORE FORM SUBMIT
const checkInput = document.querySelector("input.terms-check");
const submitBtn = document.getElementById("submit-btn");
submitBtn.disabled = true;
checkInput.addEventListener("change", ()=>{
    if (checkInput.checked) {
        submitBtn.classList.remove("btn-disabled");
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.add("btn-disabled");
        submitBtn.disabled = true;
    }
});
// console.log(checkInput.value);