
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

contact_us_x.addEventListener("click", function () {
    contact_us.style.display = "none";
});

contact.forEach(function (item) {
    item.addEventListener("click", function () {
        contact_us.style.display = "flex";
    });
});

// login open

const login_x = document.querySelector(".login-x");
const login = document.querySelector(".login");
const login_open = document.querySelector(".profile");
const sign_log = document.querySelector(".sign_log");

login_x.addEventListener("click", function () {
    login.style.display = "none";
});

sign_log.addEventListener("click", function () {
    login.style.display = "flex";
    sign_up.style.display = "none";
});

login_open.addEventListener("click", function () {
    login.style.display = "flex";
});

// sign up open

const log_sign = document.querySelector(".log_sign");
const sign_up_x = document.querySelector(".sign-up-x");
const sign_up = document.querySelector(".sign-up");

sign_up_x.addEventListener("click", function () {
    sign_up.style.display = "none";
});

log_sign.addEventListener("click", function () {
    sign_up.style.display = "flex";
    login.style.display = "none";
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
        chat.style.backgroundImage = "url(/imgs/add.png)";
    } else {
        chat.style.backgroundColor = "var(--green)";
        chat.style.border = "none";
        chat.style.backgroundImage = "url(/imgs/sms.png)";
    }
});

const textInput = document.querySelector(".text");
const sendButton = document.querySelector(".send-btn");
const center = document.querySelector(".center");

sendButton.addEventListener("click", function (e) {
    e.preventDefault();

    const message = textInput.value;

    if (message.trim() !== "") {
        const messageDiv = document.createElement("div");
        const messageP = document.createElement("p");
        messageP.textContent = message;
        center.appendChild(messageDiv);
        messageDiv.appendChild(messageP);
        textInput.value = "";
        center.scrollTop = center.scrollHeight;
    }
});


// ________________________________________________________________________________

// toggle theme
const elThemeTogglerButton = document.querySelector('.toggle-theme');

function switchTheme() {
    const elRoot = document.documentElement
    let dataTheme = elRoot.getAttribute('data-theme');

    let newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    elRoot.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
}

if (elThemeTogglerButton) {
    elThemeTogglerButton.addEventListener('click', switchTheme);
}

// ___________________________________________________________________________


var gamMenu = document.querySelector('.gamburger')
var menuX = document.querySelector('.menu-btn-x')
var responsiveIn = document.querySelector('.resposive-menu-in')
var responsiveMenu = document.querySelector('.responsive-menu')
var responsiveMenuFixer = document.querySelector('.resposive-menu-fixer')

gamMenu.addEventListener('click', ()=>{
    responsiveMenu.style.display = 'flex'
    responsiveMenuFixer.classList.add('resposive-menu-fixer-on')
    responsiveIn.classList.add('resposive-menu-in-on')
})

menuX.addEventListener('click', ()=>{
    responsiveMenuFixer.classList.add('resposive-menu-fixer-of')
    responsiveIn.classList.add('resposive-menu-in-of')
    setTimeout(()=>{
        responsiveMenu.style.display = 'none'
        responsiveMenuFixer.classList.remove('resposive-menu-fixer-of')
        responsiveIn.classList.remove('resposive-menu-in-of')
        responsiveMenuFixer.classList.remove('resposive-menu-fixer-on')
        responsiveIn.classList.remove('resposive-menu-in-on')
    },500)
})