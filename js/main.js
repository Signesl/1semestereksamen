console.log(" JS loaded");

// burgermenu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const links = document.querySelectorAll(".nav ul a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Alle knapper med ".backBtn"
const backButtons = document.querySelectorAll(".backBtn");

// Tilføjer click-event til hver knap
backButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Sender altid til projektsiden
    window.location.href = "projekter.html"; //Går tilbage til URL for projekter
  });
});
