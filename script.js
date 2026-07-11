// =========================
// Sticky Navigation Shadow
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.18)";
    } else {
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    }

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((item)=>{

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = Math.ceil(target / 40);

        if(current < target){

            counter.innerText = current + increment;

            setTimeout(updateCounter,40);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// =========================
// Loading Screen
// =========================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("loader")
        .classList
        .add("hide");

    },2000);

});