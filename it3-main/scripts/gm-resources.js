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
let edit_btns = [
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

// Loading locally stored characters
function on_load_page() {
    if (localStorage.getItem("char_slots") != null) {

        let temp_chars = JSON.parse(localStorage.getItem("char_slots"));
        console.log(temp_chars);

        for (let i = 0; i < temp_chars.length; i++) {
            char_arr[i] = temp_chars[i];
        }
        // character = JSON.parse(localStorage.getItem("char_sheet"));
    }

    assignDisplayVals();
    assignInputVals();

    console.log(char_arr);
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
            ab_val_arr[j].textContent = char_arr[i]["abilities"][j];
        }

        // Name
        name_val_arr[i].textContent = char_arr[i]["header"][0];

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
        if (wound_arr[index][i].checked) {
            char_arr[index]["wounds"][i] = true;
        }
        else {
            char_arr[index]["wounds"][i] = false;
        }
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