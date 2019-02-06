
// Hide the navbar when scrolling down and display when scrolling up
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

// Form validation for contacting
let siteForm = document.querySelector("form");
let loading = document.querySelector(".loading");

loading.style.display = "none";

let formValidation = () => {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            console.log(form);
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (form.checkValidity() === false) {
                    console.log("The form is invalid");
                    form.classList.add('was-validated');
                } else {
                    loading.style.display = "";
                    form.style.display = "none";

                    const m_form = new FormData(siteForm);

                    const contactForm = {
                        "name": m_form.get("fname"),
                        "lname": m_form.get("lname"),
                        "email": m_form.get("email"),
                        "phone-number": m_form.get("phonenumber"),
                        "message": m_form.get("message")
                    }

                    console.log(contactForm);

                    fetch("/", {
                        method: "POST",
                        body: JSON.stringify(contactForm),
                        headers: {
                            'content-type': 'application/json'
                        }
                    }).then(res => {
                        loading.style.display = "none";
                        $("form").trigger("reset");
                        form.style.display = "";
                        $(".toast").toast("show");

                    });

                    $("form").removeClass("was-validated");
                }
            }, false);
        });
    }, false);
}; formValidation();
