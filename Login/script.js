// DOM Elements
const elements = {
  containers: {
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
  },
};

// Helper Functions
const updatePageTitle = () => {
  const activeTitle = document.querySelector(".active").textContent;
  document.querySelector("title").textContent = activeTitle;
};

const toggleViews = (show, hide) => {
  show.classList.remove("hidden");
  hide.classList.add("hidden");
};

const toggleTitles = (activeTitle, inactiveTitle) => {
  activeTitle.classList.add("active");
  inactiveTitle.classList.remove("active");
};

// Initialize page
const initializePage = () => {
  elements.titles.login.classList.add("active");
  updatePageTitle();
};

// Event Handlers
const handleRegisterClick = () => {
  toggleViews(elements.containers.registration, elements.containers.login);
  toggleTitles(elements.titles.register, elements.titles.login);
  updatePageTitle();
};

const handleBackToLoginClick = () => {
  toggleViews(elements.containers.login, elements.containers.registration);
  toggleTitles(elements.titles.login, elements.titles.register);
  updatePageTitle();
};

// Event Listeners
elements.buttons.registerWithMail.addEventListener(
  "click",
  handleRegisterClick
);
elements.buttons.backToLogin.addEventListener("click", handleBackToLoginClick);

// Initialize the page
initializePage();
