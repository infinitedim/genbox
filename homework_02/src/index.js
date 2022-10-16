import "./sass/root.sass";

const main = () => {
  let slideIndex = 0;

  const dotsContainer = document.querySelector("form.dots-container");
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dots");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  function showSlides() {
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
  }

  function nextSlide() {
    // slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex += 1;
    }

    showSlides();
  }

  // Interval handler
  let handler = setInterval(() => nextSlide(), 2500);

  // Reset handler interval
  function resetHandler() {
    clearInterval(handler);

    handler = setInterval(() => nextSlide(), 2500);
  }

  dotsContainer.addEventListener("change", (event) => {
    slideIndex = parseInt(event.target.value, 10);

    showSlides();
    resetHandler();
  });
};

main();

// const main = () => {
//   let slideIndex = 0;
//   let timer = 5;
//   const times = timer;
//   const slides = document.querySelectorAll(".mySlides");
//   const dots = document.querySelectorAll(".dots");
//   const prev = document.querySelector(".prev");
//   const next = document.querySelector(".next");

//   const showSlides = () => {
//     if (slideIndex > slides.length - 1) slideIndex = 0;
//     if (slideIndex < 0) slideIndex = slides.length - 1;

//     slides.forEach((slide) => {
//       slide.style.display = "none";
//     });

//     slides[slideIndex].style.display = "block";

//     dots.forEach((dot) => {
//       dot.classList.remove("active");
//     });

//     dots[slideIndex].classList.add("active");
//   };

//   next.addEventListener("click", () => {
//     slideIndex += 1;
//     showSlides();
//     timer = times;
//   });

//   prev.addEventListener("click", () => {
//     slideIndex -= 1;
//     showSlides();
//     timer = times;
//   });

//   function currentSlide(n) {
//     slideIndex = n - 1;
//     showSlides();
//     timer = times;
//   }

//   setInterval(() => {
//     timer -= 1;

//     if (timer < 1) {
//       slideIndex += 1;
//       showSlides();
//       timer = times;
//     }
//   }, 1000);
// };

// main();
