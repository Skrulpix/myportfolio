// Function to handle form submission
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYou');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent real submission
    form.style.display = 'none';
    thankYou.style.display = 'block';
});


// Function to handle slide animation
