

// toggle close btn


let togglenav = document.querySelector(".toggle");
let listNav = document.querySelector(".navbar .nav-list ul");

togglenav.onclick = function(){

    togglenav.classList.toggle("active");

    listNav.classList.toggle("block");
}
