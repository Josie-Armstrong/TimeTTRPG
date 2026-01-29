const abilities = document.querySelector("#abilities");
const skills = document.querySelector("#skills");
const sheet_head = document.querySelector(".sheet-head");
const talents = document.querySelector(".talents");
const expertise = document.querySelector(".expertise");

const ability_inputs = [
    document.querySelector("#brawn-in"),
    document.querySelector("#sturdy-in"),
    document.querySelector("#agility-in"),
    document.querySelector("#wits-in"),
    document.querySelector("#charm-in")
];

const ability_display = [
    document.querySelector("#brawn-val"),
    document.querySelector("#sturdy-val"),
    document.querySelector("#agility-val"),
    document.querySelector("#wits-val"),
    document.querySelector("#charm-val")
];

const skill_inputs = [
    document.querySelector("#close-combat-in"),
    document.querySelector("#ranged-combat-in"),
    document.querySelector("#survival-in"),
    document.querySelector("#endurance-in"),
    document.querySelector("#stealth-in"),
    document.querySelector("#acrobatics-in"),
    document.querySelector("#notice-in"),
    document.querySelector("#know-how-in"),
    document.querySelector("#blend-in-in"),
    document.querySelector("#persuasion-in"),
    document.querySelector("#history-in"),
    document.querySelector("#technology-in")
];

const skill_display = [
    document.querySelector("#close-combat-val"),
    document.querySelector("#ranged-combat-val"),
    document.querySelector("#survival-val"),
    document.querySelector("#endurance-val"),
    document.querySelector("#stealth-val"),
    document.querySelector("#acrobatics-val"),
    document.querySelector("#notice-val"),
    document.querySelector("#know-how-val"),
    document.querySelector("#blend-in-val"),
    document.querySelector("#persuasion-val"),
    document.querySelector("#history-val"),
    document.querySelector("#technology-val")
];

const header_inputs = [
    document.querySelector("#name-in"),
    document.querySelector("#pronouns-in"),
    document.querySelector("#age-in"),
    document.querySelector("#position-in"),
    document.querySelector("#level-in")
];

const header_display = [
    document.querySelector("#name-val"),
    document.querySelector("#pronouns-val"),
    document.querySelector("#age-val"),
    document.querySelector("#position-val"),
    document.querySelector("#level-val")
];

const wound_inputs = [
    document.querySelector("#wound1"),
    document.querySelector("#wound2"),
    document.querySelector("#wound3")
];

const talents_in = document.querySelector("#talents-in");
const expertise_in = document.querySelector("#expertise-in");
const background_in = document.querySelector("#background-in");
const gear_in = document.querySelector("#gear-in");
const notes_in = document.querySelector("#notes-in");

const talents_val = document.querySelector("#talents-val");
const expertise_val = document.querySelector("#expertise-val");
const background_val = document.querySelector("#background-val");
const gear_val = document.querySelector("#gear-val");
const notes_val = document.querySelector("#notes-val");

// Buttons for downloading and editing
const download_btn = document.querySelector("#download-btn");
const upload_btn = document.querySelector("#upload-btn");
const finish_upload = document.querySelector("#finish-upload");
const edit_btn = document.querySelector("#edit-btn");
const clear_btn = document.querySelector("#clear-storage");

download_btn.addEventListener('click', downloadFile);
upload_btn.addEventListener('click', toggleUploadPopup);
finish_upload.addEventListener('click', () => {uploadFile(upload_event)});
edit_btn.addEventListener('click', makeEdits);
clear_btn.addEventListener('click', clearStoredCharacter);
document.getElementById("char-file").addEventListener('change', (event) => {assignFile(event)});

let editing = false;
let uploading = false;
let upload_event;

// This is the JSON that I will be downloading
let character = {

    "valid_sheet": true,

    "header": {
        0: "",
        1: "",
        2: "",
        3: "",
        4: 1
    },

    "wounds": 0,

    "abilities": {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0
    },

    "skills": {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0
    },

    "talents": "",

    "expertise": "",

    "background": "",

    "gear": "",

    "notes": ""

}

window.onload = on_load_page();

function on_load_page() {
    if (localStorage.getItem("char_sheet") != null) {
        character = localStorage.getItem("char_sheet");
    }

    assignDisplayVals();
    assignInputVals();

    console.log(character);
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

        localStorage.setItem("char_sheet", character);
    }

}

function EditDisplay() {
    assignInputVals();

    abilities.classList.add("edit-mode");
    skills.classList.add("edit-mode");
    sheet_head.classList.add("edit-mode");
    expertise.classList.add("edit-mode");
    talents.classList.add("edit-mode");

    edit_btn.textContent = "Finish Editing";
    // console.log("entered editing");

    for (let i = 0; i < ability_inputs.length; i++) {
        ability_inputs[i].setAttribute("placeholder", character["abilities"][i]);

       // console.log(character["abilities"][i]);
        ability_inputs[i].value = character["abilities"][i];
    }

}

function NormalDisplay() {
    assignDisplayVals();

    abilities.classList.remove("edit-mode");
    skills.classList.remove("edit-mode");
    sheet_head.classList.remove("edit-mode");
    expertise.classList.remove("edit-mode");
    talents.classList.remove("edit-mode");

    edit_btn.textContent = "Edit";
    // console.log("left editing");

}

