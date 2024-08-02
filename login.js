document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showSignin = document.getElementById('show-signin');
    
    showSignup.addEventListener('click', function(event) {
        event.preventDefault();
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showSignin.addEventListener('click', function(event) {
        event.preventDefault();
        signupForm.style.display = 'none';
        signinForm.style.display = 'block';
    });
});



