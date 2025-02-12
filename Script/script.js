const allDivs = document.querySelectorAll("div");
const footer = document.querySelector("footer");
const allSections = document.querySelectorAll("section");
const allElements = [allSections, footer];

document.addEventListener("scroll", () => {
  allElements.forEach((el) => {
    const speed = 0.1;
    const yOffset = window.scrollY * speed;
    el.style.transform = `translateY(${yOffset}px)`;
  });
});

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
