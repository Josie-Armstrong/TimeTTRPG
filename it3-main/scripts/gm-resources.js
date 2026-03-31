const char1 = {
    "valid_sheet": true,

    "header": {
        0: "",
        1: "",
        2: "",
        3: "",
        4: 0
    },

    "wounds": {
        0: false, 1: false, 2: false, 3: false
    },

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

const char2 = {
    "valid_sheet": true,

    "header": {
        0: "",
        1: "",
        2: "",
        3: "",
        4: 0
    },

    "wounds": {
        0: false, 1: false, 2: false, 3: false
    },

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

const char3 = {
    "valid_sheet": true,

    "header": {
        0: "",
        1: "",
        2: "",
        3: "",
        4: 0
    },

    "wounds": {
        0: false, 1: false, 2: false, 3: false
    },

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

const char4 = {
    "valid_sheet": true,

    "header": {
        0: "",
        1: "",
        2: "",
        3: "",
        4: 0
    },

    "wounds": {
        0: false, 1: false, 2: false, 3: false
    },

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

const char5 = {
    "valid_sheet": true,

    "header": {
        0: "",
        1: "",
        2: "",
        3: "",
        4: 0
    },

    "wounds": {
        0: false, 1: false, 2: false, 3: false
    },

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

// Stores all characters
const char_arr = {0: char1, 1: char2, 2: char3, 3: char4, 4: char5};

// Stores references to character slots to activate editing
const char_edit_arr = [
    document.querySelector("#ch1"),
    document.querySelector("#ch2"),
    document.querySelector("#ch3"),
    document.querySelector("#ch4"),
    document.querySelector("#ch5")
]

let editing_arr = [false, false, false, false, false];
let num_chars = 5;

// VALUES for abilities
const ch1_ab_val = [
    document.querySelector("#ch1-abval-1"),
    document.querySelector("#ch1-abval-2"),
    document.querySelector("#ch1-abval-3"),
    document.querySelector("#ch1-abval-4"),
    document.querySelector("#ch1-abval-5")
];

const ch2_ab_val = [
    document.querySelector("#ch2-abval-1"),
    document.querySelector("#ch2-abval-2"),
    document.querySelector("#ch2-abval-3"),
    document.querySelector("#ch2-abval-4"),
    document.querySelector("#ch2-abval-5")
];

const ch3_ab_val = [
    document.querySelector("#ch3-abval-1"),
    document.querySelector("#ch3-abval-2"),
    document.querySelector("#ch3-abval-3"),
    document.querySelector("#ch3-abval-4"),
    document.querySelector("#ch3-abval-5")
];

const ch4_ab_val = [
    document.querySelector("#ch4-abval-1"),
    document.querySelector("#ch4-abval-2"),
    document.querySelector("#ch4-abval-3"),
    document.querySelector("#ch4-abval-4"),
    document.querySelector("#ch4-abval-5")
];

const ch5_ab_val = [
    document.querySelector("#ch5-abval-1"),
    document.querySelector("#ch5-abval-2"),
    document.querySelector("#ch5-abval-3"),
    document.querySelector("#ch5-abval-4"),
    document.querySelector("#ch5-abval-5")
];

// INPUTS for abilities
const ch1_ab_in = [
    document.querySelector("#ch1-abin-1"),
    document.querySelector("#ch1-abin-2"),
    document.querySelector("#ch1-abin-3"),
    document.querySelector("#ch1-abin-4"),
    document.querySelector("#ch1-abin-5")
];

const ch2_ab_in = [
    document.querySelector("#ch2-abin-1"),
    document.querySelector("#ch2-abin-2"),
    document.querySelector("#ch2-abin-3"),
    document.querySelector("#ch2-abin-4"),
    document.querySelector("#ch2-abin-5")
];

const ch3_ab_in = [
    document.querySelector("#ch3-abin-1"),
    document.querySelector("#ch3-abin-2"),
    document.querySelector("#ch3-abin-3"),
    document.querySelector("#ch3-abin-4"),
    document.querySelector("#ch3-abin-5")
];

const ch4_ab_in = [
    document.querySelector("#ch4-abin-1"),
    document.querySelector("#ch4-abin-2"),
    document.querySelector("#ch4-abin-3"),
    document.querySelector("#ch4-abin-4"),
    document.querySelector("#ch4-abin-5")
];

const ch5_ab_in = [
    document.querySelector("#ch5-abin-1"),
    document.querySelector("#ch5-abin-2"),
    document.querySelector("#ch5-abin-3"),
    document.querySelector("#ch5-abin-4"),
    document.querySelector("#ch5-abin-5")
];

// BIG VALUE ARRAYS
const name_val_arr = [
    document.querySelector("#ch1-name-val"),
    document.querySelector("#ch2-name-val"),
    document.querySelector("#ch3-name-val"),
    document.querySelector("#ch4-name-val"),
    document.querySelector("#ch5-name-val")
];

const ab_val_arr = [
    ch1_ab_val, ch2_ab_val, ch3_ab_val, ch4_ab_val, ch5_ab_val
];

const sturdy_val_arr = [
    document.querySelector("#ch1-sturdy-val"),
    document.querySelector("#ch2-sturdy-val"),
    document.querySelector("#ch3-sturdy-val"),
    document.querySelector("#ch4-sturdy-val"),
    document.querySelector("#ch5-sturdy-val")
];

const ecc_val_arr = [
    document.querySelector("#ch1-ecc-val"),
    document.querySelector("#ch2-ecc-val"),
    document.querySelector("#ch3-ecc-val"),
    document.querySelector("#ch4-ecc-val"),
    document.querySelector("#ch5-ecc-val")
];

const wound_arr = [
    [
        document.querySelector("#ch1-wound1"),
        document.querySelector("#ch1-wound2"),
        document.querySelector("#ch1-wound3"),
        document.querySelector("#ch1-wound4"),
    ],

    [
        document.querySelector("#ch2-wound1"),
        document.querySelector("#ch2-wound2"),
        document.querySelector("#ch2-wound3"),
        document.querySelector("#ch2-wound4"),
    ],

    [
        document.querySelector("#ch3-wound1"),
        document.querySelector("#ch3-wound2"),
        document.querySelector("#ch3-wound3"),
        document.querySelector("#ch3-wound4"),
    ],

    [
        document.querySelector("#ch4-wound1"),
        document.querySelector("#ch4-wound2"),
        document.querySelector("#ch4-wound3"),
        document.querySelector("#ch4-wound4"),
    ],

    [
        document.querySelector("#ch5-wound1"),
        document.querySelector("#ch5-wound2"),
        document.querySelector("#ch5-wound3"),
        document.querySelector("#ch5-wound4"),
    ],
];

// Adding wound array event listeners
for (let i = 0; i < wound_arr.length; i++) {
    for (let j = 0; j < wound_arr[i].length; j++) {
        let temp_index = i;
        wound_arr[i][j].addEventListener('click', e => {checkWounds(temp_index)});
    }
}

// BIG INPUT ARRAYS
const name_in_arr = [
    document.querySelector("#ch1-name-in"),
    document.querySelector("#ch2-name-in"),
    document.querySelector("#ch3-name-in"),
    document.querySelector("#ch4-name-in"),
    document.querySelector("#ch5-name-in")
];

const ab_in_arr = [
    ch1_ab_in, ch2_ab_in, ch3_ab_in, ch4_ab_in, ch5_ab_in
];

const sturdy_in_arr = [
    document.querySelector("#ch1-sturdy-in"),
    document.querySelector("#ch2-sturdy-in"),
    document.querySelector("#ch3-sturdy-in"),
    document.querySelector("#ch4-sturdy-in"),
    document.querySelector("#ch5-sturdy-in")
];

const ecc_in_arr = [
    document.querySelector("#ch1-ecc-in"),
    document.querySelector("#ch2-ecc-in"),
    document.querySelector("#ch3-ecc-in"),
    document.querySelector("#ch4-ecc-in"),
    document.querySelector("#ch5-ecc-in")
];

// In case the slots don't have names
const default_name_arr = ["NPC Slot #1", 
    "NPC Slot #2",
    "NPC Slot #3",
    "NPC Slot #4",
    "NPC Slot #5",
]

// Random character generation arrays
let eccs_list = ['Acrobatics',
    'Acting',
    'Administration',
    'Animal Whispering',
    'Archery',
    'Baking',
    'Baseball',
    'Basket Weaving',
    'Calligraphy',
    'Camping',
    'Car Mechanics',
    'Card-Counting/Gaming',
    'Carpentry',
    'Climbing',
    'Clockmaking',
    'Clowning',
    'Cocktail Mixing',
    'Computer Hacking',
    'Contortion',
    'Cooking',
    'Crocheting',
    'Dancing',
    'Darts',
    'Decoding/Ciphers',
    'Drinking',
    'Eidetic memory',
    'Embroidery',
    'Explosives',
    'Farming',
    'Filmmaking',
    'Fire Starting',
    'Firearms',
    'Fishing',
    'Flower Arranging',
    'Foraging',
    'Forgery',
    'Game Design',
    'Gardening',
    'Ghost Hunting',
    'Glassblowing',
    'Gymnastics',
    'Hairdressing',
    'Hand-to-Hand Combat',
    'Helicopter/Plane Piloting',
    'Hospitality',
    'Hunting',
    'Improv Comedy',
    'Instrument Making',
    'Jewelry Making',
    'Jigsaw Puzzle Solving',
    'Jousting',
    'Key Copying',
    'Knife Throwing',
    'Knitting',
    'Leatherworking',
    'Lip Reading',
    'Lockpicking',
    'Logic Puzzles',
    'Magic Tricks',
    'Makeup',
    'Marathon Running',
    'Medicine',
    'Metalworking',
    'Millinery (Hat Making)',
    'Musical Composition',
    'Musical Performance',
    'Nature & Wilderness',
    'Networking',
    'Origami',
    'Painting',
    'Photography',
    'Pickpocketing',
    'Pocketknife Tricks',
    'Poisons',
    'Pottery',
    'Sculpture',
    'Sewing',
    'Ship Piloting',
    'Skating',
    'Sketching/Drawing',
    'Soccer',
    'Spear Fishing',
    'Speed Reading',
    'Spotless Cleaning',
    'Sprinting',
    'Stamp Carving',
    'Stunt Driving',
    'Swimming',
    'Swordsmanship',
    'Thievery',
    'Tinkering',
    'Unicycling',
    'Video Gaming',
    'Voice Throwing',
    'Walking on your hands',
    'Water Polo',
    'Weightlifting',
    'Whistling',
    'Whitewater Rafting',
    'Whittling'
];

let expertise_list = [
    "Architecture", "Art", "Criminology", "Fashion", "Language", "Nature", "Politics", "Religion", "Technology", "Warfare", "Weaponry"
];

let gear_list = [
    "- A set of measuring tools (ruler, protractor, etc) and pencils, and a sketchbook\n- Basic historical map of the nearest town/city",
    "- A set of paintbrushes and small tubes of paint/n- A set of period-appropriate pencils and pens, and a sketchbook",
    "- A fingerprint dusting kit\n- Many, many ziploc baggies for evidence collecting\n- A magnifying glass and flashlight",
    "- A spare set of clothing appropriate for the period (this will change by mission)\n- A small sewing kit with two needles, thread, sewing scissors, and pins\n- A small makeup kit",
    "- A pocket dictionary for a period/place-appropriate language\n- Period-appropriate writing tools and a scroll of paper",
    "- A bag of medicinal and poisonous herbs, berries, etc\n- A small set of garden shears",
    "- A period/place-appropriate signet ring or other identification (check with your GM)\n- A short note of introduction from a relevant political figure (forged, of course)",
    "- A small collection of period-appropriate religious trinkets\n- A period-appropriate religious book of your choosing",
    "- A small recording/listening device (about the size of a quarter, one inch thick) that syncs to your phone within ~1 mile\n- A wristwatch that can remotely communicate with your time travel capsule",
    "- A period-appropriate mid- or high-ranking officer’s uniform/badge\n- A period-appropriate weapon of your choice, non-ranged (sword, knife, etc)",
    "- A period-appropriate weapon of your choice (set of daggers, gun/pistol, bow, sword, etc)\n- A small bag of ammunition for historical ranged weapons"
];

// Editing buttons
const edit_btns = [
    document.querySelector("#ch1-edit-btn"),
    document.querySelector("#ch2-edit-btn"),
    document.querySelector("#ch3-edit-btn"),
    document.querySelector("#ch4-edit-btn"),
    document.querySelector("#ch5-edit-btn")
]
// Adding event listeners for edit buttons
for (let i = 0; i < edit_btns.length; i++) {
    let temp_index = i;

    edit_btns[i].addEventListener('click', e => {makeEdits(temp_index)});
}

// Reset btns
const clear_btns = [
    document.querySelector("#ch1-reset-btn"),
    document.querySelector("#ch2-reset-btn"),
    document.querySelector("#ch3-reset-btn"),
    document.querySelector("#ch4-reset-btn"),
    document.querySelector("#ch5-reset-btn")
]

// Reset btns event listeners
for (let i = 0; i < clear_btns.length; i++) {
    let temp_i = i;
    clear_btns[i].addEventListener('click', () => {checkIfSure("clear", temp_i)});
}

// Random generator btns
const rand_btns = [
    document.querySelector("#ch1-rand-btn"),
    document.querySelector("#ch2-rand-btn"),
    document.querySelector("#ch3-rand-btn"),
    document.querySelector("#ch4-rand-btn"),
    document.querySelector("#ch5-rand-btn")
]

// Random generator btns event listeners
for (let i = 0; i < rand_btns.length; i++) {
    let temp_i = i;
    rand_btns[i].addEventListener('click', () => {checkIfSure("rand char", temp_i)});
}

// Upload, download, copy, paste btns
const upload_btns = [
    document.querySelector("#ch1-upload-btn"),
    document.querySelector("#ch2-upload-btn"),
    document.querySelector("#ch3-upload-btn"),
    document.querySelector("#ch4-upload-btn"),
    document.querySelector("#ch5-upload-btn")
];

const download_btns = [
    document.querySelector("#ch1-download-btn"),
    document.querySelector("#ch2-download-btn"),
    document.querySelector("#ch3-download-btn"),
    document.querySelector("#ch4-download-btn"),
    document.querySelector("#ch5-download-btn")
];

const copy_btns = [
    document.querySelector("#ch1-copy-btn"),
    document.querySelector("#ch2-copy-btn"),
    document.querySelector("#ch3-copy-btn"),
    document.querySelector("#ch4-copy-btn"),
    document.querySelector("#ch5-copy-btn")
];

const paste_btns = [
    document.querySelector("#ch1-paste-btn"),
    document.querySelector("#ch2-paste-btn"),
    document.querySelector("#ch3-paste-btn"),
    document.querySelector("#ch4-paste-btn"),
    document.querySelector("#ch5-paste-btn")
];

// Event listeners for upload/download/etc btns
for (let i = 0; i < upload_btns.length; i++) {
    let temp_i = i;
    upload_btns[i].addEventListener('click', e => {toggleUploadPopup(temp_i)});
}

for (let i = 0; i < download_btns.length; i++) {
    let temp_i = i;
    download_btns[i].addEventListener('click', e => {downloadFile(temp_i)});
}

for (let i = 0; i < copy_btns.length; i++) {
    let temp_i = i;
    copy_btns[i].addEventListener('click', e => {copyCharacterJSON(temp_i)});
}

for (let i = 0; i < paste_btns.length; i++) {
    let temp_i = i;
    paste_btns[i].addEventListener('click', e => {togglePasteWindow(temp_i)});
}

let uploading = false;
let upload_event;
let event_type = "none";
let event_index = -1;
let paste_string = "";

// Transfer stuff needed for uploading
const cancel_up_btn = document.querySelector("#cancel-upload");
const finish_upload = document.querySelector("#finish-upload");
cancel_up_btn.addEventListener('click',() => {toggleUploadPopup(-1)});
finish_upload.addEventListener('click', () => {checkIfSure("upload", event_index)});
document.getElementById("char-file").addEventListener('change', (event) => {assignFile(event)});
document.getElementById("confirm-paste-btn").addEventListener('click',() => {checkIfSure("paste")})
document.getElementById("cancel-paste").addEventListener('click', () => {togglePasteWindow(-1)});

// "Are you sure" warning menu stuff
const overwrite_warning = document.querySelector("#overwrite-warning");
const cancel_sure_btn = document.querySelector("#cancel-sure");
const download_sure_btn = document.querySelector("#download-curr-char");
const im_sure_btn = document.querySelector("#im-sure");
const download_alt_all_btn = document.querySelector("#download-alt-btn");
cancel_sure_btn.addEventListener('click', cancelOverwrite);
download_sure_btn.addEventListener('click', e => {downloadFile(event_index)});
im_sure_btn.addEventListener('click', executeOverwrite);
download_alt_all_btn.addEventListener('click', downloadAll);

// Subheader menu for "all" btns
const download_all_btn = document.querySelector("#download-all-btn");
download_all_btn.addEventListener('click', downloadAll);
const clear_all_btn = document.querySelector("#clear-all-btn");
clear_all_btn.addEventListener('click', () => {checkIfSure("clear all", -1)});
const rand_all_btn = document.querySelector("#rand-all-btn");
rand_all_btn.addEventListener('click', () => {checkIfSure("rand all", -1)});

window.onload = on_load_page();

// Loading locally stored characters
function on_load_page() {
    if (localStorage.getItem("char_slots") != null) {

        let temp_chars = JSON.parse(localStorage.getItem("char_slots"));
        console.log(temp_chars);

        for (let i = 0; i < num_chars; i++) {
            char_arr[i] = temp_chars[i];
        }
        // character = JSON.parse(localStorage.getItem("char_sheet"));
    }

    assignDisplayVals();
    assignInputVals();

    // console.log(char_arr);
}

// Update input fields to reflect the char display vals
function assignInputVals() {

    // Going through all char slots
    for (let i = 0; i < num_chars; i++) {

        // Abilities
        for (let j = 0; j < ab_in_arr.length; j++) {
            ab_in_arr[i][j].value = char_arr[i]["abilities"][j];
            // console.log(ab_in_arr[i][j].value);
        }

        // Name
        name_in_arr[i].value = char_arr[i]["header"][0];

        // Sturdy
        sturdy_in_arr[i].value = char_arr[i]["header"][4];
        // console.log(char_arr[i]["header"][4]);
        // console.log(sturdy_in_arr[i]);

        // Eccentricities
        // console.log(char_arr[i]["eccentricities"]);
        ecc_in_arr[i].value = char_arr[i]["eccentricities"];
    }

    console.log(char_arr);
}

// Make the char changes visible in display
function assignDisplayVals() {

    // Going through all char slots
    for (let i = 0; i < num_chars; i++) {

        // Abilities
        for (let j = 0; j < ab_val_arr.length; j++) {
            ab_val_arr[i][j].textContent = char_arr[i]["abilities"][j];
        }

        // Name
        if (char_arr[i]["header"][0] != "") {
            name_val_arr[i].textContent = char_arr[i]["header"][0];
        }
        else {
            name_val_arr[i].textContent = default_name_arr[i];
        }

        // Sturdy
        sturdy_val_arr[i].textContent = char_arr[i]["header"][4];

        // Eccentricities
        let temp_ecc = char_arr[i]["eccentricities"];
        console.log(temp_ecc);
        temp_ecc = temp_ecc.replace(/(\r\n|\n|\r)/g, '<br>');
        ecc_val_arr[i].innerHTML = temp_ecc;
    }

    assignWounds();

    localStorage.setItem("char_slots", JSON.stringify(char_arr));
}

// Assigning wounds based on saved chars
function assignWounds() {
    for (let j = 0; j < wound_arr.length; j++) {

        for (let i = 0; i < wound_arr[j].length; i++) {
            if (char_arr[j]["wounds"][i] == true) {
                wound_arr[j][i].checked = true;
            }
            else {
                wound_arr[j][i].checked = false;
            }
        }
    }
}

// Check and update wounds when wound is clicked
function checkWounds(index) {

    for (let i = 0; i < wound_arr[index].length; i++) {
        // console.log(wound_arr[index][i]);
        if (wound_arr[index][i].checked) {
            char_arr[index]["wounds"][i] = true;
        }
        else {
            char_arr[index]["wounds"][i] = false;
        }
        console.log(char_arr[index]);
    }

    localStorage.setItem("char_slots", JSON.stringify(char_arr));
}

// Check if in normal/edit display and act accordingly (save or enter edit mode)
function makeEdits(index) {
    // console.log("worked");

    if (!editing_arr[index]) {
        EditDisplay(index);
        edit_btns[index].textContent = "Finish Editing";
        editing_arr[index] = true;
    }
    else {
        if (saveEdits(index) == true) {
            NormalDisplay(index);
            edit_btns[index].textContent = "Edit";
            editing_arr[index] = false;
        }

        localStorage.setItem("char_slots", JSON.stringify(char_arr));
    }

}

// Changes to edit display
function EditDisplay(index) {
    assignInputVals();

    char_edit_arr[index].classList.add("edit");

}

// Changes to normal display
function NormalDisplay(index) {
    assignDisplayVals();

    char_edit_arr[index].classList.remove("edit");

}

// NEW save function for WHOLE character sheet
function saveEdits(index) {
    try {
        for (let i = 0; i < ab_in_arr[index].length; i++) {
            let temp_val = ab_in_arr[index][i].value;
            if (temp_val > 20) {
                temp_val = 20;
            }
            char_arr[index]["abilities"][i] = temp_val;
        }

        char_arr[index]["header"][0] = name_in_arr[index].value;
        char_arr[index]["header"][4] = sturdy_in_arr[index].value;

        char_arr[index]["eccentricities"] = ecc_in_arr[index].value;
    }
    catch (err) {
        console.log(err);
        window.alert("Something went wrong. Please check your values and try again.");
        return false;
    }

    localStorage.setItem("char_slots", JSON.stringify(char_arr));

    // console.log(character);

    return true;
}

// Downloading the JS file
function downloadFile(index, content, name, type) {
    if(!editing_arr[index]) {
        // Making the blob for json export
        const new_content = JSON.stringify(char_arr[index], null, 2)
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

// For upload show/hide
function toggleUploadPopup(index) {
    // console.log("toggled");

    document.getElementById("upload-popup").classList.toggle("hide");
    
    // If we are about to upload
    if (!document.getElementById("upload-popup").classList.contains("hide")) {
        event_index = index;
        uploading = true;
    }

    if(editing_arr[index]) {
        let temp_message = "You must exit out of editing mode first.";
        window.alert(temp_message);
    }

    if (!document.getElementById("paste-popup").classList.contains("hide")) {
        document.getElementById("paste-popup").classList.toggle("hide");
        console.log("toggled");
    }
    if (!document.getElementById("overwrite-warning").classList.contains("hide")) {
        document.getElementById("overwrite-warning").classList.toggle("hide");
    }
}

// Happens when user selects a file, stores the event for later handling
function assignFile(event) {
    upload_event = event;
    // console.log(event);
}

// Opens the "are you sure" warning window and sets event type
function checkIfSure(event_t, index) {
    event_type = event_t;
    
    if (event_type == "clear" || event_type == "rand char") {
        event_index = index;
    }

    if (event_type == "clear all" || event_type == "rand all") {
        if(!download_sure_btn.classList.contains("hide")) {
            download_sure_btn.classList.toggle("hide");
        }
        if(download_alt_all_btn.classList.contains("hide")) {
            download_alt_all_btn.classList.toggle("hide")
        }
    }
    else {
        if(download_sure_btn.classList.contains("hide")) {
            download_sure_btn.classList.toggle("hide");
        }
        if(!download_alt_all_btn.classList.contains("hide")) {
            download_alt_all_btn.classList.toggle("hide")
        }
    }

    overwrite_warning.classList.toggle("hide");
}

// Closes popup windows
function cancelOverwrite() {
    event_index = -1;

    // checks if we need to hide the upload menu or not
    if(!document.getElementById("upload-popup").classList.contains("hide")) {
        document.getElementById("upload-popup").classList.toggle("hide");
    }

    overwrite_warning.classList.toggle("hide");
}

// If user clicks "I'm sure," executes the relevant function
function executeOverwrite() {
    overwrite_warning.classList.toggle("hide");
    // console.log(overwrite_warning.classList);

    if (event_type == "upload") {
        uploadFile();
        uploading = false;
    }
    else if (event_type == "clear") {
        clearStoredCharacter(event_index);
    }
    else if (event_type == "rand char") {
        generateRandomCharacter(event_index);
    }
    else if (event_type == "paste") {
        paste_string = document.getElementById("paste-textarea").value;
        pasteCharacterJSON();
        // TODO: Add call to paste function once that is done
    }
    else if (event_type == "clear all") {
        clearAll();
    }
    else if (event_type == "rand all") {
        randomizeAll();
    }
}

// Uses the file that user has selected, tries to import as character sheet
function uploadFile() {
    if(!editing_arr[event_index]) {
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
            char_arr[event_index] = char_json;
            console.log(char_arr[event_index]);

            replaceCharSheet(event_index);
        }
        else {
            window.alert("This is not a valid character sheet. Please try again.");
        }
    }
    catch (err) {
        window.alert("This is not a valid character sheet. Please try again.")
    }
}

// After upload: parse int for char abilities and update display
function replaceCharSheet(index) {
    try {

        // abilities (as ints)
        for (let i = 0; i < ab_val_arr[index].length; i++) {
            let temp_val = char_arr[index]["abilities"][i];
            temp_val = parseInt(temp_val);
            char_arr[index]["abilities"][i] = temp_val;
            // console.log(character["abilities"][i]);
        }

        // sturdy (as int)
        let sturdy_val = char_arr[index]["header"][4]
        sturdy_val = parseInt(sturdy_val);
        char_arr[index]["header"][4] = sturdy_val;

        // console.log("This is your character", character);

        assignDisplayVals();
        assignInputVals();
        localStorage.setItem("char_slots", JSON.stringify(char_arr));

        // Hiding upload popup if it is shown
        if (!document.getElementById("upload-popup").classList.contains("hide")) {
            toggleUploadPopup();
        }
    }
    catch (err) {
        window.alert("This is not a valid character sheet. Please try again.");
    }
}

// Literally just clears character from local storage
function clearStoredCharacter(index) {

    
    char_arr[index] = {

        "valid_sheet": true,

        "header": {
            0: "",
            1: "",
            2: "",
            3: "",
            4: 0
        },

        "wounds": {
            0: false, 1: false, 2: false, 3: false
        },

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

    localStorage.setItem("char_slots", JSON.stringify(char_arr));

    assignDisplayVals();
    assignInputVals();

    event_index = -1;
}

function copyCharacterJSON(index) {
    try {
        const type = "text/plain";
        const temp_text = JSON.stringify(char_arr[index]);
        // console.log(temp_text);

        const clip_data = {
            [type]: temp_text
        };

        const clipboard_item = new ClipboardItem(clip_data);
        navigator.clipboard.write([clipboard_item]);

        copy_btns[index].textContent = "Copied!"
        // copy_btns[index].style.fontSize = "0.5rem"
        setTimeout(() => {
            copy_btns[index].textContent = "Copy";
            // copy_btns[index].style.fontSize = "0.8rem"
            }, 2000);
    }
    catch (err) {
        console.log(err);
    }

}

function togglePasteWindow(index) {
    event_index = index;
    document.getElementById("paste-popup").classList.toggle("hide");
    document.getElementById("paste-textarea").value = "";

    if (!document.getElementById("upload-popup").classList.contains("hide")) {
        document.getElementById("upload-popup").classList.toggle("hide");
        // console.log("toggled");
    }
    if (!document.getElementById("overwrite-warning").classList.contains("hide")) {
        document.getElementById("overwrite-warning").classList.toggle("hide");
    }
}

function pasteCharacterJSON() {
    console.log(paste_string);

    try {
        let test_json = JSON.parse(paste_string);
        if (checkValidCharSheet(test_json)) {
            replaceCharSheet(event_index);
        }
    }
    catch (err) {
        window.alert("This is not a valid character sheet.")
    }
    togglePasteWindow();
}

function downloadAll() {
    for (let i = 0; i < num_chars; i++) {
        downloadFile(i);
    }
}

function clearAll() {

    for (let i = 0; i < num_chars; i++) {
        char_arr[i] = {

            "valid_sheet": true,

            "header": {
                0: "",
                1: "",
                2: "",
                3: "",
                4: 0
            },

            "wounds": {
                0: false, 1: false, 2: false, 3: false
            },

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
    }

    localStorage.setItem("char_slots", JSON.stringify(char_arr));

    assignDisplayVals();
    assignInputVals();

    event_index = -1;
}

function generateRandomCharacter(index) {
    clearStoredCharacter(index);

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

            // console.log("Rolls: ", roll[0], ", ", roll[1], ", ", roll[2]);
            // console.log("Median roll: ", med_roll);

        }

        char_arr[index]["abilities"][i] = med_roll;
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

        // console.log("Rolls: ", roll[0], ", ", roll[1], ", ", roll[2]);
        // console.log("Sturdy roll: ", sturdy_roll);

    }

    char_arr[index]["header"][4] = sturdy_roll;

    // Generating Talents
    let ecc_text = "";
    let eccs = [];

    for (let i = 0; i < 3; i++) {
        let temp_ecc = Math.floor(Math.random() * eccs_list.length);

        while (eccs.includes(temp_ecc)) {
            temp_ecc = Math.floor(Math.random() * eccs_list.length);
        }

        eccs.push(temp_ecc);

        if (i > 0) {
            ecc_text = ecc_text + "\n";
        }

        ecc_text = ecc_text + "- " + eccs_list[temp_ecc];
    }

    //console.log(talents);
    char_arr[index]["eccentricities"] = ecc_text;

    // Generating Expertise
    let temp_i = Math.floor(Math.random() * 11);
    let temp_expertise = expertise_list[temp_i];
    //console.log(temp_i);
    //console.log(temp_expertise);
    char_arr[index]["expertise"] = temp_expertise;

    // Assigning gear based on expertise
    char_arr[index]["gear"] = gear_list[temp_i];

    // console.log(char_arr[index]);

    assignDisplayVals();
    assignInputVals();
    localStorage.setItem("char_slots", JSON.stringify(char_arr));
}

function randomizeAll() {
    for (let i = 0; i < num_chars; i++) {
        generateRandomCharacter(i);
    }
}