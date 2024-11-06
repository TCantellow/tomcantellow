// assets/script.js
function loadHeader() {
    fetch('assets/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Reassign the toggleMode function to the button after loading
            document.querySelector(".toggle-button").onclick = toggleMode;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');

    if (items.length === 0) {
        console.error("No carousel items found.");
        return;
    }

    // Function to change the slide
    function changeSlide(direction) {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + direction + items.length) % items.length;
        items[currentIndex].classList.add('active');
    }

    // Initialize the first slide as active
    items[currentIndex].classList.add('active');

    // Attach the event listeners to buttons
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});
