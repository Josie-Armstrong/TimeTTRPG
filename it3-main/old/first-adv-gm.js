const dd_btn_1 = document.querySelector("#dd-btn-1");
const block_1 = document.querySelector("#adv-block-1");

// dd_btn_1.addEventListener('click', () => {dropDownToggle(1)});

const dd_btn_arr = [document.querySelector("#dd-btn-0"),
                    document.querySelector("#dd-btn-1"),
                    document.querySelector("#dd-btn-100")];

const block_arr = [document.querySelector("#adv-block-0"),
                    document.querySelector("#adv-block-1"),
                    document.querySelector("#adv-block-100")];

for(let i = 0; i < dd_btn_arr.length; i++) {
    let temp_index = i;
    dd_btn_arr[i].addEventListener('click', () => {dropDownToggle(temp_index)});
    console.log("did");
}

function dropDownToggle(index) {
    block_arr[index].classList.toggle("collapsed");
    
    /* if(!block_arr[index].classList.toggle("collapsed")) {
        dd_btn_arr[index].style.transform = "rotate(180deg)";
    }
    else {
        dd_btn_arr[index].style.transform = "rotate(0deg)";
    }*/
}