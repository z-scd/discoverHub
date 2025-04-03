/**
 * DOM Elements object containing all required element references
 */
const elements = {
  containers: {
    sideBar: document.getElementById("side-container"),
    login: document.getElementById("login-container"),
    registration: document.getElementById("registration-container"),
  },
  buttons: {
    backToLogin: document.getElementById("back-to-login-page"),
    registerWithMail: document.getElementById("register-with-mail-button"),
  },
  titles: {
    login: document.getElementById("login-title"),
    register: document.getElementById("register-title"),
    sideBarText: document.getElementById("side-bar-text"),
  },
};

const textContents = {
  titleText: elements.titles.sideBarText.textContent,
};

/**
 * Constants for animation values
 */
const ANIMATION_CONSTANTS = {
  DURATION: 1,
  BORDER_RADIUS: "32px",
  SIDEBAR_OFFSET: "103.2%",
};

/**
 * Updates the page title based on the active element
 */
const updatePageTitle = () => {
  const activeTitle = document.querySelector(".active").textContent;
  document.querySelector("title").textContent = activeTitle;
};

/**
 * Toggles visibility between two elements
 * @param {HTMLElement} show - Element to show
 * @param {HTMLElement} hide - Element to hide
 */
const toggleViews = (show, hide) => {
  show.classList.remove("hidden");
  hide.classList.add("hidden");
};

/**
 * Toggles active state between title elements
 * @param {HTMLElement} activeTitle - Title to activate
 * @param {HTMLElement} inactiveTitle - Title to deactivate
 */
const toggleTitles = (activeTitle, inactiveTitle) => {
  activeTitle.classList.add("active");
  inactiveTitle.classList.remove("active");
};

/**
 * Handles the animation of border radius
 * @param {HTMLElement} element - Element to animate
 * @param {string} direction - Animation direction ('left' or 'right')
 * @param {string} amount - Animation displacement amount
 */
const animateBorderRadius = (element, direction, amount) => {
  if (!element) return;

  const animations = {
    left: {
      borderLeftRadius: ANIMATION_CONSTANTS.BORDER_RADIUS,
      borderRightRadius: "0",
    },
    right: {
      borderLeftRadius: "0",
      borderRightRadius: ANIMATION_CONSTANTS.BORDER_RADIUS,
    },
  };

  const selectedAnimation = animations[direction];
  if (!selectedAnimation) return;

  gsap.to(element, {
    x: amount,
    borderTopLeftRadius: selectedAnimation.borderLeftRadius,
    borderBottomLeftRadius: selectedAnimation.borderLeftRadius,
    borderTopRightRadius: selectedAnimation.borderRightRadius,
    borderBottomRightRadius: selectedAnimation.borderRightRadius,
    duration: ANIMATION_CONSTANTS.DURATION,
  });
};

/**
 * Main animation function
 * @param {Object} moveRight - Element to move right
 * @param {Object} moveLeft - Element to move left
 * @param {string} direction - Animation direction
 */
const animate = (
  moveRight,
  moveLeft = { element: null, amount: null },
  direction
) => {
  gsap.timeline().to(moveRight.element, {
    x: moveRight.amount,
    duration: ANIMATION_CONSTANTS.DURATION,
  });
  animateBorderRadius(moveLeft.element, direction, moveLeft.amount);
};

/**
 * Manages greeting message based on time of day
 */
const manageGreetMessage = () => {
  const hour = new Date().getHours();
  const greetings = {
    morning: { range: [0, 12], message: "Morning" },
    noon: { range: [12, 16], message: "Noon" },
    afternoon: { range: [16, 19], message: "Afternoon" },
    evening: { range: [19, 23], message: "evening" },
  };

  const greeting = Object.values(greetings).find(
    ({ range: [start, end] }) => hour > start && hour < end
  );

  elements.titles.sideBarText.textContent = `Good ${greeting.message}`;
};

/**
 * Initialize page settings
 */
const initializePage = () => {
  elements.titles.login.classList.add("active");
  elements.containers.registration.classList.add("hidden");
  updatePageTitle();
};

//Reveal animation definitaion
const revealAnimation = function (element, direction) {
  gsap.set(element, {
    opacity: 0,
    y: direction,
  });

  gsap.to(element, {
    opacity: 1,
    y: "0",
    delay: 1,
    duration: 1,

    ease: "power3.out",
  });
};

//Applies a left-to-right fill animation on hover to a button using GSAP.

function applyButtonFillAnimation(button, options = {}) {
  // Default options
  const config = {
    fillColor: options.fillColor || "#3498db",
    textColor: options.textColor || "white",
    duration: options.duration || 0.3,
  };

  // Store original text color
  const originalTextColor = getComputedStyle(button).color;

  // Set initial button styles
  button.style.position = "relative";
  button.style.overflow = "hidden";

  // Create fill element
  const fill = document.createElement("span");
  fill.style.position = "absolute";
  fill.style.bottom = "0";
  fill.style.left = "0";
  fill.style.width = "100%";
  fill.style.height = "0";
  fill.style.backgroundColor = config.fillColor;
  fill.style.zIndex = "-1";

  // Add fill element to button
  button.appendChild(fill);

  // Set up hover animations
  button.addEventListener("mouseenter", () => {
    gsap.to(fill, {
      height: "100%",
      duration: config.duration,
    });

    gsap.to(button, {
      color: config.textColor,
      duration: config.duration,
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(fill, {
      height: "0",
      duration: config.duration,
    });

    gsap.to(button, {
      color: originalTextColor,
      duration: config.duration,
    });
  });
}

applyButtonFillAnimation(elements.buttons.backToLogin, { fillColor: "#000" });
applyButtonFillAnimation(elements.buttons.registerWithMail, {
  fillColor: "#000",
});
applyButtonFillAnimation(elements.buttons.backToLogin, { fillColor: "#000" });

// Event Handlers
elements.buttons.registerWithMail.addEventListener("click", () => {
  toggleViews(elements.containers.registration, elements.containers.login);
  toggleTitles(elements.titles.register, elements.titles.login);
  updatePageTitle();
  manageGreetMessage();
  animate(
    { element: elements.containers.registration, amount: "-100%" },
    {
      element: elements.containers.sideBar,
      amount: ANIMATION_CONSTANTS.SIDEBAR_OFFSET,
    },
    "left"
  );
  revealAnimation(elements.titles.sideBarText, "-25%");
  revealAnimation(elements.containers.registration, "0");
});

elements.buttons.backToLogin.addEventListener("click", () => {
  toggleViews(elements.containers.login, elements.containers.registration);
  toggleTitles(elements.titles.login, elements.titles.register);
  updatePageTitle();
  animate(
    { element: elements.containers.sideBar, amount: "0" },
    { element: elements.containers.sideBar, amount: "0" },
    "right"
  );
  elements.titles.sideBarText.innerHTML = textContents.titleText;
  revealAnimation(elements.titles.sideBarText, "25%");
  revealAnimation(elements.containers.login, "0");
});

// Initialize the page
initializePage();
