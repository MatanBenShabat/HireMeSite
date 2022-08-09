const toggler = document.querySelector(".toggler");
const container = document.querySelector(".navbar__buttons");
const btns = document.querySelectorAll(".navbar__btn");

toggler.addEventListener("click", (e) => {
  container.classList.toggle("active");
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth < 768) toggler.click();
  });
});
