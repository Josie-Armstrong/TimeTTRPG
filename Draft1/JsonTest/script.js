const edit_btn = document.querySelector("#edit-btn");
const abilities = document.querySelector(".abilities");

const ability_inputs = [
    document.querySelector("#brawn-in"),
    document.querySelector("#sturdy-in"),
    document.querySelector("#agility-in"),
    document.querySelector("#wits-in"),
    document.querySelector("#charm-in")
]

const ability_display = [
    document.querySelector("#brawn-val"),
    document.querySelector("#sturdy-val"),
    document.querySelector("#agility-val"),
    document.querySelector("#wits-val"),
    document.querySelector("#charm-val")
]

edit_btn.addEventListener('click', makeEdits);

let editing = false;

let character = {

    "abilities": {
        0: 8,
        1: 8,
        2: 8,
        3: 8,
        4: 8
    }

}

function makeEdits() {
    // console.log("worked");

    if (!editing) {
        EditDisplay();
        editing = true;
    }
    else {
        if (saveEdits() == true) {
            NormalDisplay();
            editing = false;
        }
    }

}

function EditDisplay() {

    abilities.classList.add("edit-mode");
    edit_btn.textContent = "Finish Editing";
    // console.log("entered editing");

    for (let i = 0; i < ability_inputs.length; i++) {
        ability_inputs[i].setAttribute("placeholder", character["abilities"][i]);

       // console.log(character["abilities"][i]);
        ability_inputs[i].value = character["abilities"][i];
    }

}

function NormalDisplay() {

    abilities.classList.remove("edit-mode");
    edit_btn.textContent = "Edit";
    // console.log("left editing");

}

function saveEdits() {
    for (let i = 0; i < ability_inputs.length; i++) {
        let temp_val = ability_inputs[i].value;

        // check if value of input works
        if (temp_val == "0" || temp_val == "1" || temp_val == "2"
            || temp_val == "3" || temp_val == "4" || temp_val == "5"
            || temp_val == "6" || temp_val == "7" || temp_val == "8"
            || temp_val == "8" || temp_val == "9" || temp_val == "10"
            || temp_val == "11" || temp_val == "12") {

            temp_val = parseInt(temp_val);

            character["abilities"][i] = temp_val;
            ability_display[i].textContent = temp_val;

            // console.log(character["abilities"][i]);

        }
        else if (temp_val == "") { // if user hasn't entered a new value
            // do nothing here
        }
        else { // if value is invalid
            let temp_message = "One of the values you entered is not within range."
            window.alert(temp_message);
            return false;
        }
    }

    // console.log(character);

    return true;
}