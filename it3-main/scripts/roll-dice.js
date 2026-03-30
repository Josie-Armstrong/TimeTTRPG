const num_in = document.querySelector("#num-dice");
const sides_in = document.querySelector("#sides-dice");

// Button and place to put results
const roll_btn = document.querySelector("#roll-dice-btn");
const roll_result = document.querySelector("#roll-dice-result");
roll_btn.addEventListener('click', rollDice);

// Where we're storing the rolls
let roll = [];

function rollDice() {
    let num_dice = num_in.value;
    let sides_dice = sides_in.value;
    let adder = 1;
    roll = [];

    try {
        if (sides_dice == 10) {
            adder = 0;
        }

        for(let i = 0; i < num_dice; i++) {
            let temp_roll = Math.floor(Math.random() * sides_dice) + adder;
            roll.push(temp_roll);
        }

        console.log(roll);

        displayRollResult();
    }
    catch (err) {
        window.alert("Enter number of dice and number of sides first!");
        console.log(err);
    }
    // To get 0-9 for a d10
}

// Making the result into a string and displaying it
function displayRollResult() {
    let roll_string = "";

    for(let i = 0; i < roll.length; i++) {
        roll_string = roll_string + String(roll[i]);

        // Adding commas when needed
        if (i < (roll.length - 1)) {
            roll_string = roll_string + ", ";
        }
    }

    roll_result.textContent = roll_string;
}