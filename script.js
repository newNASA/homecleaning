// sayt nav-topdan o'tganda navbar fixedga aylanadi

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    var navTop = document.querySelector(".nav-top");
    var navf = document.querySelector(".navf");

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

const chat = document.querySelector(".chat");
const chat_active = document.querySelector(".chat-unactive");
var chatBtn = document.querySelector('.send-btn');
var chatTalk = document.querySelector('.center');

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
chatBtn.addEventListener("click", function () {
    chatTalk.classList.toggle("talkchat");
});


// ________________________________________________________________________________

// xizmatlar js codes

const data = [
    {
        "img": "../imgs/clean-ser.png",
        "title": "Uylarni tozalash",
        "text": "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
    },
    {
        "img": "../imgs/desinfeksiya-ser.png",
        "title": "Ofislarni tozalash",
        "text": "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
    },
    {
        "img": "../imgs/desinfeksiya-ser.png",
        "title": "Bog’larni tozalash",
        "text": "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
    },
    {
        "img": "../imgs/washing-ser.png",
        "title": "Yashil maydonlarni tozalash",
        "text": "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
    },
    {
        "img": "../imgs/clean-ser.png",
        "title": "Qurilish joylarini tozalash",
        "text": "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
    },
    {
        "img": "../imgs/desinfeksiya-ser.png",
        "title": "Umumiy tozalash",
        "text": "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
    },
    {
        "img": "../imgs/desinfeksiya-ser.png",
        "title": "Mebellarni tozalash",
        "text": "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
    },
    {
        "img": "../imgs/desinfeksiya-ser.png",
        "title": "Mebellarni tozalash",
        "text": "Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim etamiz."
    }
];

const xizmatlarCards = document.querySelector(".xizmatlar-bottom");

data.forEach(function (item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", item.img);
    cardImage.setAttribute("alt", item.title);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = item.title;

    const cardText = document.createElement("p");
    cardText.textContent = item.text;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    xizmatlarCards.appendChild(card);
});

var chatBtn = document.querySelector('.send-btn');
var chatTalk = document.querySelector('.center');

chatBtn.addEventListener('click',  function () {
    chatTalk.classList.toggle('talkchat');
})