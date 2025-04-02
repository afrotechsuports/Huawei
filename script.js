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

        // Try to open the Huawei router web interface in a new tab
        try {
            const routerUrl = 'http://192.168.8.1/';
            window.open(routerUrl, '_blank');
            
            // Fallback if popup is blocked
            setTimeout(() => {
                if (!window.open(routerUrl, '_blank')) {
                    alert('Please allow popups for this site to open the router interface.');
                    window.location.href = routerUrl;
                }
            }, 100);
        } catch (error) {
            console.error('Error opening router interface:', error);
            alert('Unable to open router interface. Please try again or check your connection.');
        }
    });
}); 