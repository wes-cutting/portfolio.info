(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_TrS35MeGaXSGjqp4cjEmk');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this);
        document.getElementById('form_name').value = '';
        document.getElementById('form_email').value = '';
        document.getElementById('form_message').value = '';
    });
}

function openNav() {
    document.getElementById("sidenav").style.width = "200px";
    document.getElementById("sidenav").style.visibility = "visible";
    document.getElementById("sidenav").style.backgroundColor = "rgba(96, 113, 47)";
    document.getElementById("closebtn").style.visibility = "visible";
    document.getElementById("nav_opener").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("sidenav").style.visibility = "hidden";
    document.getElementById("sidenav").style.backgroundColor = "rgba(96, 113, 47, 0.5)";
    document.getElementById("closebtn").style.visibility = "hidden";
    document.getElementById("nav_opener").style.visibility = "visible";
}