// Custom JS can be added to handle actions
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logged in successfully!');
    window.location.href = 'personal-info.html';
});

// Additional functionality can be added as required.

