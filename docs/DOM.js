window.addEventListener("load", setup);

async function setup() {
    create_DOM_inference();
    add_event_listener();
}


function create_DOM_inference() {
    //for the bar type
    all_refer = document.getElementById("all");
    about_refer = document.getElementById("aboutme");
    photo_refer = document.getElementById("photo");
    my_school_refer = document.getElementById("my_school");
    my_life_refer = document.getElementById("my_life");
        //for the cards reference
        HL_card_refer = document.getElementById("HL_card");
        SCU_card_refer = document.getElementById("SCU_card");
        upitt_card_refer = document.getElementById("upitt_card");
        //for cards
        cards = document.getElementById("cards");
        HL_D = document.getElementById("HL_D");
        SCU_D = document.getElementById("SCU_D");
        upitt_D = document.getElementById("upitt_D");
}


function add_event_listener() {
    all_refer.addEventListener("click", update_all);
    about_refer.addEventListener("click", update_about);
    photo_refer.addEventListener("click",update_photo);
    my_school_refer.addEventListener("click", update_school);
    // for the cards eventlistener
    HL_card_refer.addEventListener("click", update_HL_card);
    SCU_card_refer.addEventListener("click", update_SCU_card);
    upitt_card_refer.addEventListener("click", update_UPITT_card);
    //
    my_life_refer.addEventListener("click", update_life);
}

function update_all() {
    below.style.display = "block";
    about_me.style.display = "none";
    my_life_section.style.display = "none";
    photos_sec.style.display = "none";
    My_school.style.display = "none";
}

function update_about() {
    My_school.style.display = "none";
    below.style.display = "none";
    about_me.style.display = "block";
    my_life_section.style.display = "none";
    photos_sec.style.display = "none";
}

function update_photo(){
    photos_sec.style.display = "block";
    My_school.style.display = "none";
    below.style.display = "none";
    about_me.style.display = "none";
    my_life_section.style.display = "none";
}

function update_school() {
    My_school.style.display = "block";
    below.style.display = "none";
    about_me.style.display = "none";
    my_life_section.style.display = "none";
    photos_sec.style.display = "none";
}

function update_life(){
    My_school.style.display = "none";
    below.style.display = "none";
    about_me.style.display = "none";
    my_life_section.style.display = "block";
    photos_sec.style.display = "none";
}

// for the cards
function update_HL_card() {
    HL_D.style.display = "block";
    cards.style.display = "none";
}
function update_SCU_card() {
    SCU_D.style.display = "block";
    cards.style.display = "none";
}
function update_UPITT_card() {
    upitt_D.style.display = "block";
    cards.style.display = "none";
}

function backToCards() {
    cards.style.display = "grid";
    HL_D.style.display = "none";
    SCU_D.style.display = "none";
    upitt_D.style.display = "none";
}

