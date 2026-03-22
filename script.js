const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function setSlideBackground() {
  const isMobile = window.innerWidth <= 768;

  slides.forEach((slide) => {
    const img = isMobile
      ? slide.getAttribute("data-mobile")
      : slide.getAttribute("data-pc");

    slide.style.backgroundImage = `url('${img}')`;
  });
}

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setSlideBackground();
showSlide(currentIndex);
setInterval(nextSlide, 3000);

window.addEventListener("resize", setSlideBackground);