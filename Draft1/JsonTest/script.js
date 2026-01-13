const abilities = document.querySelector(".abilities");

// Input fields for abilities in editing mode
const ability_inputs = [
    document.querySelector("#brawn-in"),
    document.querySelector("#sturdy-in"),
    document.querySelector("#agility-in"),
    document.querySelector("#wits-in"),
    document.querySelector("#charm-in")
];

// Display values for abilities
const ability_display = [
    document.querySelector("#brawn-val"),
    document.querySelector("#sturdy-val"),
    document.querySelector("#agility-val"),
    document.querySelector("#wits-val"),
    document.querySelector("#charm-val")
];

// Buttons for downloading and editing
const download_btn = document.querySelector("#download-btn");
const upload_btn = document.querySelector("#upload-btn");
const finish_upload = document.querySelector("#finish-upload");
const edit_btn = document.querySelector("#edit-btn");


download_btn.addEventListener('click', downloadFile);
upload_btn.addEventListener('click', toggleUploadPopup);
finish_upload.addEventListener('click', () => {uploadFile(upload_event)});
edit_btn.addEventListener('click', makeEdits);
document.getElementById("char-file").addEventListener('change', (event) => {assignFile(event)});

let editing = false;
let uploading = false;
let upload_event;

// This is the JSON that I will be downloading
let character = {

    "valid_sheet": true,

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

// To visually change character sheet after a new upload
function replaceCharSheet() {
    try {
        for (let i = 0; i < ability_display.length; i++) {
            let temp_val = character["abilities"][i];

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

function toggleUploadPopup() {
    document.getElementById("upload-popup").classList.toggle("hide");
}