document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    const text = document.querySelectorAll('.typing-animation');
    text.forEach((elem) => {
        let txt = elem.textContent;
        elem.innerHTML = '';
        let i = 0;
        let speed = 50; // Adjust typing speed here

        function typeWriter() {
            if (i < txt.length) {
                elem.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    });

    // Slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 2000); // Change slide every 3 seconds (adjust as needed)
});
