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
    // Run the carousel setup only after ensuring all elements are present
    function initializeCarousel() {
        let currentIndex = 0; // Keep track of the current index of carousel items
        const items = document.querySelectorAll('.carousel-item'); // Select all carousel items

        if (items.length === 0) {
            console.error("No carousel items found."); // Debug message
            return; // Exit if no items are found
        }

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

        // Add event listeners for the buttons
        document.querySelector('.prev').addEventListener('click', function() {
            changeSlide(-1); // Go to the previous slide
        });

        document.querySelector('.next').addEventListener('click', function() {
            changeSlide(1); // Go to the next slide
        });
    }

    // Wait until all resources are fully loaded
    window.onload = initializeCarousel;
});

