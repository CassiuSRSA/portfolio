const cards = document.querySelectorAll(".card");
const form = document.querySelector("form");
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

form.addEventListener("submit", function (e) {
  // e.preventDefault();
  if (
    name.value.length < 2 ||
    email.value.length < 2 ||
    message.value.length < 2 ||
    email.value.indexOf("@") === -1
  ) {
    alert(`Please enter valid details`);
  } else {
    alert("Thank you for your submission");
  }
});
