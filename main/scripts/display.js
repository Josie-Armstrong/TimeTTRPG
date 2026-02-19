const abilities = document.querySelector("#abilities");
const skills = document.querySelector("#skills");
const sheet_head = document.querySelector(".sheet-head");
const talents = document.querySelector(".talents");
const expertise = document.querySelector(".expertise");
const background = document.querySelector("#background");
const gear = document.querySelector("#gear");
const notes = document.querySelector("#notes");

// Arrays of value and input fields
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

// Input fields
const talents_in = document.querySelector("#talents-in");
const expertise_in = document.querySelector("#expertise-in");
const background_in = document.querySelector("#background-in");
const gear_in = document.querySelector("#gear-in");
const notes_in = document.querySelector("#notes-in");

// Value fields
const talents_val = document.querySelector("#talents-val");
const expertise_val = document.querySelector("#expertise-val");
const background_val = document.querySelector("#background-val");
const gear_val = document.querySelector("#gear-val");
const notes_val = document.querySelector("#notes-val");

// Buttons for downloading and editing
const download_btn = document.querySelector("#download-btn");
const upload_btn = document.querySelector("#upload-btn");
const cancel_up_btn = document.querySelector("#cancel-upload");
const finish_upload = document.querySelector("#finish-upload");
const edit_btn = document.querySelector("#edit-btn");
const clear_btn = document.querySelector("#clear-storage");
const tutorial_btn = document.querySelector("#use-tutorial");

download_btn.addEventListener('click', downloadFile);
upload_btn.addEventListener('click', toggleUploadPopup);
cancel_up_btn.addEventListener('click',toggleUploadPopup);
finish_upload.addEventListener('click', () => {checkIfSure("upload")});
edit_btn.addEventListener('click', makeEdits);
clear_btn.addEventListener('click', () => {checkIfSure("clear")});
tutorial_btn.addEventListener('click', toggleCharTutorial);
document.getElementById("char-file").addEventListener('change', (event) => {assignFile(event)});

// "Are you sure" warning menu stuff
const overwrite_warning = document.querySelector("#overwrite-warning");
const cancel_sure_btn = document.querySelector("#cancel-sure");
const download_sure_btn = document.querySelector("#download-curr-char");
const im_sure_btn = document.querySelector("#im-sure");

cancel_sure_btn.addEventListener('click', cancelOverwrite);
download_sure_btn.addEventListener('click', downloadFile);
im_sure_btn.addEventListener('click', executeOverwrite);

// Tutorial stuff
const tutorial_popup = document.querySelector("#char-creation-popup");
const tutorial_header = document.querySelector("#tutorial-header");
const tutorial_text = document.querySelector("#tutorial-text");
const tutorial_back_btn = document.querySelector("#cc-back");
const tutorial_next_btn = document.querySelector("#cc-next");
const tutorial_exit_btn = document.querySelector("#cc-exit");
tutorial_exit_btn.addEventListener('click', toggleCharTutorial);
tutorial_next_btn.addEventListener('click', () => {tutorialCardChange(1)});
tutorial_back_btn.addEventListener('click', () => {tutorialCardChange(-1)});

// Nav hamburger button stuff
const hamburger = document.querySelector(".hamburger-menu");
const nav_bar = document.querySelector("nav");
hamburger.addEventListener("click", toggleNavMenu);

let editing = false;
let uploading = false;
let upload_event;
let event_type = "none";
let tutorial_step = 0;

// Header text for tutorial steps
let tutorial_step_h = {
    0: "Step 1: Abilities",
    1: "Step 2: Skills",
    2: "Step 3: Talents",
    3: "Step 4: Expertise",
    4: "Step 5: Gear",
    5: "Step 6: Header & Background",
}

// Paragraph text for tutorial steps
let tutorial_step_p = {
    0: "Explain how to do abilities",
    1: "Explain how to do skills",
    2: "Explain how to do talents",
    3: "Explain how to do expertise",
    4: "Explain how to do gear",
    5: "Explain how to do finishing touches",
}

