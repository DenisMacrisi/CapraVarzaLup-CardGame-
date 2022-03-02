const ro = document.getElementById("ro-lan")
const en = document.getElementById("en-lan");

function showRoRules(){
    en.style.display = "none";
    ro.style.display = "flex";
}

function showEnRules(){
    ro.style.display = "none";
    en.style.display = "flex";
}

