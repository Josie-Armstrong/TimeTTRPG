const password_inputs = [document.querySelector("#house-map-pw")];
const password_btns = [document.getElementById("house-btn")];
const password_relocks = [document.getElementById("house-relock-btn")];
const password_keys = ["BrutusMap!"];

const locked_content = [document.getElementById("house-map")];

for (let i = 0; i < password_btns.length; i++) {
    let temp_i = i;
    password_btns[i].addEventListener('click', () => {enterPassword(temp_i)});
    password_relocks[i].addEventListener('click', () => {relockContent(temp_i)});
}

// Checks if the entered password is correct, unlocks content if so
function enterPassword(num) {
    let temp_password = password_inputs[num].value;

    if (temp_password == password_keys[num]) {
        locked_content[num].classList.remove("locked");
        password_inputs[num].value = "";
    }
    else {
        window.alert("Wrong password. Please try again!");
    }

    //console.log("Unlocked!");
}

// Relocks content (hides it) when relock button pressed
function relockContent(num) {
    password_inputs[num].value = "";
    if (!locked_content[num].classList.contains("locked")) {
        locked_content[num].classList.add("locked");
    }
}