// NEW save function for WHOLE character sheet (in progress)
function saveEdits() {
    try {
        for (let i = 0; i < ability_inputs.length; i++) {
            character["abilities"][i] = ability_inputs[i].value;
        }

        for (let i = 0; i < skill_inputs.length; i++) {
            // console.log(skill_inputs[i].value);
            character["skills"][i] = skill_inputs[i].value;
        }

        for (let i = 0; i < header_inputs.length; i++) {
            character["header"][i] = header_inputs[i].value;
        }

        character["talents"] = talents_in.value;
        character["expertise"] = expertise_in.value;
        character["background"] = background_in.value;
        character["gear"] = gear_in.value;
        character["notes"] = notes_in.value;
    }
    catch (err) {
        console.log(err);
        window.alert("Something went wrong. Please check your values and try again.");
        return false;
    }

    localStorage.setItem("char_sheet", character);

    // console.log(character);

    return true;
}

// OLD function for abilities only, used if/then number verification
function OLDsaveEdits() {
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

    localStorage.setItem("char_sheet", character);

    // console.log(character);

    return true;
}

// After upload: parse int for char abilities and skills, and update display
function replaceCharSheet() {
    try {

        // abilities (as ints)
        for (let i = 0; i < ability_display.length; i++) {
            let temp_val = character["abilities"][i];
            temp_val = parseInt(temp_val);
            character["abilities"][i] = temp_val;
            // console.log(character["abilities"][i]);
        }

        // skills (as ints)
        for(let i = 0; i < skill_display.length; i++) {
            let temp_val = character["skills"][i];
            temp_val = parseInt(temp_val);
            character["skills"][i] = temp_val;
        }

        // level (as int)
        let lvl_val = character["header"][4]
        lvl_val = parseInt(lvl_val);
        character["header"][4] = lvl_val;

        // console.log("This is your character", character);

        assignDisplayVals();
        assignInputVals();
        localStorage.setItem("char_sheet", character);
    }
    catch (err) {
        window.alert("This is not a valid character sheet. Please try again.");
    }
}

// Downloading the JS file
function downloadFile(content, name, type) {
    if(!editing) {
        // Making the blob for json export
        const new_content = JSON.stringify(character, null, 2)
        const file = new Blob([new_content], { type: "application/json" });
        // console.log(file);

        // Placeholder element to get the download to happen
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = "CharacterSheet.json";
        a.click();
    }
    else {
        let temp_message = "You must exit out of editing mode first."
        window.alert(temp_message);
    }

}

// Happens when user selects a file, stores the event for later handling
function assignFile(event) {
    upload_event = event;
}

// Uses the file that user has selected, tries to import as character sheet
function uploadFile(event) {
    if(!editing) {
        try {
            let files = event.target.files;

            if(!files.length) {
                alert("No file selected");
                return;
            }

            let file = files[0];
            let reader = new FileReader();

            // Check for file type
            if (file.type == "application/json") {

                reader.onload = (event) => {
                    // Checks for valid sheet
                    checkValidCharSheet(JSON.parse(reader.result));
                    // console.log("Character", character)
                };

                // This is needed to get the onload thing to run for the reader
                let temp = reader.readAsText(file);
            }
            else {
                window.alert("Please select a JSON file.")
            }
            
        }
        catch (err) {
            console.log(err);
            window.alert("There was a problem with your file upload. Please try again.");
        }
    }
    else {
        let temp_message = "You must exit out of editing mode first.";
        window.alert(temp_message);
    }
}

// Checking that the JSON file is actually a character sheet
function checkValidCharSheet(char_json) {
    try {
        if (char_json["valid_sheet"]) {
            console.log("This is a valid character sheet");
            character = char_json;
            console.log(character);

            replaceCharSheet();
            toggleUploadPopup();
        }
        else {
            window.alert("This is not a valid character sheet. Please try again.");
        }
    }
    catch (err) {
        window.alert("This is not a valid character sheet. Please try again.")
    }
}

// For upload show/hide
function toggleUploadPopup() {
    document.getElementById("upload-popup").classList.toggle("hide");
}

// Update input fields to reflect the char display vals
function assignInputVals() {
    for (let i = 0; i < ability_inputs.length; i++) {
        ability_inputs[i].value = character["abilities"][i];
    }

    for (let i = 0; i < skill_inputs.length; i++) {
        skill_inputs[i].value = character["skills"][i];
        // console.log("skill input", character["skills"][i]);
    }

    for (let i = 0; i < header_inputs.length; i++) {
        header_inputs[i].value = character["header"][i];
    }

    talents_in.value = character["talents"];
    expertise_in.value = character["expertise"];
    background_in.value = character["background"];
    gear_in.value = character["gear"];
    notes_in.value = character["notes"];
}

// Make the char changes visible in display
function assignDisplayVals() {
    for (let i = 0; i < ability_display.length; i++) {
        ability_display[i].textContent = character["abilities"][i];
    }

    for (let i = 0; i < skill_display.length; i++) {
        skill_display[i].textContent = character["skills"][i];
    }

    for (let i = 0; i < header_display.length; i++) {
        header_display[i].textContent = character["header"][i];
    }

    talents_val.textContent = character["talents"];
    expertise_val.textContent = character["expertise"];
    background_val.textContent = character["background"];
    gear_val.textContent = character["gear"];
    notes_val.textContent = character["notes"];
}

// Literally just clears character from local storage
function clearStoredCharacter() {
    localStorage.clear();

    character = {

        "valid_sheet": true,

        "header": {
            0: "",
            1: "",
            2: "",
            3: "",
            4: 1
        },

        "wounds": 0,

        "abilities": {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0
        },

        "skills": {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0
        },

        "talents": "",

        "expertise": "",

        "background": "",

        "gear": "",

        "notes": ""

    }

    assignDisplayVals();
    assignInputVals();
}