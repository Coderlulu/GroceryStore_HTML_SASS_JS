let searchForm = document.querySelector(".search-form");
let cart = document.querySelector(".shopping-cart");
let navbar = document.querySelector(".navbar");
let loginForm = document.querySelector(".login-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
document.querySelector("#cart-btn").onclick = () => {
  cart.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
};
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
};
//next-btn and prev-btn
let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;
function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
