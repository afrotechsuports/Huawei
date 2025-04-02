document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Launch button functionality
    const launchBtn = document.getElementById('launchBtn');
    launchBtn.addEventListener('click', function() {
        // Add launch animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);

        // Redirect to Huawei router web interface
        window.location.href = 'http://192.168.8.1/';
    });
}); 