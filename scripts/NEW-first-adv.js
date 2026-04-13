let mac_char = {"valid_sheet":true,"header":{"0":"William MacMillan","1":"he/him","2":"38","3":"Artifact Hunter","4":"11"},"wounds":{"0":false,"1":false,"2":false,"3":false},"abilities":{"0":"6","1":"15","2":"10","3":"9","4":"11"},"eccentricities":"- Whistling\n- Knife Throwing\n- Card-Counting","expertise":"N/A","background":"See GM guide for first adventure","gear":"- Satchel\n- Gun (small pistol)\n- Pocketknife ","notes":""}

let guard_char = {"valid_sheet":true,"header":{"0":"Guard","1":"he/him","2":"Varies","3":"Guard","4":"10"},"wounds":{"0":false,"1":false,"2":false,"3":false},"abilities":{"0":"13","1":"11","2":"10","3":"7","4":"9"},"eccentricities":"N/A","expertise":"N/A","background":"See GM guide for first adventure","gear":"- Sword\n- Spear\n- Armor","notes":""}

const copy_guard_btn = document.querySelector("#copy-guard-char-btn");
const copy_mac_btn = document.querySelector("#copy-mac-char-btn");
copy_guard_btn.addEventListener('click', () => {copyCharacterJSON(guard_char, copy_guard_btn)});
copy_mac_btn.addEventListener('click', () => {copyCharacterJSON(mac_char, copy_mac_btn)});

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

function copyCharacterJSON(char, copy_btn) {
    try {
        const type = "text/plain";
        const temp_text = JSON.stringify(char);
        // console.log(temp_text);

        const clip_data = {
            [type]: temp_text
        };

        const clipboard_item = new ClipboardItem(clip_data);
        navigator.clipboard.write([clipboard_item]);

        copy_btn.textContent = "Copied!"
        setTimeout(() => {
            copy_btn.textContent = "Copy Character JSON";
            }, 2000);
    }
    catch (err) {
        console.log(err);
    }

}