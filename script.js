document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form_register');

    form.addEventListener('submit', (event) => {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // name validation
        if (nombre === '') {
            alert('please enter your name.');
            event.preventDefault();
            return;
        }

        // email validation
        if (email === '' || !validateEmail(email)) {
            alert('please enter a valid email address.');
            event.preventDefault();
            return;
        }

        // password validation
        if (password.length < 6) {
            alert('the password must be at least 6 characters long.');
            event.preventDefault();
            return;
        }
    });

    function validateEmail(email) {
        // expression to validate email format
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
