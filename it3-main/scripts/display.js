// This is the object that stores character info
let character = {

    "valid_sheet": true,

    "header": {
        0: "",
        1: "",
        2: "",
        3: "",
        4: 0
    },

    "wounds": 0,

    "abilities": {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0
    },

    "eccentricities": "",

    "expertise": "",

    "background": "",

    "gear": "",

    "notes": ""

}

const abilities = document.querySelector("#abilities");
const sheet_head = document.querySelector(".sheet-head");
const eccentricities = document.querySelector(".eccentricities");
const expertise = document.querySelector(".expertise");
const background = document.querySelector("#background");
const gear = document.querySelector("#gear");
const notes = document.querySelector("#notes");
const edit_menu = document.querySelector(".edit-menu");

// Arrays of value and input fields
const ability_inputs = [
    document.querySelector("#brawn-in"),
    document.querySelector("#agility-in"),
    document.querySelector("#wits-in"),
    document.querySelector("#charm-in"),
    document.querySelector("#aware-in")
];

const ability_display = [
    document.querySelector("#brawn-val"),
    document.querySelector("#agility-val"),
    document.querySelector("#wits-val"),
    document.querySelector("#charm-val"),
    document.querySelector("#aware-val")
];

const header_inputs = [
    document.querySelector("#name-in"),
    document.querySelector("#pronouns-in"),
    document.querySelector("#age-in"),
    document.querySelector("#position-in"),
    document.querySelector("#sturdy-in")
];

const header_display = [
    document.querySelector("#name-val"),
    document.querySelector("#pronouns-val"),
    document.querySelector("#age-val"),
    document.querySelector("#position-val"),
    document.querySelector("#sturdy-val")
];

const wound_inputs = [
    document.querySelector("#wound1"),
    document.querySelector("#wound2"),
    document.querySelector("#wound3")
];

// Input fields
const eccentricities_in = document.querySelector("#ecc-in");
const expertise_in = document.querySelector("#expertise-in");
const background_in = document.querySelector("#background-in");
const gear_in = document.querySelector("#gear-in");
const notes_in = document.querySelector("#notes-in");

// Value fields
const eccentricities_val = document.querySelector("#ecc-val");
const expertise_val = document.querySelector("#expertise-val");
const background_val = document.querySelector("#background-val");
const gear_val = document.querySelector("#gear-val");
const notes_val = document.querySelector("#notes-val");

// Buttons for downloading and editing
const edit_dropdown = document.querySelector("#edit-dropdown");
const download_btn = document.querySelector("#download-btn");
const upload_btn = document.querySelector("#upload-btn");
const cancel_up_btn = document.querySelector("#cancel-upload");
const finish_upload = document.querySelector("#finish-upload");
const edit_btn = document.querySelector("#edit-btn");
const clear_btn = document.querySelector("#clear-storage");
const tutorial_btn = document.querySelector("#use-tutorial");
const rand_char_btn = document.querySelector("#rand-char-btn");
const copy_btn = document.querySelector("#copy-btn");
const paste_btn = document.querySelector("#paste-btn");

edit_dropdown.addEventListener('click', mobileEditToggle);
download_btn.addEventListener('click', downloadFile);
upload_btn.addEventListener('click', toggleUploadPopup);
cancel_up_btn.addEventListener('click',toggleUploadPopup);
finish_upload.addEventListener('click', () => {checkIfSure("upload")});
edit_btn.addEventListener('click', makeEdits);
clear_btn.addEventListener('click', () => {checkIfSure("clear")});
tutorial_btn.addEventListener('click', toggleCharTutorial);
rand_char_btn.addEventListener('click', () => checkIfSure("rand char"));
copy_btn.addEventListener('click', () => {copyCharacterJSON()});
paste_btn.addEventListener('click', () => {togglePasteWindow()});
document.getElementById("char-file").addEventListener('change', (event) => {assignFile(event)});
document.getElementById("confirm-paste-btn").addEventListener('click',() => {checkIfSure("paste")})
document.getElementById("cancel-paste").addEventListener('click', () => {togglePasteWindow()});

// NEW NEW NEW Desktop Edit Buttons
const download_btn_web = document.querySelector("#download-btn-po");
const upload_btn_web = document.querySelector("#upload-btn-po");
const edit_btn_web = document.querySelector("#edit-btn-po");
const clear_btn_web = document.querySelector("#clear-storage-po");
const tutorial_btn_web = document.querySelector("#use-tutorial-po");
const rand_char_btn_web = document.querySelector("#rand-char-btn-po");
const copy_btn_web = document.querySelector("#copy-btn-po");
const paste_btn_web = document.querySelector("#paste-btn-po");
download_btn_web.addEventListener('click', downloadFile);
upload_btn_web.addEventListener('click', toggleUploadPopup);
edit_btn_web.addEventListener('click', makeEdits);
clear_btn_web.addEventListener('click', () => {checkIfSure("clear")});
tutorial_btn_web.addEventListener('click', toggleCharTutorial);
rand_char_btn_web.addEventListener('click', () => checkIfSure("rand char"));
copy_btn_web.addEventListener('click', () => {copyCharacterJSON()});
paste_btn_web.addEventListener('click', () => {togglePasteWindow()});

