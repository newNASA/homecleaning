// sayt nav-topdan o'tganda navbar fixedga aylanadi

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    var navTop = document.querySelector(".nav-top");

    if (window.scrollY > navTop.clientHeight) {
        nav.style.position = "fixed";
        nav.style.top = "0";
    } else {
        nav.style.position = "static";
        nav.style.top = navTop.clientHeight + "px";
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

const chat = document.querySelector(".chat");
const chat_active = document.querySelector(".chat-unactive");

chat.addEventListener("click", function () {
    chat_active.classList.toggle("chat-active");
    if (chat_active.classList.contains("chat-active")) {
        chat.style.backgroundColor = "var(--white-color)";
        chat.style.border = "1px solid var(--green)";
        chat.style.backgroundImage = "url(./imgs/add.png)";
    } else {
        chat.style.backgroundColor = "var(--green)";
        chat.style.border = "none";
        chat.style.backgroundImage = "url(./imgs/sms.png)";
    }
});


// ________________________________________________________________________________

