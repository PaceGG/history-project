let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const slideWidth = slides[0].clientWidth + 30; // Adjust 10 if you change margin between slides
  const visibleSlides = 2; // Number of visible slides

  // Check if at the first slide and trying to go left
  if (currentSlide === 0 && direction === -1) {
    return;
  }

  // Check if at the last visible slide and trying to go right
  if (currentSlide === totalSlides - visibleSlides && direction === 1) {
    return;
  }

  currentSlide = currentSlide + direction;

  const offset = -currentSlide * slideWidth;
  document.querySelector(".slides").style.transform = `translateX(${offset}px)`;

  // Disable buttons if at the start or end
  document.querySelector(".prev").disabled = currentSlide === 0;
  document.querySelector(".next").disabled =
    currentSlide === totalSlides - visibleSlides;
}

// Initial button state
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".prev").disabled = true;
});
