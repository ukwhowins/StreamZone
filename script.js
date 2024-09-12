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

    document.getElementById('last-watched-button').addEventListener('click', function() {
        let lastWatched = localStorage.getItem('lastWatched');
        if (lastWatched) {
            loadPage(lastWatched);
        } else {
            alert('No last watched content available.');
        }
        setActiveButton('last-watched-button');
    });

    function loadPage(url) {
        document.getElementById('content-frame').src = url;
        if (!url.startsWith('http')) {
            localStorage.setItem('lastWatched', url);
        }
    }

    function setActiveButton(id) {
        document.querySelectorAll('nav ul li a').forEach(function(button) {
            button.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
    }
});
