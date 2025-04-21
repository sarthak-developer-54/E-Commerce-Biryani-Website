alert("Welcome to Biryani Paradise! Enjoy the best biryani in town!");
// Select all "Order Now" buttons
const orderButtons = document.querySelectorAll(".order-btn");

// Add event listener to each button
orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for ordering! We will contact you soon.");
    });
});
// Show the "Back to Top" button when scrolling down
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll to top when button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        elements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    }

    fadeInOnScroll(); // Run on page load
    window.addEventListener("scroll", fadeInOnScroll);
});
