// Function to create bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 60 + 10; // Random size between 10px and 70px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    const x = Math.random() * window.innerWidth; // Random x position on screen
    const y = window.scrollY + Math.random() * window.innerHeight; // Random y position within viewport
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    document.querySelector('.bubble-container').appendChild(bubble);
  
    // Remove bubble after animation ends
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }
  
  // Function to add bubbles when scrolling near the logo
  function handleScroll() {
    const logo = document.querySelector('.moving-logo');
    const rect = logo.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      createBubble();
    }
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', handleScroll);
  