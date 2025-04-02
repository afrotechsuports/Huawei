document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Launch button functionality
    const launchBtn = document.getElementById('launchBtn');
    launchBtn.addEventListener('click', function() {
        // Simple redirect to router URL
        window.location.replace('http://192.168.8.1/');
    });
}); 