/* =========================================================
   NEENU MARIAM THOMAS — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE LOAD ANIMATION
========================================================= */

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    "section, .service-card, .skill-box, .security-card, .experience-card, .project-card, .certificate-card"
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* =========================================================
   STICKY NAVBAR
========================================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});



/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-links a"
);


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >=
            sectionTop - sectionHeight * 0.25
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");


        const targetSection =
            document.querySelector(targetId);


        if (targetSection) {

            event.preventDefault();


            targetSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});



/* =========================================================
   CLOSE MOBILE NAVIGATION
========================================================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        document.body.classList.remove(
            "mobile-menu-open"
        );

    });

});



/* =========================================================
   PROJECT CARD INTERACTION
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.zIndex = "5";

    });


    card.addEventListener("mouseleave", function () {

        card.style.zIndex = "1";

    });

});



/* =========================================================
   CURRENT YEAR
========================================================= */

const footerYear =
    document.querySelector(".site-footer p:last-child");


if (footerYear) {

    footerYear.textContent =
        "© " +
        new Date().getFullYear() +
        " Neenu Mariam Thomas. All rights reserved.";

}
