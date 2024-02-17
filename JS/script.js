// <======== Initializing AOS-Animations JS ========>
AOS.init({
    duration: 1200,
});


// <======== JS Program to Run the Pre-Loader ========>
const preLoader = document.querySelector("#pre-loader");
setTimeout(() => {
    preLoader.style.display = "none";
}, 2000);


// <======== JS Program For the Scroll-To-Top Button ========>
const scrollBtn = document.querySelector("#scrollBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add("show");
    }
    else {
        scrollBtn.classList.remove("show");
    }
})


// <======== JS Program For the Stickey Navbar ========>
const navbar = document.querySelector("#navbar");
const menuBar = document.querySelector(".fa-bars");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
    }
    else {
        navbar.classList.remove("scroll");
    }
})

menuBar.addEventListener("click", () => {
    navbar.classList.toggle("show");
})


// <======== JS Program to Send all the Data of the Appointment Form to Google Sheet ========>
const appointmentForm = document.querySelector("#appointment-container form");
const allInputs = document.querySelectorAll("#appointment-container .form-input");
const appointmentAlertContainer = document.querySelector("#appointment-container-alert");
const appointmentAlertContainerIcon = document.querySelector("#appointment-container-alert .fa-sharp");

appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(appointmentForm);
    fetch('https://script.google.com/macros/s/AKfycbyImvQ4vG28oBcqfCDOUiXjUqGgTQlmrpw-VcYFE2MLUA5bfh6ICHJZ52SIo6DVY278/exec', {
        method: "POST",
        body: data,
    })
        .then(res => res.text())


    allInputs.forEach((input) => {
        input.value = ''
    })


    // <======== JS Function For Adding Appointment-Container-Alert ========>
    appointmentAlertContainer.classList.add("show");
    appointmentAlertContainerIcon.addEventListener("click", () => {
        appointmentAlertContainer.classList.remove("show");
    })
    setTimeout(() => {
        appointmentAlertContainer.classList.remove("show");
    }, 4000);
})


// <======== JS Function For Adding Contact-Container-Alert ========>
const contactForm = document.querySelector("#contact-container form");
const contactFormInput = document.querySelector("#contact-container .form-input");
const contactAlertContainer = document.querySelector("#contact-container-alert");
const contactAlertContainerIcon = document.querySelector("#contact-container-alert .fa-sharp");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactFormInput.value = '';

    contactAlertContainer.classList.add("show");
    contactAlertContainerIcon.addEventListener("click", () => {
        contactAlertContainer.classList.remove("show");
    })
    setTimeout(() => {
        contactAlertContainer.classList.remove("show");
    }, 4000);
})