const logIn = document.querySelector(".login-section");
const register = document.querySelector(".register");
const forgotPassword = document.querySelector(".forgot");
const forgotPasswordModal = document.querySelector(".modal");
const timer = document.querySelector(".timer");

const main = document.querySelector(".main");
const btnLogIn = document.querySelector(".span-login");
const btnAccount = document.querySelector(".span-create-acc");
const wlcMsg = document.querySelector(".welcome-messages");

const nextBtn = document.querySelector(".btn");

const timeNow = new Date().getHours();

const greetTime = function (now) {
  if (now > 5) return "Morning 🌅";
  else if (now === 12) return "Noon ☀️";
  else if (now > 12) return "Afternoon 🌞";
  else if (now > 17) return "Evening 🌇";
  else return "Early Morning 🌅";
};

timer.textContent = `Good ${greetTime(timeNow)}`;
btnLogIn.addEventListener("click", () => {
  logIn.classList.remove("hidden");
  register.classList.add("hidden");
});

btnAccount.addEventListener("click", () => {
  console.log("aaaa");
  logIn.classList.add("hidden");
  register.classList.remove("hidden");
});

forgotPassword.addEventListener("click", () => {
  main.classList.add("hidden");
  forgotPasswordModal.classList.remove("hidden");
  console.log(forgotPasswordModal.classList);
});