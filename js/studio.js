{/* <script> */}
const slidesContainer = document.querySelector('.slides-slider');
const slides = slidesContainer.children;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Find the maximum width among all slides
let maxSlideWidth = Math.max(...Array.from(slides).map(slide => slide.getBoundingClientRect().width));

// Apply the max width to all slides to ensure uniformity
Array.from(slides).forEach(slide => {
    slide.style.width = `${maxSlideWidth}px`;
});

function updateSlider() {
    console.log(`Current Index: ${currentIndex}, TranslateX: -${currentIndex * maxSlideWidth}px`);
    slidesContainer.style.transform = `translateX(-${currentIndex * maxSlideWidth}px)`;

    // Hide/Show arrows based on currentIndex
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
}

// Initial call to set arrow visibility
updateSlider();

// Previous button click event
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Loop to the last slide if needed
    }
    updateSlider();
});

// Next button click event
nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to the first slide if needed
    }
    updateSlider();
});

// Optional: Auto-slide functionality
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start auto-slide when the page loads
startAutoSlide();

// Optional: Pause auto-slide on hover
slidesContainer.addEventListener('mouseenter', stopAutoSlide);
slidesContainer.addEventListener('mouseleave', startAutoSlide);

{/* </script> */}