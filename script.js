/* =========================================================
   FATEMEH BAMERIE — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   01. INTRO SCREEN
========================================================= */

const intro = document.getElementById("intro");


/*
   بعد از تمام شدن انیمیشن Intro،
   صفحه اصلی قابل استفاده می‌شود.
*/

window.addEventListener("load", () => {

    setTimeout(() => {

        if (intro) {
            intro.style.pointerEvents = "none";
        }

    }, 4000);

});


/* =========================================================
   02. SMOOTH NAVIGATION
========================================================= */

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        /*
           اگر لینک به یک بخش از همین صفحه اشاره کند،
           اسکرول نرم انجام می‌دهیم.
        */

        if (targetId && targetId.startsWith("#")) {

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


/* =========================================================
   03. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("main section");

const navLinks =
    document.querySelectorAll(".navigation a");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href")
                            === `#${currentId}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    observer.observe(section);

});


/* =========================================================
   04. CONTACT FORM
========================================================= */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        alert(
            `Thank you, ${name}! Your message is ready to be sent.`
        );


        contactForm.reset();

    });

}


/* =========================================================
   05. TYPING EFFECT
========================================================= */

const helloText =
    document.querySelector(".hello");


if (helloText) {

    const originalText =
        helloText.textContent.trim();

    helloText.textContent = "";

    let index = 0;


    function typeHello() {

        if (index < originalText.length) {

            helloText.textContent +=
                originalText.charAt(index);

            index++;

            setTimeout(
                typeHello,
                80
            );

        }

    }


    /*

        متن شروع به تایپ شدن می‌کند.
    */

    setTimeout(
        typeHello,
        4200
    );

}


/* =========================================================
   06. CURRENT YEAR
========================================================= */

const year =
    document.querySelector("footer p:last-child");


if (year) {

    year.textContent =
        `© ${new Date().getFullYear()} Fatemeh Bamerie`;

}