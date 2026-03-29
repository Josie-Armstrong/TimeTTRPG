const outer_navs = [
    document.getElementById("starting-nav"),
    document.getElementById("first-trip-nav"),
    document.getElementById("return-nav"),
    document.getElementById("second-trip-nav"),
    document.getElementById("what-if-nav"),
    document.getElementById("end-nav"),
]

const nav_btns = [
    document.getElementById("en-btn1"),
    document.getElementById("en-btn2"),
    document.getElementById("en-btn3"),
    document.getElementById("en-btn4"),
    document.getElementById("en-btn5"),
    document.getElementById("en-btn6")
]

for (let i = 0; i < nav_btns.length; i++) {
    let temp_i = i;
    nav_btns[i].addEventListener('click', () => {expandNav(temp_i)});
}

function expandNav(index) {
    outer_navs[index].classList.toggle("expanded");
    console.log("ran");
}

// First Adv mobile nav selectors
const ham_2 = document.querySelector(".hamburger-2");
const page_menu = document.querySelector(".nav-grid");
ham_2.addEventListener('click',togglePageNav);

// Expand and hide the mobile nav
function togglePageNav() {
    let shown = page_menu.classList.toggle("expanded");
    console.log(shown);

    if(!shown) {
        ham_2.style.transform = "rotate(0deg)";
        ham_2.style.backgroundColor = "var(--light-gold)";
    }
    else {
        ham_2.style.transform = "rotate(180deg)";
        ham_2.style.backgroundColor = "var(--light-red)";
    }
}