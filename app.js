// Set correct slide after going back one page
document.addEventListener("DOMContentLoaded", function (event) {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const targetSlide = urlParams.get('slide');

    // Activate the specified slide
    if (targetSlide) {
        const carousel = document.getElementById('rotating-carousel');
        const carouselInstance = new bootstrap.Carousel(carousel);
        carouselInstance.to(parseInt(targetSlide) - 1);
    }
});



// Set the timeout for refreshing the page 
function refreshPage() {
    window.location.reload();
}
setTimeout(refreshPage, 30 * 60 * 1000);



// Remove cars slider on mobile

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 500) {
        var carouselItem = document.getElementById('carousel-item-mobile');
        if (carouselItem) {
            carouselItem.parentNode.removeChild(carouselItem);
        }
    } else if (window.innerWidth > 1300) {
        var carouselItem = document.getElementById('carousel-item-mobile');
        if (carouselItem) {
            carouselItem.parentNode.removeChild(carouselItem);
        }
    }
});





// Navbar

let toggleButton = document.getElementsByClassName("toggle-button")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];
let timeoutID;

function closeNavbar() {
    navbarLinks.classList.remove("active");
    toggleButton.setAttribute("aria-expanded", "false");
}

function resetAutoClose() {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(closeNavbar, 60000);
}

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");

    if (navbarLinks.classList.contains("active")) {
        toggleButton.setAttribute("aria-expanded", "true");
    } else {
        toggleButton.setAttribute("aria-expanded", "false");
    }

    resetAutoClose();
});

document.addEventListener("click", (event) => {
    if (
        !navbarLinks.contains(event.target) &&
        !toggleButton.contains(event.target)
    ) {
        closeNavbar();
    }
});

resetAutoClose();



