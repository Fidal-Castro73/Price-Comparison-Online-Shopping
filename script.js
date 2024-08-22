document.getElementById('auth-icon').addEventListener('click', function() {
    const authIcon = document.getElementById('auth-icon');
    if (authIcon.getAttribute('data-logged-in') === 'true') {
        // Logout action
        authIcon.setAttribute('data-logged-in', 'false');
        authIcon.innerHTML = '<img src="login-icon.png" alt="Login Icon">';
    } else {
        // Login action
        authIcon.setAttribute('data-logged-in', 'true');
        authIcon.innerHTML = '<img src="user-icon.png" alt="User Icon">';
    }
});
