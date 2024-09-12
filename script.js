document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation button clicks
    document.getElementById('home-button').addEventListener('click', function() {
        loadPage('home.html');
        setActiveButton('home-button');
    });

    document.getElementById('streaming-button').addEventListener('click', function() {
        loadPage('https://coolmaan.store/');
        setActiveButton('streaming-button');
    });

    document.getElementById('live-matches-button').addEventListener('click', function() {
        loadPage('https://www.syrialive.cc/');
        setActiveButton('live-matches-button');
    });

    function loadPage(url) {
        document.getElementById('content-frame').src = url;
    }

    function setActiveButton(id) {
        document.querySelectorAll('nav ul li a').forEach(function(button) {
            button.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
    }

    // Prevent unwanted new tabs/windows and handle navigation
    const iframe = document.getElementById('content-frame');

    iframe.addEventListener('load', function() {
        const iframeWindow = iframe.contentWindow;

        // Prevent pop-ups
        iframeWindow.open = function() {
            console.log('Blocked attempt to open new window');
        };

        // Intercept any attempt to change the location of the iframe
        iframeWindow.addEventListener('beforeunload', function(event) {
            event.preventDefault();
            event.returnValue = ''; // Required for modern browsers
        });

        // Handle cross-origin messaging (if needed)
        iframeWindow.addEventListener('message', function(event) {
            if (event.origin !== 'https://coolmaan.store') {
                event.stopPropagation();
            }
        });
    });
});
