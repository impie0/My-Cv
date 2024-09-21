document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    emailjs.init("qjlL8jg-fmTV6Gxxz");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_e922m1a', 'template_7d8r7yv', this)
            .then(function() {
                alert('Message sent successfully!');
                form.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
            });
    });
});