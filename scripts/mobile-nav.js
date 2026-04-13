// Nav hamburger button stuff
const hamburger = document.querySelector(".hamburger-menu");
const nav_bar = document.querySelector("nav");
hamburger.addEventListener("click", toggleNavMenu);

// Show/hide nav menu on mobile
function toggleNavMenu() {
    let shown = nav_bar.classList.toggle("show");
    console.log(shown);

    if(!shown) {
        hamburger.style.transform = "rotate(0deg)";
        hamburger.style.backgroundColor = "var(--gold)";
    }
    else {
        hamburger.style.transform = "rotate(180deg)";
        hamburger.style.backgroundColor = "var(--light-gold)";
    }
}