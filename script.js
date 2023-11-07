// sayt nav-topdan o'tganda navbar fixedga aylanadi

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    var navTop = document.querySelector(".nav-top");
    var navf = document.querySelector(".navf")
    if (window.scrollY > navTop.clientHeight) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        navf.style.display = "flex";
    } else {
        nav.style.position = "static";
        nav.style.top = navTop.clientHeight + "px";
        navf.style.display = "none";
    }
});

// ________________________________________________________________________________________________________________________________

// biz bilan bog'lanish bo'limi

const contact_us_x = document.querySelector(".contact-us-x");
const contact_us = document.querySelector(".contact-us");
const contact = document.querySelectorAll(".contact");

// contact_us.style.display = "none";

contact_us_x.addEventListener("click", function () {
    contact_us.style.display = "none";
});

contact.forEach(function (item) {
    item.addEventListener("click", function () {
        contact_us.style.display = "flex"; 
    });
});

// ____________________________________________________________________________-

// chat kodlari


