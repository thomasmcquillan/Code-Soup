// let serviceID = 'makeuse';

// const coatTemplateID = 'coat-instructions';
let TemplateID = 'tshirt-instructions';
// const from_name = document.getElementById('from_name');
const to_name = "Make/Use";
const btn = document.getElementById('form-button');
const reply_to = "thomas.mcquillan@gmail.com"


const contactFormTshirt = document.getElementById('contact-form-tshirt');
const contactFormCoat = document.getElementById('contact-form-coat');

window.onload = function() {
    document.getElementById('contact-form-tshirt').addEventListener('submit', function(event) {
      event.preventDefault();
    emailjs.send("makeuse", "tshirt-instructions", {
        "from_name": contactFormTshirt.from_name.value,
        "from_email": contactFormTshirt.from_email.value
    })
    .then (    
        function(response)
            {console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        }
    );
    return false;
});
}

window.onload = function() {
    document.getElementById('contact-form-coat').addEventListener('submit', function(event) {
      event.preventDefault();
    emailjs.send("makeuse", "coat-instructions", {
        "from_name": contactFormCoat.from_name.value,
        "from_email": contactFormCoat.from_email.value
    })
    .then (    
        function(response)
            {console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        }
    );
    return false;
});
}