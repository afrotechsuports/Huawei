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

        // Here you can add the actual launch functionality
        // For example, redirecting to another page or opening an application
        alert('Launching application...');
        // Add your launch logic here
    });
}); 