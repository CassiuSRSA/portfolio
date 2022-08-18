const cards = document.querySelectorAll(".card");

cards.forEach((card) =>
  card.addEventListener("click", function (e) {
    if (e.target.closest(".card").dataset.target === "home") {
      window.scrollTo(0, 0);
    } else if (!e.target.classList.contains("btn-code")) {
      window.open(e.target.closest(".card").dataset.target, "blank");
    }
  })
);
