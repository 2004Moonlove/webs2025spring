window.addEventListener("load", setup);

async function setup() {
    start();
    create_DOM_inference();
    add_event_listener();
}

function toggleInfo(card) {
    card.classList.toggle("active");
  }
  
function create_DOM_inference() {
    //for the bar type
    all_refer = document.getElementById("all");
    about_refer = document.getElementById("aboutme");
    photo_refer = document.getElementById("photo");
    my_school_refer = document.getElementById("my_school");
    my_life_refer = document.getElementById("my_life");

}


function add_event_listener() {
    all_refer.addEventListener("click",update_all);
    about_refer.addEventListener("click",update_about)
    photo_refer.addEventListener("click",update);
    my_school_refer.addEventListener("click",() => update_insurance());
    my_life_refer.addEventListener("click",() => update_insurance());

}

function update_all(){
    below.style.display="block";
    about_me.style.display = "none";
    my_life_refer.style.display = "none";
    photos.style.display = "none";
    my_school_refer.style.display = "none";
}

function update_about(){
    below.style.display="none";
    about_me.style.display = "block";
    my_life_refer.style.display = "none";
    photos.style.display = "none";
    my_school_refer.style.display = "none";
}