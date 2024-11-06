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

document.addEventListener('DOMContentLoaded', function() {
    // Get all carousel items
    const items = document.querySelectorAll('.carousel-item');

    let currentIndex = 0; // Keep track of the current index of carousel items

    // Function to change the slide
    function changeSlide(direction) {
        // Hide the current slide by removing the 'active' class
        items[currentIndex].classList.remove('active');

        // Update the index for the new slide
        currentIndex = (currentIndex + direction + items.length) % items.length;

        // Show the new slide by adding the 'active' class
        items[currentIndex].classList.add('active');
    }

    // Initialize the first slide as active
    items[currentIndex].classList.add('active');

    // Add event listeners to buttons
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});
