import "./sass/root.sass";

const main = () => {
  // variable slideIndex
  let slideIndex = 0;

  // Get html document
  const dotsContainer = document.querySelector("form.dots-container");
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dots");

  // Show slide func for image slider
  const showSlides = () => {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";

    dots.forEach((dot) => {
      dot.removeAttribute("checked");
      dot.checked = false;
    });

    if (dots[slideIndex] !== undefined) {
      dots[slideIndex].setAttribute("checked", "");
      dots[slideIndex].checked = true;
      dotsContainer.value = slideIndex;
    }
  };

  const nextSlide = () => {
    slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    showSlides();
  };

  // Interval handler
  let handler = setInterval(() => nextSlide(), 2500);

  // Reset handler interval
  const resetHandler = () => {
    clearInterval(handler);

    handler = setInterval(() => nextSlide(), 2500);
  };

  dotsContainer.addEventListener("change", (event) => {
    slideIndex = parseInt(event.target.value, 10);

    showSlides();
    resetHandler();
  });
};

main();
