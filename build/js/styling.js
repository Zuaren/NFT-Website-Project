//second section animation only for js
document.addEventListener("DOMContentLoaded", function () {
    // Get the second section element
    const secondSection = document.querySelector(".second-section");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the scroll event
    function handleScroll() {
        if (isInViewport(secondSection)) {
            secondSection.classList.add("reveal");
        }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();
});



//header 
let lastScrollTop = 0;
        const header = document.getElementById("scrollHeader");

        window.addEventListener("scroll", () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down, hide the header
                header.style.transform = "translateY(-100%)";
            } else {
                // Scrolling up, show the header
                header.style.transform = "translateY(0)";
            }

            lastScrollTop = scrollTop;
        });