// Sidebar and Expansion Buttons for Clicking (desktop only)
const sidebar_btns = [
    document.getElementById("s-edit"),
    document.getElementById("s-export"),
    document.getElementById("s-clear"),
    document.getElementById("s-roll")
];
const sidebar_sections = [
    document.getElementById("edit-nav"),
    document.getElementById("export-nav"),
    document.getElementById("clear-nav"),
    document.getElementById("roll-nav")
];

// Event listeners for the sidebar btns
for (let i = 0; i < sidebar_btns.length; i++) {
    let temp_i = i;
    sidebar_btns[i].addEventListener('click', () => {toggleSidebarNav(temp_i)});
}

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
const tutorial_back_btn = document.querySelector("#cc-back");
const tutorial_next_btn = document.querySelector("#cc-next");
const tutorial_exit_btn = document.querySelector("#cc-exit");
tutorial_exit_btn.addEventListener('click', toggleCharTutorial);
tutorial_next_btn.addEventListener('click', () => {tutorialCardChange(1)});
tutorial_back_btn.addEventListener('click', () => {tutorialCardChange(-1)});
const tutorial_text = [
    document.querySelector("#ab-tt-1"),
    document.querySelector("#ab-tt-2"),
    document.querySelector("#t-tt-1"),
    document.querySelector("#e-tt-1"),
    document.querySelector("#g-tt-1"),
    document.querySelector("#h-tt-1"),
    document.querySelector("#h-tt-2"),
    document.querySelector("#b-tt-1"),
    document.querySelector("#end-tt-1")
    ];

// Nav hamburger button stuff
const hamburger = document.querySelector(".hamburger-menu");
const nav_bar = document.querySelector("nav");
hamburger.addEventListener("click", toggleNavMenu);

let editing = false;
let uploading = false;
let upload_event;
let event_type = "none";
let tutorial_step = 0;
let tutorial_section = [0, 0, 1, 2, 3, 4, 4, 5, 6];
let paste_string = "";

// Variables for tutorial/focus styling
let default_color = "var(--fill-cream)";
let default_shadow = "none";
let default_border = "3px solid var(--dark-red)";
let focus_color = "var(--gold)";
let focus_shadow = "5px 5px 10px var(--dark-red)";
let focus_border = "5px solid var(--dark-red)";

// Header text for tutorial steps
let tutorial_section_h = {
    0: "Step 1: Abilities",
    1: "Step 2: Eccentricities",
    2: "Step 3: Expertise",
    3: "Step 4: Gear",
    4: "Step 5: Header",
    5: "Step 6: Background",
    6: "You've Made a Character!"
}

let tutorial_section_highlight = [
    abilities, eccentricities, expertise, gear, sheet_head, background
];

let eccs_list = ["Animal Whispering", "Archery", "Baking", 
    "Card Counting/Gambling", "Carpentry", "Computer Hacking", "Explosives",
    "Farming", "Fishing", "Forgery", "Gardening", "Hand-to-Hand Combat", "Hospitality",
    "Knife Throwing", "Lockpicking", "Musical Performance", "Nature & Wilderness",
    "Networking", "Pottery", "Sewing"
]

let expertise_list = ["Architecture", "Fashion", "Art", "Religion",
    "Nature", "Language", "Politics", "Warfare", "Weaponry",
    "Criminology", "Technology"
]

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
        edit_btn_web.textContent = "Finish Editing";
        editing = true;
    }
    else {
        if (saveEdits() == true) {
            NormalDisplay();
            edit_btn_web.textContent = "Edit";
            editing = false;
        }

        localStorage.setItem("char_sheet", JSON.stringify(character));
    }

}

// Changes to edit display
function EditDisplay() {
    assignInputVals();

    abilities.classList.add("edit-mode");
    sheet_head.classList.add("edit-mode");
    expertise.classList.add("edit-mode");
    eccentricities.classList.add("edit-mode");
    background.classList.add("edit-mode");
    gear.classList.add("edit-mode");
    notes.classList.add("edit-mode");

    edit_btn.textContent = "Finish Editing";
    // console.log("entered editing");

    /* for (let i = 0; i < ability_inputs.length; i++) {
        ability_inputs[i].setAttribute("placeholder", character["abilities"][i]);

       // console.log(character["abilities"][i]);
        ability_inputs[i].value = character["abilities"][i];
    } */

}

