document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');

    // Load the user's theme preference from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true; // Sync checkbox state with the theme
    }

    toggle.addEventListener('change', function () {
        // Toggle dark mode class
        document.body.classList.toggle('dark-mode');

        // Save the user's theme preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});