const outer_navs = [
    document.getElementById("intro-nav"),
    document.getElementById("cc-nav"),
    document.getElementById("combat-nav"),
    document.getElementById("ttman-nav"),
    document.getElementById("gm-nav"),
    document.getElementById("appendix-nav")
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