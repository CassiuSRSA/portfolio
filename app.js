const cards = document.querySelectorAll(".card");
const btn = document.querySelector(".button");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

cards.forEach((card) =>
  card.addEventListener("click", function (e) {
    if (e.target.closest(".card").dataset.target === "home") {
      window.scrollTo(0, 0);
    } else if (!e.target.classList.contains("btn-code")) {
      window.open(e.target.closest(".card").dataset.target, "blank");
    }
  })
);

btn.addEventListener("click", function (e) {
  // e.preventDefault();
  if (!name.value || !email.value || !message.value) {
    alert(`Please enter valid details`);
  } else {
    alert("Thank you for your submission");
  }
});