// Changes to normal display
function NormalDisplay() {
    assignDisplayVals();

    abilities.classList.remove("edit-mode");
    sheet_head.classList.remove("edit-mode");
    expertise.classList.remove("edit-mode");
    eccentricities.classList.remove("edit-mode");
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
            let temp_val = ability_inputs[i].value;
            if (temp_val > 20) {
                temp_val = 20;
            }
            character["abilities"][i] = temp_val;
        }

        for (let i = 0; i < header_inputs.length; i++) {
            character["header"][i] = header_inputs[i].value;
        }

        character["eccentricities"] = eccentricities_in.value;
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

// After upload: parse int for char abilities and update display
function replaceCharSheet() {
    try {

        // abilities (as ints)
        for (let i = 0; i < ability_display.length; i++) {
            let temp_val = character["abilities"][i];
            temp_val = parseInt(temp_val);
            character["abilities"][i] = temp_val;
            // console.log(character["abilities"][i]);
        }

        // sturdy (as int)
        let lvl_val = character["header"][4]
        lvl_val = parseInt(lvl_val);
        character["header"][4] = lvl_val;

        // console.log("This is your character", character);

        assignDisplayVals();
        assignInputVals();
        localStorage.setItem("char_sheet", JSON.stringify(character));

        // Hiding upload popup if it is shown
        if (!document.getElementById("upload-popup").classList.contains("hide")) {
            toggleUploadPopup();
        }
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
    else if(event_type == "rand char") {
        generateRandomCharacter();
    }
    else if(event_type == "paste") {
        paste_string = document.getElementById("paste-textarea").value;
        pasteCharacterJSON();
        // TODO: Add call to paste function once that is done
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

    for (let i = 0; i < header_inputs.length; i++) {
        header_inputs[i].value = character["header"][i];
    }

    eccentricities_in.value = character["eccentricities"];
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

    for (let i = 0; i < header_display.length; i++) {
        header_display[i].textContent = character["header"][i];
    }

    eccentricities_val.textContent = character["eccentricities"];
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
            4: 0
        },

        "wounds": 0,

        "abilities": {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0
        },

        "eccentricities": "",

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
    resetTutorial();

    // If the tutorial is being shown, highlight abilities
    if (!tutorial_popup.classList.toggle("hide")) {
        let item = tutorial_section_highlight[tutorial_section[tutorial_step]];
        item.style.boxShadow = focus_shadow;
        item.style.backgroundColor = focus_color;
        item.style.border = focus_border;
    }

}

// Goes forward or backward by change # of steps in the tutorial cards
function tutorialCardChange(change) {
    if((tutorial_step + change) >= 0 && (tutorial_step + change) <= (tutorial_text.length - 1)) { 
        tutorial_step += change;

        tutorial_header.textContent = tutorial_section_h[tutorial_section[tutorial_step]];
        tutorial_text[tutorial_step - change].classList.toggle("hide");
        tutorial_text[tutorial_step].classList.toggle("hide");

        // Resetting the sheet pieces to normal styling between steps
        for (let i = 0; i < tutorial_section_highlight.length; i++) {
            let item = tutorial_section_highlight[i];
            item.style.boxShadow = default_shadow;

            if (i == 4) {
                item.style.backgroundColor = "var(--dark-red)";
                item.style.border = "none";
            }
            else {
                item.style.backgroundColor = default_color;
                item.style.border = default_border;
            }
        }

        // Changing style for the piece of sheet that is in focus
        if (tutorial_step != 8) {
            let temp_focus = tutorial_section_highlight[tutorial_section[tutorial_step]];

            temp_focus.style.boxShadow = focus_shadow;
            temp_focus.style.border = focus_border;

            if (tutorial_section[tutorial_step] != 4) {
                temp_focus.style.backgroundColor = focus_color;
            }
        }
        
    }
}

// Resets tutorial to step 1
function resetTutorial() {
    tutorial_header.textContent = tutorial_section_h[0];

    // Hiding anything that is shown
    for (let i = 0; i < tutorial_text.length; i++) {
        if (!tutorial_text[i].classList.contains("hide")) {
            tutorial_text[i].classList.add("hide");
        }
    }

    // Resetting styling for pieces of sheet
    for (let i = 0; i < tutorial_section_highlight.length; i++) {
        let item = tutorial_section_highlight[i];
        item.style.boxShadow = default_shadow;

        if (i == 4) {
            item.style.backgroundColor = "var(--dark-red)";
            item.style.border = "none";
        }
        else {
            item.style.backgroundColor = default_color;
            item.style.border = default_border;
        }
    }

    //Showing step one
    tutorial_text[0].classList.toggle("hide");

}

function generateRandomCharacter() {
    clearStoredCharacter();

    // Generating abilities
    for (let i = 0; i < 5; i++) {
        let med_roll = 0;
        
        // While med_roll is not a valid score, keep rolling
        while (med_roll < 3 || med_roll > 18) {

            let roll = [];

            for (let j = 0; j < 3; j++) {
                let temp_roll = Math.floor(Math.random() * 21);
                
                roll.push(temp_roll);
            }

            // Roll 0, 1, and 2 in order as median
            if ((roll[0] <= roll[1] && roll[0] >= roll[2]) || (roll[0] >= roll[1] && roll[0] <= roll[2])) {
                med_roll = roll[0];
            }
            else if ((roll[1] <= roll[0] && roll[1] >= roll[2]) || (roll[1] >= roll[0] && roll[1] <= roll[2])) {
                med_roll = roll[1];
            }
            else if ((roll[2] <= roll[0] && roll[2] >= roll[1]) || (roll[2] >= roll[0] && roll[2] <= roll[1])) {
                med_roll = roll[2];
            }

            console.log("Rolls: ", roll[0], ", ", roll[1], ", ", roll[2]);
            console.log("Median roll: ", med_roll);

        }

        character["abilities"][i] = med_roll;
        med_roll = 0;
    }

    // Generating Sturdy
    let sturdy_roll = 0;

    while (sturdy_roll < 3 || sturdy_roll > 18) {

        let roll = [];

        for (let j = 0; j < 3; j++) {
            let temp_roll = Math.floor(Math.random() * 21);
            
            roll.push(temp_roll);
        }

        // Roll 0, 1, and 2 in order as median
        if ((roll[0] <= roll[1] && roll[0] >= roll[2]) || (roll[0] >= roll[1] && roll[0] <= roll[2])) {
            sturdy_roll = roll[0];
        }
        else if ((roll[1] <= roll[0] && roll[1] >= roll[2]) || (roll[1] >= roll[0] && roll[1] <= roll[2])) {
            sturdy_roll = roll[1];
        }
        else if ((roll[2] <= roll[0] && roll[2] >= roll[1]) || (roll[2] >= roll[0] && roll[2] <= roll[1])) {
            sturdy_roll = roll[2];
        }

        console.log("Rolls: ", roll[0], ", ", roll[1], ", ", roll[2]);
        console.log("Sturdy roll: ", sturdy_roll);

    }

    character["header"][4] = sturdy_roll;

    // Generating Talents
    let talent_text = "";
    let talents = [];

    for (let i = 0; i < 3; i++) {
        let temp_talent = Math.floor(Math.random() * 20);

        while (talents.includes(temp_talent)) {
            temp_talent = Math.floor(Math.random() * 20);
        }

        talents.push(temp_talent);
        talent_text = talent_text + talents_list[temp_talent];

        if (i < 2) {
            talent_text = talent_text + ", ";
        }
    }

    //console.log(talents);
    character["talents"] = talent_text;

    // Generating Expertise
    let temp_i = Math.floor(Math.random() * 11);
    let temp_expertise = expertise_list[temp_i];
    //console.log(temp_i);
    //console.log(temp_expertise);
    character["expertise"] = temp_expertise;

    // Filling in gear based on expertise
    character["gear"] = "Check for your gear based on your expertise";

    console.log(character);

    assignDisplayVals();
    assignInputVals();
}

function mobileEditToggle() {
    edit_menu.classList.toggle("hide");
}

function copyCharacterJSON() {
    try {
        const type = "text/plain";
        const temp_text = JSON.stringify(character);
        // console.log(temp_text);

        const clip_data = {
            [type]: temp_text
        };

        const clipboard_item = new ClipboardItem(clip_data);
        navigator.clipboard.write([clipboard_item]);

        copy_btn.textContent = "Copied!"
        copy_btn_web.textContent = "Copied!"
        setTimeout(() => {
            copy_btn.textContent = "Copy Character JSON";
            copy_btn_web.textContent = "Copy Character JSON";
            }, 2000);
    }
    catch (err) {
        console.log(err);
    }

}

function togglePasteWindow() {
    document.getElementById("paste-popup").classList.toggle("hide");
    document.getElementById("paste-textarea").value = "";
}

function pasteCharacterJSON() {
    console.log(paste_string);

    try {
        let test_json = JSON.parse(paste_string);
        if (checkValidCharSheet(test_json)) {
            replaceCharSheet();
        }
    }
    catch (err) {
        window.alert("This is not a valid character sheet.")
    }
    togglePasteWindow();
}

function toggleSidebarNav(index) {
    sidebar_sections[index].classList.toggle("show");
}