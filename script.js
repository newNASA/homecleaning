// window.addEventListener("scroll", function () {
//     var nav = document.querySelector("nav");
//     if (window.scrollY > 80) {
//         nav.style.position = "fixed";
//         nav.style.top = "0px";
//     } else {
//         nav.style.position = "absolute";
//         nav.style.top = "80px"; 
//     }
// });

// ________________________________________________________________________________________________________________________________

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
