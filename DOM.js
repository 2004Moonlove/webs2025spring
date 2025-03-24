window.addEventListener("load", setup);

async function setup() {
    create_DOM_inference();
    add_event_listener();
}

function create_DOM_inference() {
    //for the bar type
    all_refer = document.getElementById("all");
    photo_refer = document.getElementById("photo");
    my_school_refer = document.getElementById("my_school");
    my_life_refer = document.getElementById("my_life");

}


function add_event_listener() {
    all_refer.addEventListener("click",update_all);
    photo_refer.addEventListener("click",update);
    my_school_refer.addEventListener("click",() => update_insurance());
    my_life_refer.addEventListener("click",() => update_insurance());

}

function update_all(){

}