// This is the JSON that I will be downloading & how the character is stored
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

// Setting up the page & loading locally stored character
function on_load_page() {
    if (localStorage.getItem("char_sheet") != null) {
        console.log(localStorage.getItem("char_sheet"));
        character = JSON.parse(localStorage.getItem("char_sheet"));
    }

    assignDisplayVals();
    assignInputVals();

    resetTutorial();

    console.log(character);
}

// Check if in normal/edit display and act accordingly (save or enter edit mode)
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

        localStorage.setItem("char_sheet", JSON.stringify(character));
    }

}

// Changes to edit display
function EditDisplay() {
    assignInputVals();

    abilities.classList.add("edit-mode");
    skills.classList.add("edit-mode");
    sheet_head.classList.add("edit-mode");
    expertise.classList.add("edit-mode");
    talents.classList.add("edit-mode");
    background.classList.add("edit-mode");
    gear.classList.add("edit-mode");
    notes.classList.add("edit-mode");

    edit_btn.textContent = "Finish Editing";
    // console.log("entered editing");

    for (let i = 0; i < ability_inputs.length; i++) {
        ability_inputs[i].setAttribute("placeholder", character["abilities"][i]);

       // console.log(character["abilities"][i]);
        ability_inputs[i].value = character["abilities"][i];
    }

}

// Changes to normal display
function NormalDisplay() {
    assignDisplayVals();

    abilities.classList.remove("edit-mode");
    skills.classList.remove("edit-mode");
    sheet_head.classList.remove("edit-mode");
    expertise.classList.remove("edit-mode");
    talents.classList.remove("edit-mode");
    background.classList.remove("edit-mode");
    gear.classList.remove("edit-mode");
    notes.classList.remove("edit-mode");

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

    localStorage.setItem("char_sheet", JSON.stringify(character));

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

    localStorage.setItem("char_sheet", JSON.stringify(character));

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
        localStorage.setItem("char_sheet", JSON.stringify(character));
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
    // console.log(event);
}

// Opens the "are you sure" warning window and sets event type
function checkIfSure(event_t) {
    overwrite_warning.classList.toggle("hide");

    event_type = event_t;
}

// If user clicks "I'm sure," executes the relevant function
function executeOverwrite() {
    overwrite_warning.classList.toggle("hide");
    // console.log(overwrite_warning.classList);

    if(event_type == "upload") {
        uploadFile(upload_event);
    }
    else if(event_type == "clear") {
        clearStoredCharacter();
    }
}

// Closes popup windows
function cancelOverwrite() {

    // checks if we need to hide the upload menu or not
    if(!document.getElementById("upload-popup").classList.contains("hide")) {
        document.getElementById("upload-popup").classList.toggle("hide");
    }

    overwrite_warning.classList.toggle("hide");
}

// Uses the file that user has selected, tries to import as character sheet
function uploadFile() {
    if(!editing) {
        try {
            let files = upload_event.target.files;

            // console.log(files);

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

    if(editing) {
        let temp_message = "You must exit out of editing mode first.";
        window.alert(temp_message);
    }
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

// Shows/hides tutorial popup
function toggleCharTutorial() {
    tutorial_popup.classList.toggle("hide");
}

// Goes forward or backward by change # of steps in the tutorial cards
function tutorialCardChange(change) {
    if((tutorial_step + change) >= 0 && (tutorial_step + change) <= 5) { 
        tutorial_step += change;

        tutorial_header.textContent = tutorial_step_h[tutorial_step];
        tutorial_text.textContent = tutorial_step_p[tutorial_step];
    }
}

// Resets tutorial to step 1
function resetTutorial() {
    tutorial_header.textContent = tutorial_step_h[0];
    tutorial_text.textContent = tutorial_step_p[0];
}