document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const hero = document.querySelector(".hero");
  const infoCard = document.querySelector(".info-card");

  function applyTheme(theme) {
    const isDark = theme === "dark";
    body.classList.toggle("dark", isDark);
    if (hero) hero.classList.toggle("dark", isDark);
    if (infoCard) infoCard.classList.toggle("dark", isDark);
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const newTheme = body.classList.contains("dark") ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
});
