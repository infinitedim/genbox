import "./sass/root.sass";

const main = () => {
  let slideIndex = 0;
  let timer = 5;
  const times = timer;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dots");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const currents = document.querySelectorAll(".current");

  const showSlides = () => {
    if (slideIndex > slides.length - 1) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    dots[slideIndex].classList.add("active");
  };

  next.addEventListener("click", () => {
    slideIndex += 1;
    showSlides();
    timer = times;
  });

  prev.addEventListener("click", () => {
    slideIndex -= 1;
    showSlides();
    timer = times;
  });

  currents.forEach(() => {
    currents;
  });

  const currentSlide = (n) => {
    slideIndex = n - 1;
    showSlides();
    timer = times;
  };

  setInterval(() => {
    timer -= 1;

    if (timer < 1) {
      slideIndex += 1;
      showSlides();
      timer = times;
    }
  }, 1000);
};

main();
