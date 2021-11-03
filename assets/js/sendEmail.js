const serviceID = 'makeuse';
const coatTemplateID = 'coat-instructions';
const TemplateID = 'tshirt-instructions';

const btn = document.getElementById('form-button');
// const contactForm = document.getElementById('contact-form');

function sendMail(contactForm) {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = "Sending...";

    // emailjs.sendForm("makeuse", "tshirt-instructions", {
    //     "from_name": contactForm.name.value,
    //     "from_email": contactForm.emailaddress.value,
    //     "message": contactForm.message.value
    // })
    (function(){
        emailjs.init("user_wMriEHAEyY3weYxVF1Sjw");
        emailjs.send("makeuse", "tshirt-instructions", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "message": contactForm.downloadlist.value
});
    })

    .then (function() {
            console.log("SUCCESS");
        let success = document.getElementById("sendButton");
        let contactForm = document.getElementById('contact-form');
        contactForm.reset();
        success.innerHTML = "Your instructions are on their way - happy sewing!";
        success.style.backgroundColor="orange";
        setInterval(() => window.location.reload(true), 3000)
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
});
}