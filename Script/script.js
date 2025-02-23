const elementsForAnimateY = [
  "#tour-type div",
  "#exclusive-packages",
  "#section-testimonial div",
  "#top-destination div",
  "#tour-packages div",
  "footer div",
];

const elementsForAnimateX = [
  "#sf-description",
  "#sf-image",
  "#wcu-description",
  "#wcu-image",
  "#au-image",
  "#au-description",
];

const animateX = function (el, sign) {
  gsap.from(el, {
    ease: true,
    scrollTrigger: {
      trigger: el,
      start: "top 95%%",
      end: "top 30%",
    },
    opacity: 0,
    x: `${sign}20%`,
    duration: 0.35,
  });
};

const animateY = function (el) {
  gsap.from(el, {
    ease: "power3.EaseInOut",
    stagger: 0.1,
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      end: "top 30%",
    },
    opacity: 0,
    y: `10%`,
    duration: 0.5,
  });
};

elementsForAnimateY.forEach((el) => animateY(el));
elementsForAnimateX.forEach((el, index) => {
  let sign = index % 2 == 0 ? "-" : "+";
  animateX(el, sign);
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
