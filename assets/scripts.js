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
    const images = document.querySelectorAll('.thumbnail img');  // Select all thumbnail images
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");

    // Open the modal with full-size image when thumbnail is clicked
    images.forEach((img) => {
        img.addEventListener("click", function(event) {
            event.preventDefault();
            const fullSizeImageSrc = event.target.parentElement.getAttribute('href');
            modal.style.display = "block";
            modalImage.src = fullSizeImageSrc;
        });
    });

    // Close the modal when clicking on the close button
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside the image
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
