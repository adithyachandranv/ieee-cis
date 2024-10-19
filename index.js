/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.topnav');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// The End Of Year Date To Countdown Date

// Countdown end date
const endDate = new Date("December 31, 2024 23:59:59").getTime();

// Function to format numbers with leading zero
function formatNumber(num) {
    return num < 10 ? `0${num}` : num;
}

// Flip animation function
function flip(element, value) {
    const top = element.querySelector(".top");
    const bottom = element.querySelector(".bottom");

    if (top.textContent === value) return;

    bottom.textContent = value;
    element.classList.add("flip");

    setTimeout(() => {
        top.textContent = value;
        element.classList.remove("flip");
    }, 500);
}
// Get the preloader and close button elements
const preloader = document.getElementById('preloader');
const closePreloaderButton = document.getElementById('closePreloader');
const content = document.querySelector('.content');

// Function to hide the preloader
function hidePreloader() {
    preloader.classList.add('hidden');
    content.classList.add('show-content');
}

// Automatically hide the preloader after the page loads
window.addEventListener('load', function() {
    setTimeout(hidePreloader, 3000); // Preloader hides after 3 seconds
});

// Add event listener to the "Skip" button (X button)
closePreloaderButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up
    hidePreloader(); // Hide immediately when button is clicked
});

// Add event listener to the preloader to hide when clicked outside
preloader.addEventListener('click', function(event) {
    // Check if the click target is the preloader itself (not the image or button)
    if (event.target === preloader) {
        hidePreloader(); // Hide when clicking outside the image
    }
});
