'user strict'

// footer navigation fade feature

const footerNave = document.querySelector(".footer-navigation");

const handlover = (e, opacity) => {
  if (e.target.classList.contains("footer__link")) {
    const tachedLink = e.target;
    const sibling = tachedLink
      .closest(".footer-navigation")
      .querySelectorAll(".footer__link");
    const footerNavaLogo = tachedLink
      .closest(".footer-navigation")
      .querySelector(".footer__logo");
    sibling.forEach((el) => {
      el !== tachedLink && (el.style.opacity = opacity);
    });
    footerNavaLogo.style.opacity = opacity;
  }
};
footerNave.addEventListener("mouseover", (e) => {
  handlover(e, "0.3");
});
footerNave.addEventListener("mouseout", (e) => {
  handlover(e, "1");
});
