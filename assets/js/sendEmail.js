const serviceID = 'makeuse';
const coatTemplateID = 'coat-instructions';
const TemplateID = 'tshirt-instructions';
const btn = document.getElementById('form-button');

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = "Sending..";
        emailjs.sendForm('makeuse', 'tshirt-instructions', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}