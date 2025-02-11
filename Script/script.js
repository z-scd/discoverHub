const allDivs = document.querySelectorAll("div");

document.addEventListener("scroll", () => {
  document.querySelectorAll("#about-us").forEach((el) => {
    const speed = 0.05;
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
